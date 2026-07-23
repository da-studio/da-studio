import { go } from '../App.jsx';
import { socials } from '../data/site.js';
import { ExternalCTA } from './CTA.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <button className="brand foot" onClick={() => go('/')}>D&A Studio</button>
        <h2>Construisons une marque qui restera.</h2>
        <ExternalCTA>Démarrer mon projet →</ExternalCTA>
        <small>© 2025 — Identités visuelles & branding premium.</small>
      </div>

      <nav>
        <button onClick={() => go('/portfolio')}>Portfolio</button>
        <button onClick={() => go('/about')}>Le studio</button>
        <button onClick={() => go('/offres/foundation')}>Foundation</button>
        <button onClick={() => go('/offres/identity')}>Identity</button>
        <button onClick={() => go('/offres/prestige')}>Prestige</button>
        <button onClick={() => go('/mentions-legales')}>Mentions légales</button>
      </nav>

      <nav>
        <a href={socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={socials.tiktok} target="_blank" rel="noreferrer">TikTok</a>
        <a href={socials.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={socials.email}>E-mail</a>
      </nav>
    </footer>
  );
}
