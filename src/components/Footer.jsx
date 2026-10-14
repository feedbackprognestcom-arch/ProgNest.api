import React from 'react';
import { ArrowUp, Download, Mail, ExternalLink, Shield, FileText } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src={siteConfig.logo} alt="ProgNest Logo" className="footer-logo-img" />
              <span className="footer-brand-name">
                Prog<span className="brand-highlight">Nest</span>
              </span>
            </div>
            <p className="footer-tagline">{siteConfig.tagline}</p>
            <p className="footer-brand-desc">
              An educational Android application dedicated to structured coding lessons, chapter assessments, and daily consistency.
            </p>
            <div className="footer-store-pill">
              <span className="store-dot" />
              <span>Available exclusively on Indus App Store</span>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Subjects Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Curriculum</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#learning" onClick={(e) => handleLinkClick(e, '#learning')} className="footer-nav-link">
                  Java Programming
                </a>
              </li>
              <li>
                <a href="#learning" onClick={(e) => handleLinkClick(e, '#learning')} className="footer-nav-link">
                  C++ Fundamentals
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="footer-nav-link">
                  Daily Coding Challenges
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="footer-nav-link">
                  Practice Assessments
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="footer-nav-link">
                  Streak Habit Tracker
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & App Store Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Legal & Download</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  className="footer-nav-link text-btn"
                  onClick={() => {
                    if (onNavigate) onNavigate('privacy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <Shield size={14} />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  className="footer-nav-link text-btn"
                  onClick={() => {
                    if (onNavigate) onNavigate('terms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <FileText size={14} />
                  <span>Terms of Use</span>
                </button>
              </li>
              <li className="download-li">
                <a
                  href={siteConfig.urls.indusAppStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm footer-store-btn"
                >
                  <Download size={14} />
                  <span>Indus App Store</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.urls.contactEmail}`} className="footer-nav-link footer-email">
                  <Mail size={14} />
                  <span>{siteConfig.urls.contactEmail}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} {siteConfig.appName}. All rights reserved. Built for student programming education.
          </p>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: #070A12;
          border-top: 1px solid var(--border-subtle);
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 3rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 800;
          font-size: 1.4rem;
          color: #FFF;
          margin-bottom: 0.85rem;
        }

        .footer-logo-img {
          width: 34px;
          height: 34px;
          object-fit: contain;
        }

        .brand-highlight {
          background: linear-gradient(135deg, #FF7A00 0%, #FF2E93 50%, #8A2BE2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--cyan-light);
          margin-bottom: 0.75rem;
        }

        .footer-brand-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          max-width: 320px;
        }

        .footer-store-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
        }

        .store-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
        }

        .footer-col-title {
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FFF;
          margin-bottom: 1.25rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-nav-link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .footer-nav-link:hover {
          color: var(--cyan-light);
        }

        .text-btn {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
        }

        .download-li {
          margin-top: 0.35rem;
          margin-bottom: 0.35rem;
        }

        .footer-store-btn {
          width: fit-content;
        }

        .footer-email {
          color: var(--text-muted);
          font-size: 0.82rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }

        .back-to-top-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .back-to-top-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFF;
        }
      `}</style>
    </footer>
  );
}
