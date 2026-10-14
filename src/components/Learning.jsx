import React, { useState } from 'react';
import { Coffee, Cpu, CheckCircle2, Terminal, Info, BookOpen } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Learning() {
  const [activeSubjectId, setActiveSubjectId] = useState('java');
  const activeSubject = siteConfig.learningSubjects.find(s => s.id === activeSubjectId) || siteConfig.learningSubjects[0];

  return (
    <section id="learning" className="section learning-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} />
            <span>Supported Subjects</span>
          </div>
          <h2 className="section-title">
            Start Your <span className="gradient-text-accent">Programming Journey</span>
          </h2>
          <p className="section-subtitle">
            ProgNest currently provides structured learning paths for Java and C++, giving you a solid footing in computing fundamentals and object-oriented design.
          </p>
        </div>

        {/* Language Tabs Selector */}
        <div className="language-tabs">
          {siteConfig.learningSubjects.map((sub) => {
            const isSelected = sub.id === activeSubjectId;
            return (
              <button
                key={sub.id}
                className={`lang-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveSubjectId(sub.id)}
              >
                {sub.id === 'java' ? <Coffee size={20} /> : <Cpu size={20} />}
                <div className="tab-label-group">
                  <span className="tab-title">{sub.name}</span>
                  <span className="tab-tag">{sub.tag}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Language Display Card */}
        <div className="subject-showcase card">
          <div className="showcase-content">
            <div className="showcase-header">
              <div className="subject-badge-pill" style={{ background: activeSubject.accentBg, color: activeSubject.accentColor, borderColor: activeSubject.accentColor }}>
                {activeSubject.name} Learning Path
              </div>
              <h3 className="showcase-title">{activeSubject.subtitle}</h3>
              <p className="showcase-description">{activeSubject.description}</p>
            </div>

            {/* Key Learning Benefits */}
            <div className="benefits-container">
              <h4 className="benefits-title">Key Learning Focus</h4>
              <ul className="benefits-list">
                {activeSubject.benefits.map((benefit, i) => (
                  <li key={i} className="benefit-item">
                    <CheckCircle2 size={18} className="benefit-icon" style={{ color: activeSubject.accentColor }} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-app topics list */}
            <div className="topics-preview-wrap">
              <span className="topics-label">SAMPLE CHAPTER TOPICS:</span>
              <div className="topics-chips">
                {activeSubject.topicsPreview.map((topic, idx) => (
                  <span key={idx} className="topic-chip">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Code Preview Window */}
          <div className="showcase-code-panel">
            <div className="code-window-top">
              <div className="mac-dots">
                <span className="dot red-dot" />
                <span className="dot yellow-dot" />
                <span className="dot green-dot" />
              </div>
              <div className="code-filename">
                <Terminal size={13} className="text-cyan" />
                <span>{activeSubject.id === 'java' ? 'ProgNestJava.java' : 'ProgNestCpp.cpp'}</span>
              </div>
              <span className="code-lang-label">{activeSubject.name}</span>
            </div>

            <pre className="code-content-display">
              <code>{activeSubject.sampleCode}</code>
            </pre>

            <div className="code-card-footer">
              <span>Read code examples with clear explanatory notes in the app</span>
            </div>
          </div>
        </div>

        {/* Version Note */}
        <div className="version-disclaimer">
          <Info size={16} className="info-icon" />
          <span>
            <strong>Note on Curriculum:</strong> Specific learning content, lesson chapters, and exercises depend on the current version of the ProgNest Android application. Updates and additional topics are rolled out through the Indus App Store.
          </span>
        </div>
      </div>

      <style>{`
        .learning-section {
          background: var(--bg-primary);
        }

        .language-tabs {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 640px) {
          .language-tabs {
            flex-direction: column;
          }
        }

        .lang-tab-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: rgba(22, 32, 54, 0.7);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          transition: all var(--transition-normal);
          min-width: 240px;
        }

        .lang-tab-btn:hover {
          border-color: rgba(59, 130, 246, 0.4);
          background: rgba(27, 38, 64, 0.9);
          color: #FFF;
        }

        .lang-tab-btn.active {
          background: rgba(37, 99, 235, 0.15);
          border-color: #3B82F6;
          color: #FFF;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.2);
        }

        .tab-label-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .tab-title {
          font-weight: 700;
          font-size: 1.15rem;
          color: #FFF;
        }

        .tab-tag {
          font-size: 0.75rem;
          color: var(--cyan-light);
        }

        .subject-showcase {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
          align-items: center;
          padding: 2.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 992px) {
          .subject-showcase {
            grid-template-columns: 1fr;
            padding: 1.75rem;
          }
        }

        .subject-badge-pill {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid;
          margin-bottom: 0.85rem;
        }

        .showcase-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #FFF;
          margin-bottom: 0.85rem;
        }

        .showcase-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .benefits-title {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .benefit-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .topics-preview-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .topics-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .topics-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .topic-chip {
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-full);
          color: var(--text-primary);
        }

        /* Code window */
        .showcase-code-panel {
          background: #060912;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .code-window-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #0E1322;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .mac-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .red-dot { background: #EF4444; }
        .yellow-dot { background: #F59E0B; }
        .green-dot { background: #10B981; }

        .code-filename {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #94A3B8;
        }

        .code-lang-label {
          font-size: 0.72rem;
          color: #64748B;
          text-transform: uppercase;
          font-weight: 700;
        }

        .code-content-display {
          padding: 1.25rem;
          font-family: var(--font-mono);
          font-size: 0.84rem;
          color: #E2E8F0;
          line-height: 1.6;
          overflow-x: auto;
          margin: 0;
        }

        .code-card-footer {
          padding: 0.6rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: center;
        }

        .version-disclaimer {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 1rem 1.5rem;
          background: rgba(14, 20, 36, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .info-icon {
          color: var(--cyan);
          flex-shrink: 0;
        }

        .version-disclaimer strong {
          color: var(--text-white);
        }
      `}</style>
    </section>
  );
}
