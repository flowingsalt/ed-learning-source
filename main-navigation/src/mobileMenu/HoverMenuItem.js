import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { NavLink, useLocation } from 'react-router-dom';
import { MobileMenuItem } from '@hmhco/nav-menu-mobile';
import { isMenuItemActive } from '../utils/router.utils';

var HoverMenuItem = function HoverMenuItem(_ref) {
  var menuName = _ref.menuName,
      isExternal = _ref.isExternal,
      route = _ref.route,
      isActiveFor = _ref.isActiveFor,
      elementProps = _ref.elementProps,
      labelProps = _ref.labelProps,
      closeMenu = _ref.closeMenu;
  var isButton = route === undefined;

  var _useLocation = useLocation(),
      pathname = _useLocation.pathname;

  var itemProps;

  if (isButton) {
    itemProps = {
      component: 'button'
    };
  } else if (isExternal) {
    itemProps = {
      component: 'a',
      href: route,
      target: '_blank',
      rel: 'noopener noreferrer'
    };
  } else {
    itemProps = {
      component: NavLink,
      to: route,
      isActive: function isActive() {
        return isMenuItemActive({
          pathname: pathname,
          route: route,
          isActiveFor: isActiveFor
        });
      }
    };
  }

  return /*#__PURE__*/React.createElement(MobileMenuItem, _extends({
    label: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: menuName
    }),
    labelProps: labelProps,
    onClick: closeMenu
  }, itemProps, elementProps));
};

HoverMenuItem.defaultProps = {
  route: undefined,
  isExternal: false,
  elementProps: {},
  labelProps: {},
  isActiveFor: []
};
HoverMenuItem.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  menuName: PropTypes.string.isRequired,
  route: PropTypes.string,
  isExternal: PropTypes.bool,
  elementProps: PropTypes.object,
  // additional props for HTML element used
  labelProps: PropTypes.object,
  // additional props for Typography used
  isActiveFor: PropTypes.arrayOf(PropTypes.string)
};
export default HoverMenuItem;