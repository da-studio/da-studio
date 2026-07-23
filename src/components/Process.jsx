import '../styles/process-premium.css';

const steps = [
  {
    number: '01',
    title: 'Immersion & diagnostic',
    description: 'Nous plongeons dans votre univers pour comprendre vos enjeux, analyser votre marché et poser des bases solides.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="28" cy="28" r="14" />
        <path d="M38 38L51 51" />
        <path d="M22 28h12M28 22v12" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Territoire créatif',
    description: 'Nous définissons l’ADN de votre marque, vos valeurs clés et la direction créative qui guidera toutes les décisions.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M22 40c-5-4-8-9-8-15a18 18 0 0 1 36 0c0 6-3 11-8 15" />
        <path d="M24 40h16M26 46h12M29 52h6" />
        <path d="M32 7v5M12 27H7M57 27h-5M16 12l4 4M48 12l-4 4" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Design system',
    description: 'Nous concevons votre identité visuelle complète et un système cohérent, pensé pour durer et évoluer.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M17 48c10-2 19-11 23-23l7-7 5 5-7 7c-12 4-21 13-23 23z" />
        <path d="M39 26l-5-5M18 49l-5 2 2-5" />
        <circle cx="43" cy="21" r="2" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Déploiement & guidelines',
    description: 'Nous livrons des supports prêts à l’emploi et un guide clair pour assurer une utilisation cohérente de votre marque.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 30L54 10 39 54 29 35z" />
        <path d="M29 35L54 10M29 35l-4 13" />
      </svg>
    )
  }
];

export default function Process() {
  return (
    <section className="processPremium reveal" aria-labelledby="process-premium-title">
      <div className="processPremiumHero">
        <div className="processPremiumIntro">
          <p className="processPremiumEyebrow">Processus</p>

          <h2 id="process-premium-title" className="processPremiumTitle">
            <span className="processPremiumTitleTop">
              <span className="processPremiumScript">Une</span>
              <em>méthode</em>
            </span>
            <span className="processPremiumTitleLine">claire,</span>
            <span className="processPremiumTitleLine">calme et collaborative.</span>
          </h2>

          <div className="processPremiumRule" aria-hidden="true"><i /></div>
        </div>

        <figure className="processPremiumVisual">
          <img
            src="/assets/images/processus/processus-premium.webp"
            alt="Carnet D&A Studio, stylo doré et objets raffinés dans une lumière chaleureuse"
            loading="lazy"
          />
          <span className="processPremiumSweep" aria-hidden="true" />
        </figure>
      </div>

      <div className="processPremiumGrid">
        {steps.map((step, index) => (
          <article
            className="processPremiumCard"
            key={step.number}
            style={{ '--step-delay': `${index * 0.16}s` }}
          >
            <div className="processPremiumIcon">{step.icon}</div>
            <b>{step.number}</b>
            <h3>{step.title}</h3>
            <span className="processPremiumMiniRule" aria-hidden="true" />
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
