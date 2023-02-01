import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import useStyles from './PrimaryNavLink.styles';

var PrimaryNavLink = function PrimaryNavLink(props) {
  var to = props.to,
      isActive = props.isActive,
      children = props.children,
      domProps = _objectWithoutProperties(props, ["to", "isActive", "children"]);

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(NavLink, _extends({
    activeClassName: "selected",
    className: classes.root,
    to: to,
    isActive: isActive
  }, domProps), /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    color: "inherit"
  }, children));
};

PrimaryNavLink.defaultProps = {
  isActive: undefined // react-router-dom will handle it

};
PrimaryNavLink.propTypes = {
  children: PropTypes.node.isRequired,

  /** react-router-dom NavLink prop */
  to: PropTypes.string.isRequired,

  /** react-router-dom NavLink prop */
  isActive: PropTypes.func
};
export default PrimaryNavLink;