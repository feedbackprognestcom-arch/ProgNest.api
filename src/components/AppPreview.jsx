import React, { useState } from 'react';
import { Eye, Smartphone, ChevronRight, Layers, FileCode, CheckCircle, Flame, Award, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PhoneMockup from './PhoneMockup';

export default function AppPreview() {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);
  const activeScreen = siteConfig.appScreenshots[selectedScreenIndex];

  // Map preview tab to phone screen view
  const getMockupScreen = (id) => {
    if (id === 'lesson') return 'code';
    if (id === 'practice-test') return 'quiz';
    return 'home';
  };

  return (
    <section id="preview" className="section preview-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Eye size={14} />
            <span>App Interface</span>
          </div>
          <h2 className="section-title">
            Explore the <span className="gradient-text-accent">ProgNest Experience</span>
          </h2>
          <p className="section-subtitle">
            Take a look inside the ProgNest Android app interface. Every screen is designed for high readability, minimal friction, and focused daily study.
          </p>
        </div>

        {/* Gallery Interface */}
        <div className="preview-layout">
          {/* Left: Screen Selection List */}
          <div className="preview-nav-list">
            <span className="nav-list-header">CORE APPLICATION SCREENS</span>
            {siteConfig.appScreenshots.map((screen, idx) => {
              const isSelected = idx === selectedScreenIndex;
              return (
                <button
                  key={screen.id}
                  className={`screen-select-btn card ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedScreenIndex(idx)}
                >
                  <div className="btn-index-badge">{idx + 1}</div>
                  <div className="btn-content">
                    <div className="btn-title-row">
                      <span className="btn-title">{screen.title}</span>
                      <span className="btn-tag">{screen.screenTag}</span>
                    </div>
                    <p className="btn-caption-preview">{screen.caption}</p>
                  </div>
                  <ChevronRight size={18} className="btn-arrow" />
                </button>
              );
            })}
          </div>

          {/* Right: Phone Frame Preview & Active Details */}
          <div className="preview-display-card card">
            <div className="display-topbar">
              <div>
                <span className="display-badge">{activeScreen.screenTag} Screen</span>
                <h3 className="display-title">{activeScreen.title}</h3>
              </div>
              <span className="display-highlight">{activeScreen.highlight}</span>
            </div>

            <div className="display-frame-container">
              {activeScreen.imageSrc ? (
                <div className="real-screenshot-wrapper">
                  <img
                    src={activeScreen.imageSrc}
                    alt={activeScreen.title}
                    className="real-screenshot-img"
                  />
                </div>
              ) : (
                <div className="illustrative-preview-wrap">
                  <PhoneMockup activeScreen={getMockupScreen(activeScreen.id)} interactive={true} />
                </div>
              )}
            </div>

            <div className="display-caption-box">
              <p className="display-caption-text">
                <strong>Description:</strong> {activeScreen.caption}
              </p>
              <div className="display-replace-hint">
                <ImageIcon size={14} className="text-cyan" />
                <span>
                  Tip: Real screenshots can be dropped into <code>public/screenshots/</code> and linked in <code>src/config/siteConfig.js</code>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .preview-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .preview-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
          align-items: start;
        }

        @media (max-width: 992px) {
          .preview-layout {
            grid-template-columns: 1fr;
          }
        }

        .preview-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .nav-list-header {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .screen-select-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.15rem 1.25rem;
          text-align: left;
          background: rgba(22, 32, 54, 0.6);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .screen-select-btn:hover {
          background: rgba(27, 38, 64, 0.9);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateX(4px);
        }

        .screen-select-btn.active {
          background: rgba(37, 99, 235, 0.15);
          border-color: #3B82F6;
          box-shadow: 0 4px 18px rgba(37, 99, 235, 0.2);
        }

        .btn-index-badge {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--cyan-light);
          flex-shrink: 0;
        }

        .screen-select-btn.active .btn-index-badge {
          background: #2563EB;
          color: #FFF;
        }

        .btn-content {
          flex: 1;
        }

        .btn-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .btn-title {
          font-weight: 700;
          font-size: 1rem;
          color: #FFF;
        }

        .btn-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--cyan-light);
          background: rgba(6, 182, 212, 0.12);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-full);
        }

        .btn-caption-preview {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .btn-arrow {
          color: var(--text-muted);
          transition: transform var(--transition-fast);
        }

        .screen-select-btn.active .btn-arrow {
          color: var(--cyan-light);
          transform: translateX(3px);
        }

        /* Right Preview Display */
        .preview-display-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .display-topbar {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.75rem;
        }

        @media (max-width: 600px) {
          .display-topbar {
            flex-direction: column;
            gap: 0.75rem;
          }
        }

        .display-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #38BDF8;
          letter-spacing: 0.05em;
        }

        .display-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #FFF;
          margin-top: 0.2rem;
        }

        .display-highlight {
          font-size: 0.8rem;
          font-weight: 600;
          color: #A855F7;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.25);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .display-frame-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 1.75rem;
        }

        .illustrative-preview-wrap {
          width: 100%;
          max-width: 320px;
        }

        .real-screenshot-wrapper {
          max-width: 320px;
          border-radius: 28px;
          overflow: hidden;
          border: 8px solid #1E293B;
          box-shadow: var(--shadow-lg);
        }

        .real-screenshot-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .display-caption-box {
          width: 100%;
          padding: 1.25rem;
          background: rgba(14, 20, 36, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .display-caption-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .display-caption-text strong {
          color: #FFF;
        }

        .display-replace-hint {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          padding-top: 0.6rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.08);
        }

        .display-replace-hint code {
          background: rgba(255, 255, 255, 0.08);
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          color: var(--cyan-light);
          font-family: var(--font-mono);
        }
      `}</style>
    </section>
  );
}
