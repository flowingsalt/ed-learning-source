import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

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

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemAvatar, ListItemText, Typography, Button } from '@mui/material';
import { useIntl } from 'react-intl';
import Icon from '@hmhco/icon/src/Icon';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import useStyles from './ResourceCardTile.Styles';
import Status from './elements/Status';
import Buttons from './elements/Buttons';
import getLocaleFile from '../lang';
var ResourceCardTile = /*#__PURE__*/forwardRef(function (props, ref) {
  var primary = props.primary,
      secondary = props.secondary,
      subPrimary = props.subPrimary,
      status = props.status,
      buttons = props.buttons,
      ariaLabel = props.ariaLabel,
      leftIcon = props.leftIcon,
      leftIconSize = props.leftIconSize,
      subPrimaryIcon = props.subPrimaryIcon,
      subPrimarySVGIcon = props.subPrimarySVGIcon,
      subPrimaryIconAria = props.subPrimaryIconAria,
      callback = props.callback,
      headerDomSize = props.headerDomSize,
      _props$dataTestId = props.dataTestId,
      dataTestId = _props$dataTestId === void 0 ? 'resource-card-tile' : _props$dataTestId;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(ListItem, {
    className: classes.root,
    "aria-label": ariaLabel,
    "data-testid": dataTestId,
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.contentWrap
  }, /*#__PURE__*/React.createElement(ListItemAvatar, {
    className: classes.icon
  }, /*#__PURE__*/React.createElement(Icon, {
    className: classes.icon,
    svg: leftIcon,
    size: leftIconSize
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.textWrap
  }, /*#__PURE__*/React.createElement(ListItemText, {
    className: classes.text,
    primary: /*#__PURE__*/React.createElement(Typography, {
      variant: "h4",
      component: headerDomSize
    }, primary),
    secondary: /*#__PURE__*/React.createElement(Typography, {
      variant: "button",
      component: "p",
      className: classes.secondaryText
    }, secondary)
  }), /*#__PURE__*/React.createElement(ListItem, {
    "data-testid": "sublist-wrapper",
    component: "div",
    className: classes.sublistWrapper
  }, /*#__PURE__*/React.createElement(ListItemText, {
    className: classes.sublistText,
    primary: subPrimary && /*#__PURE__*/React.createElement(Typography, {
      component: "p",
      noWrap: true
    }, /*#__PURE__*/React.createElement("span", {
      className: classes.sublistNoWrap
    }, /*#__PURE__*/React.createElement(Typography, {
      className: classes.sublistTextPrimary,
      variant: "subtitle1",
      component: "span",
      "data-testid": "sublist-text"
    }, subPrimary), /*#__PURE__*/React.createElement(Status, _extends({
      status: status
    }, props))))
  }), (subPrimaryIcon || subPrimarySVGIcon) && /*#__PURE__*/React.createElement(ListItemAvatar, {
    className: classes.sublistAvatar
  }, subPrimarySVGIcon || /*#__PURE__*/React.createElement(Icon, {
    "data-testid": "sublist-icon",
    svg: subPrimaryIcon,
    size: "16",
    "aria-label": subPrimaryIconAria ? formatMessage({
      id: subPrimaryIconAria
    }) : null
  })), /*#__PURE__*/React.createElement(Buttons, _extends({
    buttons: buttons,
    label: primary,
    callback: callback
  }, props)))))));
});
ResourceCardTile.propTypes = {
  primary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  subPrimary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftIconSize: PropTypes.string,
  subPrimaryIcon: PropTypes.string,
  subPrimaryIconAria: PropTypes.string,
  subPrimarySVGIcon: PropTypes.object,
  status: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.shape(_objectSpread({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    id: PropTypes.string
  }, Button.propTypes)).isRequired),
  ariaLabel: PropTypes.string,
  callback: PropTypes.func.isRequired,
  headerDomSize: PropTypes.string,
  dataTestId: PropTypes.string
};
ResourceCardTile.defaultProps = {
  subPrimary: undefined,
  subPrimaryIcon: undefined,
  subPrimarySVGIcon: undefined,
  subPrimaryIconAria: undefined,
  ariaLabel: undefined,
  status: undefined,
  leftIcon: undefined,
  leftIconSize: '64',
  buttons: [],
  headerDomSize: 'h2'
};
export default ResourceCardTile;