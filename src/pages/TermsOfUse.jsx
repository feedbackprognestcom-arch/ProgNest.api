import React from 'react';
import { FileText, ArrowLeft, Calendar, Mail, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function TermsOfUse({ onNavigate }) {
  const lastUpdated = "October 14, 2026";

  return (
    <div className="legal-page">
      <div className="container legal-container">
        {/* Navigation Breadcrumb */}
        <div className="legal-breadcrumb">
          <button 
            className="btn-back"
            onClick={() => onNavigate && onNavigate('home')}
          >
            <ArrowLeft size={16} />
            <span>Back to ProgNest Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="legal-header card">
          <div className="legal-badge">
            <FileText size={16} className="text-cyan" />
            <span>Educational Software Agreement</span>
          </div>
          <h1 className="legal-title">Terms of Use for ProgNest</h1>
          <div className="legal-meta-row">
            <span className="meta-item">
              <Calendar size={14} /> Last Updated: {lastUpdated}
            </span>
            <span className="meta-item">
              Platform: Android Application
            </span>
          </div>
          <p className="legal-intro">
            Welcome to ProgNest. These Terms of Use govern your access to and use of the ProgNest Android mobile application and its official informational website. By downloading, installing, or using ProgNest, you agree to these Terms.
          </p>
        </div>

        {/* Terms Content */}
        <div className="legal-content card">
          <section className="policy-section">
            <h2>1. Nature and Scope of Service</h2>
            <p>
              ProgNest is an educational self-study tool designed to assist learners in understanding computer programming principles through structured lessons, practice assessments, daily challenges, and streak tracking. The app currently provides learning modules for Java and C++, subject to release versions.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Permitted Use and License</h2>
            <p>
              We grant you a personal, non-exclusive, non-transferable, revocable license to download, install, and use ProgNest for your personal, non-commercial educational purposes on compatible Android devices.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>Decompile, reverse-engineer, or attempt to extract source code from the ProgNest APK, except where permitted by applicable law.</li>
              <li>Scrape, redistribute, or commercially exploit lesson texts, assessments, or proprietary curriculum content.</li>
              <li>Circumvent or tamper with local progress, points, or streak records within the application.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Intellectual Property</h2>
            <p>
              All curriculum texts, practice questions, interface designs, graphics, the ProgNest brand name, and the ProgNest logo are the proprietary property of the ProgNest development team. Code samples included within lessons are provided for instructional study and educational experimentation.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Disclaimer of Warranties</h2>
            <p>
              ProgNest is provided on an "as-is" and "as-available" basis for educational and reference purposes only. While we endeavor to keep programming examples and explanations accurate and up to date:
            </p>
            <ul>
              <li>We make no warranties that the application will be completely error-free or uninterrupted.</li>
              <li>Completion of lessons or practice quizzes within ProgNest does not constitute an accredited university degree, professional certification, or guarantee of employment outcomes.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Indus App Store Compliance</h2>
            <p>
              Your download and installation of ProgNest through the Indus App Store are also governed by the terms, service conditions, and device guidelines established by the Indus App Store platform.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Modifications to Application and Terms</h2>
            <p>
              We reserve the right to modify curriculum content, adjust daily challenges, update application features, or revise these Terms at any time. Continued use of the application following the posting of revised Terms indicates your acceptance of such changes.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Use, please contact us at:
            </p>
            <div className="policy-contact-box">
              <Mail size={18} className="text-cyan" />
              <span>Email: <a href={`mailto:${siteConfig.urls.contactEmail}`}>{siteConfig.urls.contactEmail}</a></span>
            </div>
          </section>

          {/* Editable Note */}
          <div className="policy-disclaimer-note">
            <AlertTriangle size={16} />
            <span>
              <strong>Notice:</strong> This document serves as the operational Terms of Use for the ProgNest educational application. These terms are editable in <code>src/pages/TermsOfUse.jsx</code>.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .legal-page {
          padding-top: calc(var(--header-height) + 2rem);
          padding-bottom: 5rem;
          min-height: 80vh;
        }

        .legal-container {
          max-width: 860px;
        }

        .legal-breadcrumb {
          margin-bottom: 1.5rem;
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--cyan-light);
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.25);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-back:hover {
          background: rgba(6, 182, 212, 0.15);
          transform: translateX(-3px);
        }

        .legal-header {
          padding: 2.5rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, rgba(22, 32, 54, 0.9) 0%, rgba(124, 58, 237, 0.1) 100%);
        }

        .legal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--cyan-light);
          margin-bottom: 0.85rem;
        }

        .legal-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #FFF;
          margin-bottom: 1rem;
        }

        .legal-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .legal-intro {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .legal-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .policy-section h2 {
          font-size: 1.25rem;
          color: #FFF;
          margin-bottom: 0.75rem;
        }

        .policy-section p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 0.75rem;
        }

        .policy-section ul {
          list-style: disc;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .policy-contact-box {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.85rem 1.25rem;
          background: rgba(14, 20, 36, 0.9);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          color: #FFF;
          margin-top: 0.5rem;
        }

        .policy-contact-box a {
          color: var(--cyan-light);
          text-decoration: underline;
        }

        .policy-disclaimer-note {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
