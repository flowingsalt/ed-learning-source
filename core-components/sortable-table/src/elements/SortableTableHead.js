import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { FormattedMessage, useIntl } from 'react-intl'; // TODO: Let's try and decouple this component from FormattedMessage in the next PR

import getLocaleFile from '../lang';
import SortableTableHeaderColumn from './SortableTableHeaderColumn';

var SortableTableHead = function SortableTableHead(props) {
  var classes = props.classes,
      direction = props.direction,
      orderBy = props.orderBy,
      headers = props.headers,
      hasActionColumn = props.hasActionColumn,
      onRequestSort = props.onRequestSort,
      showRowIcon = props.showRowIcon,
      customClass = props.customClass,
      defaultSortOrder = props.defaultSortOrder,
      myRef = props.myRef,
      floatingHeader = props.floatingHeader,
      isDirectEntry = props.isDirectEntry;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  var sortedLabel = formatMessage({
    id: direction === 'asc' ? 'sorted.ascending' : 'sorted.descending'
  });
  var unsortedLabelId = defaultSortOrder === 'asc' ? 'sorted.unsorted.willAscend' : 'sorted.unsorted.willDescend';
  var unsortedLabel = defaultSortOrder && formatMessage({
    id: unsortedLabelId
  });
  var buttonHeaderTemplate = 'HeaderButton';
  return /*#__PURE__*/React.createElement(TableHead, {
    className: floatingHeader ? classes.headerClass : null,
    ref: myRef
  }, /*#__PURE__*/React.createElement(TableRow, null, showRowIcon && /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "tables.iconColumn.arialabel"
  }, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        message = _ref2[0];

    return /*#__PURE__*/React.createElement(TableCell, {
      className: classes.iconCell,
      "aria-label": message,
      "data-test-id": "icons"
    });
  }), headers.map(function (header, index) {
    return /*#__PURE__*/React.createElement(SortableTableHeaderColumn, {
      key: header.id,
      header: header,
      index: index,
      classes: classes,
      customClass: customClass,
      createSortHandler: createSortHandler,
      sortedLabel: sortedLabel,
      unsortedLabel: unsortedLabel,
      buttonHeaderTemplate: buttonHeaderTemplate,
      orderBy: orderBy,
      direction: direction,
      isDirectEntry: isDirectEntry
    });
  }), hasActionColumn && /*#__PURE__*/React.createElement(TableCell, {
    "data-testid": "actions"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "tables.actionColumn.header"
  }))));
};

SortableTableHead["default"] = {
  defaultSortOrder: '',
  customClass: {}
}; // All prop types are required, as they should be supplied from SortableTable either by prop values or defaults

SortableTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    isSortable: PropTypes.bool,
    trackEvent: PropTypes.string,
    align: PropTypes.string
  })).isRequired,
  hasActionColumn: PropTypes.bool.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  showRowIcon: PropTypes.bool.isRequired,
  floatingHeader: PropTypes.bool.isRequired,
  customClass: PropTypes.object,
  defaultSortOrder: PropTypes.string,
  myRef: PropTypes.object,
  isDirectEntry: PropTypes.bool
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(SortableTableHead, props));
});