import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemAvatar, ListItemText, ListItemIcon, Typography } from '@mui/material';
import nextSvgSm from '@ed/baseline/icons/cts/next-sm.svg';
import calendarSvgSm from '@ed/baseline/icons/cts/due-today-sm.svg';
import Icon from '@hmhco/icon/src/Icon';
import { AssignmentDate } from '@hmhco/assignment-date-utils/src/AssignmentDate';
import useStyles from './DashboardCardTile.Styles';

var DashboardCardTile = function DashboardCardTile(props) {
  var primary = props.primary,
      secondary = props.secondary,
      secondaryComponents = props.secondaryComponents,
      dueDate = props.dueDate,
      count = props.count,
      icon = props.icon,
      iconAria = props.iconAria,
      disabled = props.disabled,
      clickAction = props.clickAction,
      ariaLabel = props.ariaLabel,
      hideChevron = props.hideChevron,
      hideDueDate = props.hideDueDate,
      role = props.role,
      isTeacherDashboard = props.isTeacherDashboard,
      showTime = props.showTime;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useState = useState('hideLocalOutline'),
      _useState2 = _slicedToArray(_useState, 2),
      hideOutlineClass = _useState2[0],
      setHideOutlineClass = _useState2[1];

  var handleClick = function handleClick() {
    setHideOutlineClass('hideLocalOutline');

    if (role === 'button') {
      clickAction();
    }
  };

  var handleFocus = function handleFocus(event) {
    if (role === 'button' && event.key === 'Tab') {
      setHideOutlineClass('showLocalOutline');
    }
  };

  var handleBlur = function handleBlur() {
    setHideOutlineClass('hideLocalOutline');
  };

  var rootClass = role === 'listitem' ? "".concat(classes.root, " ").concat(hideOutlineClass, " persistIcon") : "".concat(classes.root, " ").concat(hideOutlineClass);
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ListItem, {
    onClick: handleClick,
    onKeyUp: function onKeyUp(e) {
      return handleFocus(e);
    },
    onBlur: handleBlur,
    button: true,
    disabled: disabled,
    className: rootClass,
    "aria-label": ariaLabel,
    role: role,
    "data-testid": "dashboardCardTile",
    tabIndex: role === 'listitem' || role === 'presentation' ? -1 : 0
  }, icon && /*#__PURE__*/React.createElement(ListItemAvatar, {
    "data-testid": "dashboardCardTileIcon",
    className: "".concat(classes.icon, " ").concat(classes.iconHide)
  }, /*#__PURE__*/React.createElement(Icon, icon)), /*#__PURE__*/React.createElement("div", {
    className: classes.textWrapper
  }, /*#__PURE__*/React.createElement(ListItemText, {
    secondaryTypographyProps: {
      component: 'div'
    },
    className: classes.text,
    primary: /*#__PURE__*/React.createElement(Typography, {
      variant: "subtitle2",
      component: "p",
      noWrap: true
    }, primary),
    secondary: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
      className: classes.secondary,
      variant: "button",
      component: "p",
      noWrap: true
    }, secondary), secondaryComponents)
  }), !hideDueDate && /*#__PURE__*/React.createElement(ListItemText, {
    className: classes.dueDate,
    primary: /*#__PURE__*/React.createElement(ListItemIcon, {
      className: classes.dueDateIcon,
      "aria-label": iconAria
    }, /*#__PURE__*/React.createElement(Icon, {
      svg: calendarSvgSm,
      size: "16"
    })),
    secondary: /*#__PURE__*/React.createElement(Typography, {
      className: classes.dueDateText,
      variant: "subtitle1",
      component: "div",
      noWrap: true
    }, /*#__PURE__*/React.createElement(AssignmentDate, {
      value: dueDate,
      dataTestId: "AssignmentDueDate",
      hideDaysAgo: true,
      isTeacherDashboard: isTeacherDashboard,
      showTime: showTime
    }))
  })), /*#__PURE__*/React.createElement(ListItemText, {
    className: classes.count,
    primary: /*#__PURE__*/React.createElement(Typography, {
      variant: "subtitle2",
      component: "p"
    }, count)
  }), !hideChevron && /*#__PURE__*/React.createElement(ListItemIcon, {
    className: classes.rightIcon,
    "data-testid": "dashboardCardTileChevron"
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: nextSvgSm,
    size: "16"
  }))));
};

DashboardCardTile.propTypes = {
  primary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondaryComponents: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  dueDate: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
  icon: PropTypes.shape(_objectSpread({}, Icon.propTypes)),
  iconAria: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  clickAction: PropTypes.func,
  ariaLabel: PropTypes.string,
  isLoading: PropTypes.bool,
  hideChevron: PropTypes.bool,
  hideDueDate: PropTypes.bool,
  role: PropTypes.string,
  isTeacherDashboard: PropTypes.bool,
  showTime: PropTypes.bool
};
DashboardCardTile.defaultProps = {
  role: 'button',
  clickAction: function clickAction() {},
  iconAria: undefined,
  hideDueDate: true,
  ariaLabel: null
};
export default DashboardCardTile;