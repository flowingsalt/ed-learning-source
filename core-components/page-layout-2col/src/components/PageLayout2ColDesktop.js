import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { useIntl } from 'react-intl';
import useStyles from './PageLayout2Col.styles';

var PageLayout2ColDesktop = function PageLayout2ColDesktop(props) {
  var banner = props.banner,
      content = props.content,
      desktopNav = props.desktopNav,
      backButton = props.backButton,
      component = props.component,
      navFooter = props.navFooter;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var backAriaLabel = formatMessage({
    id: 'PageLayout2Col.ariaLabel.back'
  });
  var navAriaLabel = formatMessage({
    id: 'PageLayout2Col.ariaLabel.nav'
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, banner, /*#__PURE__*/React.createElement(Container, {
    maxWidth: "xl",
    className: classes.mainContainer
  }, backButton && /*#__PURE__*/React.createElement("nav", {
    "aria-label": backAriaLabel
  }, backButton), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: classes.innerContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 3
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": navAriaLabel,
    className: classes.desktopNav
  }, desktopNav), navFooter), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    lg: 9
  }, /*#__PURE__*/React.createElement(Container, {
    component: component
  }, content)))));
};

PageLayout2ColDesktop.propTypes = {
  banner: PropTypes.node,
  content: PropTypes.node,
  desktopNav: PropTypes.node,
  backButton: PropTypes.node,
  component: PropTypes.string,
  navFooter: PropTypes.node
};
PageLayout2ColDesktop.defaultProps = {
  banner: null,
  content: null,
  desktopNav: null,
  backButton: null,
  component: 'main',
  navFooter: null
};
export default PageLayout2ColDesktop;