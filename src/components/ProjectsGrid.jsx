import { projects } from '../data/projects.js';
import { A } from '../data/site.js';
import { go } from '../App.jsx';

export default function ProjectsGrid({ compact = false }) {
  return (
    <section className="section portfolioEditorial reveal">
      <div className="sectionHead centeredEditorialHead centeredPortfolioHead">
        <p className="eyebrow">Portfolio</p>
        <h2>Des univers complets, construits comme des signatures de marque.</h2>
      </div>

      <div className={compact ? 'projectGrid compact' : 'projectGrid'}>
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="projectCard"
            onClick={() => go('/projets/' + p.slug)}
            style={{ '--i': i }}
          >
            <img src={A + p.cover} alt={p.name} loading="lazy" />
            <div>
              <span>{p.cat}</span>
              <h3>{p.name}</h3>
              <b>Découvrir le projet →</b>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
