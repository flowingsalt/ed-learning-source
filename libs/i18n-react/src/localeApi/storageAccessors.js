import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { eventRegistry as events } from '@hmhco/amp-core-events';
export var defaultLocale = 'en-US';
export var setLocaleInSession = function setLocaleInSession(locale) {
  try {
    window.sessionStorage.setItem('locale', locale);
  } catch (error) {
    logErrorWithContext('sessionStorage setting failed', [{
      key: 'item',
      value: locale
    }, {
      key: 'errorMessage',
      value: error
    }]);
  }
}; // use this to get your current language setting from local storage

export var getLocaleFromStorage = function getLocaleFromStorage() {
  return window.sessionStorage.getItem('locale');
};

function setLanguageAndSendEvent(locale) {
  setLocaleInSession(locale);
  var localeEvent = new CustomEvent(events.LOCALE_UPDATE, {
    detail: locale
  });
  window.dispatchEvent(localeEvent);
  var htmlTag = document.getElementsByTagName('html')[0];

  if (htmlTag) {
    htmlTag.lang = locale;
  }
}

export function setLanguage(language) {
  if (language) {
    setLanguageAndSendEvent(language);
    return language;
  }

  setLanguageAndSendEvent(defaultLocale);
  return defaultLocale;
}