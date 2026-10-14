import React from 'react';
import { Download, Smartphone, CheckCircle, ShieldCheck, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function DownloadCTA() {
  return (
    <section id="download" className="section download-section">
      <div className="container">
        <div className="download-cta-card card">
          {/* Subtle Ambient Glow */}
          <div className="cta-ambient-glow" />

          <div className="cta-content">
            <div className="cta-badge">
              <Smartphone size={14} />
              <span>Available for Android</span>
            </div>

            <h2 className="cta-title">
              Start Learning with <span className="gradient-text-accent">ProgNest</span>
            </h2>

            <p className="cta-description">
              Take the next step in your programming journey. Download ProgNest and start exploring programming lessons, practice tests, and learning challenges.
            </p>

            {/* Download Buttons Row */}
            <div className="cta-buttons-wrap">
              <a
                href={siteConfig.urls.indusAppStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg indus-store-btn"
                id="cta-indus-download-button"
              >
                <div className="indus-btn-icon">
                  <Download size={22} />
                </div>
                <div className="indus-btn-text">
                  <span className="indus-sub">DOWNLOAD ON</span>
                  <span className="indus-name">Indus App Store</span>
                </div>
                <ExternalLink size={16} className="btn-ext-icon" />
              </a>
            </div>

            {/* Trust and Requirements Badges */}
            <div className="cta-specs-row">
              <div className="cta-spec-item">
                <CheckCircle size={15} className="text-cyan" />
                <span>Compatible with {siteConfig.minAndroidVersion}</span>
              </div>
              <div className="cta-spec-item">
                <CheckCircle size={15} className="text-cyan" />
                <span>Verified Indus App Store Distribution</span>
              </div>
              <div className="cta-spec-item">
                <CheckCircle size={15} className="text-cyan" />
                <span>100% Free Educational Content</span>
              </div>
            </div>

            <p className="cta-url-note">
              Configured App URL: <code>{siteConfig.urls.indusAppStore}</code>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .download-section {
          background: var(--bg-primary);
          padding-top: 3rem;
        }

        .download-cta-card {
          position: relative;
          padding: 4rem 3rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(22, 32, 54, 0.95) 0%, rgba(37, 99, 235, 0.15) 50%, rgba(124, 58, 237, 0.1) 100%);
          border: 1px solid var(--border-highlight);
          border-radius: var(--radius-xl);
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .download-cta-card {
            padding: 2.5rem 1.5rem;
          }
        }

        .cta-ambient-glow {
          position: absolute;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 300px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 auto;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--cyan-light);
          margin-bottom: 1.25rem;
        }

        .cta-title {
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 800;
          color: #FFF;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }

        .cta-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.25rem;
        }

        .cta-buttons-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .indus-store-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 0.95rem 2.25rem;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #4F46E5 100%);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
          transition: all var(--transition-normal);
        }

        .indus-store-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.55);
        }

        .indus-btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .indus-btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .indus-sub {
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          opacity: 0.85;
          line-height: 1;
        }

        .indus-name {
          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.2;
          color: #FFF;
        }

        .btn-ext-icon {
          opacity: 0.7;
          margin-left: 0.25rem;
        }

        .cta-specs-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .cta-spec-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .cta-url-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 1.5rem;
        }

        .cta-url-note code {
          background: rgba(255, 255, 255, 0.06);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          color: var(--cyan-light);
          word-break: break-all;
        }
      `}</style>
    </section>
  );
}
