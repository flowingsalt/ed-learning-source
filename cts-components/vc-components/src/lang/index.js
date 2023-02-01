import enApp from './en-US.json';
import esApp from './es-US.json';

function getLocaleFile(locale) {
  // This can be optimised to use dynamic imports when we move to AMP
  switch (locale) {
    case 'en-US':
      {
        return enApp;
      }

    case 'es-US':
      {
        return esApp;
      }

    default:
      {
        return {};
      }
  }
}

export function getFileForTranslations() {
  return enApp;
}
export default getLocaleFile;