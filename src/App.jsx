import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Learning from './components/Learning';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import AppPreview from './components/AppPreview';
import DownloadCTA from './components/DownloadCTA';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import NotFound from './pages/NotFound';

export default function App() {
  // Determine initial route from pathname, hash, or query parameter (for GitHub Pages redirect)
  const getInitialRoute = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectPath = searchParams.get('p');
    if (redirectPath) {
      if (redirectPath.includes('privacy')) return 'privacy';
      if (redirectPath.includes('terms')) return 'terms';
    }

    const hash = window.location.hash.toLowerCase();
    if (hash === '#/privacy' || hash === '#privacy') return 'privacy';
    if (hash === '#/terms' || hash === '#terms') return 'terms';

    const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '');
    if (pathname.endsWith('/privacy')) return 'privacy';
    if (pathname.endsWith('/terms')) return 'terms';

    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  // Sync route on popstate (browser back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title based on active view
  useEffect(() => {
    if (currentRoute === 'privacy') {
      document.title = 'Privacy Policy — ProgNest | Official Android App';
    } else if (currentRoute === 'terms') {
      document.title = 'Terms of Use — ProgNest | Official Android App';
    } else if (currentRoute === '404') {
      document.title = 'Page Not Found — ProgNest';
    } else {
      document.title = 'ProgNest — Learn to Code. Build Your Future. | Official Android App';
    }
  }, [currentRoute]);

  const navigateTo = (route) => {
    setCurrentRoute(route);
    let newPath = '/';
    if (route === 'privacy') newPath = '/privacy';
    else if (route === 'terms') newPath = '/terms';

    try {
      window.history.pushState({}, '', newPath);
    } catch {
      // Fallback for strict sandbox environments
      window.location.hash = route === 'home' ? '' : `#${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="prognest-app-wrapper">
      {/* Universal Responsive Navbar */}
      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main Page View Switcher */}
      <main id="main-content">
        {currentRoute === 'home' && (
          <>
            <Hero />
            <Features />
            <Learning />
            <HowItWorks />
            <About />
            <AppPreview />
            <DownloadCTA />
            <Faq />
            <Contact />
          </>
        )}

        {currentRoute === 'privacy' && (
          <PrivacyPolicy onNavigate={navigateTo} />
        )}

        {currentRoute === 'terms' && (
          <TermsOfUse onNavigate={navigateTo} />
        )}

        {currentRoute === '404' && (
          <NotFound onNavigate={navigateTo} />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
