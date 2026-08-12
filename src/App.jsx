import { useEffect, useState } from 'react';

import Header from './components/Header.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Offer from './pages/Offer.jsx';
import Project from './pages/Project.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

export const route = () => {
  return window.location.pathname || '/';
};

export const go = (path) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const SEO_CONFIG = {
  '/': {
    title: 'D&A Studio — Branding & Identité Visuelle Premium',
    description:
      'D&A Studio crée des identités visuelles premium, logos sur mesure, directions artistiques et univers de marque cohérents pour entreprises et entrepreneurs.',
  },

  '/about': {
    title: 'À propos — Studio de Branding & Direction Artistique | D&A Studio',
    description:
      'Découvrez D&A Studio, studio créatif spécialisé en branding premium, identité visuelle, stratégie de marque et direction artistique.',
  },

  '/portfolio': {
    title: 'Portfolio Branding & Identités Visuelles | D&A Studio',
    description:
      'Découvrez les projets de D&A Studio : identités visuelles, branding premium, logos, directions artistiques et univers de marque sur mesure.',
  },

  '/contact': {
    title: 'Contact — Démarrer votre projet de Branding | D&A Studio',
    description:
      'Contactez D&A Studio pour créer ou transformer votre identité visuelle, votre branding, votre logo et votre direction artistique.',
  },

  '/mentions-legales': {
    title: 'Mentions légales | D&A Studio',
    description:
      'Consultez les mentions légales et informations relatives au site officiel de D&A Studio.',
  },

  '/offres/foundation': {
    title: 'Foundation — Offre Branding | D&A Studio',
    description:
      'Foundation est l’offre essentielle de D&A Studio pour poser des bases de marque claires, cohérentes et professionnelles.',
  },

  '/offres/identity': {
    title: 'Identity — Identité Visuelle Complète | D&A Studio',
    description:
      'Identity accompagne les marques dans la création d’une identité visuelle complète, cohérente et premium.',
  },

  '/offres/prestige': {
    title: 'Prestige — Branding Premium Complet | D&A Studio',
    description:
      'Prestige est l’offre complète de D&A Studio pour construire un univers de marque premium, stratégique et distinctif.',
  },

  '/projets/aurelys': {
    title: 'Aurelys — Identité Visuelle & Branding | D&A Studio',
    description:
      'Découvrez Aurelys, un projet de branding et d’identité visuelle imaginé par D&A Studio dans un univers élégant et premium.',
  },

  '/projets/diara': {
    title: 'Diara — Branding Bijoux & Identité Visuelle | D&A Studio',
    description:
      'Découvrez Diara, une identité visuelle de joaillerie raffinée créée par D&A Studio autour de l’élégance et de la féminité.',
  },

  '/projets/enjoy': {
    title: 'Enjoy — Branding Restaurant & Identité Visuelle | D&A Studio',
    description:
      'Découvrez Enjoy, une identité visuelle de restaurant créée par D&A Studio autour d’une cuisine généreuse, moderne et conviviale.',
  },

  '/projets/lumea': {
    title: 'Lumea — Branding Beauté & Cosmétique | D&A Studio',
    description:
      'Découvrez Lumea, un projet de branding cosmétique et d’identité visuelle premium créé par D&A Studio.',
  },

  '/projets/orange': {
    title: 'Orange — Branding Wellness & Spa | D&A Studio',
    description:
      'Découvrez Orange, une identité visuelle dédiée au bien-être et au spa, développée par D&A Studio.',
  },

  '/projets/proud': {
    title: 'Proud — Branding Cosmétique & Identité Visuelle | D&A Studio',
    description:
      'Découvrez Proud, une identité visuelle cosmétique premium conçue par D&A Studio.',
  },
};

function updateMetaTag(selector, attribute, value) {
  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');

    Object.entries(attribute).forEach(([key, val]) => {
      tag.setAttribute(key, val);
    });

    document.head.appendChild(tag);
  }

  tag.setAttribute('content', value);
}

function updateCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
}

function applySEO(path) {
  const seo =
    SEO_CONFIG[path] || {
      title: 'D&A Studio — Branding & Identité Visuelle Premium',
      description:
        'D&A Studio, studio créatif spécialisé en branding premium, identité visuelle, logo et direction artistique.',
    };

  const canonicalUrl = `https://da-studio-psi.vercel.app${path}`;

  document.title = seo.title;

  updateMetaTag(
    'meta[name="description"]',
    { name: 'description' },
    seo.description
  );

  updateMetaTag(
    'meta[property="og:title"]',
    { property: 'og:title' },
    seo.title
  );

  updateMetaTag(
    'meta[property="og:description"]',
    { property: 'og:description' },
    seo.description
  );

  updateMetaTag(
    'meta[property="og:url"]',
    { property: 'og:url' },
    canonicalUrl
  );

  updateMetaTag(
    'meta[name="twitter:title"]',
    { name: 'twitter:title' },
    seo.title
  );

  updateMetaTag(
    'meta[name="twitter:description"]',
    { name: 'twitter:description' },
    seo.description
  );

  updateCanonical(canonicalUrl);
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(route());

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(route());
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    applySEO(currentPath);
  }, [currentPath]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const timeout = window.setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
      });
    }, 50);

    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, [currentPath]);

  let page;

  if (currentPath === '/') {
    page = <Home />;
  } else if (currentPath === '/about') {
    page = <About />;
  } else if (currentPath === '/portfolio') {
    page = <Portfolio />;
  } else if (currentPath === '/contact') {
    page = <Contact />;
  } else if (currentPath === '/mentions-legales') {
    page = <Legal />;
  } else if (currentPath.startsWith('/offres/')) {
    page = <Offer id={currentPath.split('/').pop()} />;
  } else if (currentPath.startsWith('/projets/')) {
    page = <Project slug={currentPath.split('/').pop()} />;
  } else {
    page = <NotFound />;
  }

  return (
    <div className="siteShell introReady">
      <Header />
      <main>{page}</main>
    </div>
  );
}
