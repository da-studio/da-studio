import {A} from '../data/site.js';
import {useSitePreferences} from '../context/SitePreferences.jsx';
import Process from '../components/Process.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

const projects=[
  {
    slug:'aurelys',name:'AURELYS',sector:'Mode · Identité de luxe',image:A+'brandboards/aurelys.png',
    title:'Une vision contemporaine de l’élégance féminine.',
    paragraphs:[
      'AURELYS est née de l’ambition de créer une maison de mode capable d’allier raffinement, modernité et intemporalité. L’enjeu était de construire une présence visuelle qui exprime une féminité assumée sans recourir aux codes trop attendus du luxe.',
      'Nous avons imaginé une identité complète fondée sur une typographie expressive, une palette bordeaux et poudrée, ainsi qu’une direction artistique délicate. Chaque choix — du dessin du logotype aux compositions éditoriales — a été pensé pour donner à la marque une allure cohérente, sophistiquée et immédiatement identifiable.',
      'Le résultat est un univers de marque élégant et durable, suffisamment distinctif pour capter l’attention et suffisamment flexible pour accompagner AURELYS sur ses collections, ses campagnes et l’ensemble de ses supports.'
    ]
  },
  {
    slug:'proud',name:'PROUD',sector:'Skincare · Beauté premium',image:A+'brandboards/proud.png',
    title:'Faire de la confiance un véritable territoire de marque.',
    paragraphs:[
      'PROUD porte une vision de la beauté naturelle, moderne et consciente. La marque avait besoin d’une identité capable de traduire la qualité de ses soins tout en créant une relation plus émotionnelle avec une clientèle en quête de confiance et de simplicité.',
      'Nous avons développé un système visuel doux mais affirmé, construit autour de nuances rosées, d’un bordeaux profond et d’une typographie élégante. La direction artistique privilégie la lumière, la précision et les compositions épurées afin de valoriser les produits sans jamais perdre la dimension humaine de la marque.',
      'Cette identité positionne désormais PROUD comme une marque skincare désirable, crédible et mémorable, avec un langage visuel cohérent qui fonctionne aussi bien sur le packaging que dans les campagnes digitales.'
    ]
  },
  {
    slug:'diara',name:'DIARA',sector:'Joaillerie · Luxe intemporel',image:A+'brandboards/diara.png',
    title:'Révéler la préciosité sans jamais la surjouer.',
    paragraphs:[
      'DIARA avait pour ambition d’incarner une joaillerie raffinée, féminine et contemporaine. Notre défi consistait à évoquer la valeur, l’éclat et l’exclusivité avec une expression visuelle sobre, loin des clichés souvent associés à l’univers du bijou.',
      'Nous avons conçu un territoire graphique fondé sur des tons bruns profonds, des accents dorés et des compositions minimalistes. Le logotype et le symbole ont été travaillés comme de véritables signatures, capables d’exister avec force sur un écrin, un packaging ou une communication éditoriale.',
      'DIARA bénéficie aujourd’hui d’une identité précieuse et maîtrisée qui renforce sa crédibilité, distingue son offre et installe une expérience de marque cohérente à chaque point de contact.'
    ]
  },
  {
    slug:'lumea',name:'LUMEA',sector:'Cosmétiques · Rouge à lèvres',image:A+'brandboards/lumea.png',
    title:'Transformer un geste beauté en déclaration de caractère.',
    paragraphs:[
      'LUMEA est une marque de rouges à lèvres pensée pour célébrer l’affirmation de soi. Son identité devait exprimer immédiatement la sensualité, l’élégance et la force, tout en conservant une sophistication adaptée à un positionnement premium.',
      'Nous avons construit un univers intense autour du rouge profond, du noir et de contrastes graphiques assumés. La typographie, le monogramme et le traitement photographique forment un système cohérent qui donne à chaque produit une présence forte, presque iconique.',
      'Au-delà d’une simple identité cosmétique, LUMEA raconte désormais une histoire de confiance et d’expression personnelle. La marque dispose d’un langage visuel distinctif, capable de créer du désir et de rester reconnaissable dans un marché très concurrentiel.'
    ]
  },
  {
    slug:'enjoy',name:'ENJOY',sector:'Restauration · Pasta bar',image:A+'brandboards/enjoy.png',
    title:'Donner à la convivialité une allure singulière.',
    paragraphs:[
      'ENJOY devait se démarquer des codes traditionnels de la restauration italienne et proposer une expérience plus actuelle, chaleureuse et mémorable. La marque avait besoin d’une identité qui donne autant envie de partager un moment que de découvrir ses recettes.',
      'Nous avons imaginé un univers inspiré de l’art de vivre méditerranéen : une palette solaire, une typographie expressive et un langage graphique généreux. Chaque élément apporte du rythme et de la personnalité, tout en maintenant une cohérence premium sur les menus, les packagings et les supports de communication.',
      'Le résultat est une marque vivante et immédiatement identifiable, qui traduit la gourmandise et la convivialité avec une vraie direction créative, sans perdre la simplicité qui fait la force du concept.'
    ]
  },
  {
    slug:'orange',name:'ORANGE',sector:'Spa · Wellness',image:A+'brandboards/orange.png',
    title:'Créer un refuge visuel avant même l’expérience du soin.',
    paragraphs:[
      'ORANGE Spa & Wellness souhaitait installer une image capable de transmettre le bien-être, la chaleur et la sérénité dès le premier regard. L’objectif était de dépasser une esthétique simplement apaisante pour construire une marque véritablement distinctive.',
      'Nous avons développé une direction artistique solaire et sensorielle, portée par des nuances d’orange, de jaune et de rouge, équilibrées par des compositions aérées. La typographie et les éléments graphiques traduisent la douceur du soin tout en conservant une énergie contemporaine et premium.',
      'Cette identité transforme ORANGE en un univers cohérent et immersif. Elle crée une continuité naturelle entre la communication, les espaces et l’expérience proposée, tout en donnant à la marque une présence forte et reconnaissable.'
    ]
  }
];

