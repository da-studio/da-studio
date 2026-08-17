export const getLanguageFromPath = (pathname = window.location.pathname) => {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return firstSegment === 'en' ? 'en' : 'fr';
};

export const stripLanguagePrefix = (pathname = window.location.pathname) => {
  const stripped = pathname.replace(/^\/(fr|en)(?=\/|$)/, '');
  return stripped || '/';
};

export const localizedPath = (path, language = getLanguageFromPath()) => {
  const cleanPath = path === '/' ? '' : path.replace(/^\/(fr|en)(?=\/|$)/, '');
  return `/${language}${cleanPath}`;
};
