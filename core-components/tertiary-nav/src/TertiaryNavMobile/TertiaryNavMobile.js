import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

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
/* eslint-disable react/jsx-props-no-spreading */


import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import TertiaryNavMobileItem from './TertiaryNavMobileItem';
import useStyles from './TertiaryNavMobile.styles';
import getLocaleFile from '../lang';
import TertiaryNavMobileSkeleton from './TertiaryNavMobileSkeleton';
var TABS_VARIANT = 'scrollable';
var TABS_SCROLL_BUTTONS = true;
var TERTIARY_ITEM_KEY = "tertiary-nav-tab-";

var TertiaryNavTabsReactRouterDom = function TertiaryNavTabsReactRouterDom(props) {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var location = useLocation();
  var menuItems = props.menuItems,
      ariaLabel = props.ariaLabel,
      scrollButtons = props.scrollButtons,
      allowScrollButtonsMobile = props.allowScrollButtonsMobile; // MUI Tabs needs the current active item index to take care of the active item styling for us
  // (so that we can cater for extra parameters in the route pattern, like `/roster/:classId`)

  var currentItemIndex = menuItems.findIndex(function (item) {
    return matchPath(location.pathname, {
      path: item.to,
      exact: item.exact
    });
  });
  return /*#__PURE__*/React.createElement(Tabs, {
    value: currentItemIndex,
    onChange: function onChange() {},
    variant: TABS_VARIANT,
    scrollButtons: scrollButtons || TABS_SCROLL_BUTTONS,
    "aria-label": ariaLabel,
    allowScrollButtonsMobile: allowScrollButtonsMobile,
    className: classes.tabs
  }, menuItems.map(function (_ref, index) {
    var name = _ref.name,
        item = _objectWithoutProperties(_ref, ["name"]);

    return /*#__PURE__*/React.createElement(TertiaryNavMobileItem, _extends({
      key: name,
      id: "".concat(TERTIARY_ITEM_KEY).concat(index),
      name: name,
      isSelectedBasedOnRoute: currentItemIndex === index,
      selected: currentItemIndex === index
    }, item));
  }));
};

var TertiaryNavTabs = function TertiaryNavTabs(props) {
  var menuItems = props.menuItems,
      ariaLabel = props.ariaLabel,
      value = props.value,
      onChange = props.onChange;

  var handleChange = function handleChange(event, index) {
    var onClick = menuItems[index].onClick;

    if (onClick) {
      onClick(event);
    }

    onChange(index);
  };

  return /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    onChange: handleChange,
    variant: TABS_VARIANT,
    scrollButtons: TABS_SCROLL_BUTTONS,
    "aria-label": ariaLabel
  }, menuItems.map(function (_ref2, index) {
    var svg = _ref2.svg,
        name = _ref2.name,
        onClick = _ref2.onClick,
        item = _objectWithoutProperties(_ref2, ["svg", "name", "onClick"]);

    return /*#__PURE__*/React.createElement(TertiaryNavMobileItem, _extends({
      key: name,
      id: "".concat(TERTIARY_ITEM_KEY).concat(index),
      name: name,
      selected: index === value,
      onClick: function onClick(event) {
        return handleChange(event, index);
      }
    }, item));
  }));
};

var TertiaryNavMobile = function TertiaryNavMobile(props) {
  var _useStyles2 = useStyles(),
      classes = _useStyles2.classes;

  var value = props.value,
      menuItems = props.menuItems,
      ariaLabel = props.ariaLabel;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    "data-testid": "tertiary-nav-mobile"
  }, /*#__PURE__*/React.createElement(AppBar, {
    position: "static",
    color: "default"
  }, menuItems.length > 0 && /*#__PURE__*/React.createElement("div", null, value === undefined ? /*#__PURE__*/React.createElement(TertiaryNavTabsReactRouterDom, props) : /*#__PURE__*/React.createElement(TertiaryNavTabs, props)), menuItems.length === 0 && /*#__PURE__*/React.createElement(TertiaryNavMobileSkeleton, {
    ariaLabel: ariaLabel
  })));
};

TertiaryNavMobile.defaultProps = {
  value: undefined,
  onChange: function onChange() {}
};
TertiaryNavMobile.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    /** name has to be a pre-translated string, it's later used to create aria-label for selected item */
    name: PropTypes.string.isRequired,

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
  onChange: PropTypes.func
};
TertiaryNavTabsReactRouterDom.propTypes = {
  menuItems: TertiaryNavMobile.propTypes.menuItems,
  ariaLabel: TertiaryNavMobile.propTypes.ariaLabel,
  scrollButtons: PropTypes.string,
  allowScrollButtonsMobile: PropTypes.bool
};
TertiaryNavTabs.propTypes = _objectSpread({}, TertiaryNavMobile.propTypes);
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(TertiaryNavMobile, props));
});