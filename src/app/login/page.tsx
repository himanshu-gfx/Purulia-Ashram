
'use client';

import { useState, useEffect, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/admin';

    useEffect(() => {
        setMounted(true);
    }, []);

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
                setError('Invalid username or password');
            } else {
                router.push(callbackUrl);
                router.refresh();
            }
        } catch {
            setError('System error. Please contact administrator.');
        } finally {
            setLoading(false);
        }
    };

    if (!mounted) return null;

    return (
        <div style={containerStyle}>
            {/* Background Graphics */}
            <div style={circle1Style}></div>
            <div style={circle2Style}></div>

            <main style={cardStyle} className="glass-card">
                <div style={headerSectionStyle}>
                    <div style={logoIconStyle}>P</div>
                    <h1 style={titleStyle}>Purulia Ashram</h1>
                    <p style={subtitleStyle}>Content Management System</p>
                </div>

                <form onSubmit={handleSubmit} style={formStyle}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            style={inputStyle}
                            required
                        />
                    </div>

                    {error && (
                        <div style={errorBannerStyle}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={loading ? { ...buttonStyle, opacity: 0.7, cursor: 'not-allowed' } : buttonStyle}
                    >
                        {loading ? (
                            <span style={spinnerStyle}></span>
                        ) : 'Sign In'}
                    </button>
                </form>

                <div style={footerSectionStyle}>
                    <p style={footerTextStyle}>&copy; {new Date().getFullYear()} Paramhansa Yogananda Trust</p>
                    <Link href="/" style={backLinkStyle}>← Back to Home</Link>
                </div>
            </main>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .glass-card {
                    animation: fadeIn 0.8s ease-out;
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                input:focus {
                    outline: none;
                    border-color: var(--accent) !important;
                    box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.2);
                }
                button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    background: var(--primary);
                    color: white;
                }
                button:active:not(:disabled) {
                    transform: translateY(0);
                }
            `}} />
        </div>
    );
}

// Styles
const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
    fontFamily: 'var(--font-inter), sans-serif',
};

const circle1Style: React.CSSProperties = {
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '40%',
    height: '60%',
    background: 'radial-gradient(circle, rgba(212, 163, 115, 0.15) 0%, transparent 70%)',
    zIndex: 0,
};

const circle2Style: React.CSSProperties = {
    position: 'absolute',
    bottom: '-10%',
    right: '-10%',
    width: '40%',
    height: '60%',
    background: 'radial-gradient(circle, rgba(212, 163, 115, 0.1) 0%, transparent 70%)',
    zIndex: 0,
};

const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '440px',
    padding: '3rem 2.5rem',
    borderRadius: '24px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
};

const headerSectionStyle: React.CSSProperties = {
    textAlign: 'center',
};

const logoIconStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    backgroundColor: 'var(--accent)',
    color: 'var(--primary-dark)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 800,
    margin: '0 auto 1.5rem',
    boxShadow: '0 10px 20px -5px rgba(212, 163, 115, 0.4)',
};

const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    color: '#1e293b',
    margin: '0 0 0.5rem 0',
    fontWeight: 700,
    letterSpacing: '-0.5px',
};

const subtitleStyle: React.CSSProperties = {
    color: '#64748b',
    fontSize: '1rem',
    margin: 0,
};

const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
};

const inputGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
};

const labelStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#334155',
    marginLeft: '4px',
};

const inputStyle: React.CSSProperties = {
    padding: '12px 16px',
    borderRadius: '12px',
    border: '2px solid #e2e8f0',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    backgroundColor: 'white',
    color: '#1e293b',
};

const buttonStyle: React.CSSProperties = {
    marginTop: '1rem',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: 'var(--accent)',
    color: 'var(--primary-dark)',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const errorBannerStyle: React.CSSProperties = {
    padding: '12px',
    borderRadius: '10px',
    backgroundColor: '#fef2f2',
    color: '#991b1b',
    fontSize: '0.875rem',
    textAlign: 'center',
    border: '1px solid #fee2e2',
};

const footerSectionStyle: React.CSSProperties = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
};

const footerTextStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#94a3b8',
    margin: 0,
};

const backLinkStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: 'var(--accent)',
    textDecoration: 'none',
    fontWeight: 600,
};

const spinnerStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    border: '3px solid rgba(0,0,0,0.1)',
    borderTopColor: 'inherit',
    borderRadius: '50%',
    animation: 'rotate 0.8s linear infinite',
};

export default function LoginPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#fff' }}>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}
