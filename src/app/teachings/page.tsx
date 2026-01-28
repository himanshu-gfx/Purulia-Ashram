import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Wisdom of Kriya Yoga",
    description: "Discover the immortal spiritual technique of Kriya Yoga as taught by Paramahansa Yogananda and preserved at the Purulia Ashram. Path to God-realization.",
};

export default function TeachingsPage() {
    return (
        <main>
            <Navbar />

            {/* Page Header */}
            <section className="section" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(74, 20, 140, 0.8)), url("https://images.unsplash.com/photo-1518005020251-58296d87baec?q=80&w=2034&auto=format&fit=crop") center/cover', color: 'var(--white)', textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h1 style={{ color: 'var(--accent)' }}>The Wisdom</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Eternal truths passed down through generations of realized masters.</p>
                </div>
            </section>

            {/* Kriya Yoga Section */}
            <section className="section">
                <div className="container">
                    <div className="flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>Kriya Yoga</h2>
                            <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>The Immortal Spiritual Technique</p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Kriya Yoga is a simple, psychophysiological method by which the human blood is decarbonized
                                and recharged with oxygen. The atoms of this extra oxygen are transmuted into life current
                                to rejuvenize the brain and spinal centers.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                As taught by Paramahansa Yogananda in his &quot;Autobiography of a Yogi,&quot; this technique
                                accelerates spiritual evolution and helps the practitioner achieve a state of union with the Divine.
                            </p>
                            <blockquote style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>
                                &quot;Kriya Yoga is the airplane path to God-realization.&quot;
                            </blockquote>
                        </div>
                        <div style={{ flex: '1 1 300px', backgroundColor: 'var(--primary-dark)', color: 'var(--white)', padding: '2rem', borderRadius: '15px' }}>
                            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Key Benefits</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li>✓ Calms the restless mind</li>
                                <li>✓ Increases mental clarity and focus</li>
                                <li>✓ Harmonizes the body&apos;s energy system</li>
                                <li>✓ Direct experience of inner peace</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bhagavad Gita Section */}
            <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>The Bhagavad Gita</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
                        Swami Bidyananda Giri Ji often spoke of the Gita as the manual for righteous living.
                        Our Ashram holds regular satsangs dedicated to decoding the timeless verses for the modern seeker.
                    </p>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="card" style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ color: 'var(--primary)' }}>Karma Yoga</h4>
                            <p>The path of selfless action without attachment to the results.</p>
                        </div>
                        <div className="card" style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ color: 'var(--primary)' }}>Bhakti Yoga</h4>
                            <p>The path of devotion and unconditional love for the Divine.</p>
                        </div>
                        <div className="card" style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ color: 'var(--primary)' }}>Jnana Yoga</h4>
                            <p>The path of wisdom and intellectual inquiry into the nature of self.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sanatan Dharma Section */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Preserving Sanatan Dharma</h2>
                    <div style={{ backgroundColor: 'var(--primary-light)', color: 'var(--white)', padding: 'var(--spacing-lg) var(--spacing-sm)', borderRadius: '30px', textAlign: 'center' }}>
                        <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', marginBottom: '2rem' }}>
                            The Paramhansa Yogananda Trust Ashram, Purulia acts as a guardian of Vedic wisdom, propagating the universal values of
                            truth, compassion, and non-violence that form the foundation of Sanatan Dharma.
                        </p>
                        <Link href="/gallery" className="btn btn-accent">View Ashram Traditions</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
