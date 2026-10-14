import React from 'react';
import { Compass, ArrowLeft, Home } from 'lucide-react';

export default function NotFound({ onNavigate }) {
  return (
    <div className="not-found-page">
      <div className="container not-found-container card">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          The page or section you are looking for does not exist or has been moved. Explore ProgNest's core lessons, features, and Android app download on the homepage.
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            if (onNavigate) onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Home size={18} />
          <span>Return to Homepage</span>
        </button>
      </div>

      <style>{`
        .not-found-page {
          padding-top: calc(var(--header-height) + 5rem);
          padding-bottom: 6rem;
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .not-found-container {
          max-width: 600px;
          text-align: center;
          padding: 3.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .not-found-code {
          font-family: var(--font-mono);
          font-size: clamp(4rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .not-found-title {
          font-size: 2rem;
          color: #FFF;
          margin-bottom: 1rem;
        }

        .not-found-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}
