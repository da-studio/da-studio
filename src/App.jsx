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

import { getLanguageFromPath, stripLanguagePrefix, localizedPath } from './utils/routing.js';

export const route = () => stripLanguagePrefix();

export const go = (path) => {
  const language = getLanguageFromPath();
  window.history.pushState({}, '', localizedPath(path, language));
  window.dispatchEvent(new PopStateEvent('popstate'));

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const SEO_CONFIG = {
  '/': {
    title: 'Studio de Branding & Identité Visuelle Premium | D&A Studio',
    description:
      'D&A Studio est un studio de branding et d’identité visuelle premium : stratégie de marque, logo, système visuel et direction artistique pour marques ambitieuses en France et à l’international.',
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

function updateAlternate(language, url) {
  let link = document.querySelector(`link[rel="alternate"][hreflang="${language}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', language);
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function updateStructuredData(language) {
  const id = 'da-studio-structured-data';
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://da-studio-psi.vercel.app/#studio',
    name: 'D&A Studio',
    url: `https://da-studio-psi.vercel.app/${language}/`,
    description:
      language === 'en'
        ? 'Premium branding and brand identity studio specializing in brand strategy, visual identity, logo design and art direction.'
        : 'Studio de branding et d’identité visuelle premium spécialisé en stratégie de marque, identité visuelle, création de logo et direction artistique.',
    knowsLanguage: ['fr', 'en'],
    areaServed: 'Worldwide',
    serviceType: [
      'Brand Strategy',
      'Brand Identity',
      'Visual Identity',
      'Logo Design',
      'Art Direction'
    ]
  };

  script.textContent = JSON.stringify(data);
}

function applySEO(path) {
  const language = getLanguageFromPath();
  const baseSeo = SEO_CONFIG[path] || SEO_CONFIG['/'];
  const english = {
    '/': ['Premium Branding & Brand Identity Studio | D&A Studio', 'D&A Studio is a premium branding and brand identity studio creating brand strategy, logo design, visual systems and art direction for ambitious brands worldwide.'],
    '/about': ['About — Branding & Art Direction Studio | D&A Studio', 'Discover D&A Studio, a creative studio specializing in premium branding, brand identity, strategy and art direction.'],
    '/portfolio': ['Branding & Brand Identity Portfolio | D&A Studio', 'Explore D&A Studio projects across premium branding, brand identity, logo design and art direction.'],
    '/contact': ['Contact — Start Your Branding Project | D&A Studio', 'Contact D&A Studio to create or transform your brand identity, visual system, logo and art direction.'],
    '/mentions-legales': ['Legal Notice | D&A Studio', 'Legal information and notices for the official D&A Studio website.'],
    '/offres/foundation': ['Foundation — Branding Package | D&A Studio', 'Foundation gives ambitious brands clear, coherent and professional foundations for a distinctive identity.'],
    '/offres/identity': ['Identity — Complete Brand Identity | D&A Studio', 'Identity is D&A Studio’s complete visual identity offer for brands seeking a coherent, premium presence.'],
    '/offres/prestige': ['Prestige — Complete Premium Branding | D&A Studio', 'Prestige is D&A Studio’s comprehensive offer for building a strategic, distinctive and premium brand world.'],
    '/projets/aurelys': ['Aurelys — Brand Identity & Art Direction | D&A Studio', 'Discover Aurelys, an elegant premium brand identity and art direction project by D&A Studio.'],
    '/projets/diara': ['Diara — Jewelry Branding & Brand Identity | D&A Studio', 'Discover Diara, a refined jewelry brand identity created by D&A Studio around elegance and femininity.'],
    '/projets/enjoy': ['Enjoy — Restaurant Branding & Brand Identity | D&A Studio', 'Discover Enjoy, a restaurant brand identity created by D&A Studio around generous, modern and convivial cuisine.'],
    '/projets/lumea': ['Lumea — Beauty & Cosmetics Branding | D&A Studio', 'Discover Lumea, a premium cosmetics branding and brand identity project created by D&A Studio.'],
    '/projets/orange': ['Orange — Wellness & Spa Branding | D&A Studio', 'Discover Orange, a wellness and spa brand identity developed by D&A Studio.'],
    '/projets/proud': ['Proud — Cosmetics Branding & Brand Identity | D&A Studio', 'Discover Proud, a premium cosmetics brand identity designed by D&A Studio.'],
  };
  const seo = language === 'en' && english[path]
    ? { title: english[path][0], description: english[path][1] }
    : baseSeo;

  const origin = 'https://da-studio-psi.vercel.app';
  const canonicalUrl = `${origin}${localizedPath(path, language)}`;
  const frUrl = `${origin}${localizedPath(path, 'fr')}`;
  const enUrl = `${origin}${localizedPath(path, 'en')}`;

  document.title = seo.title;
  document.documentElement.lang = language;
  updateMetaTag('meta[name="description"]', { name: 'description' }, seo.description);
  updateMetaTag('meta[property="og:title"]', { property: 'og:title' }, seo.title);
  updateMetaTag('meta[property="og:description"]', { property: 'og:description' }, seo.description);
  updateMetaTag('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
  updateMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title);
  updateMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.description);
  updateCanonical(canonicalUrl);
  updateAlternate('fr', frUrl);
  updateAlternate('en', enUrl);
  updateAlternate('x-default', enUrl);
  updateStructuredData(language);
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
