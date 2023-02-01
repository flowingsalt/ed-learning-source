import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
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
/* eslint-disable react/jsx-props-no-spreading */


import React from 'react';
import { Typography, Grid, Alert } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import error from '@ed/baseline/icons/cts/error-md.svg';
import smallError from '@ed/baseline/icons/cts/error-sm.svg';
import warning from '@ed/baseline/icons/cts/warning-md.svg';
import smallWarning from '@ed/baseline/icons/cts/warning-sm.svg';
import info from '@ed/baseline/icons/cts/info-md.svg';
import smallInfo from '@ed/baseline/icons/cts/info-sm.svg';
import success from '@ed/baseline/icons/cts/success-md.svg';
import smallSuccess from '@ed/baseline/icons/cts/success-sm.svg';
import keyMirror from '@hmhco/react-utils/src/keyMirror';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import Icon, { DISPLAY_TYPES } from '@hmhco/icon/src/Icon';
import getLocaleFile from './lang';
import useStyles from './AlertNotifications.styles';
import CloseButton from './CloseButton';
export var ALERT_SEVERITIES = keyMirror({
  error: null,
  info: null,
  success: null,
  warning: null
});
export var TEXT_MODES = keyMirror({
  inline: null,
  wrap: null
});
export var getIconMappingForAlert = function getIconMappingForAlert() {
  var small = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var setIconSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '24';
  return {
    info: /*#__PURE__*/React.createElement(Icon, {
      svg: small ? smallInfo : info,
      size: setIconSize,
      colour: "var(--ebl-signal-info)",
      display: DISPLAY_TYPES.noDisplayValue
    }),
    warning: /*#__PURE__*/React.createElement(Icon, {
      svg: small ? smallWarning : warning,
      size: setIconSize,
      colour: "var(--ebl-signal-warning)",
      display: DISPLAY_TYPES.noDisplayValue
    }),
    success: /*#__PURE__*/React.createElement(Icon, {
      svg: small ? smallSuccess : success,
      size: setIconSize,
      colour: "var(--ebl-signal-success)",
      display: DISPLAY_TYPES.noDisplayValue
    }),
    error: /*#__PURE__*/React.createElement(Icon, {
      svg: small ? smallError : error,
      size: setIconSize,
      colour: "var(--ebl-signal-error)",
      display: DISPLAY_TYPES.noDisplayValue
    })
  };
};

var getAlertClasses = function getAlertClasses(small, classes) {
  return _objectSpread({
    action: classes.action
  }, small ? {
    icon: classes.iconSmall,
    message: classes.messageSmall
  } : {});
};

var AlertNotification = function AlertNotification(_ref) {
  var severity = _ref.severity,
      children = _ref.children,
      label = _ref.label,
      small = _ref.small,
      count = _ref.count,
      textMode = _ref.textMode,
      autoFocus = _ref.autoFocus,
      forceFocus = _ref.forceFocus,
      onClose = _ref.onClose,
      domProps = _objectWithoutProperties(_ref, ["severity", "children", "label", "small", "count", "textMode", "autoFocus", "forceFocus", "onClose"]);

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _ref2 = small ? ['16', 'body2'] : ['24', 'body1'],
      _ref3 = _slicedToArray(_ref2, 2),
      setIconSize = _ref3[0],
      setBodySize = _ref3[1];

  var contentRef = React.useRef();
  React.useEffect(function () {
    // focus on message if autoFocus passed and no close button or if force focus is provided
    if (autoFocus && (!onClose || forceFocus) && contentRef.current) {
      contentRef.current.focus();
    }
  }, [autoFocus, forceFocus]);
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(Alert, _extends({
    classes: getAlertClasses(small, classes),
    severity: severity,
    tabIndex: autoFocus && '-1',
    action: onClose && /*#__PURE__*/React.createElement(CloseButton, {
      "data-testid": "alertCloseButton",
      autoFocus: autoFocus,
      onClose: onClose
    })
  }, domProps, {
    iconMapping: getIconMappingForAlert(small, setIconSize)
  }), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    tabIndex: forceFocus ? '0' : '-1',
    ref: contentRef,
    className: classes.alertGrid
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(Typography, {
    variant: setBodySize,
    "data-testid": "alertHeader",
    className: classes.alertLabel
  }, label || /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "alertNotification.header.".concat(severity)
  })))), children && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: setBodySize,
    component: "div",
    "data-testid": "alertMessage"
  }, children)), count !== undefined && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: classes.alertCountContainer
  }, count && /*#__PURE__*/React.createElement(Typography, {
    variant: setBodySize,
    "data-testid": "alertHeaderCount",
    className: classes.alertCount
  }, count)))));
};

AlertNotification.defaultProps = {
  label: undefined,
  children: undefined,
  small: false,
  count: undefined,
  textMode: TEXT_MODES.wrap,
  autoFocus: undefined,
  forceFocus: false
};
AlertNotification.propTypes = {
  severity: PropTypes.oneOf(Object.keys(ALERT_SEVERITIES)).isRequired,
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  small: PropTypes.bool,
  count: PropTypes.number,
  action: PropTypes.node,
  // original MUI Alert prop to define a custom button
  textMode: PropTypes.oneOf(Object.keys(TEXT_MODES)),
  autoFocus: PropTypes.bool,
  onClose: PropTypes.func,
  forceFocus: PropTypes.bool
};
export default AlertNotification;