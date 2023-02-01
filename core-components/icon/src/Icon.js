import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/no-danger */


import React from 'react';
import PropTypes from 'prop-types';
import keyMirror from '@hmhco/react-utils/src/keyMirror';

function createIcon(svg) {
  return {
    __html: svg
  };
}

var DISPLAY_TYPE_MAP = {
  outlined: 'flex',
  "default": 'block',
  noDisplayValue: null,
  inline: 'inline',
  inlineBlock: 'inline-block'
};
export var DISPLAY_TYPES = keyMirror(DISPLAY_TYPE_MAP);

var Icon = function Icon(_ref) {
  var size = _ref.size,
      svg = _ref.svg,
      colour = _ref.colour,
      display = _ref.display,
      Component = _ref.Component,
      domProps = _objectWithoutProperties(_ref, ["size", "svg", "colour", "display", "Component"]);

  var displayType = DISPLAY_TYPE_MAP[display];
  var displayValue = {
    display: displayType
  };
  return /*#__PURE__*/React.createElement(Component, _extends({}, domProps, {
    style: _objectSpread({
      height: "".concat(size, "px"),
      width: "".concat(size, "px"),
      flexShrink: 0,
      fill: colour
    }, displayValue),
    dangerouslySetInnerHTML: createIcon(svg)
  }));
};

Icon.defaultProps = {
  colour: '#000',
  display: 'default',
  Component: 'div'
};
Icon.propTypes = {
  /**  Import the svg you want to use from @ed/baseline and use this prop */
  svg: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  colour: PropTypes.string,
  display: PropTypes.oneOf(Object.keys(DISPLAY_TYPES)),
  Component: PropTypes.node
};
export default Icon;