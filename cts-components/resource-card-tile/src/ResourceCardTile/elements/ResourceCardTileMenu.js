import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem, Button } from '@mui/material';
import placeholderSvgSml from '@ed/baseline/icons/cts/overflow-v-sm.svg';
import { useIntl } from 'react-intl';
import Icon from '@hmhco/icon/src/Icon';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getLocaleFile from '../../lang';

var ResourceCardTileMenu = function ResourceCardTileMenu(_ref) {
  var buttonMenuItems = _ref.buttonMenuItems,
      label = _ref.label,
      callback = _ref.callback;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleResize = function handleResize() {
    if (anchorEl) {
      handleClose();
    }
  };

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var ariaLabelPrefix = formatMessage({
    id: 'resourceCardTile.menu.ariaLabel'
  });
  var ariaLabel = "".concat(ariaLabelPrefix, " ").concat(label);
  useEffect(function () {
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  });

  if (buttonMenuItems.length > 0) {
    return /*#__PURE__*/React.createElement(AddTranslations, {
      getLocaleFile: getLocaleFile
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "outlined",
      "aria-haspopup": "true",
      onClick: handleClick,
      "aria-label": ariaLabel,
      title: ariaLabel,
      size: "small",
      "data-testid": "resource-card-tile-menu"
    }, /*#__PURE__*/React.createElement(Icon, {
      svg: placeholderSvgSml,
      size: "16",
      colour: "currentColor"
    })), /*#__PURE__*/React.createElement(Menu, {
      anchorEl: anchorEl,
      open: Boolean(anchorEl),
      onClose: handleClose,
      "data-testid": "menu-items"
    }, buttonMenuItems.map(function (button, index) {
      var text = button.text,
          buttonType = button.buttonType,
          buttonProps = _objectWithoutProperties(button, ["text", "buttonType"]);

      var key = "button_".concat(buttonType, "_").concat(index);
      var menuItemAriaLabel = "".concat(text, " ").concat(label);

      var handleButtonOnClick = function handleButtonOnClick(event) {
        handleClose();
        callback(event);
      };

      return /*#__PURE__*/React.createElement(MenuItem, _extends({
        onClick: function onClick() {
          return handleButtonOnClick(button);
        },
        key: key,
        value: button.text
      }, buttonProps, {
        "aria-label": menuItemAriaLabel
      }), button.text);
    })));
  }

  return null;
};

ResourceCardTileMenu.propTypes = {
  buttonMenuItems: PropTypes.arrayOf(PropTypes.shape(_objectSpread({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    id: PropTypes.string
  }, Button.propTypes)).isRequired),
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};
export default ResourceCardTileMenu;