import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getLocaleFile from '../lang';
import PageLayout2ColDesktop from './PageLayout2ColDesktop';
import PageLayout2ColMobile from './PageLayout2ColMobile';
export function PageLayout2ColBody(props) {
  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down('lg');
  });
  return isMobile ? /*#__PURE__*/React.createElement(PageLayout2ColMobile, props) : /*#__PURE__*/React.createElement(PageLayout2ColDesktop, props);
}
PageLayout2ColBody.propTypes = {
  content: PropTypes.node.isRequired,
  mobileNav: PropTypes.node.isRequired,
  desktopNav: PropTypes.node.isRequired,
  banner: PropTypes.node,
  backButton: PropTypes.node,
  component: PropTypes.string,
  navFooter: PropTypes.node
};
PageLayout2ColBody.defaultProps = {
  banner: null,
  backButton: null,
  component: 'main',
  navFooter: null
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(PageLayout2ColBody, props));
});