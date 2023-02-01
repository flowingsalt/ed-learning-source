import _defineProperty from "@babel/runtime/helpers/defineProperty";

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
import placeholderSvgXl from '@ed/baseline/icons/cts/xl.svg';
import classNames from 'classnames';
import Icon from '@hmhco/icon/src/Icon';
import useStyles from './CardThumb.styles';

var CardThumb = function CardThumb(props) {
  var name = props.name,
      thumb = props.thumb,
      _props$iconProps = props.iconProps,
      iconSvg = _props$iconProps.svg,
      iconSize = _props$iconProps.size,
      iconColor = _props$iconProps.color,
      iconBackground = _props$iconProps.background,
      iconTransform = _props$iconProps.transform,
      onClick = props.onClick,
      onKeyUp = props.onKeyUp,
      setOnHover = props.setOnHover,
      disabled = props.disabled;

  var _useStyles = useStyles(_objectSpread({
    iconBackground: iconBackground,
    iconTransform: iconTransform
  }, props)),
      classes = _useStyles.classes;

  var icon = iconSvg || placeholderSvgXl;
  return thumb ? /*#__PURE__*/React.createElement("div", {
    className: classNames(classes.media, _defineProperty({}, classes.disabled, disabled)),
    role: "button" // This role is to let Google Tag Manager know to treat this like a button
    ,
    "aria-hidden": "true" // Hide from screen-reader as the link below is the way to launch for screen-reader users

  }, /*#__PURE__*/React.createElement("input", {
    "data-testid": "card-thumb",
    type: "image",
    className: classes.image,
    src: thumb,
    alt: name,
    title: name,
    onClick: onClick,
    onKeyUp: onKeyUp,
    onMouseEnter: function onMouseEnter() {
      return setOnHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setOnHover(false);
    },
    tabIndex: -1
  })) : /*#__PURE__*/React.createElement("div", {
    className: classes.iconHolder,
    onClick: onClick,
    onKeyUp: onKeyUp,
    onMouseEnter: function onMouseEnter() {
      return setOnHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setOnHover(false);
    },
    role: "button" // This role is to let Google Tag Manager know to treat this like a button
    ,
    "aria-hidden": "true" // Hide from screen-reader as the link below is the way to launch for screen-reader users

  }, /*#__PURE__*/React.createElement(Icon, {
    className: classes.icon,
    svg: icon,
    size: iconSize,
    "data-testid": "card-icon",
    colour: iconColor
  }));
};

CardThumb.propTypes = {
  thumb: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  iconProps: PropTypes.shape({
    svg: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    transform: PropTypes.string,
    padding: PropTypes.string
  }),
  onClick: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  setOnHover: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
CardThumb.defaultProps = {
  iconProps: {
    size: '64',
    color: 'var(--ebl-disabled-color)'
  },
  thumb: '',
  disabled: false
};
export default CardThumb;