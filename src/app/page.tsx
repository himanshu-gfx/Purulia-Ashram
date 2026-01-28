
import { db } from '@/lib/db';
import { news } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default async function Home() {
  const latestNews = await db.select().from(news).orderBy(desc(news.createdAt));

  return (
    <main>
      <Navbar />
      <Hero />

      {/* Mission Statement */}
      <section className="section" style={{ backgroundColor: 'var(--white)', textAlign: 'center' }}>
        <div className="container fade-in">
          <h2>Our Mission</h2>
          <p style={{ fontStyle: 'italic', color: 'var(--primary)', marginBottom: '1rem', fontSize: 'clamp(1.2rem, 5vw, 1.8rem)' }}>
            "Ātmano Mokṣārtham Jagat Hitāya Cha"
          </p>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--medium-gray)' }}>
            For one’s own spiritual liberation and for the welfare of the world.
            We are dedicated to preserving the ancient wisdom of Kriya Yoga while
            serving humanity through education and social welfare.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card glass" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
              <h3>The Schools</h3>
              <p style={{ marginBottom: '1.5rem' }}>Empowering the youth of Purulia through quality education and character building since 1939.</p>
              <Link href="/impact" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="card glass" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
              <h3>Kriya Yoga</h3>
              <p style={{ marginBottom: '1.5rem' }}>Discover the immortal spiritual technique for self-realization as taught by the Great Gurus.</p>
              <Link href="/teachings" className="btn btn-primary">Explore Wisdom</Link>
            </div>
            <div className="card glass" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
              <h3>Donate</h3>
              <p style={{ marginBottom: '1.5rem' }}>Your support helps us continue our mission of service and enlightenment in backward regions.</p>
              <Link href="/donate" className="btn btn-accent">Support Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News / Updates */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Latest News & Events</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            {latestNews.length > 0 ? latestNews.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '15px', borderLeft: '5px solid var(--accent-saffron)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <div style={{ flex: '1 1 200px', height: '150px', borderRadius: '10px', overflow: 'hidden' }}>
                  <img src={item.imageUrl || '/images/daily-satsang.jpg'} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '2 1 300px' }}>
                  <h4 style={{ margin: 0, color: 'var(--primary)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--medium-gray)', marginBottom: '0.5rem' }}>{item.date} {item.location ? `| ${item.location}` : ''}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            )) : (
              <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.6 }}>No news items currently available.</div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
