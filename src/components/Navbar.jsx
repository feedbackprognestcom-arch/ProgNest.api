import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar({ currentRoute = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy logic for single-page links
      if (currentRoute === 'home') {
        const sections = ['contact', 'faq', 'preview', 'about', 'how-it-works', 'learning', 'features', 'home'];
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);

      if (currentRoute !== 'home') {
        // If on /privacy or /terms, first navigate to home then scroll
        if (onNavigate) {
          onNavigate('home');
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <a href="#home" className="navbar-brand" onClick={handleLogoClick}>
          <img 
            src={siteConfig.logo} 
            alt="ProgNest Logo" 
            className="brand-logo-img" 
          />
          <span className="brand-name">
            Prog<span className="brand-highlight">Nest</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = currentRoute === 'home' && activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="navbar-actions">
          <a
            href={siteConfig.urls.indusAppStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm nav-download-btn"
            id="nav-download-button"
          >
            <Download size={15} />
            <span>Download App</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="mobile-drawer" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-drawer-header">
              <div className="navbar-brand">
                <img src={siteConfig.logo} alt="ProgNest" className="brand-logo-img-sm" />
                <span className="brand-name">Prog<span className="brand-highlight">Nest</span></span>
              </div>
              <button 
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="chevron-icon" />
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href={siteConfig.urls.indusAppStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-cta-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={16} />
                <span>Download on Indus App Store</span>
              </a>
              <p className="mobile-drawer-note">
                Android 8.0+ • Free Download
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          z-index: 1000;
          background: rgba(11, 15, 25, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: all var(--transition-normal);
        }

        .navbar-header.scrolled {
          background: rgba(11, 15, 25, 0.94);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .navbar-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.03em;
          color: var(--text-white);
        }

        .brand-logo-img {
          width: 36px;
          height: 36px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(37, 99, 235, 0.3));
        }

        .brand-logo-img-sm {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }

        .brand-name {
          color: #FFF;
        }

        .brand-highlight {
          background: linear-gradient(135deg, #FF7A00 0%, #FF2E93 50%, #8A2BE2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.4rem;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 0.4rem 0.2rem;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: #FFF;
        }

        .nav-link.active {
          color: var(--cyan-light);
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563EB, #06B6D4);
          border-radius: 2px;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-download-btn {
          font-size: 0.85rem;
          padding: 0.5rem 1.1rem;
        }

        @media (max-width: 540px) {
          .nav-download-btn {
            display: none;
          }
        }

        .mobile-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border: 1px solid var(--border-subtle);
        }

        @media (max-width: 992px) {
          .mobile-menu-btn {
            display: flex;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 8, 15, 0.75);
          backdrop-filter: blur(8px);
          z-index: 1100;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease-out;
        }

        .mobile-drawer {
          width: 100%;
          max-width: 320px;
          height: 100%;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-medium);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          animation: slideLeft 0.25s ease-out;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.25rem;
        }

        .drawer-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex: 1;
          overflow-y: auto;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.95rem;
          transition: background var(--transition-fast);
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--cyan-light);
        }

        .chevron-icon {
          color: var(--text-muted);
        }

        .mobile-drawer-footer {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-cta-btn {
          width: 100%;
        }

        .mobile-drawer-note {
          font-size: 0.75rem;
          text-align: center;
          color: var(--text-muted);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </header>
  );
}
