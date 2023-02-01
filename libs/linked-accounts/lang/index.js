import en from './en-US.json';
import es from './es-US.json';
var LOCALES = {
  'en-US': en,
  'es-US': es
};

var getLocaleFile = function getLocaleFile(locale) {
  return LOCALES[locale] || {};
};

export function getFileForTranslations() {
  return en;
}
export default getLocaleFile;