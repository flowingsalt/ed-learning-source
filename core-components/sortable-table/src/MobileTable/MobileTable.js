import _typeof from "@babel/runtime/helpers/typeof";
/* eslint-disable react/no-array-index-key */

import React from 'react';
import { useIntl } from 'react-intl';
import { arrayOf, object, number, shape, func, string, bool } from 'prop-types';
import classNames from 'classnames';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Accordion } from '@hmhco/accordion/src/Accordion';
import ComboBox from '@hmhco/combobox/src/ComboBox/ComboBox';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import useStyles from './MobileTable.styles';
import MobileTableSkeleton from './MobileTableSkeleton';
import getLocaleFile from '../lang';

var MobileTable = function MobileTable(props) {
  var rows = props.rows,
      orderBy = props.orderBy,
      headers = props.headers,
      handleRequestSort = props.handleRequestSort,
      tableFooter = props.tableFooter,
      isLoading = props.isLoading,
      customClass = props.customClass;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var tableWrapperClass = tableFooter && tableFooter.props.count > tableFooter.props.rowsPerPage ? classes.tableWrapperWithFooter : classes.tableWrapper;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var options = headers.filter(function (header) {
    return header.isSortable;
  });

  var handleSort = function handleSort(event, value) {
    if (value === null || value === void 0 ? void 0 : value.id) {
      handleRequestSort(event, value.id);
    }
  };

  var selectedOption = options.find(function (option) {
    return option.id === orderBy;
  }) || null;

  var getUpdatedLabel = function getUpdatedLabel(headerObj) {
    return _typeof(headerObj.label) !== 'object' ? headerObj.label : headerObj.labelText;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.sortBox
  }, /*#__PURE__*/React.createElement(ComboBox, {
    label: formatMessage({
      id: 'tables.mobileTable.sort.label'
    }),
    options: options,
    getOptionLabel: function getOptionLabel(headerObj) {
      return headerObj.raw || getUpdatedLabel(headerObj);
    },
    dataTestId: "tableSortIdInput",
    placeholder: formatMessage({
      id: 'tables.mobileTable.sort.placeholder'
    }),
    noOptionsText: formatMessage({
      id: 'tables.mobileTable.sort.noOptions'
    }),
    handleChange: handleSort,
    labelledby: "mobileSortableTable",
    value: selectedOption
  })), /*#__PURE__*/React.createElement("div", {
    className: classNames(tableWrapperClass, customClass.table)
  }, isLoading ? /*#__PURE__*/React.createElement(MobileTableSkeleton, props) : (rows === null || rows === void 0 ? void 0 : rows.length) > 0 && rows.map(function (row, parentindex) {
    var textValue = row.data[0].value.type === 'a' ? row.data[0].textValue : row.data[0].value;
    var rowKey = row.id || parentindex;
    return /*#__PURE__*/React.createElement(Accordion, {
      key: rowKey,
      heading: /*#__PURE__*/React.createElement(Typography, {
        variant: "subtitle2",
        component: "h2"
      }, textValue),
      buttonProps: {
        'data-testid': 'toggle-mobile-table-cell'
      },
      expandButtonText: "",
      collapseButtonText: "",
      expandButtonAriaText: formatMessage({
        id: 'tables.mobileTable.title.expand'
      }, {
        titleLabel: row.data[0].textValue
      }),
      collapseButtonAriaText: formatMessage({
        id: 'tables.mobileTable.title.collapse'
      }, {
        titleLabel: row.data[0].textValue
      }),
      fullTitleBar: true
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: 2,
      className: classes.childrenWrapper
    }, row.data.map(function (col, index) {
      if (!col.value) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Grid, {
        item: true,
        xs: 12,
        className: classes.styleRow,
        key: "".concat(rowKey, "-").concat(index)
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.mobileRow
      }, index === orderBy ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, headers[index].label)) : /*#__PURE__*/React.createElement("div", null, headers[index].label), /*#__PURE__*/React.createElement("div", null, col.value)));
    }), row.actionRowElement && /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 12,
      className: classes.styleRow
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.mobileActionButton
    }, row.actionRowElement))));
  })));
};

MobileTable.propTypes = {
  rows: arrayOf(object),
  headers: arrayOf(object).isRequired,
  handleRequestSort: func.isRequired,
  orderBy: string.isRequired,
  tableFooter: shape({
    props: shape({
      count: number,
      rowsPerPage: number
    })
  }),
  isLoading: bool,
  customClass: object
};
MobileTable.defaultProps = {
  tableFooter: {
    props: {
      count: 0,
      rowsPerPage: 0
    }
  },
  isLoading: false,
  customClass: {}
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(MobileTable, props));
});