import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer section" style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--white)' }}>
            <div className="container grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
                <div className="footer-info">
                    <h3 style={{ color: 'var(--accent)', lineHeight: '1.2' }}>
                        <div>Paramhansa Yogananda Trust</div>
                        <div style={{ fontSize: '1rem', color: 'var(--white)', letterSpacing: '1px' }}>Purulia</div>
                    </h3>
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>&quot;Ātmano Mokṣārtham Jagat Hitāya Cha&quot;</p>
                    <p>For one&apos;s own spiritual liberation and for the welfare of the world.</p>
                </div>
                <div className="footer-links">
                    <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link href="/about">Our Lineage</Link></li>
                        <li><Link href="/teachings">Kriya Yoga</Link></li>
                        <li><Link href="/impact">Welfare Programs</Link></li>
                        <li><Link href="/donate">Donate</Link></li>
                        <li><Link href="/login" style={{ opacity: 0.6, fontSize: '0.8rem', marginTop: '0.5rem', display: 'inline-block' }}>CMS Login</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Contact Us</h4>
                    <p><strong>Email:</strong> <a href="mailto:paramhansayoganandatrust05@gmail.com" style={{ color: 'inherit' }}>paramhansayoganandatrust05@gmail.com</a></p>
                    <p>Phone: +91 99321 60714</p>
                    <p>Address: Purulia, West Bengal, India</p>
                </div>
            </div>
            <div className="footer-bottom container" style={{ marginTop: 'var(--spacing-lg)', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                <p>&copy; {new Date().getFullYear()} Paramhansa Yogananda Trust. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
