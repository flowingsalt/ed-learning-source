import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useIntl } from 'react-intl';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { Typography } from '@mui/material';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import useStyles from './TertiaryNavDesktop.styles';
import useItemStyles from './TertiaryNavDesktopItem.styles';
import getLocaleFile from '../lang';
var SKELETON_ROWS = 3;

function TertiaryNavDesktopSkeleton(props) {
  var _useStyles = useStyles(props, {
    props: props
  }),
      styles = _useStyles.classes;

  var _useItemStyles = useItemStyles(props, {
    props: props
  }),
      itemClasses = _useItemStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var menuName = props.menuName,
      ariaLabel = props.ariaLabel;
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "tertiary-nav-desktop-skeleton",
    "aria-label": formatMessage({
      id: 'tertiaryNav.loading'
    })
  }, menuName && /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle2",
    className: styles.menuName,
    component: "p"
  }, menuName), /*#__PURE__*/React.createElement(List, {
    className: styles.list,
    "aria-label": ariaLabel
  }, _toConsumableArray(Array(SKELETON_ROWS).keys()).map(function (index) {
    return /*#__PURE__*/React.createElement(Paper, {
      elevation: 3,
      className: styles.border,
      component: "li",
      key: index
    }, /*#__PURE__*/React.createElement(ListItem, {
      style: styles,
      button: true,
      classes: {
        root: itemClasses.root
      },
      role: undefined,
      component: "a"
    }, /*#__PURE__*/React.createElement(Skeleton, {
      height: "var(--ebl-sh2-line-height)",
      width: 160
    })));
  })));
}

TertiaryNavDesktopSkeleton.propTypes = {
  /** used to describe the entire list */
  ariaLabel: PropTypes.string.isRequired,

  /** Optionally provides a name label on the menu items */
  menuName: PropTypes.string
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(TertiaryNavDesktopSkeleton, props));
});