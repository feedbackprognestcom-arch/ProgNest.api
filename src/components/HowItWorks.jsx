import React from 'react';
import { 
  DownloadCloud, 
  Smartphone, 
  BookOpen, 
  FileCode2, 
  CheckSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const stepIcons = {
  DownloadCloud: DownloadCloud,
  Smartphone: Smartphone,
  BookOpen: BookOpen,
  FileCode2: FileCode2,
  CheckSquare: CheckSquare,
  Sparkles: Sparkles
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Getting Started</span>
          </div>
          <h2 className="section-title">
            How ProgNest <span className="gradient-text-accent">Works</span>
          </h2>
          <p className="section-subtitle">
            A clear, straightforward pathway from downloading the app on the Indus App Store to establishing your daily programming routine.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {siteConfig.howItWorksSteps.map((item, index) => {
            const Icon = stepIcons[item.icon] || Smartphone;

            return (
              <div key={item.step} className="step-card card">
                <div className="step-top">
                  <span className="step-number">{item.step}</span>
                  <div className="step-icon-box">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.description}</p>

                {index < siteConfig.howItWorksSteps.length - 1 && (
                  <div className="step-connector-arrow">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="how-cta-banner">
          <div>
            <h4 className="banner-title">Ready to take the first step?</h4>
            <p className="banner-sub">Install ProgNest on your Android device and start with chapter one.</p>
          </div>
          <a
            href={siteConfig.urls.indusAppStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get ProgNest on Indus App Store
          </a>
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 992px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .step-card {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .step-number {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(59, 130, 246, 0.4);
          letter-spacing: -0.05em;
        }

        .step-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: var(--cyan-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFF;
          margin-bottom: 0.6rem;
        }

        .step-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .step-connector-arrow {
          display: none;
        }

        .how-cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2.5rem;
          background: linear-gradient(135deg, rgba(22, 32, 54, 0.9) 0%, rgba(37, 99, 235, 0.12) 100%);
          border: 1px solid var(--border-highlight);
          border-radius: var(--radius-lg);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .how-cta-banner {
            flex-direction: column;
            text-align: center;
          }
        }

        .banner-title {
          font-size: 1.25rem;
          color: #FFF;
          margin-bottom: 0.3rem;
        }

        .banner-sub {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
