/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Accordion } from '@hmhco/accordion/src/Accordion';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import useStyles from './MobileTable.styles';
import getLocaleFile from '../lang';

var MobileTableSkeleton = function MobileTableSkeleton() {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var rows = Array.from({
    length: 10
  }).fill();
  return /*#__PURE__*/React.createElement(React.Fragment, null, rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement(Accordion, {
      key: "skeleton-".concat(index),
      heading: /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rectangular",
        className: classes.totalHeading,
        "data-testid": "skeleton-accordion-".concat(index)
      }),
      expandButtonText: "",
      collapseButtonText: "",
      expandButtonAriaText: "",
      collapseButtonAriaText: ""
    }, /*#__PURE__*/React.createElement("div", null));
  }));
};

export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(MobileTableSkeleton, props));
});