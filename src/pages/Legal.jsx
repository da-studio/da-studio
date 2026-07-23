import Footer from '../components/Footer.jsx';

const legalSections = [
  {
    number: '01',
    title: 'Éditeur du site',
    content: (
      <>
        <p><strong>D&A Studio</strong></p>
        <p>Studio spécialisé en stratégie de marque, direction artistique et création d’identités visuelles.</p>
        <p>
          E-mail : <a href="mailto:da.studio213@gmail.com">da.studio213@gmail.com</a><br />
          WhatsApp : <a href="https://wa.me/855967885366" target="_blank" rel="noreferrer">+855 96 788 5366</a>
        </p>
      </>
    ),
  },
  {
    number: '02',
    title: 'Responsable de la publication',
    content: (
      <p>
        Le responsable de la publication est <strong>D&A Studio</strong>. Pour toute question concernant le site ou son contenu, vous pouvez nous contacter à l’adresse <a href="mailto:da.studio213@gmail.com">da.studio213@gmail.com</a>.
      </p>
    ),
  },
  {
    number: '03',
    title: 'Hébergement',
    content: (
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, California 91723, États-Unis.
      </p>
    ),
  },
  {
    number: '04',
    title: 'Propriété intellectuelle',
    content: (
      <p>
        L’ensemble des contenus présents sur ce site — notamment les textes, identités visuelles, logos, illustrations, photographies, maquettes, créations graphiques, animations et vidéos — est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction, diffusion, modification, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable de D&A Studio est strictement interdite.
      </p>
    ),
  },
  {
    number: '05',
    title: 'Responsabilité',
    content: (
      <p>
        D&A Studio s’efforce de fournir des informations exactes et régulièrement mises à jour. Toutefois, aucune garantie ne peut être donnée quant à l’exactitude, l’exhaustivité ou l’actualité des informations publiées. L’utilisation du site se fait sous la seule responsabilité de l’utilisateur.
      </p>
    ),
  },
  {
    number: '06',
    title: 'Liens externes',
    content: (
      <p>
        Le site peut contenir des liens vers des sites tiers. D&A Studio ne peut être tenu responsable du contenu, de la disponibilité ou des pratiques de confidentialité de ces sites externes.
      </p>
    ),
  },
  {
    number: '07',
    title: 'Droit applicable',
    content: (
      <p>
        Les présentes mentions légales sont régies par les lois applicables au Royaume du Cambodge. Tout litige relatif à l’utilisation du site relèvera de la compétence des juridictions compétentes.
      </p>
    ),
  },
  {
    number: '08',
    title: 'Contact',
    content: (
      <p>
        Pour toute demande d’information, de collaboration ou d’assistance :<br />
        <a href="mailto:da.studio213@gmail.com">da.studio213@gmail.com</a><br />
        <a href="https://wa.me/855967885366" target="_blank" rel="noreferrer">WhatsApp : +855 96 788 5366</a>
      </p>
    ),
  },
];

export default function Legal() {
  return (
    <>
      <section className="legalHero reveal">
        <p className="eyebrow">D&A Studio · Informations juridiques</p>
        <h1>Mentions<br /><em>légales</em></h1>
        <p className="legalIntro">
          Retrouvez ici les informations relatives à l’édition, à l’hébergement et à l’utilisation du site D&A Studio.
        </p>
        <div className="legalMeta">
          <span>Dernière mise à jour</span>
          <strong>Juillet 2026</strong>
        </div>
      </section>

      <section className="legalContent reveal">
        {legalSections.map((section) => (
          <article className="legalRow" key={section.number}>
            <span className="legalNumber">{section.number}</span>
            <h2>{section.title}</h2>
            <div className="legalText">{section.content}</div>
          </article>
        ))}
      </section>

      <Footer />
    </>
  );
}
