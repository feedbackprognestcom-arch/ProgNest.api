import React, { useState } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, MessageSquare, Bug, Lightbulb, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.urls.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatusMessage({ type: 'error', text: 'Please resolve the highlighted errors in the form.' });
      return;
    }

    // Construct legitimate mailto link with pre-filled subject and body
    const subjectPrefix = siteConfig.contactTopics.find(t => t.value === formData.topic)?.label || 'General Inquiry';
    const emailSubject = encodeURIComponent(`[ProgNest] ${subjectPrefix} from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hi ProgNest Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${subjectPrefix}\n\nMessage:\n${formData.message}\n\n---\nSent via ProgNest Official Website`
    );

    const mailtoUrl = `mailto:${siteConfig.urls.contactEmail}?subject=${emailSubject}&body=${emailBody}`;

    setStatusMessage({
      type: 'success',
      text: 'Opening your default email client with your message pre-filled. If it does not open automatically, please send your email directly to ' + siteConfig.urls.contactEmail
    });

    // Trigger user's real email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Direct Support</span>
          </div>
          <h2 className="section-title">
            Get in <span className="gradient-text-accent">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a question, found a bug, or want to share feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Email & Channels */}
          <div className="contact-info-card card">
            <h3 className="info-card-title">Official Contact Information</h3>
            <p className="info-card-desc">
              We welcome bug reports, curriculum suggestions, and feedback from students and self-learners.
            </p>

            {/* Email Contact Box */}
            <div className="email-action-box">
              <div className="email-meta">
                <span className="email-tag">PRIMARY CONTACT EMAIL</span>
                <a 
                  href={`mailto:${siteConfig.urls.contactEmail}`}
                  className="email-address-link"
                  title="Click to send email directly"
                >
                  <Mail size={18} className="text-cyan" />
                  <span>{siteConfig.urls.contactEmail}</span>
                </a>
              </div>
              <button 
                className="copy-btn" 
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Inquiries Guide */}
            <div className="inquiries-list">
              <div className="inquiry-item">
                <Bug size={18} className="text-cyan" />
                <div>
                  <strong>Reporting a Bug?</strong>
                  <p>Please mention your Android OS version, device model, and steps to reproduce the issue.</p>
                </div>
              </div>

              <div className="inquiry-item">
                <Lightbulb size={18} className="text-cyan" />
                <div>
                  <strong>Feature Suggestion?</strong>
                  <p>Let us know what topics or learning assessments would help you study better.</p>
                </div>
              </div>

              <div className="inquiry-item">
                <Sparkles size={18} className="text-cyan" />
                <div>
                  <strong>Response Commitment</strong>
                  <p>We aim to review student inquiries and bug submissions promptly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Dispatch Form */}
          <div className="contact-form-card card">
            <h3 className="form-card-title">Send a Structured Message</h3>
            <p className="form-card-desc">
              Fill in the form below and click submit to launch your default email client with your message pre-formatted.
            </p>

            {statusMessage && (
              <div className={`form-alert ${statusMessage.type}`}>
                {statusMessage.type === 'error' ? <AlertCircle size={18} /> : <Check size={18} />}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="req">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="e.g. Alex Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span className="req">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-topic" className="form-label">
                  Topic / Category
                </label>
                <select
                  id="contact-topic"
                  className="form-select"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                >
                  {siteConfig.contactTopics.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="req">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder="Describe your inquiry, bug details, or feedback..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary submit-btn" id="contact-submit-btn">
                <Send size={16} />
                <span>Prepare & Send via Email</span>
              </button>

              <p className="form-privacy-note">
                No third-party forms or trackers. Directly prepares a message to <code>{siteConfig.urls.contactEmail}</code>.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 2.5rem;
          align-items: start;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-info-card, .contact-form-card {
          padding: 2.5rem;
        }

        @media (max-width: 640px) {
          .contact-info-card, .contact-form-card {
            padding: 1.75rem;
          }
        }

        .info-card-title, .form-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #FFF;
          margin-bottom: 0.5rem;
        }

        .info-card-desc, .form-card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .email-action-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem;
          background: rgba(14, 20, 36, 0.9);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
          gap: 1rem;
        }

        @media (max-width: 500px) {
          .email-action-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .email-meta {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .email-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .email-address-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: #FFF;
          transition: color var(--transition-fast);
        }

        .email-address-link:hover {
          color: var(--cyan-light);
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .copy-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--cyan);
        }

        .text-green {
          color: #10B981;
        }

        .inquiries-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .inquiry-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .inquiry-item strong {
          display: block;
          font-size: 0.95rem;
          color: #FFF;
          margin-bottom: 0.2rem;
        }

        .inquiry-item p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        /* Form elements */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .req {
          color: #EF4444;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #090D18;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          color: #FFF;
          font-family: inherit;
          font-size: 0.92rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--cyan);
        }

        .form-select option {
          background: #0E1424;
          color: #FFF;
        }

        .input-error {
          border-color: #EF4444 !important;
        }

        .field-error {
          font-size: 0.78rem;
          color: #EF4444;
        }

        .submit-btn {
          width: 100%;
          padding: 0.95rem;
          margin-top: 0.5rem;
        }

        .form-privacy-note {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-align: center;
          margin: 0;
        }

        .form-privacy-note code {
          color: var(--cyan-light);
        }

        .form-alert {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.95rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .form-alert.error {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #F87171;
        }

        .form-alert.success {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34D399;
        }
      `}</style>
    </section>
  );
}
