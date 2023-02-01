import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { deepmerge } from '@mui/utils';
import Avatar from '@mui/material/Avatar';
var useStyles = makeStyles({
  name: 'BaseAvatar'
})(function (theme) {
  var _theme$coreComponents;

  return deepmerge({
    sm: {
      width: 'var(--ebl-avatar-sm)',
      height: 'var(--ebl-avatar-sm)',
      fontSize: "1rem",
      fontWeight: "500",
      letterSpacing: "0.01875rem"
    },
    md: {
      width: 'var(--ebl-avatar-md)',
      height: 'var(--ebl-avatar-md)',
      fontSize: "1.5rem",
      fontWeight: "500",
      letterSpacing: "0.016875rem"
    },
    lg: {
      width: 'var(--ebl-avatar-lg)',
      height: 'var(--ebl-avatar-lg)',
      fontSize: "3.5rem",
      fontWeight: "bold",
      letterSpacing: "0.03875rem"
    },
    xl: {
      width: 'var(--ebl-avatar-xl)',
      height: 'var(--ebl-avatar-xl)',
      fontSize: "4rem",
      fontWeight: "bold",
      letterSpacing: "0.044375rem"
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.BaseAvatar);
});

function BaseAvatar(props) {
  var size = props.size,
      className = props.className,
      other = _objectWithoutProperties(props, ["size", "className"]);

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes,
      cx = _useStyles.cx;

  return /*#__PURE__*/React.createElement(Avatar, _extends({
    className: cx(classes[size], className),
    "aria-hidden": "true"
  }, other));
}

BaseAvatar.propTypes = _objectSpread(_objectSpread({}, Avatar.propTypes), {}, {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired
});
export default BaseAvatar;