"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container flex-between" style={{ height: '100%', width: '100%' }}>
        <div className="logo" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)', zIndex: 1002, whiteSpace: 'normal', lineHeight: '1.1' }}>
          <Link href="/">
            <div>Paramhansa Yogananda Trust</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--accent-saffron)', letterSpacing: '2px', textTransform: 'uppercase' }}>Purulia</div>
          </Link>
        </div>

        <ul className={`nav-links flex ${isOpen ? 'active' : ''}`}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link href="/teachings" onClick={() => setIsOpen(false)}>Teachings</Link></li>
          <li><Link href="/impact" onClick={() => setIsOpen(false)}>Our Impact</Link></li>
          <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li className="mobile-cta" style={{ display: 'none' }}>
            <Link href="/donate" className="btn btn-primary" onClick={() => setIsOpen(false)}>Support Us</Link>
          </li>
        </ul>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="nav-cta">
            <Link href="/donate" className="btn btn-primary">Support Us</Link>
          </div>

          <button
            className={`menu-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
