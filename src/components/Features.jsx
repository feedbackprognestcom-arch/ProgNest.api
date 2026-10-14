import React from 'react';
import { 
  Layers, 
  Coffee, 
  Code2, 
  CheckCircle2, 
  CalendarCheck, 
  TrendingUp, 
  Flame, 
  Award,
  Smartphone,
  ShieldAlert
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  Layers: Layers,
  Coffee: Coffee,
  Code2: Code2,
  CheckCircle2: CheckCircle2,
  CalendarCheck: CalendarCheck,
  TrendingUp: TrendingUp,
  Flame: Flame,
  Award: Award
};

export default function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Smartphone size={14} />
            <span>Built Into ProgNest</span>
          </div>
          <h2 className="section-title">
            Purpose-Built for <span className="gradient-text-accent">Student Success</span>
          </h2>
          <p className="section-subtitle">
            ProgNest focuses on core fundamentals, daily consistency, and hands-on assessment to help you master programming step-by-step.
          </p>
        </div>

        {/* Features 8-Card Grid */}
        <div className="features-grid">
          {siteConfig.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Code2;

            return (
              <div key={feature.id} className="feature-card card">
                <div className="feature-top">
                  <div className={`feature-icon-box icon-variant-${idx % 3}`}>
                    <IconComponent size={24} />
                  </div>
                  <span className="badge badge-blue">{feature.badge}</span>
                </div>

                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-card-glow" />
              </div>
            );
          })}
        </div>

        {/* Authentic In-App Feature Disclaimer */}
        <div className="features-notice-box">
          <div className="notice-icon">
            <ShieldAlert size={18} />
          </div>
          <div className="notice-text">
            <strong>Authentic Application Features:</strong> All features described above are natively built into the ProgNest Android application. ProgNest does not host an online compiler or an external AI tutor; its focus is structured curriculum, topic assessments, and habits.
          </div>
        </div>
      </div>

      <style>{`
        .features-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 1100px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          padding: 1.75rem;
          height: 100%;
        }

        .feature-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .feature-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast);
        }

        .icon-variant-0 {
          background: rgba(37, 99, 235, 0.15);
          color: #60A5FA;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .icon-variant-1 {
          background: rgba(124, 58, 237, 0.15);
          color: #C084FC;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .icon-variant-2 {
          background: rgba(6, 182, 212, 0.15);
          color: #22D3EE;
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .feature-card:hover .feature-icon-box {
          transform: scale(1.08);
        }

        .feature-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 0.6rem;
        }

        .feature-description {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .feature-card-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .feature-card:hover .feature-card-glow {
          opacity: 1;
        }

        .features-notice-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.75rem;
          background: rgba(19, 27, 46, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .features-notice-box {
            flex-direction: column;
            text-align: center;
          }
        }

        .notice-icon {
          color: var(--cyan);
          flex-shrink: 0;
        }

        .notice-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .notice-text strong {
          color: var(--text-white);
        }
      `}</style>
    </section>
  );
}
