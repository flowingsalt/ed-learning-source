import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import { useIntl } from 'react-intl';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router-dom';
import { SecondaryNavDesktop } from '@hmhco/secondary-nav-desktop';
import { useStateValue } from '../navStateManager';
import { findActiveMenu } from '../utils/router.utils';

var SecondaryMenu = function SecondaryMenu() {
  var _activeMenuTree$subMe, _activeMenuItem$secon;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStateValue = useStateValue(),
      _useStateValue2 = _slicedToArray(_useStateValue, 1),
      _useStateValue2$ = _useStateValue2[0],
      menuTree = _useStateValue2$.menuTree,
      activeMenu = _useStateValue2$.activeMenu;

  var activeMenuTree = menuTree[activeMenu];

  var _useLocation = useLocation(),
      pathname = _useLocation.pathname; // don't render secondary menu if menuItems is empty


  if (!(activeMenuTree === null || activeMenuTree === void 0 ? void 0 : (_activeMenuTree$subMe = activeMenuTree.subMenu) === null || _activeMenuTree$subMe === void 0 ? void 0 : _activeMenuTree$subMe.length)) {
    return null;
  }

  var activeMenuItem = findActiveMenu({
    pathname: pathname,
    menuItems: [activeMenuTree]
  });
  var activeItemKey = (_activeMenuItem$secon = activeMenuItem.secondaryMenu) === null || _activeMenuItem$secon === void 0 ? void 0 : _activeMenuItem$secon.key;
  var menuItems = activeMenuTree.subMenu.map(function (item) {
    return {
      key: item.key,
      label: formatMessage({
        id: item.subMenuName
      }),
      route: item.route,
      'data-test-id': item.key
    };
  });
  return /*#__PURE__*/React.createElement(AppBar, {
    "aria-label": formatMessage({
      id: 'topNav.secondaryMenu.ariaLabel'
    }),
    id: "secondary-nav",
    position: "static",
    color: "inherit",
    elevation: 1
  }, /*#__PURE__*/React.createElement(Toolbar, {
    variant: "dense",
    disableGutters: true
  }, /*#__PURE__*/React.createElement(SecondaryNavDesktop, {
    items: menuItems,
    activeItemKey: activeItemKey
  })));
};

export default SecondaryMenu;