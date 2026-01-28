
'use server';

import { db } from '@/lib/db';
import { adminUsers } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

export async function changePassword(formData: FormData) {
    const session = await auth();
    if (!session?.user?.name) throw new Error('Unauthorized');

    const newPassword = formData.get('password') as string;
    if (!newPassword || newPassword.length < 6) {
        throw new Error('Password must be at least 6 characters');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.update(adminUsers)
        .set({ password: hashedPassword, updatedAt: new Date() })
        .where(eq(adminUsers.username, session.user.name));

    revalidatePath('/admin/settings');
    return { success: true };
}
