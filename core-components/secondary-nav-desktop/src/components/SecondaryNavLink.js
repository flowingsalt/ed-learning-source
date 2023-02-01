import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import useStyles from './SecondaryNavLink.styles';

var SecondaryNavLink = function SecondaryNavLink(props) {
  var children = props.children,
      to = props.to,
      isActive = props.isActive,
      otherProps = _objectWithoutProperties(props, ["children", "to", "isActive"]);

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(NavLink, _extends({
    activeClassName: "selected",
    to: to,
    className: classes.root,
    isActive: isActive
  }, otherProps), /*#__PURE__*/React.createElement(Typography, null, children));
};

SecondaryNavLink.defaultProps = {
  isActive: undefined // react-router-dom will handle it

};
SecondaryNavLink.propTypes = {
  children: PropTypes.node.isRequired,

  /** react-router-dom NavLink prop */
  to: PropTypes.string.isRequired,

  /** react-router-dom NavLink prop */
  isActive: PropTypes.func
};
export default SecondaryNavLink;