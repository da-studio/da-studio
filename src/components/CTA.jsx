import {useProjectStart} from './ProjectStartModal.jsx';
export function ExternalCTA({children='DÉMARRER MON PROJET →',light=false}){
  const{openProjectStart}=useProjectStart();
  return <a href="#project-start" onClick={e=>{e.preventDefault();openProjectStart();}} className={light?'btn ghost':'btn'}>{children}</a>
}
export default function CTA({dark=false}){return <section className={dark?'ctaPanel dark reveal':'ctaPanel reveal'}><p className="eyebrow">Démarrer</p><h2>{dark?'Prêt(e) à transformer votre marque ?':'À votre tour.'}</h2><p>{dark?'Remplissez notre espace projet. Nous vous recontactons sous 24h avec les prochaines étapes.':'Votre marque mérite une identité pensée avec stratégie, créativité et précision.'}</p><ExternalCTA>{dark?'DÉMARRER MON PROJET →':'CONSTRUIRE MA MARQUE →'}</ExternalCTA></section>}
