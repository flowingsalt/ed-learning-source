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

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import Icon from '@hmhco/icon';
import Button from '@mui/material/Button';
import collapseIcon from '@ed/baseline/icons/cts/collapse-sm.svg';
import expandIcon from '@ed/baseline/icons/cts/expand-sm.svg';
import useStyles from './Accordion.styles';

var AccordionExpandButton = function AccordionExpandButton(_ref) {
  var _cx;

  var expanded = _ref.expanded,
      onClick = _ref.onClick,
      collapseButtonText = _ref.collapseButtonText,
      expandButtonText = _ref.expandButtonText,
      _ref$buttonProps = _ref.buttonProps;
  _ref$buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps;

  var className = _ref$buttonProps.className,
      props = _objectWithoutProperties(_ref$buttonProps, ["className"]),
      expandButtonAriaText = _ref.expandButtonAriaText,
      collapseButtonAriaText = _ref.collapseButtonAriaText;

  var _useStyles = useStyles(),
      classes = _useStyles.classes,
      cx = _useStyles.cx;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var hasText = collapseButtonText !== '' || expandButtonText !== '';
  var ariaLabel;

  if (collapseButtonAriaText) {
    ariaLabel = expanded ? collapseButtonAriaText : expandButtonAriaText;
  } else {
    ariaLabel = expanded ? formatMessage({
      id: 'accordion.showLess'
    }) : formatMessage({
      id: 'accordion.showMore'
    });
  }

  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    size: "small",
    variant: "text",
    "aria-expanded": expanded,
    className: cx((_cx = {}, _defineProperty(_cx, classes.button, hasText), _defineProperty(_cx, classes.soloButton, !hasText), _cx), className),
    onClick: onClick,
    "aria-label": ariaLabel,
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: expanded ? collapseIcon : expandIcon,
      size: "16",
      colour: "var(--ebl-button-frameless-text-color)"
    })
  }), expanded ? collapseButtonText : expandButtonText);
};

AccordionExpandButton.defaultProps = {
  collapseButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "accordion.showLess"
  }),
  expandButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "accordion.showMore"
  })
};
AccordionExpandButton.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  collapseButtonText: PropTypes.node,
  expandButtonText: PropTypes.node,
  collapseButtonAriaText: PropTypes.node,
  expandButtonAriaText: PropTypes.node,
  buttonProps: PropTypes.shape(_objectSpread({}, Button.propTypes))
};
export default AccordionExpandButton;