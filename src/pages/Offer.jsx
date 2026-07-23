import {offers} from '../data/offers.js';
import {A} from '../data/site.js';
import CTA,{ExternalCTA} from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

const foundationIdeal=[
  {
    title:'Vous lancez votre activité pour une toute première fois',
    text:'Vous souhaitez démarrer avec une identité visuelle professionnelle qui inspire confiance dès les premiers échanges.'
  },
  {
    title:'Vous avez un logo, mais aucune cohérence visuelle',
    text:'Nous structurons votre image afin que tous vos supports parlent le même langage et renforcent votre crédibilité.'
  },
  {
    title:'Vous recherchez une image simple, élégante et durable',
    text:'Nous créons une identité intemporelle, facile à utiliser au quotidien et suffisamment solide pour accompagner l’évolution de votre marque.'
  }
];

const foundationSteps=[
  {
    title:'Découverte',
    text:'Nous échangeons sur votre projet, votre vision, votre cible et les valeurs que votre marque doit transmettre.'
  },
  {
    title:'Direction',
    text:'Nous définissons une direction visuelle cohérente avant de concevoir les premiers éléments de votre identité.'
  },
  {
    title:'Création',
    text:'Nous réalisons votre logo, sélectionnons votre palette de couleurs, votre typographie et développons les éléments graphiques qui composeront votre univers.'
  },
  {
    title:'Livraison',
    text:'Nous rassemblons l’ensemble de votre identité dans un brandboard clair et structuré, prêt à être utilisé sur tous vos supports de communication.'
  }
];


const identityIdeal=[
  {
    title:'Vous souhaitez renforcer votre image de marque',
    text:'Nous concevons une identité visuelle complète qui vous permet d’être immédiatement identifiable sur tous vos supports.'
  },
  {
    title:'Vous voulez communiquer avec plus de cohérence',
    text:'Nous développons un univers graphique harmonieux afin que chaque détail reflète la personnalité et les ambitions de votre marque.'
  },
  {
    title:'Vous recherchez une identité prête à être utilisée',
    text:'Nous créons une image professionnelle pensée pour le digital, les réseaux sociaux, vos présentations et vos premiers échanges avec vos futurs clients.'
  }
];

const identitySteps=[
  {
    title:'Immersion',
    text:'Nous prenons le temps de comprendre votre activité, votre marché, vos objectifs et la vision que vous souhaitez transmettre.'
  },
  {
    title:'Direction',
    text:'Nous définissons une direction graphique forte qui guidera l’ensemble de votre identité visuelle.'
  },
  {
    title:'Création',
    text:'Nous concevons votre logo principal, ses déclinaisons, votre palette de couleurs, vos typographies et les éléments graphiques qui composeront un univers cohérent et mémorable.'
  },
  {
    title:'Livraison',
    text:'Nous réunissons l’ensemble de votre identité dans un brandboard structuré et réalisons votre carte de visite digitale afin que vous puissiez communiquer avec une image professionnelle dès le premier jour.'
  }
];


const prestigeIdeal=[
  {
    title:'Vous souhaitez lancer une marque avec une identité haut de gamme',
    text:'Nous créons un univers de marque complet, pensé pour inspirer confiance dès le premier regard et marquer durablement les esprits.'
  },
  {
    title:'Vous recherchez une identité prête à être utilisée sur tous vos supports',
    text:'Nous développons l’ensemble des éléments nécessaires pour assurer une cohérence parfaite, aussi bien sur le digital que sur les supports imprimés.'
  },
  {
    title:'Vous souhaitez investir dans une image de marque durable',
    text:'Nous construisons une identité complète, évolutive et professionnelle, accompagnée de tous les fichiers dont vous aurez besoin pour collaborer facilement avec vos futurs partenaires.'
  }
];

