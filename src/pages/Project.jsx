import { useEffect } from 'react'
import { projects } from '../data/projects.js'
import { A } from '../data/site.js'
import { useSitePreferences } from '../context/SitePreferences.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/project-hero.css'
import '../styles/project-galleries-final.css'

function InfoSection({ number, title, text, image, tone = 'light', reverse = false, note, t }) {
  return (
    <section className={`cpInfo cpTone-${tone} ${reverse ? 'cpReverse' : ''} reveal`}>
      <div className="cpInfoMedia">
        <img src={A + image} alt={t(title)} loading="lazy" />
      </div>

      <div className="cpInfoCopy">
        <div className="cpInfoHead">
          <span>{number}</span>
          <p>{t(title)}</p>
        </div>
        <h2>{t(title)}</h2>
        <p>{t(text)}</p>

        <ul>
          <li>{t('Cohérence visuelle sur tous les supports')}</li>
          <li>{t('Positionnement premium et immédiatement identifiable')}</li>
          <li>{t('Système de marque pensé pour évoluer dans le temps')}</li>
        </ul>

        {note && <small>{t(note)}</small>}
      </div>
    </section>
  )
}

export default function Project({ slug }) {
  const { t } = useSitePreferences()
  const normalizedSlug = String(slug || '')
    .trim()
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
  const foundIndex = projects.findIndex((item) => item.slug.toLowerCase() === normalizedSlug)
  const index = foundIndex >= 0 ? foundIndex : 0
  const p = projects[index]
  const nextIndex = (index + 1) % projects.length
  const next = projects[nextIndex]
  const gallery = p.imgs.gal || []

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    resetScroll()
    const frame = window.requestAnimationFrame(resetScroll)
    return () => window.cancelAnimationFrame(frame)
  }, [normalizedSlug])

  const goNext = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    window.location.hash = `/projets/${next.slug}`
  }

  return (
    <>
      <article className="compactProject" style={{ '--cp-accent': p.accent, '--cp-soft': p.soft }}>
        <section
          className={`cpHero cpImageHero cpImageHero-${p.slug} reveal`}
          style={{
            '--hero-main': p.colors[0],
            '--hero-secondary': p.colors[1] || p.soft,
            '--hero-deep': p.accent,
          }}
        >
          <img
            className="cpImageHeroBackground"
            src={`/assets/images/project-hero/${p.slug}-hero.webp`}
            alt={`${t('Univers visuel')} ${p.name}`}
            decoding="async"
            fetchPriority="high"
          />

          <div className="cpImageHeroSmoke cpImageHeroSmokeLeft" aria-hidden="true" />
          <div className="cpImageHeroSmoke cpImageHeroSmokeRight" aria-hidden="true" />
          <div className="cpImageHeroLight" aria-hidden="true" />
          <div className="cpImageHeroGlow" aria-hidden="true" />
          <div className="cpImageHeroShade" aria-hidden="true" />

          <div className="cpHeroMeta">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{t(p.cat)}</span>
          </div>

          <div className="cpSmokeCaption">
            <p>{t('D&A Studio · Étude de cas')}</p>
            <span>{t(p.tag)}</span>
          </div>
        </section>

        <section className="cpOverview reveal">
          <div className="cpOverviewLabel">
            <span>{t('Le projet')}</span>
            <b>{t(p.cat)}</b>
          </div>

          <div className="cpOverviewText">
            <h2>{t('Une identité conçue pour être comprise, ressentie et mémorisée.')}</h2>
            <p>
              {t(p.tag)} {t('Notre travail a consisté à transformer cette intention en un système visuel cohérent, distinctif et suffisamment flexible pour accompagner la marque sur tous ses supports.')}
            </p>
          </div>
        </section>

        <section className={`cpProjectLogosClean cpProjectLogosClean-${p.slug} reveal`}>
          {gallery.slice(0, 4).map((image, i) => (
            <figure key={`${image}-${i}`} className="cpProjectLogoItem">
              <img
                src={A + image}
                alt={`${p.name} — ${t('identité')} ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </section>

        <section className="cpSystem reveal">
          <div className="cpSystemIntro">
            <span>01</span>
            <div>
              <p>{t('Système visuel')}</p>
              <h2>{t('Logo, couleurs et langage graphique.')}</h2>
            </div>
          </div>

          <div className="cpSystemBody">
            <div className="cpSystemText">
              <p>
                {t('L’identité de')} {p.name} {t('repose sur un équilibre entre personnalité, lisibilité et sophistication. Le système permet de maintenir une cohérence forte sans rendre la marque rigide.')}
              </p>

              <div className="cpDataGrid">
                <article>
                  <span>{t('Positionnement')}</span>
                  <b>Premium</b>
                </article>
                <article>
                  <span>{t('Territoire')}</span>
                  <b>{t(p.cat)}</b>
                </article>
                <article>
                  <span>{t('Direction')}</span>
                  <b>{t('Éditoriale')}</b>
                </article>
              </div>
            </div>

            <div className="cpPalette">
              {p.colors.map((color, i) => (
                <article key={color}>
                  <span style={{ background: color }} />
                  <small>0{i + 1}</small>
                  <b>{color}</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <InfoSection number="02" title="La problématique" text={p.problem} image={p.imgs.problem} tone="soft" note="Le défi : créer une présence plus claire, plus désirable et plus cohérente." t={t} />

        <section className="cpGallery reveal">
          <div className="cpGalleryHead">
            <span>03</span>
            <div>
              <p>{t('Univers de marque')}</p>
              <h2>{t('Un récit visuel construit image après image.')}</h2>
            </div>
          </div>

          <div className={`cpUniverseLayout cpUniverseLayout-${p.slug}`}>
            <figure className="cpUniverseHero">
              <img src={A + gallery[4]} alt={`${p.name} — ${t('univers principal')}`} loading="lazy" decoding="async" />
            </figure>

            <div className={`cpUniverseGrid ${p.imgs.showcase.length === 4 ? 'hasFour' : 'hasThree'}`}>
              {p.imgs.showcase.map((image, i) => (
                <figure key={`${image}-${i}`} className="cpUniverseItem">
                  <img src={A + image} alt={`${p.name} — ${t('application')} ${i + 1}`} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <InfoSection number="04" title="Notre approche" text={p.approach} image={p.imgs.approach} tone="accent" reverse note="Une direction artistique sensible, structurée et immédiatement reconnaissable." t={t} />
        <InfoSection number="05" title="La direction créative" text={p.creative} image={p.imgs.creative} tone="light" note="Chaque composition, texture et couleur participe à la perception globale de la marque." t={t} />
        <InfoSection number="06" title="L’impact" text={p.impact} image={p.imgs.impact} tone="soft" reverse note="Le résultat : une identité plus forte, plus cohérente et prête à se déployer." t={t} />

        <section className="cpNext reveal">
          <p>{t('Projet suivant')}</p>
          <button onClick={goNext} type="button">
            <span>{t(next.cat)}</span>
            <strong>{next.name}</strong>
            <i>↗</i>
          </button>
        </section>

        <CTA />
      </article>

      <Footer />
    </>
  )
}
