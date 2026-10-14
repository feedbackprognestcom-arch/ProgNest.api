import React from 'react';
import { Download, Compass, ShieldCheck, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Copy & Actions */}
        <div className="hero-content">
          {/* Top Tag */}
          <div className="hero-badge">
            <span className="badge-dot" />
            <span className="badge-text">Official Android Application</span>
            <span className="badge-store">Indus App Store</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Learn to Code.{' '}
            <span className="gradient-text-accent">Build Your Future.</span>
          </h1>

          {/* Supporting Description */}
          <p className="hero-description">
            ProgNest helps you learn programming through structured lessons, coding practice,
            tests, daily challenges, and progress tracking. Build your skills one step at a time.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href={siteConfig.urls.indusAppStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg hero-cta-btn"
              id="hero-download-button"
            >
              <Download size={18} />
              <span>Download ProgNest</span>
            </a>

            <a
              href="#features"
              onClick={handleExploreClick}
              className="btn btn-secondary btn-lg"
              id="hero-explore-button"
            >
              <Compass size={18} />
              <span>Explore Features</span>
            </a>
          </div>

          {/* Real Platform Specifications Checklist */}
          <div className="hero-specs-grid">
            <div className="spec-item">
              <CheckCircle2 size={16} className="spec-check" />
              <span>Structured Java & C++ Curriculum</span>
            </div>
            <div className="spec-item">
              <CheckCircle2 size={16} className="spec-check" />
              <span>Practice Tests & Daily Challenges</span>
            </div>
            <div className="spec-item">
              <CheckCircle2 size={16} className="spec-check" />
              <span>Daily Streak & Progress Tracking</span>
            </div>
            <div className="spec-item">
              <CheckCircle2 size={16} className="spec-check" />
              <span>Built with Kotlin & Android Studio</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Interactive App UI Mockup */}
        <div className="hero-preview-col">
          <div className="mockup-interactive-header">
            <span className="live-preview-pill">
              <span className="live-dot" />
              Interactive App Interface Preview
            </span>
          </div>
          <PhoneMockup activeScreen="home" interactive={true} />
          <p className="preview-caption">
            Click the tabs (Dashboard, Lesson, Quiz) above to explore the in-app experience.
          </p>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: calc(var(--header-height) + 3.5rem);
          padding-bottom: 5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 992px) {
          .hero-content {
            align-items: center;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.9rem;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px #10B981;
        }

        .badge-store {
          background: rgba(6, 182, 212, 0.15);
          color: var(--cyan-light);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-title {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }

        .hero-description {
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.25rem;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 992px) {
          .hero-actions {
            justify-content: center;
          }
        }

        .hero-cta-btn {
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);
        }

        .hero-specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem 1.5rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--border-subtle);
          max-width: 600px;
        }

        @media (max-width: 640px) {
          .hero-specs-grid {
            grid-template-columns: 1fr;
            text-align: left;
          }
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .spec-check {
          color: var(--cyan-light);
          flex-shrink: 0;
        }

        .hero-preview-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .mockup-interactive-header {
          margin-bottom: 1rem;
        }

        .live-preview-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(19, 27, 46, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #38BDF8;
          border-radius: 50%;
          animation: pulseDot 2s infinite;
        }

        .preview-caption {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 1rem;
          text-align: center;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