const prestigeSteps=[
  {
    title:'Immersion stratégique',
    text:'Nous prenons le temps de comprendre votre activité, votre marché, vos ambitions et le positionnement que votre marque doit occuper afin de construire une identité parfaitement alignée avec vos objectifs.'
  },
  {
    title:'Direction artistique',
    text:'Nous définissons l’univers créatif de votre marque et élaborons une direction visuelle unique qui guidera l’ensemble du projet.'
  },
  {
    title:'Création de votre identité',
    text:'Nous concevons votre logo, ses déclinaisons, votre palette de couleurs, vos typographies, vos éléments graphiques ainsi que l’ensemble des supports qui composeront une identité forte, cohérente et distinctive.'
  },
  {
    title:'Finalisation & livraison',
    text:'Nous réunissons votre identité dans une charte graphique complète, réalisons des mockups premium pour valoriser votre marque et vous remettons tous les fichiers professionnels (PNG, SVG, PDF et fichiers sources), prêts à être utilisés sur l’ensemble de vos supports.'
  }
];

function FoundationOffer({o}){
  return <div className="foundationPage">
    <section className="foundationHero reveal">
      <div className="foundationHeroCopy">
        <span className="foundationLabel">Offre essentielle</span>
        <h1>FOUNDATION</h1>
        <p className="foundationIntro"><em>Les fondations essentielles de votre identité de marque.</em></p>
        <p className="foundationPrice">950 $ · 1 semaine minimum</p>
        <p className="foundationDescription">Nous créons les bases d’une identité visuelle cohérente, élégante et immédiatement reconnaissable. Ensemble, nous concevons un univers graphique qui reflète votre activité, vos valeurs et votre personnalité, afin de vous permettre de communiquer avec crédibilité dès votre lancement. Chaque élément est pensé pour fonctionner en harmonie et offrir une image professionnelle sur tous vos supports.</p>
        <ExternalCTA>NOUS PARLER DE VOTRE PROJET</ExternalCTA>
      </div>
      <figure className="foundationHeroVisual">
        <span className="foundationImageGlow" aria-hidden="true" />
        <img src={A+'offres/foundation.webp'} alt="Univers créatif premium de l’offre Foundation" />
      </figure>
    </section>

    <section className="foundationIdeal section reveal">
      <div className="foundationSectionTitle">
        <span>Pour vous</span>
        <h2>Cette formule est idéale pour vous si…</h2>
      </div>
      <div className="foundationIdealGrid">
        {foundationIdeal.map((item,index)=><article key={item.title} style={{'--index':index}}>
          <span className="foundationCardNumber">0{index+1}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>)}
      </div>
    </section>

    <section className="foundationIncluded reveal">
      <figure className="foundationIncludedVisual">
        <img src={A+'offres/foundation.webp'} alt="Univers visuel premium de l’offre Foundation" />
      </figure>
      <div className="foundationIncludedCopy">
        <span className="foundationLabel">Les essentiels</span>
        <h2>Ce qui est inclus</h2>
        <ul>
          {o.inc.map((item,index)=><li key={item} style={{'--index':index}}><span>✓</span>{item}</li>)}
        </ul>
      </div>
    </section>

    <section className="foundationProcess section reveal">
      <div className="foundationSectionTitle">
        <span>Méthode</span>
        <h2>Le déroulé du projet</h2>
      </div>
      <div className="foundationProcessGrid">
        {foundationSteps.map((step,index)=><article key={step.title} style={{'--index':index}}>
          <span className="foundationStepNumber">0{index+1}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>)}
      </div>
    </section>

    <section className="foundationFinalCta reveal">
      <span className="foundationLabel">Votre projet</span>
      <h2>Prêt à construire les fondations de votre marque ?</h2>
      <p>Si FOUNDATION correspond à ce que vous recherchez, la première étape est simple : échangeons ensemble. Parlez-nous de votre projet, de votre vision et de vos ambitions. Nous prendrons le temps d’étudier votre demande et de vous répondre personnellement afin de poser les premières bases d’une identité de marque forte, cohérente et durable.</p>
      <ExternalCTA>NOUS PARLER DE VOTRE PROJET</ExternalCTA>
    </section>

    <Footer />
  </div>
}


