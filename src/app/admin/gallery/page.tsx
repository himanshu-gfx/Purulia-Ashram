
import { db } from "@/lib/db";
import { gallery } from "@/lib/db/schema";
import { addGalleryItem, deleteGalleryItem } from "@/lib/db/actions";
import { Trash2, Plus } from "lucide-react";

export default async function AdminGalleryPage() {
    const images = await db.select().from(gallery).orderBy(gallery.createdAt);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Manage Media Gallery</h1>
            </div>

            <div className="card glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Add New Image</h3>
                <form action={async (formData) => {
                    'use server';
                    await addGalleryItem({
                        title: formData.get('title') as string,
                        category: formData.get('category') as string,
                        src: formData.get('src') as string,
                        className: 'img-enhance',
                    });
                }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" name="title" placeholder="Image Title" required style={inputStyle} />
                    <input type="text" name="category" placeholder="Category (e.g. Spiritual, Charity)" required style={inputStyle} />
                    <input type="text" name="src" placeholder="Image Path/URL" required style={{ ...inputStyle, gridColumn: 'span 2' }} />
                    <button type="submit" className="btn btn-primary" style={{ gridColumn: 'span 2' }}>
                        <Plus size={18} /> Add Image
                    </button>
                </form>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {images.map((item) => (
                    <div key={item.id} className="card glass" style={{ padding: '1rem', position: 'relative' }}>
                        <img src={item.src} alt={item.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '0.5rem' }} />
                        <h4 style={{ margin: 0, fontSize: '0.9rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.7rem', opacity: 0.7 }}>{item.category}</p>
                        <form action={async () => {
                            'use server';
                            await deleteGalleryItem(item.id);
                        }} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                            <button type="submit" style={{ backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', color: '#ff4d4d', cursor: 'pointer', borderRadius: '50%', padding: '0.3rem' }}>
                                <Trash2 size={16} />
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}

const inputStyle = {
    padding: '0.8rem',
    borderRadius: '10px',
    border: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: 'white',
};
