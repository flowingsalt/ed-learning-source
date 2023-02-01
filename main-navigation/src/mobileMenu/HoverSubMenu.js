import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { MobileSubmenuList } from '@hmhco/nav-menu-mobile';
import HoverMenuItem from './HoverMenuItem'; // generate submenu when main menu gets selected

var HoverSubMenu = function HoverSubMenu(props) {
  var items = props.items,
      closeMenu = props.closeMenu;

  if (!items.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(MobileSubmenuList, null, items.map(function (subMenuObj) {
    return /*#__PURE__*/React.createElement(HoverMenuItem, _extends({}, subMenuObj, {
      key: subMenuObj.key,
      menuName: subMenuObj.subMenuName,
      labelProps: {
        variant: 'subtitle1'
      },
      closeMenu: closeMenu,
      elementProps: {
        'data-test-id': subMenuObj.key
      }
    }));
  }));
};

HoverSubMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    subMenuName: PropTypes.string.isRequired
  })).isRequired
};
export default HoverSubMenu;