"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    const images = [
        '/images/ashram-hero-1.jpg',
        '/images/ashram-hero-2.jpg',
        '/images/ashram-hero-3.jpg',
        '/images/ashram-hero-4.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="hero">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image})` }}
                ></div>
            ))}
            <div className="hero-content fade-in">
                <h1>Leading Humanity from Darkness to Light</h1>
                <p>Rooted in Kriya Yoga, Dedicated to Service. Experience the profound wisdom of Paramahansa Yogananda and Swami Bidyananda Giri.</p>
                <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                    <Link href="/about" className="btn btn-accent">Learn Our Story</Link>
                    <Link href="/teachings" className="btn btn-primary" style={{ border: '1px solid var(--accent)' }}>Explore Teachings</Link>
                </div>
            </div>
        </section>
    );
}
