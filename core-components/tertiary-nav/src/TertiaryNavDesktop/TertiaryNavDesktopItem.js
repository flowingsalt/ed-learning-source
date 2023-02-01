import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@hmhco/icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography, Paper } from '@mui/material';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import useStyles from './TertiaryNavDesktopItem.styles';
var MENU_ITEM_TESTID = 'MenuItem';

var getAriaLabel = function getAriaLabel(isSelected, formatMessage, name) {
  return isSelected ? formatMessage({
    id: 'tertiaryNav.itemSelected'
  }, {
    name: name
  }) : undefined;
};

function TertiaryNavDesktopItem(props) {
  var _classNames;

  var name = props.name,
      svg = props.svg,
      onClick = props.onClick,
      onChange = props.onChange,
      selected = props.selected,
      isSelectedBasedOnRoute = props.isSelectedBasedOnRoute,
      otherProps = _objectWithoutProperties(props, ["name", "svg", "onClick", "onChange", "selected", "isSelectedBasedOnRoute"]);

  var _useStyles = useStyles(),
      styles = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var handleClick = function handleClick(event) {
    onClick(event);
    onChange();
  };

  var classes = {
    root: styles.root,
    focusVisible: styles.focusVisible
  };
  var paperClassName = classNames((_classNames = {}, _defineProperty(_classNames, styles.paper, true), _defineProperty(_classNames, styles.paperSelected, selected), _classNames));
  var navItemContent = /*#__PURE__*/React.createElement(React.Fragment, null, svg && /*#__PURE__*/React.createElement(ListItemIcon, {
    className: styles.icon
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: svg,
    size: "24"
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: /*#__PURE__*/React.createElement(Typography, {
      component: "p",
      variant: "subtitle1"
    }, name)
  }));

  if (isSelectedBasedOnRoute !== undefined) {
    return /*#__PURE__*/React.createElement(Paper, {
      elevation: 3,
      component: "li",
      className: paperClassName
    }, /*#__PURE__*/React.createElement(ListItem, _extends({
      component: NavLink,
      classes: classes,
      activeClassName: styles.selected,
      "data-testid": MENU_ITEM_TESTID,
      "aria-label": getAriaLabel(isSelectedBasedOnRoute, formatMessage, name)
    }, otherProps), navItemContent));
  }

  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    component: "li",
    className: paperClassName
  }, /*#__PURE__*/React.createElement(ListItem, _extends({
    classes: _objectSpread(_objectSpread({}, classes), {}, {
      selected: styles.selected
    }),
    selected: selected,
    onClick: handleClick,
    role: undefined,
    "aria-label": getAriaLabel(selected, formatMessage, name),
    "data-testid": MENU_ITEM_TESTID,
    component: "a"
  }, otherProps), navItemContent));
}

TertiaryNavDesktopItem.defaultProps = {
  onChange: function onChange() {},
  onClick: function onClick() {}
};
TertiaryNavDesktopItem.propTypes = {
  /** name has to be a pre-translated string, it's later used to create aria-label for selected item */
  name: PropTypes.string.isRequired,

  /** should be an svg from @ed/baseline to display as an icon for the sidenav item */
  svg: PropTypes.string,

  /** When using react-router-dom version of the nav, you supply `exact` on items that should be matched exactly to the route */
  exact: PropTypes.bool,

  /** This will be populated by TertiaryNavDesktop when we are using the react-router-dom version and indicates the currently active side nav item */
  isSelectedBasedOnRoute: PropTypes.bool,
  // The following props are optional and may be required if you are not using `react-router-dom` version of the nav

  /** Only required if using non RRD version - populated by TertiaryNavDesktop and indicates the currently active side nav item */
  selected: PropTypes.bool,

  /** Not required when using react-router-dom version of the nav, function to be fired on click of the individual item */
  onClick: PropTypes.func,

  /** Not required when using react-router-dom version of the nav, can be used to override the root component element used for the sidenav item (e.g. 'button') */
  component: PropTypes.elementType,

  /** Not required when using react-router-dom version of the nav, fires on change of sidenav menu items */
  onChange: PropTypes.func
};
export default TertiaryNavDesktopItem;