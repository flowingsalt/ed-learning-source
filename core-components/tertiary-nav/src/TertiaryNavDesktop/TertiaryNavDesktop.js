import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import List from '@mui/material/List';
import PropTypes from 'prop-types';
import { useLocation, matchPath } from 'react-router-dom';
import { Typography } from '@mui/material';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import TertiaryNavDesktopItem from './TertiaryNavDesktopItem';
import useStyles from './TertiaryNavDesktop.styles';
import getLocaleFile from '../lang';
import TertiaryNavDesktopSkeleton from './TertiaryNavDesktopSkeleton';
var TERTIARY_NAV_KEY = "tertiary-nav-item-";

var TertiaryNavDesktopItemsReactRouterDom = function TertiaryNavDesktopItemsReactRouterDom(props) {
  var menuItems = props.menuItems; // NavLink takes care of the active item styling for us and adds an `aria-current=page` attribute to the active item
  // But this is not supported by Talkback screenreader, so we need to know the active item too in order to supply an aria-label

  var location = useLocation();
  var currentItemIndex = menuItems.findIndex(function (item) {
    return matchPath(location.pathname, {
      path: item.to,
      exact: item.exact
    });
  });
  return menuItems.map(function (_ref, index) {
    var onClick = _ref.onClick,
        name = _ref.name,
        item = _objectWithoutProperties(_ref, ["onClick", "name"]);

    return /*#__PURE__*/React.createElement(TertiaryNavDesktopItem, _extends({
      isSelectedBasedOnRoute: currentItemIndex === index,
      selected: currentItemIndex === index,
      key: name,
      id: "".concat(TERTIARY_NAV_KEY).concat(index),
      name: name
    }, item));
  });
};

var TertiaryNavDesktopItems = function TertiaryNavDesktopItems(props) {
  var menuItems = props.menuItems,
      value = props.value,
      _onChange = props.onChange;
  return menuItems.map(function (_ref2, index) {
    var name = _ref2.name,
        item = _objectWithoutProperties(_ref2, ["name"]);

    return /*#__PURE__*/React.createElement(TertiaryNavDesktopItem, _extends({
      selected: index === value,
      key: name,
      id: "".concat(TERTIARY_NAV_KEY).concat(index),
      name: name,
      onChange: function onChange() {
        return _onChange(index);
      }
    }, item));
  });
};

function TertiaryNavDesktop(props) {
  var _useStyles = useStyles(props, {
    props: props
  }),
      styles = _useStyles.classes;

  var menuName = props.menuName,
      ariaLabel = props.ariaLabel,
      value = props.value,
      menuItems = props.menuItems;
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "tertiary-nav-desktop"
  }, menuName && /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle2",
    className: styles.menuName,
    component: "p"
  }, menuName), menuItems.length > 0 && /*#__PURE__*/React.createElement(List, {
    className: styles.list,
    "aria-label": ariaLabel
  }, value === undefined ? /*#__PURE__*/React.createElement(TertiaryNavDesktopItemsReactRouterDom, props) : /*#__PURE__*/React.createElement(TertiaryNavDesktopItems, props)), menuItems.length === 0 && /*#__PURE__*/React.createElement(TertiaryNavDesktopSkeleton, {
    "data-test-id": "tertiary-navigation-desktop-skeleton",
    ariaLabel: ariaLabel
  }));
}

TertiaryNavDesktop.defaultProps = {
  onChange: function onChange() {},
  value: undefined,
  menuName: ''
};
TertiaryNavDesktop.propTypes = {
  /** Items for populating the menu */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    /** name has to be a pre-translated string, it's later used to create aria-label for selected item */
    name: PropTypes.string.isRequired,

    /** should be an svg from @ed/baseline to display as an icon for the sidenav item */
    svg: PropTypes.string,

    /** When using react-router-dom version of the nav, you supply `exact` on items that should be matched exactly to the route */
    exact: PropTypes.bool,

    /** When using react-router-dom version of the nav, to is the NavLink prop for the target route for the item */
    to: PropTypes.string,
    // The following props are optional and may be required if you are not using `react-router-dom` version of the nav

    /** Function to be fired on click of the individual item */
    onClick: PropTypes.func,

    /** Can be used to override the root component element used for the sidenav item (e.g. 'button') */
    component: PropTypes.elementType,

    /** Can be supplied to the non react-router-dom version, which uses <a> link as the root element by default */
    href: PropTypes.string,

    /** Can be supplied to the non react-router-dom version, which uses <a> link as the root element by default */
    target: PropTypes.string
  })).isRequired,

  /** used to describe the entire list */
  ariaLabel: PropTypes.string.isRequired,

  /** Only required when not using react-router-dom version of the nav and should be an index value indicating the currently active item */
  value: PropTypes.number,

  /** Only required when not using react-router-dom version of the nav and fires on change of sidenav menu items */
  onChange: PropTypes.func,

  /** Optionally provides a name label on the menu items */
  menuName: PropTypes.string
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(TertiaryNavDesktop, props));
});