export default function About(){
  const{t}=useSitePreferences();
  return <>
    <section className="studioLogoShowcase studioLogoShowcaseImageOnly reveal" aria-label={t('Sélection de logos créés par D&A Studio')}>
      <div className="studioLogoIntro">
        <span className="studioLogoKicker" aria-hidden="true">D&amp;A Studio — Selected marks</span>
        <h1 className="studioLogoTitle">LOGOFOLIO</h1>
        <span className="studioLogoRule" aria-hidden="true"/>
      </div>

      <figure className="studioLogoBoard studioLogoBoardImageOnly">
        <span className="studioLogoGlow" aria-hidden="true"/>
        <div className="studioLogoBoardVisual">
          <img src={A+'studio/logo-selection-da-studio.webp'} alt={t('Sélection de logos créés par D&A Studio')} loading="eager"/>
        </div>
      </figure>
    </section>

    <section className="studioProjectStories">
      {projects.map((project,index)=><article className={`studioStory reveal ${index%2?'studioStoryReverse':''}`} key={project.slug}>
        <a className="studioStoryVisual" href={`#/projets/${project.slug}`} aria-label={`${t('Découvrir le projet')} ${project.name}`}>
          <img src={project.image} alt={`Brandboard ${project.name}`} loading="lazy"/>
        </a>
        <div className="studioStoryCopy">
          <div className="studioStoryTopline"><span>{String(index+1).padStart(2,'0')}</span><p>{t(project.sector)}</p></div>
          <h2>{project.name}</h2>
          <h3>{t(project.title)}</h3>
          {project.paragraphs.map(paragraph=><p key={paragraph}>{t(paragraph)}</p>)}
          <a className="studioStoryLink" href={`#/projets/${project.slug}`}>{t('Découvrir le projet →')}</a>
        </div>
      </article>)}
    </section>

    <section className="studioEditorialManifesto reveal">
      <p className="eyebrow">{t('Notre conviction')}</p>
      <h2>{t('Une identité forte ne se contente pas d’être belle. Elle clarifie une vision, crée de la confiance et rend une marque inoubliable.')}</h2>
      <a className="btn" href="#/portfolio">{t('Découvrir tous nos projets →')}</a>
    </section>

    <Process/>
    <CTA/>
    <Footer/>
  </>;
}
