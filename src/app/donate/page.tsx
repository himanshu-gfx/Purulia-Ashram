import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Support Our Mission",
    description: "Contribute to the humanitarian and spiritual mission of the Paramhansa Yogananda Trust Ashram, Purulia. Your donations support schools, healthcare, and Vedic wisdom.",
};

export default function DonatePage() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section
                className="section"
                style={{
                    background: 'linear-gradient(135deg, var(--accent), #f4d58d)',
                    color: 'var(--primary-dark)',
                    textAlign: 'center',
                    padding: 'var(--spacing-xl) 0'
                }}
            >
                <div className="container">
                    <h1>Support Our Mission</h1>
                    <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                        Your contribution fuels the light of education and spirituality in Purulia.
                    </p>
                </div>
            </section>

            {/* Donation Section */}
            <section className="section">
                <div className="container">
                    <div
                        className="flex-between"
                        style={{ gap: 'var(--spacing-xl)', flexWrap: 'wrap', alignItems: 'stretch' }}
                    >
                        {/* Left Content */}
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>How You Can Help</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                The Paramhansa Yogananda Trust relies on the generosity of seekers and well-wishers to
                                sustain our schools, technical institutes, and spiritual programs. Every donation,
                                no matter the size, makes a difference.
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4>Ways to Contribute:</h4>
                                <ul
                                    style={{
                                        paddingLeft: '1.5rem',
                                        marginTop: '1rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.7rem'
                                    }}
                                >
                                    <li>• Support a child&apos;s education for a year</li>
                                    <li>• Contribute to the Ashram building fund</li>
                                    <li>• Sponsor a Gita Satsang or community meal</li>
                                    <li>• Donate skills as a volunteer teacher</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Donation Card */}
                        <div
                            style={{
                                flex: '1 1 420px',
                                background: 'var(--primary-dark)',
                                color: 'var(--white)',
                                padding: '2.5rem',
                                borderRadius: '24px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem'
                            }}
                        >
                            {/* Bank Details */}
                            <div>
                                <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                                    Bank Details
                                </h3>
                                <p><strong>Account Name:</strong> PARAMHANSA YOGANANDA TRUST</p>
                                <p><strong>Bank:</strong> Punjab National Bank (PNB)</p>
                                <p><strong>Account No:</strong> 0475000100111309</p>
                                <p><strong>IFSC Code:</strong> PUNB0047500</p>
                                <p><strong>Branch:</strong> Nandlal Ghosh Street, Purulia (WB)</p>
                            </div>

                            {/* Divider */}
                            <div
                                style={{
                                    height: '1px',
                                    background: 'rgba(255,255,255,0.2)'
                                }}
                            />

                            {/* QR Section */}
                            <div style={{ textAlign: 'center' }}>
                                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                                    Scan & Donate
                                </h4>

                                <div
                                    style={{
                                        background: '#fff',
                                        padding: '1rem',
                                        borderRadius: '16px',
                                        display: 'inline-block',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    <Image
                                        src="/images/qr.png"   // <-- Replace later
                                        alt="QR Code for Donation"
                                        width={200}
                                        height={200}
                                        style={{ borderRadius: '12px' }}
                                    />
                                </div>

                                <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                                    UPI / Bank Transfer QR
                                </p>
                            </div>

                            {/* Footer Note */}
                            <p style={{ fontSize: '0.85rem', opacity: 0.75 }}>
                                Please email your transaction details to
                                paramhansayoganandatrust05@gmail.com for a receipt.
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
