import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';
import useStyles from './TertiaryNavMobileItem.styles';
var MENU_ITEM_TESTID = 'MenuItem';

var getAriaLabel = function getAriaLabel(isSelected, formatMessage, name) {
  return isSelected ? formatMessage({
    id: 'tertiaryNav.itemSelected'
  }, {
    name: name
  }) : undefined;
};

var TertiaryNavMobileItem = function TertiaryNavMobileItem(props) {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var name = props.name,
      selected = props.selected,
      onClick = props.onClick,
      onChange = props.onChange,
      isSelectedBasedOnRoute = props.isSelectedBasedOnRoute,
      otherProps = _objectWithoutProperties(props, ["name", "selected", "onClick", "onChange", "isSelectedBasedOnRoute"]);

  if (isSelectedBasedOnRoute !== undefined) {
    return /*#__PURE__*/React.createElement(Tab, _extends({
      classes: {
        root: classes.root
      },
      component: NavLink,
      label: name,
      "aria-label": getAriaLabel(isSelectedBasedOnRoute, formatMessage, name),
      "data-testid": MENU_ITEM_TESTID,
      selected: selected
    }, otherProps));
  }

  return /*#__PURE__*/React.createElement(Tab, _extends({
    classes: {
      root: classes.root
    },
    label: name,
    selected: selected,
    "aria-label": getAriaLabel(selected, formatMessage, name),
    "data-testid": MENU_ITEM_TESTID,
    onClick: onClick,
    onChange: onChange
  }, otherProps));
};

TertiaryNavMobileItem.propTypes = {
  /** name has to be a pre-translated string, it's later used to create aria-label for selected item */
  name: PropTypes.string.isRequired,

  /** When using react-router-dom version of the nav, you supply `exact` on items that should be matched exactly to the route */
  exact: PropTypes.bool,

  /** This will be populated by TertiaryNavMobile when we are using the react-router-dom version and indicates the currently active side nav item */
  isSelectedBasedOnRoute: PropTypes.bool,
  // The following props are optional and may be required if you are not using `react-router-dom` version of the nav

  /** Only required if using non RRD version - populated by TertiaryNavMobile and indicates the currently active side nav item */
  selected: PropTypes.bool,

  /** Not required when using react-router-dom version of the nav, function to be fired on click of the individual item */
  onClick: PropTypes.func,

  /** Not required when using react-router-dom version of the nav, can be used to override the root component element used for the sidenav item (e.g. 'button') */
  component: PropTypes.elementType,

  /** Not required when using react-router-dom version of the nav, fires on change of sidenav menu items */
  onChange: PropTypes.func
};
export default TertiaryNavMobileItem;