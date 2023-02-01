/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Skeleton from '@mui/material/Skeleton';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import useStyles from './TertiaryNavMobile.styles';
import useStylesItems from './TertiaryNavMobileItem.styles';
import getLocaleFile from '../lang';
var TABS_VARIANT = 'scrollable';
var TABS_SCROLL_BUTTONS = true;

var TertiaryNavMobileSkeleton = function TertiaryNavMobileSkeleton(props) {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var classesItems = useStylesItems();

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var ariaLabel = props.ariaLabel;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    "data-testid": "tertiary-nav-mobile-skeleton"
  }, /*#__PURE__*/React.createElement(AppBar, {
    position: "static",
    color: "default"
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: TABS_VARIANT,
    scrollButtons: TABS_SCROLL_BUTTONS,
    "aria-label": ariaLabel,
    value: false
  }, /*#__PURE__*/React.createElement(Tab, {
    "aria-label": formatMessage({
      id: 'tertiaryNav.loading'
    }),
    classes: {
      root: classesItems.root
    },
    label: /*#__PURE__*/React.createElement(Skeleton, {
      height: "var(--ebl-sh2-line-height)",
      width: 160
    })
  }))));
};

TertiaryNavMobileSkeleton.propTypes = {
  /** used to describe the entire list */
  ariaLabel: PropTypes.string.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(TertiaryNavMobileSkeleton, props));
});