import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import useStyles from './MobileMenuItem.styles';

var MobileMenuItem = function MobileMenuItem(_ref) {
  var label = _ref.label,
      active = _ref.active,
      component = _ref.component,
      labelProps = _ref.labelProps,
      componentProps = _objectWithoutProperties(_ref, ["label", "active", "component", "labelProps"]);

  var _useStyles = useStyles(componentProps),
      classes = _useStyles.classes,
      cx = _useStyles.cx;

  return /*#__PURE__*/React.createElement(ListItem, {
    className: classes.listItem
  }, /*#__PURE__*/React.createElement(Link, _extends({
    component: component,
    className: cx(classes.item, {
      active: active
    })
  }, componentProps), /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "h4",
    component: "span"
  }, labelProps), label)));
};

MobileMenuItem.defaultProps = {
  component: 'a',
  labelProps: {},
  active: false
};
MobileMenuItem.propTypes = {
  label: PropTypes.node.isRequired,

  /** allows overriding HTML element used;
   * other props will be passed to it */
  component: PropTypes.elementType,

  /** additional props for MUI Typography */
  labelProps: PropTypes.object,
  active: PropTypes.bool
};
export default MobileMenuItem;