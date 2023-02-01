import React from 'react';
import { IntlProvider } from 'react-intl';
import ctsDefaultTheme from '@hmhco/cts-default-theme';
import TopLevelThemeProvider from '@hmhco/toplevel-theme-provider';
import LocaleProvider from '@hmhco/i18n-react/src/LocaleProvider/LocaleProvider';
import { getLocaleFile } from './lang';
import GlobalAlertNotification from './GlobalAlertNotification';

var App = function App() {
  return /*#__PURE__*/React.createElement(LocaleProvider, null, function (languageKey) {
    return /*#__PURE__*/React.createElement(IntlProvider, {
      locale: languageKey,
      defaultlocale: "en-US",
      messages: getLocaleFile(languageKey)
    }, /*#__PURE__*/React.createElement(TopLevelThemeProvider, {
      theme: ctsDefaultTheme
    }, /*#__PURE__*/React.createElement(GlobalAlertNotification, null)));
  });
};

export default App;