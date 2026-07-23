import CTA from './CTA.jsx';
import { go } from '../App.jsx';

export function Stats(){
  return (
    <section className="stats reveal">
      <h2>La confiance se construit dans le détail.</h2>
      <div>
        <article className="liquidMetric">
          <b>98%</b>
          <h3>Clients satisfaits</h3>
          <p>Des projets livrés avec exigence, cohérence et attention portée à chaque détail.</p>
        </article>
        <article className="liquidMetric">
          <b>7+</b>
          <h3>Marques accompagnées</h3>
          <p>Beauté, mode, restauration, wellness et joaillerie : des univers pensés pour durer.</p>
        </article>
        <article className="blackCard statsProjectButton" role="button" tabIndex="0" onClick={() => go('/portfolio')} onKeyDown={(e)=>{if(e.key==='Enter')go('/portfolio')}}>
          <h3>Voir nos créations →</h3>
          <p>Chaque projet est conçu comme une expérience complète.</p>
        </article>
      </div>
    </section>
  );
}

export function Testimonials(){
  return (
    <section className="testimonials reveal">
      <p className="eyebrow">Témoignages</p>
      <h2>Des collaborations pensées dans la durée.</h2>
      <div>
        <blockquote>“D&A Studio a donné à notre marque une présence plus claire, plus désirable et plus professionnelle.”<cite>Jo & Emilie — Fondatrices</cite></blockquote>
        <blockquote>“Le branding a totalement transformé notre image. Le résultat est élégant, cohérent et aligné avec notre vision.”<cite>Cliente D&A Studio</cite></blockquote>
      </div>
    </section>
  );
}

export function FAQ(){
  const qs = [
    {
      q: 'Quels services proposez-vous ?',
      a: 'Nous accompagnons les marques dans la création et le développement de leur identité visuelle à travers une approche stratégique et haut de gamme. Nos services incluent la création de logos, d’identités visuelles complètes, de brand guidelines, de direction artistique, ainsi que la conception de supports visuels et d’univers de marque cohérents et premium.'
    },
    {
      q: 'Quels outils utilisez-vous ?',
      a: 'Nous travaillons principalement avec des outils professionnels tels qu’Adobe Illustrator, Photoshop, Canva, Figma, Framer, Rive et Notion afin de concevoir des identités visuelles modernes, cohérentes et adaptées aux besoins de chaque marque. Chaque outil est sélectionné en fonction du projet afin de garantir un rendu premium et professionnel.'
    },
    {
      q: 'Travaillez-vous avec des startups ou des marques déjà établies ?',
      a: 'Nous collaborons aussi bien avec des startups qu’avec des marques déjà établies souhaitant renforcer ou moderniser leur image. Que ce soit pour lancer une nouvelle marque ou repositionner une identité existante, notre objectif reste le même : créer une image forte, cohérente et différenciante.'
    },
    {
      q: 'Comment se déroule votre processus de création ?',
      a: 'Chaque projet débute par une phase d’échange et d’analyse stratégique afin de comprendre votre vision, vos objectifs et vos besoins. Nous développons ensuite une direction créative adaptée à votre univers avant de concevoir les éléments visuels de votre marque. Tout au long du processus, nous privilégions la collaboration, la clarté et une approche sur mesure.'
    },
    {
      q: 'Pouvez-vous refaire le design de ma marque existante ?',
      a: 'Oui. Nous pouvons repenser et moderniser une identité visuelle tout en conservant l’essence de votre marque. L’objectif est d’améliorer l’image, la cohérence et l’expérience globale afin de créer une présence plus professionnelle, premium et impactante.'
    }
  ];

  return (
    <section className="faq reveal">
      <h2>Ce que vous devez savoir.</h2>
      <div className="faqGrid">
        <CTA dark/>
        <div>
          {qs.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}<span>+</span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
