import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { useIntl } from 'react-intl';
import useStyles from './PageLayout2Col.styles';

var PageLayout2ColMobile = function PageLayout2ColMobile(props) {
  var banner = props.banner,
      content = props.content,
      mobileNav = props.mobileNav,
      backButton = props.backButton,
      component = props.component;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var backAriaLabel = formatMessage({
    id: 'PageLayout2Col.ariaLabel.back'
  });
  var primaryNavAriaLabel = formatMessage({
    id: 'PageLayout2Col.ariaLabel.nav'
  });
  return /*#__PURE__*/React.createElement(Container, {
    maxWidth: "xl"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": primaryNavAriaLabel
  }, mobileNav), banner, backButton && /*#__PURE__*/React.createElement("nav", {
    "aria-label": backAriaLabel,
    className: classes.backBtnMobile
  }, backButton), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: classes.innerContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    lg: 9
  }, /*#__PURE__*/React.createElement(Container, {
    component: component
  }, content))));
};

PageLayout2ColMobile.propTypes = {
  banner: PropTypes.node,
  content: PropTypes.node,
  mobileNav: PropTypes.node,
  backButton: PropTypes.node,
  component: PropTypes.string
};
PageLayout2ColMobile.defaultProps = {
  banner: null,
  content: null,
  mobileNav: null,
  backButton: null,
  component: 'main'
};
export default PageLayout2ColMobile;