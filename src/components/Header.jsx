import { useState } from 'react';
import { go } from '../App.jsx';
import { ExternalCTA } from './CTA.jsx';
import {useSitePreferences} from '../context/SitePreferences.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const {theme,language,t,toggleTheme,toggleLanguage}=useSitePreferences();
  const nav = (path) => { go(path); setOpen(false); setOffersOpen(false); };
  const handleOffers = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches) {
      setOffersOpen((value) => !value);
      return;
    }
    nav('/offres/foundation');
  };

  return (
    <header className="topbar">
      <button className="brand" onClick={() => nav('/')} aria-label="Retour accueil">D&A Studio</button>

      <nav className={open ? 'open' : ''}>
        <button onClick={() => nav('/')}>{t('Accueil')}</button>
        <button onClick={() => nav('/portfolio')}>{t('Portfolio')}</button>
        <div className={`drop ${offersOpen ? 'mobileOpen' : ''}`}>
          <button type="button" onClick={handleOffers} aria-expanded={offersOpen} aria-controls="offers-mobile-submenu">{t('Offres')}<span className="mobileOffersChevron" aria-hidden="true">⌄</span></button>
          <div id="offers-mobile-submenu">
            <button onClick={() => nav('/offres/foundation')}>Foundation</button>
            <button onClick={() => nav('/offres/identity')}>Identity</button>
            <button onClick={() => nav('/offres/prestige')}>Prestige</button>
          </div>
        </div>
        <button onClick={() => nav('/about')}>{t('Le Studio')}</button>
        <a className="boutiqueNavLink" href="https://shopdastudio.gumroad.com/" target="_blank" rel="noopener noreferrer">{t('D&A Boutique')} <span aria-hidden="true">↗</span></a>
        <ExternalCTA light>Nous contacter</ExternalCTA>
      </nav>

      <div className="siteControls" aria-label="Préférences du site">
        <button className="preferenceButton themeButton" onClick={toggleTheme} aria-label={theme==='dark'?'Mode clair':'Mode sombre'} title={theme==='dark'?'Mode clair':'Mode sombre'}>
          <span aria-hidden="true">{theme==='dark'?'☀':'☾'}</span>
        </button>
        <button className="preferenceButton languageButton" data-no-translate="true" onClick={toggleLanguage} aria-label={language==='fr'?'Passer en anglais':'Passer en français'} title={language==='fr'?'Passer en anglais':'Passer en français'}>
          {language==='fr'?'EN':'FR'}
        </button>
        <button className="burger" onClick={() => { setOpen(!open); if (open) setOffersOpen(false); }} aria-label="Menu mobile">{open ? '×' : '☰'}</button>
      </div>
    </header>
  );
}
