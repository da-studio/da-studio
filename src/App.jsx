import {useEffect,useState} from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Offer from './pages/Offer.jsx';
import Project from './pages/Project.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';
export const route=()=>location.hash.replace('#','')||'/';
export const go=p=>{location.hash=p;window.scrollTo({top:0,behavior:'smooth'});};
export default function App(){const[p,setP]=useState(route());useEffect(()=>{const f=()=>setP(route());addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>io.observe(el)),50);return()=>io.disconnect()},[p]);let page=p==='/'?<Home/>:p==='/about'?<About/>:p==='/portfolio'?<Portfolio/>:p==='/contact'?<Contact/>:p==='/mentions-legales'?<Legal/>:p.startsWith('/offres/')?<Offer id={p.split('/').pop()}/>:p.startsWith('/projets/')?<Project slug={p.split('/').pop()}/>:<NotFound/>;return <>{introVisible&&<IntroScreen onComplete={()=>setIntroVisible(false)}/>}<div className={introVisible?'siteShell introPending':'siteShell introReady'}><Header/><main>{page}</main></div></>}
