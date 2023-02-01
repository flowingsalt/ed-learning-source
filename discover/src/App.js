import React from 'react';
import { IntlProvider } from 'react-intl';
import TopLevelThemeProvider from '@hmhco/toplevel-theme-provider';
import ctsDefaultTheme from '@hmhco/cts-default-theme';
import LocaleProvider from '@hmhco/i18n-react/src/LocaleProvider/LocaleProvider';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { getLocaleFile } from './lang';
import AppViewByRole from './AppViewByRole';
export var AppWithoutRouter = function AppWithoutRouter() {
  return /*#__PURE__*/React.createElement(LocaleProvider, null, function (languageKey) {
    return /*#__PURE__*/React.createElement(IntlProvider, {
      locale: languageKey,
      defaultlocale: "en-US",
      messages: getLocaleFile(languageKey)
    }, /*#__PURE__*/React.createElement(TopLevelThemeProvider, {
      theme: ctsDefaultTheme
    }, /*#__PURE__*/React.createElement(AppViewByRole, null)));
  });
};

var App = function App() {
  return /*#__PURE__*/React.createElement(Router, {
    basename: "ui/#"
  }, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/discover/:programId/lesson"
  }, null), /*#__PURE__*/React.createElement(Route, null, /*#__PURE__*/React.createElement(AppWithoutRouter, null))));
};

export default App;