
'use client';

import { useState, useRef } from 'react';
import { Upload, X, CheckCircle, Loader2 } from 'lucide-react';

interface ImageUploadFieldProps {
    name: string;
    defaultValue?: string;
    label?: string;
}

export default function ImageUploadField({ name, defaultValue = '', label }: ImageUploadFieldProps) {
    const [preview, setPreview] = useState(defaultValue);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Reset state
        setUploading(true);
        setError('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Upload failed');

            const data = await response.json();
            setPreview(data.url);
        } catch (err) {
            setError('Failed to upload image. Please try again.');
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            {label && <label style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>{label}</label>}

            <div style={{
                border: '2px dashed rgba(0,0,0,0.1)',
                borderRadius: '12px',
                padding: '1rem',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                minHeight: '120px',
                justifyContent: 'center',
                position: 'relative'
            }}>
                {preview ? (
                    <div style={{ width: '100%', position: 'relative', textAlign: 'center' }}>
                        <img
                            src={preview}
                            alt="Preview"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '150px',
                                borderRadius: '8px',
                                objectFit: 'contain',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setPreview('')}
                            style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                backgroundColor: '#ff4d4d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                            }}
                        >
                            <X size={14} />
                        </button>
                        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                            <CheckCircle size={14} /> Ready to save
                        </div>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'none',
                            border: 'none',
                            cursor: uploading ? 'not-allowed' : 'pointer',
                            color: 'var(--primary)',
                            padding: '1rem',
                            width: '100%'
                        }}
                    >
                        {uploading ? (
                            <Loader2 size={32} className="animate-spin" />
                        ) : (
                            <Upload size={32} />
                        )}
                        <span style={{ fontWeight: 600 }}>
                            {uploading ? 'Uploading...' : 'Click to upload image'}
                        </span>
                    </button>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                />
            </div>

            {error && <p style={{ color: '#ff4d4d', fontSize: '0.8rem', margin: 0 }}>{error}</p>}

            {/* Hidden input to hold the actual URL for form submission */}
            <input type="hidden" name={name} value={preview} />
        </div>
    );
}