function IdentityOffer({o}){
  return <div className="identityPage">
    <section className="identityHero reveal">
      <div className="identityHeroCopy">
        <span className="identityLabel">Offre signature</span>
        <h1>IDENTITY</h1>
        <p className="identityIntro"><em>Une identité visuelle pensée pour faire grandir votre marque.</em></p>
        <p className="identityPrice">1 900 $ · 2 semaines minimum</p>
        <p className="identityDescription">Nous allons au-delà des fondations en créant une identité visuelle plus complète, plus flexible et plus impactante. Chaque élément est conçu pour renforcer la reconnaissance de votre marque et assurer une cohérence sur l’ensemble de vos supports de communication. Grâce à des déclinaisons de logo, une identité graphique enrichie et une carte de visite digitale, nous vous donnons tous les outils nécessaires pour communiquer avec assurance et professionnalisme.</p>
        <ExternalCTA>NOUS PARLER DE VOTRE PROJET</ExternalCTA>
      </div>
      <figure className="identityHeroVisual">
        <span className="identityImageGlow" aria-hidden="true" />
        <img src={A+'offres/identity.webp'} alt="Direction artistique premium de l’offre Identity" />
      </figure>
    </section>

    <section className="identityIdeal section reveal">
      <div className="identitySectionTitle">
        <span>Pour vous</span>
        <h2>Cette formule est idéale pour vous si…</h2>
      </div>
      <div className="identityIdealGrid">
        {identityIdeal.map((item,index)=><article key={item.title} style={{'--index':index}}>
          <span className="identityCardNumber">0{index+1}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>)}
      </div>
    </section>

    <section className="identityIncluded reveal">
      <figure className="identityIncludedVisual">
        <img src={A+'offres/identity.webp'} alt="Univers créatif premium de l’offre Identity" />
      </figure>
      <div className="identityIncludedCopy">
        <span className="identityLabel">Identité complète</span>
        <h2>Ce qui est inclus</h2>
        <ul>
          {o.inc.map((item,index)=><li key={item} style={{'--index':index}}><span>✓</span>{item}</li>)}
        </ul>
      </div>
    </section>

    <section className="identityProcess section reveal">
      <div className="identitySectionTitle">
        <span>Méthode</span>
        <h2>Le déroulé du projet</h2>
      </div>
      <div className="identityProcessGrid">
        {identitySteps.map((step,index)=><article key={step.title} style={{'--index':index}}>
          <span className="identityStepNumber">0{index+1}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>)}
      </div>
    </section>

    <section className="identityFinalCta reveal">
      <span className="identityLabel">Votre évolution</span>
      <h2>Envie de donner une nouvelle dimension à votre image de marque ?</h2>
      <p>Si IDENTITY correspond à vos ambitions, parlons de votre projet. Expliquez-nous où vous en êtes aujourd’hui et où vous souhaitez aller. Nous vous répondrons personnellement afin de construire ensemble une identité de marque cohérente, distinctive et pensée pour durer.</p>
      <ExternalCTA>NOUS PARLER DE VOTRE PROJET</ExternalCTA>
    </section>

    <Footer />
  </div>
}


