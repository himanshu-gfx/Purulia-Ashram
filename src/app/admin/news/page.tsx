
import { db } from "@/lib/db";
import { news } from "@/lib/db/schema";
import { addNews, deleteNews } from "@/lib/db/actions";
import { Trash2, Plus } from "lucide-react";

export default async function AdminNewsPage() {
    const allNews = await db.select().from(news).orderBy(news.createdAt);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Manage News & Events</h1>
            </div>

            <div className="card glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Add New Event</h3>
                <form action={async (formData) => {
                    'use server';
                    await addNews({
                        title: formData.get('title') as string,
                        date: formData.get('date') as string,
                        location: formData.get('location') as string,
                        description: formData.get('description') as string,
                        imageUrl: formData.get('imageUrl') as string || '/images/daily-satsang.jpg',
                    });
                }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" name="title" placeholder="Event Title" required style={inputStyle} />
                    <input type="text" name="date" placeholder="Date/Time (e.g. Everyday | 4:00 PM)" required style={inputStyle} />
                    <input type="text" name="location" placeholder="Location" style={inputStyle} />
                    <input type="text" name="imageUrl" placeholder="Image URL (optional)" style={inputStyle} />
                    <textarea name="description" placeholder="Description" required style={{ ...inputStyle, gridColumn: 'span 2' }}></textarea>
                    <button type="submit" className="btn btn-primary" style={{ gridColumn: 'span 2' }}>
                        <Plus size={18} /> Add Event
                    </button>
                </form>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {allNews.map((item) => (
                    <div key={item.id} className="card glass" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4 style={{ margin: 0 }}>{item.title}</h4>
                            <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.date} | {item.location}</p>
                        </div>
                        <form action={async () => {
                            'use server';
                            await deleteNews(item.id);
                        }}>
                            <button type="submit" style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}>
                                <Trash2 size={20} />
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
