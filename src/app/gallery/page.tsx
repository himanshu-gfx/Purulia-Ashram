import { db } from '@/lib/db';
import { gallery } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function GalleryPage() {
    const dbImages = await db.select().from(gallery).orderBy(desc(gallery.createdAt));

    const hardcodedImages = [
        { title: "Lord Krishna", category: "Divine", src: "/images/lord-krishna.png", className: "img-enhance" },
        { title: "Mahavatar Babaji", category: "Spiritual", src: "/images/mahavatar-babaji-shrine.jpg", className: "img-enhance" },
        { title: "Lahiri Mahashay Shrine", category: "Historic", src: "/images/lahiri-mahashay.jpg", className: "img-enhance" },
        { title: "Sw. Yukteshwar Giri", category: "Historic", src: "/images/sri-yukteshwar-shrine.jpg", className: "img-enhance" },
        { title: "Paramhansa Yogananda", category: "Historic", src: "/images/paramhansa-yogananda-shrine.jpg", className: "img-enhance" },
        { title: "Swami Bidyananda Giri", category: "Historic", src: "/images/swami-bidyananda.jpg", className: "img-clear" },
        { title: "Swami Krishnananda Giri Ji", category: "Spiritual", src: "/images/swami-krishnananda.jpg", className: "img-enhance" },
        { title: "Swami Keshwananda Giri Ji", category: "Spiritual", src: "/images/swami-keshavananda.jpg", className: "img-enhance" },
        { title: "Medical Camp Consultation", category: "Charity", src: "/images/charity-medical-1.jpg", className: "img-warm" },
        { title: "Community Health Outreach", category: "Charity", src: "/images/charity-medical-2.jpg", className: "img-enhance" },
        { title: "Rural Eye Camp Setup", category: "Charity", src: "/images/charity-medical-3.jpg", className: "img-clear" },
        { title: "Charitable Distribution", category: "Charity", src: "/images/charity-medical-4.jpg", className: "img-enhance" },
        { title: "Trust Volunteers", category: "Charity", src: "/images/charity-medical-5.jpg", className: "img-enhance" },
        { title: "Medical Consultation Desk", category: "Charity", src: "/images/charity-medical-6.jpg", className: "img-warm" },
        { title: "Special Examination", category: "Charity", src: "/images/charity-medical-7.jpg", className: "img-warm" },
        { title: "Digital Empowerment Program", category: "Education", src: "/images/digital-empowerment.jpg", className: "img-enhance" },
        { title: "Guruji's Birthday Altar", category: "Spiritual", src: "/images/guruji-birthday-1.jpg", className: "img-enhance" },
        { title: "Birthday Celebration Arati", category: "Spiritual", src: "/images/guruji-birthday-2.jpg", className: "img-warm" },
        { title: "Satsang Gathering", category: "Spiritual", src: "/images/guruji-birthday-3.jpg", className: "img-enhance" },
        { title: "Daily Satsang", category: "Spiritual", src: "/images/daily-satsang.jpg", className: "img-enhance" },
        { title: "Shiva Temple", category: "Spiritual", src: "/images/ashram-meditation.jpg", className: "img-enhance" },
        { title: "Shrine Lingam", category: "Spiritual", src: "/images/shrine-lingam.jpg", className: "img-enhance" },
    ];

    const displayImages = dbImages.length > 0 ? dbImages : hardcodedImages;

    return (
        <main>
            <Navbar />

            <section className="section" style={{ background: 'var(--primary-light)', color: 'var(--white)', textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h1 style={{ color: 'var(--accent)' }}>Media Archive</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Capturing moments of devotion, education, and service.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {displayImages.map((img, index) => (
                            <div key={index} className="card" style={{ overflow: 'hidden', borderRadius: '15px' }}>
                                <div style={{ height: '250px', backgroundColor: 'var(--light-gray)', overflow: 'hidden' }}>
                                    <img src={img.src} alt={img.title} className={img.className || 'img-enhance'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
                                    <h4 style={{ margin: 0 }}>{img.title}</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{img.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Video Documentary & Media</h2>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        <div className="card glass" style={{ overflow: 'hidden', padding: 0 }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    src="https://www.youtube.com/embed/Oqxw8xDm-g8"
                                    title="Paramhansa Yogananda Trust Documentary"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h4>Paramhansa Yogananda Trust - Documentary</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--medium-gray)' }}>A glimpse into the spiritual and social missions in Purulia.</p>
                            </div>
                        </div>

                        <div className="card glass" style={{ overflow: 'hidden', padding: 0 }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    src="https://www.youtube.com/embed/sVk3nkGF_J8"
                                    title="Lakhanpur Vidyalaya - School Life"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h4>Lakhanpur Vidyalaya - Education for All</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--medium-gray)' }}>Empowering rural youth through quality education and discipline.</p>
                            </div>
                        </div>

                        <div className="card glass" style={{ overflow: 'hidden', padding: 0 }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    src="https://www.youtube.com/embed/aEO-iuVxsQg"
                                    title="Ashram Service Activities"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h4>Seva & Spiritual Outreach</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--medium-gray)' }}>Our ongoing efforts in food distribution and spiritual gatherings.</p>
                            </div>
                        </div>

                        <div className="card glass" style={{ overflow: 'hidden', padding: 0 }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    src="https://www.youtube.com/embed/U7OHfgJiFYQ"
                                    title="Centenary Celebrations"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h4>Heritage & Tradition</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--medium-gray)' }}>Celebrating the legacy of the Great Gurus of Purulia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