function PrestigeOffer({o}){
  return <div className="prestigePage">
    <section className="prestigeHero reveal">
      <div className="prestigeHeroCopy">
        <span className="prestigeLabel">Accompagnement complet</span>
        <h1>PRESTIGE</h1>
        <p className="prestigeIntro"><em>L’expérience de branding la plus complète pour une marque qui souhaite se démarquer durablement.</em></p>
        <p className="prestigePrice">2 850 $ · 4 semaines minimum</p>
        <p className="prestigeDescription">PRESTIGE est notre accompagnement le plus complet. Nous concevons une identité de marque aboutie, pensée dans les moindres détails pour offrir une image cohérente, premium et immédiatement reconnaissable. Du logo jusqu’à la charte graphique, en passant par les supports de communication et les fichiers professionnels, nous créons un univers solide qui vous permettra de communiquer avec confiance sur tous vos canaux.</p>
        <ExternalCTA>NOUS PARLER DE VOTRE PROJET</ExternalCTA>
      </div>
      <figure className="prestigeHeroVisual">
        <span className="prestigeImageGlow" aria-hidden="true" />
        <img src={A+'offres/prestige.webp'} alt="Univers luxueux de l’offre Prestige" />
      </figure>
    </section>

    <section className="prestigeIdeal section reveal">
      <div className="prestigeSectionTitle">
        <span>Pour vous</span>
        <h2>Cette formule est idéale pour vous si…</h2>
      </div>
      <div className="prestigeIdealGrid">
        {prestigeIdeal.map((item,index)=><article key={item.title} style={{'--index':index}}>
          <span className="prestigeCardNumber">0{index+1}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>)}
      </div>
    </section>

    <section className="prestigeIncluded reveal">
      <figure className="prestigeIncludedVisual">
        <img src={A+'offres/prestige.webp'} alt="Éléments premium de l’offre Prestige" />
      </figure>
      <div className="prestigeIncludedCopy">
        <span className="prestigeLabel">Identité complète</span>
        <h2>Ce qui est inclus</h2>
        <ul>
          {o.inc.map((item,index)=><li key={item} style={{'--index':index}}><span>✓</span>{item}</li>)}
        </ul>
      </div>
    </section>

    <section className="prestigeProcess section reveal">
      <div className="prestigeSectionTitle">
        <span>Méthode</span>
        <h2>Le déroulé du projet</h2>
      </div>
      <div className="prestigeProcessGrid">
        {prestigeSteps.map((step,index)=><article key={step.title} style={{'--index':index}}>
          <span className="prestigeStepNumber">0{index+1}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>)}
      </div>
    </section>

    <section className="prestigeFinalCta reveal">
      <span className="prestigeLabel">Votre ambition</span>
      <h2>Offrons à votre marque l’identité qu’elle mérite.</h2>
      <p>Si PRESTIGE correspond à votre vision, échangeons sur votre projet. Parlez-nous de vos ambitions, de vos objectifs et de l’image que vous souhaitez construire. Nous vous accompagnerons personnellement pour créer une identité de marque complète, distinctive et conçue pour durer.</p>
      <ExternalCTA>NOUS PARLER DE VOTRE PROJET</ExternalCTA>
    </section>

    <Footer />
  </div>
}

export default function Offer({id}){
  const o=offers[id]||offers.foundation;
  if(id==='foundation'||o.slug==='foundation') return <FoundationOffer o={o}/>;
  if(id==='identity'||o.slug==='identity') return <IdentityOffer o={o}/>;
  if(id==='prestige'||o.slug==='prestige') return <PrestigeOffer o={o}/>;
  const ideal=['Vous lancez votre activité','Vous voulez communiquer avec cohérence','Vous recherchez une image durable'];
  const steps=['Immersion & diagnostic','Direction créative','Création du système','Livraison & guidelines'];
  return <>
    <section className="offerHero reveal"><div><p className="eyebrow">{o.name}</p><h1>{o.title}</h1><b>{o.price}</b><p>Une formule pensée pour donner à votre marque une image claire, professionnelle et mémorable, avec les bons livrables au bon niveau d’accompagnement.</p><ExternalCTA>Nous parler de votre projet →</ExternalCTA></div><img src={A+o.img} alt={o.name}/></section>
    <section className="section reveal"><div className="sectionHead"><p className="eyebrow">Idéal si</p><h2>Cette formule est idéale pour vous si...</h2></div><div className="cards">{ideal.map(x=><article className="card" key={x}><h3>{x}</h3><p>Nous créons une réponse visuelle cohérente, élégante et adaptée à votre niveau de maturité.</p></article>)}</div></section>
    <section className="included reveal"><div><p className="eyebrow">Inclus</p><h2>Ce qui est inclus</h2></div><ul>{o.inc.map(i=><li key={i}>✓ {i}</li>)}</ul></section>
    <section className="section process reveal"><div className="sectionHead"><p className="eyebrow">Déroulé</p><h2>Le déroulé du projet</h2></div><div>{steps.map((s,i)=><article key={s}><b>0{i+1}</b><h3>{s}</h3><p>Une étape précise pour avancer sans confusion, avec validation claire avant la suite.</p></article>)}</div></section>
    <CTA/><Footer/>
  </>;
}
