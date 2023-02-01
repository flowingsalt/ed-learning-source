import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useCallback } from 'react';
import { MobileMenuSlidePlane } from '@hmhco/nav-menu-mobile';
import { useStateValue } from '../navStateManager';
import HoverMenu from './HoverMenu';

var MainNavigationMobile = function MainNavigationMobile() {
  var _useStateValue = useStateValue(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      menuTree = _useStateValue2$.menuTree,
      isMainMobileMenuOpen = _useStateValue2$.isMainMobileMenuOpen,
      dispatch = _useStateValue2[1];

  var closeMenu = useCallback(function () {
    dispatch({
      type: 'closeActiveMenus'
    }); // close menu
    // we need to make sure that focus returns back to
    // burger menu, on close

    document.getElementById('burger-menu').focus();
  }, [dispatch]);
  return /*#__PURE__*/React.createElement(MobileMenuSlidePlane, {
    isOpen: isMainMobileMenuOpen,
    onClose: closeMenu,
    menuType: "top"
  }, /*#__PURE__*/React.createElement(HoverMenu, {
    menuItems: Object.values(menuTree),
    closeMenu: closeMenu,
    showHelp: true
  }));
};

export default MainNavigationMobile;