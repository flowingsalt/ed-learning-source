import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useMemo, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useIntl } from 'react-intl';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import { InitialsAvatar } from '@hmhco/initials-avatar/src/InitialsAvatar';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { PrimaryNavDesktop } from '@hmhco/primary-nav-desktop';
import HelpLink from '../common/HelpLink';
import { useStateValue } from '../navStateManager';
import HomeButton from '../common/HomeButton';
import useStyles from './PrimaryMenu.syles';
import MenuItems from './MenuItems';
import { findActiveMenu } from '../utils/router.utils';

var PrimaryMenu = function PrimaryMenu() {
  var _classNames;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var userContext = getUserCtx();

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var userName = userContext.userName,
      firstName = userContext.firstName,
      lastName = userContext.lastName,
      role = userContext.role;

  var _useStateValue = useStateValue(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      menuTree = _useStateValue2$.menuTree,
      activeMenu = _useStateValue2$.activeMenu,
      dispatch = _useStateValue2[1];

  var _useLocation = useLocation(),
      pathname = _useLocation.pathname;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  useEffect(function () {
    dispatch({
      type: 'setMenuType',
      menuType: 'desktop'
    });
  }, []); // Set active menu

  useEffect(function () {
    var newActiveMenu = findActiveMenu({
      pathname: pathname,
      menuItems: Object.values(menuTree)
    });

    if (newActiveMenu.primaryMenu) {
      dispatch({
        type: 'setActiveMenu',
        value: newActiveMenu.primaryMenu.key
      });
    }
  }, [pathname, menuTree]);
  var navItems = useMemo(function () {
    return (// limiting props passed to PrimaryNavDesktop
      Object.values(menuTree).map(function (menuItem) {
        return {
          key: menuItem.key,
          route: menuItem.route,
          label: formatMessage({
            id: menuItem.menuName
          }),
          'data-test-id': menuItem.key
        };
      })
    );
  }, [formatMessage, menuTree]);

  var hdlAvatarClick = function hdlAvatarClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var avatarDropDown = classNames((_classNames = {}, _defineProperty(_classNames, classes.avatar, true), _defineProperty(_classNames, classes.avatarRadius, anchorEl !== null), _classNames));
  return /*#__PURE__*/React.createElement(AppBar, {
    position: "static",
    "data-testid": "primary-nav",
    elevation: 1,
    color: "inherit"
  }, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(HomeButton, {
    role: role
  }), /*#__PURE__*/React.createElement(PrimaryNavDesktop, {
    items: navItems,
    activeItemKey: activeMenu
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.profileBlock
  }, /*#__PURE__*/React.createElement(HelpLink, {
    role: role
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": formatMessage({
      id: "topNav.avatarMenu.ariaLabel"
    }, {
      userName: userName
    }),
    "aria-expanded": Boolean(anchorEl),
    className: classes.avatarBtn,
    "data-test-id": "navAvatar",
    onClick: hdlAvatarClick
  }, /*#__PURE__*/React.createElement(InitialsAvatar, {
    size: "sm",
    className: avatarDropDown,
    forename: firstName,
    surname: lastName
  }))), /*#__PURE__*/React.createElement(Menu, {
    id: "nav-avatar-dropdown",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    className: classes.dropdownWrp,
    onClose: handleClose,
    "data-test-id": "navAvatarDropDown"
  }, /*#__PURE__*/React.createElement(MenuList, {
    disablePadding: true,
    className: classes.avatarMenu
  }, /*#__PURE__*/React.createElement(MenuItems, {
    handleClose: handleClose
  })))));
};

export default PrimaryMenu;