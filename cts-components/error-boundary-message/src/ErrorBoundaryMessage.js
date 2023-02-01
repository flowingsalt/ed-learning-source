/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import { FormattedMessage, IntlProvider } from 'react-intl';
import LocaleProvider from '@hmhco/i18n-react/src/LocaleProvider/LocaleProvider';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import ctsDefaultTheme from '@hmhco/cts-default-theme';
import getLocaleFile from './lang';
var useStyles = makeStyles({
  name: 'ErrorBoundaryMessage'
})({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'var(--ebl-empty-headline-padding)',
    backgroundColor: 'var(--ebl-empty-headline-bg)',
    borderRadius: '0.5rem',
    height: '100%',
    justifyContent: 'center'
  },
  message: {
    fontStyle: 'italic'
  }
});

var ErrorBoundaryMessage = function ErrorBoundaryMessage(props) {
  var errorMessage = props.errorMessage,
      stackTrace = props.stackTrace;
  useEffect(function () {
    logErrorWithContext('errorBoundaryTriggered', [{
      key: 'errorMessage',
      value: errorMessage
    }, {
      key: 'stackTrace',
      value: stackTrace
    }]);
  }, [errorMessage]);

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var env = getEnvironment();
  return /*#__PURE__*/React.createElement(StyledEngineProvider, {
    injectFirst: true
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: ctsDefaultTheme
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    "data-testid": "ErrorBoundaryMessageComponent"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    component: "h1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "errorBoundary.errorMessage"
  })), env !== 'prod' && /*#__PURE__*/React.createElement("p", {
    className: classes.message
  }, errorMessage))));
};

ErrorBoundaryMessage.propTypes = {
  errorMessage: PropTypes.string,
  stackTrace: PropTypes.string
};
ErrorBoundaryMessage.defaultProps = {
  errorMessage: '',
  stackTrace: ''
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(LocaleProvider, null, function (languageKey) {
    return /*#__PURE__*/React.createElement(IntlProvider, {
      locale: languageKey,
      defaultlocale: "en-US",
      messages: getLocaleFile(languageKey)
    }, /*#__PURE__*/React.createElement(ErrorBoundaryMessage, props));
  });
});