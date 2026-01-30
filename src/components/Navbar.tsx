"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo - Left side */}
        <div className="logo">
          <Link href="/">
            <div>Paramhansa Yogananda Trust</div>
            <div className="logo-subtitle">Purulia</div>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link href="/teachings" onClick={() => setIsOpen(false)}>Teachings</Link></li>
          <li><Link href="/impact" onClick={() => setIsOpen(false)}>Our Impact</Link></li>
          <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li className="mobile-cta">
            <Link href="/donate" className="btn btn-primary" onClick={() => setIsOpen(false)}>Support Us</Link>
          </li>
        </ul>

        {/* Right side - CTA and Menu Toggle */}
        <div className="nav-right">
          {/* Desktop CTA */}
          <div className="nav-cta">
            <Link href="/donate" className="btn btn-primary">Support Us</Link>
          </div>

          {/* Mobile Menu Toggle - Right side */}
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

      <style jsx>{`
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          width: 100%;
        }

        .logo {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--primary);
          z-index: 1002;
          white-space: normal;
          line-height: 1.1;
        }

        .logo-subtitle {
          font-size: 0.9rem;
          color: var(--accent-saffron);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Desktop Navigation - Horizontal */
        :global(.nav-links) {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        :global(.nav-links li) {
          margin: 0;
        }

        :global(.nav-links a) {
          font-weight: 500;
          color: var(--dark-gray);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        :global(.nav-links a:hover) {
          color: var(--primary);
        }

        :global(.nav-links .mobile-cta) {
          display: none;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
          }

          .logo {
            font-size: 1rem;
          }

          .logo-subtitle {
            font-size: 0.75rem;
          }

          .nav-right .nav-cta {
            display: none;
          }

          :global(.nav-links) {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: var(--white);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
            padding: 2rem;
            gap: 0;
          }

          :global(.nav-links.active) {
            right: 0;
          }

          :global(.nav-links li) {
            margin: 1.2rem 0;
            width: 100%;
            text-align: center;
          }

          :global(.nav-links a) {
            font-size: 1.8rem;
            display: block;
            width: 100%;
          }

          :global(.nav-links .mobile-cta) {
            display: block !important;
            margin-top: 2rem;
            width: 100%;
            max-width: 250px;
          }

          :global(.nav-links .mobile-cta .btn) {
            color: var(--white) !important;
          }
        }
      `}</style>
    </nav>
  );
}
