import {createContext,useContext,useEffect,useMemo,useState} from 'react';
import {translations} from '../data/translations.js';
import {getLanguageFromPath, localizedPath, stripLanguagePrefix} from '../utils/routing.js';

const SitePreferencesContext=createContext(null);

const translateText=(value,lang)=>{
  if(lang==='fr'||typeof value!=='string')return value;
  const lead=value.match(/^\s*/)?.[0]||'';
  const trail=value.match(/\s*$/)?.[0]||'';
  const core=value.trim();
  if(!core)return value;
  return lead+(translations[core]||core)+trail;
};

function translateDocument(lang){
  const root=document.getElementById('root');
  if(!root)return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const parent=node.parentElement;
    if(!parent||['SCRIPT','STYLE'].includes(parent.tagName)||parent.closest('[data-no-translate="true"]'))return;
    if(node.__frOriginal===undefined)node.__frOriginal=node.nodeValue;
    node.nodeValue=lang==='fr'?node.__frOriginal:translateText(node.__frOriginal,'en');
  });
  root.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{
    if(el.closest('[data-no-translate="true"]'))return;
    ['placeholder','aria-label','title'].forEach(attr=>{
      if(!el.hasAttribute(attr))return;
      const key=`data-fr-${attr}`;
      if(!el.hasAttribute(key))el.setAttribute(key,el.getAttribute(attr));
      const original=el.getAttribute(key);
      el.setAttribute(attr,lang==='fr'?original:translateText(original,'en'));
    });
  });
  document.documentElement.lang=lang;
}

export function SitePreferencesProvider({children}){
  const[theme,setTheme]=useState(()=>localStorage.getItem('da-theme')||'light');
  const[language,setLanguage]=useState(()=>getLanguageFromPath());

  useEffect(()=>{
    document.documentElement.dataset.theme=theme;
    localStorage.setItem('da-theme',theme);
  },[theme]);

  useEffect(()=>{
    localStorage.setItem('da-language',language);
    let frame=requestAnimationFrame(()=>translateDocument(language));
    const observer=new MutationObserver(()=>{
      cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>translateDocument(language));
    });
    const root=document.getElementById('root');
    if(root)observer.observe(root,{childList:true,subtree:true});
    return()=>{cancelAnimationFrame(frame);observer.disconnect()};
  },[language]);

  useEffect(()=>{
    const syncLanguageFromUrl=()=>setLanguage(getLanguageFromPath());
    window.addEventListener('popstate',syncLanguageFromUrl);
    return()=>window.removeEventListener('popstate',syncLanguageFromUrl);
  },[]);

  const value=useMemo(()=>({
    theme,language,
    t:(value)=>translateText(value,language),
    toggleTheme:()=>setTheme(v=>v==='dark'?'light':'dark'),
    toggleLanguage:()=>setLanguage(current=>{
      const next=current==='fr'?'en':'fr';
      const internalPath=stripLanguagePrefix(window.location.pathname);
      window.history.pushState({},'',localizedPath(internalPath,next));
      window.dispatchEvent(new PopStateEvent('popstate'));
      return next;
    })
  }),[theme,language]);

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences(){
  const value=useContext(SitePreferencesContext);
  if(!value)throw new Error('useSitePreferences must be used inside SitePreferencesProvider');
  return value;
}
