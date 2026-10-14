import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Faq() {
  const [openFaqId, setOpenFaqId] = useState(siteConfig.faqs[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = siteConfig.faqs.filter(faq => {
    const q = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Common Questions</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text-accent">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find quick answers about the ProgNest Android app, available curriculums, assessments, and feedback channels.
          </p>

          {/* Quick Filter Input */}
          <div className="faq-search-wrapper">
            <Search size={16} className="faq-search-icon" />
            <input
              type="text"
              placeholder="Filter questions by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
              aria-label="Filter frequently asked questions"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear filter"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-container" role="region" aria-label="FAQ Accordion">
          {filteredFaqs.length === 0 ? (
            <div className="faq-empty-state card">
              <p>No questions matched your search query "{searchQuery}".</p>
              <button className="btn btn-secondary btn-sm" onClick={() => setSearchQuery('')}>
                Show all questions
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div 
                  key={faq.id} 
                  className={`faq-item card ${isOpen ? 'open' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-btn-${faq.id}`}
                  >
                    <span className="faq-q-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                    <span className="faq-q-text">{faq.question}</span>
                    <span className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="faq-answer-panel"
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                    >
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="faq-support-box">
          <MessageSquare size={20} className="text-cyan" />
          <div>
            <h4 className="support-title">Still have questions or need support?</h4>
            <p className="support-sub">
              Feel free to reach out directly via our contact section or email us at{' '}
              <a href={`mailto:${siteConfig.urls.contactEmail}`} className="email-link">
                {siteConfig.urls.contactEmail}
              </a>.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background: var(--bg-primary);
        }

        .faq-search-wrapper {
          position: relative;
          max-width: 440px;
          margin: 1.5rem auto 0 auto;
        }

        .faq-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .faq-search-input {
          width: 100%;
          padding: 0.75rem 3.5rem 0.75rem 2.6rem;
          background: rgba(22, 32, 54, 0.7);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          color: #FFF;
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .faq-search-input:focus {
          border-color: var(--cyan);
          background: rgba(27, 38, 64, 0.95);
        }

        .clear-search-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.75rem;
          color: var(--cyan-light);
          padding: 0.2rem 0.5rem;
        }

        .faq-accordion-container {
          max-width: 840px;
          margin: 0 auto 3rem auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .faq-item {
          padding: 0;
          overflow: hidden;
          transition: all var(--transition-fast);
        }

        .faq-item.open {
          border-color: rgba(59, 130, 246, 0.35);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          text-align: left;
          background: transparent;
          color: #FFF;
          font-size: 1.05rem;
          font-weight: 600;
          transition: background var(--transition-fast);
        }

        .faq-question-btn:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .faq-q-number {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--cyan-light);
          opacity: 0.8;
          min-width: 22px;
        }

        .faq-q-text {
          flex: 1;
        }

        .faq-chevron {
          color: var(--text-secondary);
          transition: transform var(--transition-normal);
          display: flex;
          align-items: center;
        }

        .faq-chevron.rotated {
          transform: rotate(180deg);
          color: var(--cyan-light);
        }

        .faq-answer-panel {
          padding: 0 1.5rem 1.4rem 3.4rem;
          animation: slideDown 0.2s ease-out;
        }

        @media (max-width: 600px) {
          .faq-answer-panel {
            padding-left: 1.5rem;
          }
        }

        .faq-answer-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        .faq-empty-state {
          padding: 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .faq-support-box {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem 2rem;
          background: rgba(14, 20, 36, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          max-width: 840px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .faq-support-box {
            flex-direction: column;
            text-align: center;
          }
        }

        .support-title {
          font-size: 1.05rem;
          color: #FFF;
          margin-bottom: 0.25rem;
        }

        .support-sub {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .email-link {
          color: var(--cyan-light);
          text-decoration: underline;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
