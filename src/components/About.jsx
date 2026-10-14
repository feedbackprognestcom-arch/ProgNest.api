import React from 'react';
import { Info, Target, Compass, Code, Smartphone, CheckCircle, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Info size={14} />
            <span>Application Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text-accent">ProgNest</span>
          </h2>
          <p className="section-subtitle">
            A programming learning application designed to help students learn programming through structured lessons, practice tests, daily challenges, and progress tracking.
          </p>
        </div>

        {/* Content Box */}
        <div className="about-grid">
          {/* Main Story & Mission Card */}
          <div className="about-main-card card">
            <div className="mission-tag">
              <Target size={16} />
              <span>OUR CORE MISSION</span>
            </div>
            
            <blockquote className="mission-statement">
              "Our mission is to make programming education more accessible, engaging, and consistent for learners."
            </blockquote>

            <p className="about-body-text">
              ProgNest is a programming education application built to make learning programming more structured and approachable. It focuses on organised learning, practical exercises, assessments, and progress tracking to help students develop their programming skills.
            </p>

            <p className="about-body-text">
              Rather than overwhelming learners with fragmented video tutorials or disorganized notes, ProgNest provides a clear topic-by-topic roadmap, bite-sized lessons, syntax breakdowns, and immediate practice checks on your Android smartphone.
            </p>

            <div className="about-principles-row">
              <div className="principle-item">
                <CheckCircle size={18} className="text-cyan" />
                <div>
                  <strong>Structured Learning</strong>
                  <p>Organised chapters that build logically upon previous concepts.</p>
                </div>
              </div>
              <div className="principle-item">
                <CheckCircle size={18} className="text-cyan" />
                <div>
                  <strong>Active Recall</strong>
                  <p>Comprehension tests and daily problem-solving to reinforce memory.</p>
                </div>
              </div>
              <div className="principle-item">
                <CheckCircle size={18} className="text-cyan" />
                <div>
                  <strong>Consistent Habits</strong>
                  <p>Daily streak tracking to encourage sustainable study patterns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Foundation Facts Card */}
          <div className="about-specs-card card">
            <h3 className="specs-title">Platform & Technical Details</h3>
            <p className="specs-sub">Verified specifications for the ProgNest educational application:</p>

            <div className="spec-facts-list">
              <div className="spec-fact">
                <div className="fact-label">Category</div>
                <div className="fact-val">{siteConfig.category}</div>
              </div>

              <div className="spec-fact">
                <div className="fact-label">Target Platform</div>
                <div className="fact-val">{siteConfig.platform}</div>
              </div>

              <div className="spec-fact">
                <div className="fact-label">Development Technology</div>
                <div className="fact-val">{siteConfig.developmentTech}</div>
              </div>

              <div className="spec-fact">
                <div className="fact-label">Distribution Channel</div>
                <div className="fact-val">Indus App Store</div>
              </div>

              <div className="spec-fact">
                <div className="fact-label">System Requirement</div>
                <div className="fact-val">{siteConfig.minAndroidVersion}</div>
              </div>

              <div className="spec-fact">
                <div className="fact-label">Languages Supported</div>
                <div className="fact-val">Java & C++ (Version Dependent)</div>
              </div>
            </div>

            <div className="student-trust-badge">
              <Shield size={18} className="text-cyan" />
              <span>Focused on student privacy and ad-free learning discipline</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-primary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 2rem;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-main-card {
          padding: 2.5rem;
        }

        @media (max-width: 640px) {
          .about-main-card {
            padding: 1.75rem;
          }
        }

        .mission-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #38BDF8;
          letter-spacing: 0.08em;
          margin-bottom: 1.25rem;
        }

        .mission-statement {
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.45;
          color: #FFF;
          border-left: 3px solid var(--royal-blue);
          padding-left: 1.25rem;
          margin-bottom: 1.75rem;
          font-style: italic;
        }

        .about-body-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .about-principles-row {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          margin-top: 2rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--border-subtle);
        }

        .principle-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .principle-item strong {
          display: block;
          color: #FFF;
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
        }

        .principle-item p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Specs card */
        .about-specs-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 640px) {
          .about-specs-card {
            padding: 1.75rem;
          }
        }

        .specs-title {
          font-size: 1.25rem;
          color: #FFF;
          margin-bottom: 0.4rem;
        }

        .specs-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .spec-facts-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .spec-fact {
          display: flex;
          flex-direction: column;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .fact-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .fact-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: #FFF;
        }

        .student-trust-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
          padding: 1rem;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.25);
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
}
