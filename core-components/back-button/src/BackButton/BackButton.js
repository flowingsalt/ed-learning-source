import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
/* eslint-disable jsx-a11y/no-static-element-interactions */
// The role required for this component needs to be supplied by the parent component as per the BackButtonReadme.md

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
// This error appears if a role is not supplied

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import returnIcon from '@ed/baseline/icons/cts/return-sm.svg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Icon from '@hmhco/icon/src/Icon';
import backButtonStyles from './BackButton.styles';

var BackButton = function BackButton(props) {
  var title = props.title,
      backButtonClick = props.backButtonClick,
      className = props.className,
      domProps = _objectWithoutProperties(props, ["title", "backButtonClick", "className"]);

  var _backButtonStyles = backButtonStyles(props, {
    props: props
  }),
      styleClasses = _backButtonStyles.classes;

  var _useState = useState("".concat(styleClasses.root, " ").concat(styleClasses.clicked, " ").concat(className)),
      _useState2 = _slicedToArray(_useState, 2),
      rootClass = _useState2[0],
      setRootClass = _useState2[1];

  var handleBackButtonKeyDown = function handleBackButtonKeyDown(event) {
    if (event.keyCode === 13 || event.key.toLowerCase() === 'enter') {
      backButtonClick();
    }
  };

  var handleBackButtonClick = function handleBackButtonClick() {
    backButtonClick();
  };

  var handleFocus = function handleFocus(event) {
    if (event.keyCode === 9 || event.key.toLowerCase() === 'tab') {
      setRootClass("".concat(styleClasses.root, " ").concat(className));
    }
  };

  var handleBlur = function handleBlur() {
    setRootClass("".concat(styleClasses.root, " ").concat(styleClasses.clicked, " ").concat(className));
  };

  return /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement("div", _extends({}, domProps, {
    className: rootClass,
    tabIndex: 0,
    onKeyDown: handleBackButtonKeyDown,
    onKeyUp: handleFocus,
    onBlur: handleBlur,
    onClick: handleBackButtonClick,
    "data-testid": "back-button"
  }), /*#__PURE__*/React.createElement(Icon, {
    className: styleClasses.icon,
    svg: returnIcon,
    size: "16",
    "data-testid": "back-button-return-icon"
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle2",
    component: "span",
    className: styleClasses.title,
    "data-testid": "back-button-title"
  }, title)));
};

export default BackButton;
BackButton.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  backButtonClick: PropTypes.func,
  className: PropTypes.string
};
BackButton.defaultProps = {
  backButtonClick: function backButtonClick() {},
  className: undefined
};