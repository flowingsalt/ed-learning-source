import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

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

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getLocaleFile from '../lang';
import useStyles from './Accordion.styles';
import AccordionExpandButton from './AccordionExpandButton';

var Accordion = function Accordion(props) {
  var heading = props.heading,
      buttonProps = props.buttonProps,
      expandButtonText = props.expandButtonText,
      collapseButtonText = props.collapseButtonText,
      children = props.children,
      fullTitleBar = props.fullTitleBar,
      mountChildrenOnExpand = props.mountChildrenOnExpand,
      elevation = props.elevation,
      notification = props.notification,
      expandButtonAriaText = props.expandButtonAriaText,
      collapseButtonAriaText = props.collapseButtonAriaText,
      isExpanded = props.isExpanded,
      handleExpanded = props.handleExpanded,
      customClass = props.customClass;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useState = useState(isExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var headerClass = collapseButtonText !== '' || expandButtonText !== '' ? "".concat(classes.header, " ").concat(classes.headerButtonWithLabel, " accordionHeaderButton") : classes.header;

  var _onClick = function onClick() {
    if (handleExpanded) {
      handleExpanded();
    } else {
      setExpanded(!expanded);
    }
  };

  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(MuiAccordion, {
    classes: {
      root: classes.root,
      rounded: classes.rounded
    },
    expanded: handleExpanded ? isExpanded : expanded,
    elevation: elevation,
    TransitionProps: {
      mountOnEnter: mountChildrenOnExpand,
      unmountOnExit: mountChildrenOnExpand
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: customClass
  }, /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement(Collapse, {
    className: classes.notification,
    "in": Boolean(notification),
    mountOnEnter: true,
    unmountOnExit: true
  }, notification)), /*#__PURE__*/React.createElement("div", {
    className: headerClass
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.heading,
    onClick: function onClick() {
      return fullTitleBar && _onClick();
    },
    "data-testid": "AccordionHeader"
  }, heading), /*#__PURE__*/React.createElement(AccordionExpandButton, {
    expanded: handleExpanded ? isExpanded : expanded,
    onClick: _onClick,
    buttonProps: buttonProps,
    collapseButtonText: collapseButtonText,
    expandButtonText: expandButtonText,
    collapseButtonAriaText: collapseButtonAriaText,
    expandButtonAriaText: expandButtonAriaText
  }))), /*#__PURE__*/React.createElement(MuiAccordionDetails, {
    classes: {
      root: classes.detailsRoot
    }
  }, children)));
};

Accordion.defaultProps = {
  buttonProps: {},
  fullTitleBar: false,
  expandButtonText: undefined,
  collapseButtonText: undefined,
  mountChildrenOnExpand: false,
  elevation: 1,
  notification: null,
  collapseButtonAriaText: undefined,
  expandButtonAriaText: undefined,
  isExpanded: false,
  handleExpanded: undefined
};
Accordion.propTypes = {
  heading: PropTypes.node.isRequired,
  buttonProps: PropTypes.shape(_objectSpread({}, Button.propTypes)),
  expandButtonText: PropTypes.node,
  collapseButtonText: PropTypes.node,
  expandButtonAriaText: PropTypes.node,
  collapseButtonAriaText: PropTypes.node,
  children: PropTypes.node.isRequired,
  fullTitleBar: PropTypes.bool,

  /* allowing lazy loading children elements */
  mountChildrenOnExpand: PropTypes.bool,
  elevation: PropTypes.number,
  notification: PropTypes.node,
  isExpanded: PropTypes.bool,
  handleExpanded: PropTypes.func,
  customClass: PropTypes.string
};
export default Accordion;