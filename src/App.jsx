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

export default function App() {
  const [currentPath, setCurrentPath] = useState(route());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(route());
    };

    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

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