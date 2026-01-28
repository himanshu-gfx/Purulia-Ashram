
'use server';

import { db } from '@/lib/db';
import { news, gallery, impactSections } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

// News Actions
export interface NewsData {
    title: string;
    date: string;
    location: string | null;
    description: string;
    imageUrl: string | null;
}

export async function addNews(data: NewsData) {
    await db.insert(news).values({
        ...data,
        id: crypto.randomUUID()
    });
    revalidatePath('/');
    revalidatePath('/admin/news');
}

export async function deleteNews(id: string) {
    await db.delete(news).where(eq(news.id, id));
    revalidatePath('/');
    revalidatePath('/admin/news');
}

// Gallery Actions
export interface GalleryData {
    title: string;
    category: string;
    src: string;
    className?: string;
}

export async function addGalleryItem(data: GalleryData) {
    await db.insert(gallery).values({
        ...data,
        id: crypto.randomUUID()
    });
    revalidatePath('/gallery');
    revalidatePath('/admin/gallery');
}

export async function deleteGalleryItem(id: string) {
    await db.delete(gallery).where(eq(gallery.id, id));
    revalidatePath('/gallery');
    revalidatePath('/admin/gallery');
}

// Impact Actions
export interface ImpactUpdateData {
    title?: string;
    content?: string;
    imageUrl?: string;
    videoUrl?: string;
    data?: string;
}

export async function updateImpactSection(id: string, data: ImpactUpdateData) {
    await db.update(impactSections).set(data).where(eq(impactSections.id, id));
    revalidatePath('/impact');
    revalidatePath('/admin/impact');
}
