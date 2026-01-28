
'use server';

import { db } from '@/lib/db';
import { news, gallery, impactSections } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

// News Actions
export async function addNews(data: any) {
    await db.insert(news).values(data);
    revalidatePath('/');
    revalidatePath('/admin/news');
}

export async function deleteNews(id: string) {
    await db.delete(news).where(eq(news.id, id));
    revalidatePath('/');
    revalidatePath('/admin/news');
}

// Gallery Actions
export async function addGalleryItem(data: any) {
    await db.insert(gallery).values(data);
    revalidatePath('/gallery');
    revalidatePath('/admin/gallery');
}

export async function deleteGalleryItem(id: string) {
    await db.delete(gallery).where(eq(gallery.id, id));
    revalidatePath('/gallery');
    revalidatePath('/admin/gallery');
}

// Impact Actions
export async function updateImpactSection(id: string, data: any) {
    await db.update(impactSections).set(data).where(eq(impactSections.id, id));
    revalidatePath('/impact');
    revalidatePath('/admin/impact');
}
