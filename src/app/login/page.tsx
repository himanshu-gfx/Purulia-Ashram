
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await signIn('credentials', {
                username,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError('Invalid credentials');
            } else {
                router.push('/admin');
                router.refresh();
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
            padding: '1rem'
        }}>
            <div className="card glass" style={{
                maxWidth: '400px',
                width: '100%',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{ textAlign: 'center', color: 'var(--accent)', marginBottom: '1.5rem' }}>CMS Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white)' }}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '10px',
                                border: 'none',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'white'
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white)' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '10px',
                                border: 'none',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'white'
                            }}
                            required
                        />
                    </div>
                    {error && <p style={{ color: '#ff4d4d', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
                    <button
                        type="submit"
                        className="btn btn-accent"
                        disabled={loading}
                        style={{ width: '100%', padding: '1rem' }}
                    >
                        {loading ? 'Logging in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
