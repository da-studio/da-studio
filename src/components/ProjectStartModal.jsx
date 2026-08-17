import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { NOTION, GOOGLE_FORM } from '../data/site.js';

const ProjectStartContext = createContext(null);

export function useProjectStart() {
  const value = useContext(ProjectStartContext);
  if (!value) throw new Error('useProjectStart must be used inside <ProjectStartProvider>.');
  return value;
}

export function ProjectStartModal({ notionLink = NOTION, googleFormLink = GOOGLE_FORM, onClose }) {
  const firstOptionRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    if (firstOptionRef.current) firstOptionRef.current.focus();
    return () => { if (previous && previous.focus && previous !== document.body) previous.focus(); };
  }, []);

  return (
    <div
      className="projectStartOverlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="presentation"
    >
      <div className="projectStartModal" role="dialog" aria-modal="true" aria-labelledby="projectStartTitle">
        <button type="button" className="projectStartClose" onClick={onClose} aria-label="Fermer">
          ×
        </button>

        <p className="projectStartEyebrow">D&A Studio</p>
        <h3 className="projectStartTitle" id="projectStartTitle">Démarrer votre projet</h3>
        <p className="projectStartHint">Choisissez la plateforme qui vous convient.</p>

        <div className="projectStartActions" data-no-translate="true">
          <a
            ref={firstOptionRef}
            className="projectStartOption projectStartOptionNotion"
            href={notionLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <strong>Notion</strong>
            <span>Français</span>
          </a>

          <a
            className="projectStartOption projectStartOptionGoogle"
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <strong>Google Form</strong>
            <span>English</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectStartProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openProjectStart = () => setOpen(true);
  const closeProjectStart = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => { if (e.key === 'Escape') closeProjectStart(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  const value = { openProjectStart, closeProjectStart };

  return (
    <ProjectStartContext.Provider value={value}>
      {children}
      {open && <ProjectStartModal onClose={closeProjectStart} />}
    </ProjectStartContext.Provider>
  );
}