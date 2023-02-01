import _defineProperty from "@babel/runtime/helpers/defineProperty";
/* eslint-disable react/no-array-index-key */

import React from 'react';
import classNames from 'classnames';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';

var SortableTableSkeleton = function SortableTableSkeleton(_ref) {
  var classes = _ref.classes,
      customClass = _ref.customClass,
      headers = _ref.headers,
      hasActionColumn = _ref.hasActionColumn;
  var skeletonRows = Array.from({
    length: 10
  }).fill();
  var skeletonCells = Array.from({
    length: headers.length
  }).fill();
  return skeletonRows.map(function (row, index) {
    return /*#__PURE__*/React.createElement(TableRow, {
      key: index,
      "data-testid": "skeletonRow-".concat(index)
    }, skeletonCells.map(function (data, colIndex) {
      var _classNames;

      var cellClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes.firstRealCell, colIndex === 0), _defineProperty(_classNames, customClass.firstRealCell, customClass.firstRealCell && colIndex === 0), _classNames));
      return /*#__PURE__*/React.createElement(TableCell, {
        key: "".concat(index).concat(colIndex),
        className: cellClasses,
        "data-testid": "skeletonRow-".concat(index, "-").concat(colIndex)
      }, /*#__PURE__*/React.createElement(Skeleton, null));
    }), hasActionColumn && /*#__PURE__*/React.createElement(TableCell, {
      className: classNames(classes.actionCell, _defineProperty({}, customClass.actionCell, customClass.actionCell)),
      "data-testid": "action-column-loader"
    }, /*#__PURE__*/React.createElement(Skeleton, null)));
  });
};

export default SortableTableSkeleton;