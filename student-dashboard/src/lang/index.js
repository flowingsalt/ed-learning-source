import en from './en-US.json';
import es from './es-US.json';
var LOCALES = {
  'en-US': en,
  'es-US': es
};
export function getLocaleFile(locale) {
  return LOCALES[locale] || {};
}
export default getLocaleFile;