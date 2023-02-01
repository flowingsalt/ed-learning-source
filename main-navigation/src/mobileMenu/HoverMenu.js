import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import useIsMobile from '@hmhco/breakpoints-helpers/src/useIsMobile';
import { List } from '@mui/material';
import { MobileMenuExpandableItem } from '@hmhco/nav-menu-mobile';
import { getMobileMenuHelpItem } from '../common/HelpLink';
import HoverMenuItem from './HoverMenuItem';
import HoverSubMenu from './HoverSubMenu';

var HoverMenu = function HoverMenu(props) {
  var menuItems = props.menuItems,
      showHelp = props.showHelp,
      closeMenu = props.closeMenu;
  var userContext = getUserCtx();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      expandedPanelKey = _useState2[0],
      setExpanded = _useState2[1];

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  var isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(List, {
    disablePadding: true
  }, menuItems.map(function (currentItem) {
    return currentItem.subMenu.length ? /*#__PURE__*/React.createElement(MobileMenuExpandableItem, {
      key: currentItem.key,
      id: currentItem.key,
      label: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: currentItem.menuName
      }),
      expanded: expandedPanelKey === currentItem.key,
      onChange: handleChange(currentItem.key),
      "data-test-id": currentItem.key
    }, /*#__PURE__*/React.createElement(HoverSubMenu, {
      closeMenu: closeMenu,
      items: currentItem.subMenu
    })) : /*#__PURE__*/React.createElement(HoverMenuItem, _extends({
      key: currentItem.id,
      closeMenu: closeMenu
    }, currentItem));
  }), showHelp && isMobile && /*#__PURE__*/React.createElement(HoverMenuItem, _extends({
    closeMenu: closeMenu
  }, getMobileMenuHelpItem(userContext.role))));
};

HoverMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    menuName: PropTypes.string.isRequired
  })).isRequired,
  showHelp: PropTypes.bool,
  closeMenu: PropTypes.func.isRequired
};
export default HoverMenu;