
import { db } from "@/lib/db";
import { impactSections } from "@/lib/db/schema";
import { updateImpactSection } from "@/lib/db/actions";
import { Save } from "lucide-react";
import ImageUploader from "../../../components/admin/ImageUploader";

export default async function AdminImpactPage() {
    const sections = await db.select().from(impactSections).orderBy(impactSections.createdAt);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Manage Our Impact</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {sections.length === 0 && (
                    <div className="card glass" style={{ padding: '2rem', textAlign: 'center' }}>
                        <p>No impact sections found. They will be seeded from static content first.</p>
                    </div>
                )}

                {sections.map((section) => (
                    <div key={section.id} className="card glass" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem' }}>
                            Section: {section.title} ({section.type})
                        </h3>
                        <form action={async (formData) => {
                            'use server';
                            await updateImpactSection(section.id, {
                                title: formData.get('title') as string,
                                content: formData.get('content') as string,
                                imageUrl: formData.get('imageUrl') as string,
                                videoUrl: formData.get('videoUrl') as string,
                            });
                        }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={labelStyle}>Section Title</label>
                                <input type="text" name="title" defaultValue={section.title} style={inputStyle} />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={labelStyle}>Content</label>
                                <textarea name="content" defaultValue={section.content || ''} style={{ ...inputStyle, minHeight: '150px' }}></textarea>
                            </div>
                            <div>
                                <ImageUploader name="imageUrl" defaultValue={section.imageUrl || ''} label="Section Image" />
                            </div>
                            <div>
                                <label style={labelStyle}>Video URL (YouTube Embed)</label>
                                <input type="text" name="videoUrl" defaultValue={section.videoUrl || ''} style={inputStyle} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ gridColumn: 'span 2' }}>
                                <Save size={18} /> Save Changes
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}

const labelStyle = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '0.4rem',
    opacity: 0.8
};

const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '10px',
    border: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: 'white',
};
