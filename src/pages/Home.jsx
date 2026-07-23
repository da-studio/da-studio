import { A } from '../data/site.js';
import { go } from '../App.jsx';
import { ExternalCTA } from '../components/CTA.jsx';
import ProjectsGrid from '../components/ProjectsGrid.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';
import { Stats, Testimonials, FAQ } from '../components/StatsTestimonialsFAQ.jsx';
import '../styles/philosophy-premium.css';

export default function Home() {
  return (
    <>
      <div className="homeBrownZone homeColorFlow">
        <div className="homeHeroLight">
          <section className="editorialFounderHero reveal" aria-labelledby="founders-hero-title">
            <div className="editorialFounderFrame">
              <div className="editorialFounderMeta editorialFounderMetaLeft">D&A Studio · Brand Design</div>
              <div className="editorialFounderMeta editorialFounderMetaRight">Strategy · Identity · Art Direction</div>

              <figure className="editorialFounderPortrait">
                <picture>
                  <source media="(max-width: 760px)" srcSet={A + 'couvertures/founders-duo-premium-mobile.webp'} />
                  <img
                    src={A + 'couvertures/founders-duo-premium-desktop.webp'}
                    alt="Djamel et Antonya, fondateurs de D&A Studio"
                  />
                </picture>
                <span className="editorialFounderLight" aria-hidden="true" />
              </figure>

              <h1 id="founders-hero-title" className="editorialFounderTitle" aria-label="Djamel et Antonya">
                <span className="editorialNameDjamel">Djamel</span>
                <span className="editorialAmp">&</span>
                <span className="editorialNameAntonya">Antonya</span>
              </h1>

              <div className="editorialFounderRoles">
                <strong>Brand Designers</strong>
                <span>Art Direction</span>
                <span>Visual Identity</span>
              </div>

              <p className="editorialFounderStatement">
                Nous donnons vie aux marques<br />qui méritent d’être inoubliables.
              </p>

              <button onClick={() => go('/portfolio')} className="editorialFounderCta">
                Voir nos projets <span aria-hidden="true">↗</span>
              </button>

              <div className="editorialFounderMonogram" aria-hidden="true">D&amp;A</div>

              <div className="editorialFounderBottomBar" aria-hidden="true">
                <span>D&amp;A Studio</span>
                <span>Stratégie · Identité · Direction artistique</span>
                <span>© 2025</span>
              </div>
            </div>
          </section>
        </div>

        <div className="homeAboutBrown">
          <section className="aboutMarron reveal">
          <div className="aboutMarronImage top">
            <img src={A + 'couvertures/workspace1.webp'} alt="Bureau créatif D&A Studio" />
          </div>

          <div className="aboutMarronTitle">
            <p className="eyebrow">À propos</p>
            <h2>
              Un studio pour<br />
              les marques qui<br />
              choisissent <i>la précision</i><br />
              plutôt que le bruit.
            </h2>
            <div className="stars">************</div>
          </div>

          <div className="aboutMarronText">
            <p>
              Nous concevons des identités visuelles qui donnent une voix claire aux
              entreprises, aux maisons créatives et aux marques émergentes. Chaque système
              est pensé comme une architecture : élégant, cohérent, mémorable.
            </p>
            <div className="miniPillars">
              <article>
                <h3>Clarté</h3>
                <p>Un langage visuel qui se comprend en un regard.</p>
              </article>
              <article>
                <h3>Élégance</h3>
                <p>Des détails subtils, jamais décoratifs par hasard.</p>
              </article>
              <article>
                <h3>Système</h3>
                <p>Une cohérence pensée pour grandir avec la marque.</p>
              </article>
            </div>
          </div>

          <div className="aboutMarronImage bottom">
            <img src={A + 'couvertures/leaf.webp'} alt="Texture premium" />
          </div>
          </section>
        </div>

        <div className="homeStatsIvory">
          <Stats />
        </div>
      </div>

      <section className="philosophyPremium reveal" aria-labelledby="philosophy-title">
        <div className="philosophyPremiumCopy">
          <div className="philosophyPremiumLabel">
            <svg className="philosophyFeather" viewBox="0 0 130 130" aria-hidden="true">
              <path className="featherMain" d="M18 111C36 80 56 43 105 17C94 55 72 86 33 105" />
              <path className="featherStem" d="M17 114C46 88 68 65 99 28" />
              <path className="featherDetail" d="M45 91L39 67M58 78L52 53M72 64L67 42M84 50L81 34" />
              <path className="featherDetail" d="M43 91L66 85M57 77L79 70M71 63L91 55M84 49L101 40" />
            </svg>
            <div>
              <p>Notre philosophie</p>
              <span />
            </div>
          </div>

          <h2 id="philosophy-title">
            <em>Une marque</em>
            <span>ne devient pas premium parce qu’elle est décorée.</span>
          </h2>

          <div className="philosophyDivider"><i /></div>

          <p className="philosophyPremiumStatement">
            Elle le devient lorsqu’elle est claire, cohérente et immédiatement reconnaissable.
          </p>
        </div>

        <figure className="philosophyPremiumVisual">
          <img
            src="/assets/images/philosophie/philosophie-premium.webp"
            alt="Carnet D&A Studio, plume dorée et objets raffinés dans une lumière chaleureuse"
            loading="lazy"
          />
          <span className="philosophyLightSweep" aria-hidden="true" />
        </figure>
      </section>

      <ProjectsGrid />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
