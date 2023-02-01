import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect } from 'react';
import { bool, object } from 'prop-types';
import classNames from 'classnames';
import PreviewSwitcherModal from '@hmhco/preview-switcher/src/index';
import useMatchBreakpoints from '@hmhco/breakpoints-helpers/src/useMatchBreakpoints';
import LinkedAccountsModal from '@hmhco/linked-accounts/src/LinkedAccountsModal';
import { useStateValue } from './navStateManager';
import PrimaryMenu from './desktopMenu/PrimaryMenu';
import SecondaryMenu from './desktopMenu/SecondaryMenu';
import MobileMain from './mobileMenu/MobileMain';
import useStyles from './MainNavigation.styles';

var MainNavigation = function MainNavigation(_ref) {
  var _classNames;

  var hasGoogleClassroomEnabled = _ref.hasGoogleClassroomEnabled,
      avatarMenu = _ref.avatarMenu;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useStateValue = useStateValue(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      menuTree = _useStateValue2$.menuTree,
      activeMenu = _useStateValue2$.activeMenu,
      menuType = _useStateValue2$.menuType,
      isRoleSwitcherOpen = _useStateValue2$.isRoleSwitcherOpen,
      IsLinkedAccountsOpen = _useStateValue2$.IsLinkedAccountsOpen,
      dispatch = _useStateValue2[1];

  var secondaryMenuTree = menuTree[activeMenu].subMenu;
  var isMobile = menuType === 'mobile';
  var hasSecondaryMenu = secondaryMenuTree.length;
  var dummySpaceClass = classNames((_classNames = {}, _defineProperty(_classNames, classes.dummyHeight, true), _defineProperty(_classNames, classes.singleMenuSpace, isMobile || !hasSecondaryMenu), _defineProperty(_classNames, classes.twoMenuSpace, !isMobile && hasSecondaryMenu), _classNames));

  var onRoleSwitcherClose = function onRoleSwitcherClose() {
    dispatch({
      type: 'setIsRoleSwitcherOpen',
      open: false
    });
  };

  var onLinkedAccountsClose = function onLinkedAccountsClose() {
    dispatch({
      type: 'setIsLinkedAccountsOpen',
      open: false
    });
  };

  var isDesktop = useMatchBreakpoints(['lg', 'xl'], true);
  useEffect(function () {
    dispatch({
      type: 'resetAvatarMenu',
      avatarMenu: avatarMenu
    });
  }, [avatarMenu, hasGoogleClassroomEnabled]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.menuWrp
  }, /*#__PURE__*/React.createElement(PreviewSwitcherModal, {
    open: isRoleSwitcherOpen,
    onRoleSwitcherClose: onRoleSwitcherClose
  }), isDesktop ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PrimaryMenu, null), /*#__PURE__*/React.createElement(SecondaryMenu, null)) : /*#__PURE__*/React.createElement(MobileMain, null), hasGoogleClassroomEnabled && /*#__PURE__*/React.createElement(LinkedAccountsModal, {
    isOpen: IsLinkedAccountsOpen,
    handleClose: onLinkedAccountsClose
  })), /*#__PURE__*/React.createElement("div", {
    className: dummySpaceClass
  }));
};

MainNavigation.propTypes = {
  hasGoogleClassroomEnabled: bool,
  avatarMenu: object
};
export default MainNavigation;