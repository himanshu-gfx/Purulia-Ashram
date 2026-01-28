import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DonatePage() {
    return (
        <main>
            <Navbar />

            <section className="section" style={{ background: 'var(--accent)', color: 'var(--primary-dark)', textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h1>Support Our Mission</h1>
                    <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>Your contribution fuels the light of education and spirituality in Purulia.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="flex-between" style={{ gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>How You Can Help</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                The Paramhansa Yogananda Trust relies on the generosity of seekers and well-wishers to
                                sustain our schools, technical institutes, and spiritual programs. Every donation,
                                no matter the size, makes a difference.
                            </p>
                            <div style={{ marginBottom: '2rem' }}>
                                <h4>Ways to Contribute:</h4>
                                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>• Support a child's education for a year</li>
                                    <li>• Contribute to the Ashram building fund</li>
                                    <li>• Sponsor a Gita Satsang or community meal</li>
                                    <li>• Donate skills as a volunteer teacher</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 400px', backgroundColor: 'var(--primary-dark)', color: 'var(--white)', padding: '2.5rem', borderRadius: '30px' }}>
                            <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Bank Details</h3>
                            <p style={{ marginBottom: '1rem' }}><strong>Account Name:</strong> PARAMHANSA YOGANANDA TRUST</p>
                            <p style={{ marginBottom: '1rem' }}><strong>Bank:</strong> Punjab National Bank (PNB)</p>
                            <p style={{ marginBottom: '1rem' }}><strong>Account No:</strong> 0475000100111309</p>
                            <p style={{ marginBottom: '1rem' }}><strong>IFSC Code:</strong> PUNB0047500</p>
                            <p style={{ marginBottom: '1rem' }}><strong>Branch:</strong> Nandlal Ghosh Street, Purulia (WB)</p>
                            <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
                                Please email your transaction details to paramhansayoganandatrust05@gmail.com for a receipt.
                                All donations are tax-exempt under 80G.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
