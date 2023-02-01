import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

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

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import TabScrollButton from '@mui/material/TabScrollButton';
import Box from '@mui/material/Box';
import useStyles from './Tabs.Styles';

var CustomTabButton = function CustomTabButton(_ref) {
  var tabComponentProps = _ref.tabComponentProps,
      disabledButtonCallback = _ref.disabledButtonCallback;
  var direction = tabComponentProps.direction,
      disabled = tabComponentProps.disabled;
  useEffect(function () {
    disabledButtonCallback(direction, disabled);
  }, [disabled, disabledButtonCallback, direction]);
  return /*#__PURE__*/React.createElement(TabScrollButton, tabComponentProps);
};

export var TabPanel = function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      id = props.id,
      disableDefaultPanelStyling = props.disableDefaultPanelStyling;

  var _useStyles = useStyles({
    disableDefaultPanelStyling: disableDefaultPanelStyling
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: "".concat(id, "-tabpanel-").concat(index),
    "aria-labelledby": "".concat(id, "-tab-").concat(index),
    key: id,
    className: classes.tabPanel
  }, value === index && /*#__PURE__*/React.createElement(Box, null, children));
};
export var TabsSkeleton = function TabsSkeleton(_ref2) {
  var isLoadingAriaLabel = _ref2.isLoadingAriaLabel;
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    height: "48px",
    "data-testid": "tabs-skeleton",
    role: "img",
    "aria-label": isLoadingAriaLabel
  })));
};

function a11yProps(id, ariaLabel, index, includeTabPanels) {
  var props = _objectSpread({
    id: "".concat(id, "-tab-").concat(index)
  }, ariaLabel && {
    'aria-label': ariaLabel
  });

  return includeTabPanels ? _objectSpread(_objectSpread({}, props), {}, {
    'aria-controls': "".concat(id, "-tabpanel-").concat(index)
  }) : props;
}

var TabsComponent = function TabsComponent(_ref3) {
  var children = _ref3.children,
      componentId = _ref3.componentId,
      ariaLabel = _ref3.ariaLabel,
      defaultValue = _ref3.defaultValue,
      tabChangeCallback = _ref3.tabChangeCallback,
      includeTabPanels = _ref3.includeTabPanels,
      isLoading = _ref3.isLoading,
      isLoadingAriaLabel = _ref3.isLoadingAriaLabel,
      tabValueOverride = _ref3.tabValueOverride;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      scrollButtonsDisabled = _useState2[0],
      setScrollButtonsDisabled = _useState2[1];

  var _useState3 = useState(defaultValue),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useStyles2 = useStyles({
    wrapped: children.some(function (child) {
      return child.props.wrapped;
    }),
    disabledButtons: scrollButtonsDisabled
  }),
      classes = _useStyles2.classes;

  useEffect(function () {
    if (typeof tabValueOverride === 'number') {
      setValue(tabValueOverride);
    }
  }, [tabValueOverride]);

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
    tabChangeCallback(newValue);
  };

  var disabledButtonCallback = useCallback(function (direction, disabled) {
    if (scrollButtonsDisabled[direction] !== disabled) {
      setScrollButtonsDisabled(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, direction, disabled));
      });
    }
  }, [scrollButtonsDisabled]);
  return /*#__PURE__*/React.createElement(Box, {
    className: classes.container
  }, /*#__PURE__*/React.createElement(Box, null, isLoading ? /*#__PURE__*/React.createElement(TabsSkeleton, {
    isLoadingAriaLabel: isLoadingAriaLabel
  }) : /*#__PURE__*/React.createElement(Tabs, {
    className: classes.tabs,
    value: value,
    onChange: handleChange,
    "aria-label": ariaLabel,
    "data-testid": "".concat(componentId, "-test-id"),
    classes: {
      indicator: classes.indicator
    },
    ScrollButtonComponent: function ScrollButtonComponent(props) {
      return /*#__PURE__*/React.createElement(CustomTabButton, {
        tabComponentProps: props,
        disabledButtonCallback: disabledButtonCallback
      });
    },
    scrollButtons: true,
    allowScrollButtonsMobile: true,
    variant: "scrollable"
  }, children === null || children === void 0 ? void 0 : children.map(function (child, index) {
    var _child$props = child.props,
        tabId = _child$props.tabId,
        label = _child$props.label,
        wrapped = _child$props.wrapped,
        icon = _child$props.icon,
        iconPosition = _child$props.iconPosition,
        disabled = _child$props.disabled;
    return /*#__PURE__*/React.createElement(Tab, _extends({
      disableRipple: true,
      disableFocusRipple: true,
      label: label,
      wrapped: wrapped
    }, a11yProps(componentId, child.props.ariaLabel, index, includeTabPanels), {
      key: "tab-".concat(tabId),
      className: "".concat(wrapped ? classes.tabWrappedTitle : '', " ").concat(classes.tab, " "),
      icon: icon,
      iconPosition: iconPosition,
      disabled: disabled
    }));
  }))), includeTabPanels && /*#__PURE__*/React.createElement(React.Fragment, null, children === null || children === void 0 ? void 0 : children.map(function (child, index) {
    var _child$props2;

    return /*#__PURE__*/React.createElement(TabPanel, {
      id: componentId,
      key: child.props.tabId,
      value: value,
      index: index,
      disableDefaultPanelStyling: child.props.disableDefaultPanelStyling
    }, (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.children);
  })));
};

export default TabsComponent;
TabsComponent.defaultProps = {
  scrollableTabs: false,
  includeTabPanels: true,
  defaultValue: 0,
  children: [],
  ariaLabel: undefined,
  isLoading: false,
  isLoadingAriaLabel: undefined,
  tabValueOverride: undefined,
  componentId: 'tabComponent'
};
TabsComponent.propTypes = {
  componentId: PropTypes.string,
  tabChangeCallback: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape({
    props: PropTypes.shape({
      tabId: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string,
      disabled: PropTypes.bool,
      wrapped: PropTypes.bool,
      icon: PropTypes.node,
      iconPosition: PropTypes.string,
      disableDefaultPanelStyling: PropTypes.bool
    })
  })),
  defaultValue: PropTypes.number,
  tabValueOverride: PropTypes.number,
  ariaLabel: PropTypes.string,
  scrollableTabs: PropTypes.bool,
  includeTabPanels: PropTypes.bool,
  isLoading: PropTypes.bool,
  isLoadingAriaLabel: PropTypes.string
};
TabPanel.defaultProps = {
  disableDefaultPanelStyling: false
};
TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  disableDefaultPanelStyling: PropTypes.bool
};
CustomTabButton.propTypes = {
  tabComponentProps: PropTypes.object.isRequired,
  disabledButtonCallback: PropTypes.func.isRequired
};
TabsSkeleton.propTypes = {
  isLoadingAriaLabel: PropTypes.string.isRequired
};