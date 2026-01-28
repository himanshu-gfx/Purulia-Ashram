
import { db } from '@/lib/db';
import { impactSections } from '@/lib/db/schema';
import { asc } from 'drizzle-orm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Impact",
    description: "Learn about the humanitarian and educational initiatives of the Paramhansa Yogananda Trust Ashram, Purulia. Empowering local communities through schools and healthcare.",
};

export default async function ImpactPage() {
    const dbSections = await db.select().from(impactSections).orderBy(asc(impactSections.createdAt));

    return (
        <main>
            <Navbar />

            {/* Page Header */}
            <section className="section" style={{ background: 'var(--primary)', color: 'var(--white)', textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h1 style={{ color: 'var(--accent)' }}>Our Impact</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Empowering the backward regions of Purulia through education and care.</p>
                </div>
            </section>

            {dbSections.length > 0 ? (
                dbSections.map((section, idx) => (
                    <section key={section.id} className="section" style={{ backgroundColor: idx % 2 === 1 ? 'var(--light-gray)' : 'transparent' }}>
                        <div className="container">
                            <div className="flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap', marginBottom: idx === 0 ? '3rem' : '0' }}>
                                <div style={{ flex: '1 1 500px' }}>
                                    <h2 style={{ marginBottom: '1.5rem' }}>{section.title}</h2>
                                    <div style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: section.content || '' }} />
                                    {section.data && (
                                        <div dangerouslySetInnerHTML={{ __html: section.data }} />
                                    )}
                                </div>
                                {(section.imageUrl || section.videoUrl) && (
                                    <div style={{ flex: '1 1 400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
                                        {section.videoUrl ? (
                                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                                <iframe
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                                    src={section.videoUrl}
                                                    title={section.title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        ) : (
                                            <img src={section.imageUrl!} alt={section.title} style={{ width: '100%', height: 'auto' }} />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ))
            ) : (
                <>
                    {/* Fallback to static content if DB is empty */}
                    <section className="section">
                        <div className="container">
                            <h2 style={{ marginBottom: '2rem' }}>Lakahanpur Schools</h2>
                            <div className="flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap', marginBottom: '3rem' }}>
                                <div style={{ flex: '1 1 500px' }}>
                                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                        The Lakhanpur Vidyalaya is the cornerstone of our educational mission. Founded by the Great Gurus
                                        to bring Enlightenment to the backward regions, it continues to serve thousands of students
                                        with a blend of modern curriculum and spiritual values.
                                    </p>
                                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                        <div className="card" style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '15px' }}>
                                            <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>The Boys&apos; School</h3>
                                            <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Established 1939</p>
                                            <p style={{ fontSize: '0.95rem' }}>Primary and secondary education with a focus on character building.</p>
                                        </div>
                                        <div className="card" style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '15px' }}>
                                            <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>The Girls&apos; School</h3>
                                            <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Established 1958</p>
                                            <p style={{ fontSize: '0.95rem' }}>Empowering rural women through literacy and vocational support.</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ flex: '1 1 400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                            src="https://www.youtube.com/embed/Oqxw8xDm-g8"
                                            title="Paramhansa Yogananda Trust Documentary"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Technical Education */}
            <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
                <div className="container">
                    <div className="flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>Technical & Vocational Training</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                To address rural unemployment and provide modern skills, the Trust established
                                the Polytechnic and ITI institutes. These centers focus on vocational empowerment,
                                bridging the gap between traditional and technical education.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                <li>✓ Industry-aligned curriculum</li>
                                <li>✓ Modern workshops and laboratories</li>
                                <li>✓ Placement assistance for graduates</li>
                            </ul>
                        </div>
                        <div style={{ flex: '1 1 400px', backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Special Education Programs</h4>
                            <p>
                                We provide inclusive education for children with special needs, ensuring that
                                no child is left behind due to physical or cognitive challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Humanitarian Initiatives */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Humanitarian Initiatives</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="card glass" style={{ padding: '2rem' }}>
                            <div style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1rem' }}>🩺</div>
                            <h3>Medical Camps</h3>
                            <p>
                                Regular medical camps are organized in various remote villages around Purulia, providing
                                essential healthcare, free consultations, and medicines to those in need.
                            </p>
                        </div>
                        <div className="card glass" style={{ padding: '2rem' }}>
                            <div style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1rem' }}>👁️</div>
                            <h3>Free Eye Camps</h3>
                            <p>
                                In collaboration with <strong>Lokeshwarananda Eye-Hospital (Pada)</strong>, we organize regular eye-testing camps.
                                We facilitate free surgeries, provide transport, and ensure full post-operative care and follow-ups.
                            </p>
                        </div>
                        <div className="card glass" style={{ padding: '2rem' }}>
                            <div style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1rem' }}>💻</div>
                            <h3>Digital Empowerment</h3>
                            <p>
                                For years, we have been collecting, repairing, and donating desktop and laptop computers
                                to village schools, helping rural children bridge the digital divide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Outreach Program */}
            <section className="section" style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--white)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--accent)' }}>YSS Centenary Outreach</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            In celebration of the 100-year journey of Yogada Satsanga Society of India (YSS),
                            the Trust launched a major educational initiative to bring the &quot;Art of Living&quot;
                            teachings to the youth of West Bengal and Jharkhand.
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>The &quot;Law of Success&quot; Project</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                A special initiative based on Paramhansa Yogananda&apos;s scientific principles of success.
                                We organized multi-phase programs in three major regional schools:
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li>• <strong>Khedadi High School</strong> (Bokaro, Jharkhand)</li>
                                <li>• <strong>Jashpur Girls High School</strong> (Bokaro, Jharkhand)</li>
                                <li>• <strong>Ramkrishna Tarak Math High School</strong> (Purulia, WB)</li>
                            </ul>
                        </div>
                        <div className="glass" style={{ padding: '2rem', color: 'var(--dark-gray)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Program Impact</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <strong style={{ fontSize: '1.2rem', color: 'var(--primary-dark)' }}>160+</strong>
                                    <p>Students participated in intensive Quiz Competitions based on spiritual literature.</p>
                                </div>
                                <div>
                                    <strong style={{ fontSize: '1.2rem', color: 'var(--primary-dark)' }}>Free Literature</strong>
                                    <p>Hundreds of copies of &quot;Law of Success&quot; and &quot;Autobiography of a Yogi&quot; distributed to seekers.</p>
                                </div>
                                <div>
                                    <strong style={{ fontSize: '1.2rem', color: 'var(--primary-dark)' }}>Youth Mentorship</strong>
                                    <p>Focused on disseminating &quot;plain living and high thinking&quot; and the spirit of universal brotherhood.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', border: '1px dashed rgba(255,255,255,0.3)', borderRadius: '20px' }}>
                        <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>&quot;Kinship with Omnipresence&quot;</h4>
                        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
                            &quot;To Pago our deepest homage to our Guru, we have selected several schools for propagating
                            the teachings of Guruji and the scientific techniques for self-realization to the younger generation.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Feature Table */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Institutional Overview</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                            <thead>
                                <tr style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', textAlign: 'left' }}>
                                    <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Institution</th>
                                    <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Established</th>
                                    <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Focus Area</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Boys&apos; School (Lakahanpur)</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>1939</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Primary & Secondary Education</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f9f9f9' }}>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Girls&apos; School (Lakahanpur)</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>1958</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Women&apos;s Literacy & Empowerment</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Polytechnic & ITI</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Modern Era</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Vocational & Technical Skills</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f9f9f9' }}>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Special Needs Program</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Ongoing</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Inclusive Education for All</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Medical & Eye Camps</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Ongoing</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Free Healthcare & Surgeries</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f9f9f9' }}>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Computer Donations</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Multi-year</td>
                                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>Rural Digital Empowerment</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
