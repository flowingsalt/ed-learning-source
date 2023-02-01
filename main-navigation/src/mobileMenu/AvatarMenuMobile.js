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

import React, { useCallback } from 'react';
import { MobileMenuSlidePlane } from '@hmhco/nav-menu-mobile';
import { useStateValue } from '../navStateManager';
import useAvatarMenuItems from '../hooks/useAvatarMenuItems.hook';
import HoverMenu from './HoverMenu';

var AvatarMenuMobile = function AvatarMenuMobile() {
  var _useStateValue = useStateValue(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      isAvatarMobileMenuOpen = _useStateValue2[0].isAvatarMobileMenuOpen,
      dispatch = _useStateValue2[1];

  var avatarMenuItems = useAvatarMenuItems();
  var mappedMenuItems = avatarMenuItems.map(function (_ref) {
    var item = _ref.item,
        linkProps = _ref.linkProps,
        buttonProps = _ref.buttonProps;
    return _objectSpread(_objectSpread({}, item), {}, {
      elementProps: _objectSpread(_objectSpread({}, linkProps), buttonProps)
    });
  });
  var closeMenu = useCallback(function () {
    dispatch({
      type: 'closeActiveMenus'
    }); // close menu
    // we need to make sure that focus returns back to button on close

    document.getElementById('profile-menu').focus();
  }, [dispatch]);
  return /*#__PURE__*/React.createElement(MobileMenuSlidePlane, {
    isOpen: isAvatarMobileMenuOpen,
    onClose: closeMenu,
    menuType: "side"
  }, /*#__PURE__*/React.createElement(HoverMenu, {
    menuItems: mappedMenuItems,
    closeMenu: closeMenu
  }));
};

export default AvatarMenuMobile;