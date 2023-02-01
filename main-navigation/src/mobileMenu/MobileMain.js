import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import Icon from '@hmhco/icon/src/Icon';
import { InitialsAvatar } from '@hmhco/initials-avatar/src/InitialsAvatar';
import TrapFocus from '@hmhco/trap-focus/src/TrapFocus';
import AppBar from '@mui/material/AppBar';
import useMatchBreakpoints from '@hmhco/breakpoints-helpers/src/useMatchBreakpoints';
import classNames from 'classnames';
import openHoverIcon from '@ed/baseline/icons/cts/hamburger-md.svg';
import closeHoverIcon from '@ed/baseline/icons/cts/remove-md.svg';
import HelpLink from '../common/HelpLink';
import { useStateValue } from '../navStateManager';
import HomeButton from '../common/HomeButton';
import useStyles from './MobileMain.styles';
import AvatarMenuMobile from './AvatarMenuMobile';
import MainNavigationMobile from './MainNavigationMobile';

var MobileMain = function MobileMain() {
  var _classNames;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var ignoreChangesRef = useRef(false);

  var _getUserCtx = getUserCtx(),
      role = _getUserCtx.role,
      userName = _getUserCtx.userName;

  var _useStateValue = useStateValue(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      isMainMobileMenuOpen = _useStateValue2$.isMainMobileMenuOpen,
      isAvatarMobileMenuOpen = _useStateValue2$.isAvatarMobileMenuOpen,
      dispatch = _useStateValue2[1];

  var appBarRoot = classNames((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, 'menu-open', isMainMobileMenuOpen || isAvatarMobileMenuOpen), _classNames));
  useEffect(function () {
    dispatch({
      type: 'setMenuType',
      menuType: 'mobile'
    });
  }, []);

  var hdlMenuClick = function hdlMenuClick() {
    dispatch({
      type: 'setMobileMenuAnimation',
      animationType: 'top'
    });
    dispatch({
      type: 'toggleMainMobileMenu'
    });
  };

  var hdlAvatarClick = function hdlAvatarClick() {
    dispatch({
      type: 'setMobileMenuAnimation',
      animationType: 'side'
    });
    dispatch({
      type: 'toggleAvatarMobileMenu'
    });
  };

  var userNameArray = userName ? userName.trim().split(' ') : []; // when avatar menu is clicked

  var avatarIcon = !isAvatarMobileMenuOpen ? /*#__PURE__*/React.createElement(InitialsAvatar, {
    size: "sm",
    className: classes.avatar,
    forename: userNameArray[0],
    surname: userNameArray[1]
  }) :
  /*#__PURE__*/
  // this extra div layer is necessary to prevent other divs from shifting on click
  React.createElement("div", {
    style: {
      padding: '4px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: closeHoverIcon,
    size: "24",
    colour: "var(--ebl-menu-color-hover-selected)"
  })); // hidden on tablet

  var showHelp = !useMatchBreakpoints(['xs', 'lg', 'xl'], true);
  return /*#__PURE__*/React.createElement(TrapFocus, {
    open: isMainMobileMenuOpen || isAvatarMobileMenuOpen,
    ignoreChangesRef: ignoreChangesRef
  }, /*#__PURE__*/React.createElement(AppBar, {
    role: "navigation",
    className: appBarRoot,
    position: "static",
    "data-testid": "mobile-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.menuWrp
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.burgerBlock
  }, /*#__PURE__*/React.createElement("button", {
    id: "burger-menu",
    type: "button",
    "aria-label": formatMessage({
      id: "topNav.mobileMenu.burgerMenu.label"
    }),
    "aria-expanded": isMainMobileMenuOpen,
    className: classes.burgerBtn,
    "data-testid": "burgerMenu",
    onClick: hdlMenuClick
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: isMainMobileMenuOpen ? closeHoverIcon : openHoverIcon,
    size: "24",
    colour: "var(--ebl-menu-color".concat(isMainMobileMenuOpen ? '-hover-selected' : '', ")")
  }))), /*#__PURE__*/React.createElement(MainNavigationMobile, null), /*#__PURE__*/React.createElement("div", {
    className: classes.logoBlock
  }, /*#__PURE__*/React.createElement(HomeButton, {
    role: role
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.profileBlock
  }, showHelp && /*#__PURE__*/React.createElement(HelpLink, {
    role: role
  }), /*#__PURE__*/React.createElement("button", {
    id: "profile-menu",
    type: "button",
    "aria-label": formatMessage({
      id: "topNav.avatarMenu.ariaLabel"
    }, {
      userName: userNameArray.join(' ')
    }),
    "aria-expanded": isAvatarMobileMenuOpen,
    className: classes.avatarBtn,
    "data-test-id": "navAvatar",
    onClick: hdlAvatarClick
  }, avatarIcon))), /*#__PURE__*/React.createElement(AvatarMenuMobile, null)));
};

export default MobileMain;