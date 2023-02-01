import React from 'react';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { useIntl } from 'react-intl';
import { ListItem, Skeleton } from '@mui/material';
import getLocaleFile from '../lang';
import useStyles from './ResourceCardTile.Styles';
export default (function () {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(ListItem, {
    "data-testid": "resource-card-tile-skeleton",
    className: classes.root,
    "aria-label": formatMessage({
      id: 'resourceCardTile.loading'
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.contentWrap, " ").concat(classes.skeletonContentWrap)
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: classes.skeletonIcon
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.textWrap, " ").concat(classes.skeletonTextWrap)
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: "".concat(classes.text, " ").concat(classes.skeletonPrimary)
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: "".concat(classes.text, " ").concat(classes.skeletonSecondary)
  }), /*#__PURE__*/React.createElement(ListItem, {
    component: "div",
    className: classes.sublistWrapper
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: classes.skeletonSmallIcon
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.sublistText, " ").concat(classes.skeletonSublistText)
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: classes.skeletonSublistPrimaryText
  })), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: classes.skeletonButtonWrap
  }))))));
});