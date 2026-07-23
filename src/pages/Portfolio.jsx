import { projects } from '../data/projects.js';
import { A } from '../data/site.js';
import { go } from '../App.jsx';
import Footer from '../components/Footer.jsx';

export default function Portfolio(){
  return (
    <>
      <section className="portfolioCinema reveal">
        <div className="portfolioCinemaText">
          <p className="eyebrow">Portfolio</p>
          <h1>Nous construisons des marques claires, cohérentes et faites pour durer.</h1>
          <p>Une sélection de systèmes visuels pensés comme des univers complets : identité, direction artistique, palette, supports et expérience de marque.</p>
        </div>
        <div className="cinemaDeck" aria-label="Aperçu des projets">
          {projects.slice(0,5).map((p,i)=>(
            <button key={p.slug} className="cinemaCard" style={{'--i':i}} onClick={()=>go('/projets/'+p.slug)}>
              <img src={A+p.cover} alt={p.name}/>
              <span>{p.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="portfolioDirectory reveal">
        <div className="sectionHead">
          <p className="eyebrow">Sélection</p>
          <h2>Chaque projet est une identité pensée comme une signature.</h2>
        </div>
        <div className="portfolioRows">
          {projects.map((p,index)=>(
            <article key={p.slug} className="portfolioRow" onClick={()=>go('/projets/'+p.slug)}>
              <span>{String(index+1).padStart(2,'0')}</span>
              <h3>{p.name}</h3>
              <p>{p.cat}</p>
              <img src={A+p.cover} alt={p.name}/>
              <b>Découvrir →</b>
            </article>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}
