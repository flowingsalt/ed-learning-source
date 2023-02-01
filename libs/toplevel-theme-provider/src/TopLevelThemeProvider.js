import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { TssCacheProvider } from 'tss-react';
import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline'; // forcing where emotion injects leads to a more predictable behaviour

var documentHead = document.querySelector('head');
var insertionPoint = document.createElement('meta');
insertionPoint.setAttribute('name', 'inject-style');
documentHead.appendChild(insertionPoint);
var muiCache = createCache({
  key: 'mui',
  insertionPoint: insertionPoint
});
var tssCache = createCache({
  key: 'tss'
});

var TopLevelThemeProvider = function TopLevelThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(CacheProvider, {
    value: muiCache
  }, /*#__PURE__*/React.createElement(TssCacheProvider, {
    value: tssCache
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(CssBaseline, null), children)));
};

TopLevelThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
export default TopLevelThemeProvider;