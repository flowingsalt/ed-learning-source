import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { eventRegistry as events } from '@hmhco/amp-core-events';
import React from 'react';
import PropTypes from 'prop-types';
import { addContext } from '@hmhco/client-monitoring/src/context/monitoringContextSetters';
import getLocale from '../localeApi/getLocale';
import { getLocaleFromStorage, defaultLocale } from '../localeApi/storageAccessors';
var VALID_LOCALES = {
  'en-US': true,
  'es-US': true
};
export function getValidLocal(response) {
  if (!VALID_LOCALES[response]) {
    return defaultLocale;
  }

  return response;
}
/**
 * Helper for App level components (like apps/my-schools)
 *
 * It read the current language from session storage and listen to language changes, keeping the App up to date.
 * That language key is passed to the direct child.
 * Currently this is expected that the App declare the IntlProvider.
 * What is important here is that LocaleProvider don't expect an existing react-intl context in the upper level.
 *
 * @param children function receiving the current language key languageKey,
 *        usage: `languageKey => (<App languageKey={languageKey} />)`
 */

var LocaleProvider = function LocaleProvider(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState(getLocaleFromStorage() || defaultLocale),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentLocale = _React$useState2[0],
      setCurrentLocale = _React$useState2[1];

  React.useEffect(function () {
    // This listens for locale changes but may miss the intial DMPS load
    var handleLocaleChange = function handleLocaleChange(_ref2) {
      var detail = _ref2.detail;
      var validLocale = getValidLocal(detail);
      addContext([{
        key: 'userLocale',
        value: validLocale
      }]);
      setCurrentLocale(validLocale);
    };

    window.addEventListener(events.LOCALE_UPDATE, handleLocaleChange); // This call gets the value returned from DMPS as the listener above can miss the event

    getLocale().then(function (newLocale) {
      return handleLocaleChange({
        detail: newLocale
      });
    });
    return function () {
      window.removeEventListener(events.LOCALE_UPDATE, handleLocaleChange);
    };
  }, []); // function form child expected to receive the locale

  return children(currentLocale);
};

LocaleProvider.propTypes = {
  children: PropTypes.func.isRequired
};
export default LocaleProvider;