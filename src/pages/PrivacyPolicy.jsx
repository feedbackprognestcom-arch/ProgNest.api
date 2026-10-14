import React from 'react';
import { Shield, ArrowLeft, Calendar, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function PrivacyPolicy({ onNavigate }) {
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
            <Shield size={16} className="text-cyan" />
            <span>Transparency & Privacy</span>
          </div>
          <h1 className="legal-title">Privacy Policy for ProgNest</h1>
          <div className="legal-meta-row">
            <span className="meta-item">
              <Calendar size={14} /> Last Updated: {lastUpdated}
            </span>
            <span className="meta-item">
              Platform: Android (Indus App Store)
            </span>
          </div>
          <p className="legal-intro">
            ProgNest ("we", "our", or "us") values your privacy. This Privacy Policy describes how your information is handled when you download, install, and use the ProgNest mobile application for Android and visit this website.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="legal-content card">
          <section className="policy-section">
            <h2>1. Purpose of the Application</h2>
            <p>
              ProgNest is an educational mobile application built using Android Studio and Kotlin to assist students and self-learners in understanding programming fundamentals, including Java and C++. The application provides structured lessons, topic quizzes, daily challenges, and personal progress tracking.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information Collection and Storage</h2>
            <p>
              We believe in minimizing data collection. In the current release of ProgNest:
            </p>
            <ul>
              <li>
                <strong>Local Learning Progress:</strong> Completed chapters, quiz scores, active day streaks, and earned experience points (XP) are primarily stored locally on your Android device using local database/storage mechanisms (such as Room or SharedPreferences).
              </li>
              <li>
                <strong>Device Diagnostics:</strong> If the application encounters an unexpected error or crash, standard non-identifiable technical logs (such as Android OS version and device model) may be generated to help us debug and resolve issues.
              </li>
              <li>
                <strong>Direct Communications:</strong> If you contact us via email at <code>{siteConfig.urls.contactEmail}</code> or through the website contact form, we receive your email address, name, and message content to respond to your inquiry.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Information We Do NOT Collect</h2>
            <div className="negative-privacy-box">
              <div className="privacy-point">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>We do NOT sell, rent, or trade your personal data to third parties.</span>
              </div>
              <div className="privacy-point">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>We do NOT track your browsing activity across other applications or websites.</span>
              </div>
              <div className="privacy-point">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>We do NOT require financial or credit card information to access the free educational content.</span>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>4. Android Permissions</h2>
            <p>
              ProgNest requests only minimal Android permissions strictly required for core functionality:
            </p>
            <ul>
              <li>
                <strong>Internet Access (optional / updates):</strong> Used to check for curriculum updates or load external resources if required by specific releases.
              </li>
              <li>
                <strong>Notifications (optional):</strong> If enabled by you, daily study reminders or streak preservation notifications may be delivered locally to your device.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Distribution via Indus App Store</h2>
            <p>
              ProgNest is distributed officially through the Indus App Store. The installation, payment-free distribution, and application updates are managed in adherence with Indus App Store developer policies and guidelines.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Children and Student Privacy</h2>
            <p>
              ProgNest is designed to be safe and appropriate for students of all ages learning computer programming. We do not knowingly collect personal identifiable information from children under the age of 13. If you believe your child has provided us with personal information without parental consent, please contact us so we can take appropriate steps.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Security of Your Data</h2>
            <p>
              Because your learning progress is primarily kept on your personal device, your data security largely depends on your device's security settings. We implement industry-standard software engineering practices in Kotlin to protect in-app integrity.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect modifications to the ProgNest Android app or changes in relevant regulations. Any updates will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have questions, feedback, or data privacy inquiries regarding ProgNest, please reach out to our team at:
            </p>
            <div className="policy-contact-box">
              <Mail size={18} className="text-cyan" />
              <span>Email: <a href={`mailto:${siteConfig.urls.contactEmail}`}>{siteConfig.urls.contactEmail}</a></span>
            </div>
          </section>

          {/* Editable Template Note */}
          <div className="policy-disclaimer-note">
            <FileText size={16} />
            <span>
              <strong>Note:</strong> This Privacy Policy is provided as a transparent, student-centric privacy statement reflecting ProgNest's current technical architecture. You may edit these clauses in <code>src/pages/PrivacyPolicy.jsx</code> as your application evolves.
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
          background: linear-gradient(135deg, rgba(22, 32, 54, 0.9) 0%, rgba(37, 99, 235, 0.1) 100%);
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

        .policy-section strong {
          color: #FFF;
        }

        .policy-section code {
          background: rgba(255, 255, 255, 0.08);
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          color: var(--cyan-light);
          font-family: var(--font-mono);
          font-size: 0.88rem;
        }

        .negative-privacy-box {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 1.25rem;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.25);
          border-radius: var(--radius-md);
        }

        .privacy-point {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-primary);
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
