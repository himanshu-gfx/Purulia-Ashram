
'use client';

import { Settings } from "lucide-react";
import { changePassword } from "@/lib/db/auth-actions";
import { useState } from "react";

export default function SettingsPage() {
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setMessage(null);
        try {
            const result = await changePassword(formData);
            if (result.success) {
                setMessage({ text: 'Password updated successfully!', type: 'success' });
                (document.getElementById('password-form') as HTMLFormElement).reset();
            }
        } catch (error) {
            const err = error as Error;
            setMessage({ text: err.message || 'Failed to update password', type: 'error' });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>CMS Settings</h1>

            <div className="card glass" style={{ maxWidth: '500px', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Settings size={24} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ margin: 0 }}>Change Password</h3>
                </div>

                {message && (
                    <div style={{
                        padding: '0.8rem',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                        backgroundColor: message.type === 'success' ? '#def7ec' : '#fde8e8',
                        color: message.type === 'success' ? '#03543f' : '#9b1c1c',
                        fontSize: '0.9rem'
                    }}>
                        {message.text}
                    </div>
                )}

                <form id="password-form" action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                        <label style={labelStyle}>New Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Min 6 characters"
                            required
                            style={inputStyle}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-accent"
                        disabled={loading}
                        style={{ padding: '0.8rem', opacity: loading ? 0.7 : 1 }}
                    >
                        {loading ? 'Updating...' : 'Update Password'}
                    </button>
                </form>
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
