import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { withStyles } from 'tss-react/mui';
import { styles } from './PageHeader.styles';
/* eslint-disable react/jsx-props-no-spreading */

function PageHeader(props) {
  var title = props.title,
      eyebrow = props.eyebrow,
      subtitle = props.subtitle,
      icon = props.icon,
      classes = props.classes,
      domProps = _objectWithoutProperties(props, ["title", "eyebrow", "subtitle", "icon", "classes"]);

  var titleGroup = /*#__PURE__*/React.createElement("div", _extends({
    className: classes.root
  }, domProps), eyebrow && /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle2",
    component: "p",
    className: classes.eyebrow
  }, eyebrow), /*#__PURE__*/React.createElement(Typography, {
    variant: "h1",
    component: "h1",
    className: classes.title
  }, title), subtitle && /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    component: "p",
    className: classes.subtitle
  }, subtitle));
  return icon ? /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, icon, titleGroup) : titleGroup;
}

PageHeader.propTypes = {
  title: PropTypes.node.isRequired,
  eyebrow: PropTypes.node,
  subtitle: PropTypes.node,
  icon: PropTypes.node,
  classes: PropTypes.object // used to override default styles

};
PageHeader.defaultProps = {
  eyebrow: undefined,
  subtitle: undefined,
  icon: undefined,
  classes: {}
};
export default withStyles(PageHeader, styles, {
  name: 'PageHeader'
});