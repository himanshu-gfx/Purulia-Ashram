import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Lineage",
    description: "Explore the spiritual lineage of Kriya Yoga masters, from Lord Krishna to Swami Bidyananda Giri, founder of the Paramhansa Yogananda Trust Ashram, Purulia.",
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            {/* Page Header */}
            <section className="section" style={{ background: 'var(--primary-dark)', color: 'var(--white)', textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h1 style={{ color: 'var(--accent)', fontSize: '3.5rem' }}>The Lineage</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Tracing the sacred link from the Divine source to the present day.</p>
                </div>
            </section>

            {/* Great Gurus Section */}
            <section className="section" style={{ backgroundColor: 'var(--off-white)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Great Gurus of Kriya Yoga</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="card glass" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            <div style={{ height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img src="/images/lord-krishna.png" alt="Lord Krishna" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ color: 'var(--primary)' }}>Lord Krishna</h3>
                            <p>The Divine source of the Kriya Yoga wisdom, as imparted to Arjuna on the battlefield of Kurukshetra.</p>
                        </div>
                        <div className="card glass" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            <div style={{ height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img src="/images/mahavatar-babaji-shrine.jpg" alt="Mahavatar Babaji" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ color: 'var(--primary)' }}>Mahavatar Babaji</h3>
                            <p>The deathless avatar who revived the ancient science of Kriya Yoga in the modern age.</p>
                        </div>
                        <div className="card glass" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            <div style={{ height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img src="/images/lahiri-mahashay.jpg" alt="Lahiri Mahashay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ color: 'var(--primary)' }}>Lahiri Mahashay</h3>
                            <p>The householder yogi who brought the blessings of Kriya Yoga to the common man.</p>
                        </div>
                        <div className="card glass" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            <div style={{ height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img src="/images/sri-yukteshwar-shrine.jpg" alt="Sw. Yukteshwar Giri" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ color: 'var(--primary)' }}>Sw. Yukteshwar Giri</h3>
                            <p>The &quot;Jnanavatar&quot; or Incarnation of Wisdom, and the Guru of Paramahansa Yogananda.</p>
                        </div>
                        <div className="card glass" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            <div style={{ height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img src="/images/paramhansa-yogananda-shrine.jpg" alt="Paramhansa Yogananda" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ color: 'var(--primary)' }}>Paramhansa Yogananda</h3>
                            <p>The pioneer who brought the spiritual treasures of India to the Western world.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Swami Bidyananda Giri</h2>
                        <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>Founder (105 Years of Devotion)</p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Swamiji was initiated into the holy path of Kriya Yoga by the great Paramahansa Yogananda himself.
                            Throughout his long life of 105 years, he remained a steadfast &quot;Karmayogi,&quot; blending deep spiritual
                            realization with tireless service to humanity.
                        </p>
                        <p>
                            His close relationship with Sri Anandamoy Ma and other great saints of the era shaped the unique
                            spiritual atmosphere of the Paramhansa Yogananda Trust Ashram, Purulia, making it a beacon for seekers from across the globe.
                        </p>
                    </div>
                    <div style={{ flex: '1 1 400px', height: '450px', borderRadius: '15px', overflow: 'hidden' }} className="flex-center">
                        <img
                            src="/images/swami-bidyananda.jpg"
                            alt="Swami Bidyananda Giri"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* President Section */}
            <section className="section" style={{ backgroundColor: 'var(--off-white)' }}>
                <div className="container flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap-reverse' }}>
                    <div style={{ flex: '1 1 400px', height: '450px', borderRadius: '15px', overflow: 'hidden' }} className="flex-center">
                        <img
                            src="/images/swami-krishnananda.jpg"
                            alt="Swami Krishnananda Giri Ji"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Swami Krishnananda Giri Ji</h2>
                        <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>The President & Spiritual Guide</p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            A rare synthesis of a realized monk and a true technocrat, Swami Krishnananda Ji bridges the gap
                            between modern scientific inquiry and the timeless depths of the soul. An alumnus of IIT Bombay,
                            he hails from a lineage of intellectual excellence, being part of the same family as Nobel
                            laureates C.V. Raman and S. Chandrasekhar.
                        </p>
                        <p>
                            His leadership ensures that the Ashram and its educational institutions maintain a perfect
                            balance between technological advancement and spiritual grounding.
                        </p>
                    </div>
                </div>
            </section>

            {/* Seva Ma Section */}
            <section className="section">
                <div className="container flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Seva Ma</h2>
                        <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>Key Founding Member (1930 - 2014)</p>
                        <p style={{ marginBottom: '1rem' }}>
                            Seva Ma was born in 1930 in Kotalipara village of Faridpur district of undivided Bengal.
                            Her father, Pandit Surendranath Sengupta, was the headmaster of a school in Barisal.
                            A unique amalgamation of modern rationalist thoughts with age-old Sanatani Indian ideology was found in Seva Ma.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            While working as a teacher in Asansol, she had the darshan of her Aradhya Gurudev Shri Shri Bidyananda Ji Maharaj,
                            who invited her to join Yogoda Satsanga Balika Vidyalaya in Lakhanpur, Purulia. After taking Diksha from Bidyananda Ji,
                            she took the vows of Sannyas and became fully engrossed in spirituality and Kriya Yoga sadhana.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            Though she appeared as a thunderbolt character at a glance, she was the epitome of compassion and love.
                            A stream of tender love and devotion flowed endlessly from within her.
                            She deeply admired Swami Krishnananda Giri&apos;s selfless service to mankind.
                        </p>
                        <p>
                            In 2014, Seva Ma left her mortal body, taking refuge in the lap of Guruji,
                            leaving behind a legacy of inspiration for countless seekers on the path of spirituality.
                        </p>
                    </div>
                    <div style={{ flex: '1 1 400px', height: '450px', borderRadius: '15px', overflow: 'hidden' }} className="flex-center">
                        <img
                            src="/images/seva-ma.jpg"
                            alt="Seva Ma"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* Keshwananda Section */}
            <section className="section" style={{ backgroundColor: 'var(--off-white)' }}>
                <div className="container flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap-reverse' }}>
                    <div style={{ flex: '1 1 400px', height: '450px', borderRadius: '15px', overflow: 'hidden' }} className="flex-center">
                        <img
                            src="/images/swami-keshavananda.jpg"
                            alt="Swami Keshwananda Giri Ji"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Swami Keshwananda Giri Ji</h2>
                        <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>Spiritual Mentor &amp; Guide</p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Swami Keshwananda Ji remains a vital pillar of the Paramhansa Yogananda Trust Ashram, Purulia, dedicating his life to
                            the propagation of Kriya Yoga and the welfare of the local community. His presence
                            provides a steady source of spiritual strength and guidance to all who visit the Paramhansa Yogananda Trust Ashram, Purulia.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>The Paramhansa Yogananda Trust</h2>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Established on 26th September 2000, the Trust was formed with the vision of providing holistic
                            development to the backward regions of Purulia. Over the decades, it has grown from a humble
                            spiritual retreat into a comprehensive educational and social welfare hub.
                        </p>
                        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div>
                                <h4 style={{ fontSize: '2rem', color: 'var(--primary)' }}>25+</h4>
                                <p>Years of Service</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '2rem', color: 'var(--primary)' }}>5000+</h4>
                                <p>Students Empowered</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '2rem', color: 'var(--primary)' }}>10+</h4>
                                <p>Social Programs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
