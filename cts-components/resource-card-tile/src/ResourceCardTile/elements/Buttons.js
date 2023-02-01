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
import { Button } from '@mui/material';
import Icon from '@hmhco/icon/src/Icon';
import useStyles from '../ResourceCardTile.Styles';
import ResourceCardTileMenu from './ResourceCardTileMenu';

var Buttons = function Buttons(props) {
  var buttons = props.buttons,
      label = props.label,
      _props$callback = props.callback,
      callback = _props$callback === void 0 ? function () {} : _props$callback;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  if (buttons && buttons.length > 0) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: classes.buttonWrap
    }, buttons.map(function (button, index) {
      var btnKey = "btn_".concat(index);

      var id = button.id,
          text = button.text,
          buttonType = button.buttonType,
          arialabel = button.arialabel,
          icon = button.icon,
          buttonProps = _objectWithoutProperties(button, ["id", "text", "buttonType", "arialabel", "icon"]);

      return /*#__PURE__*/React.createElement(Button, _extends({
        key: btnKey,
        component: "button",
        className: classes.button,
        buttontype: buttonType
      }, buttonProps, {
        size: "small",
        onClick: function onClick() {
          callback(button);
        },
        startIcon: icon ? /*#__PURE__*/React.createElement(Icon, _extends({
          "data-testid": "button-icon"
        }, icon)) : null
      }), text);
    })), /*#__PURE__*/React.createElement("div", {
      className: classes.iconMenuButton
    }, /*#__PURE__*/React.createElement(ResourceCardTileMenu, {
      buttonMenuItems: buttons,
      label: label,
      callback: callback
    })));
  }

  return null;
};

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape(_objectSpread({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    id: PropTypes.string
  }, Button.propTypes)).isRequired),
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};
export default Buttons;