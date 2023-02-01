import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import TablePagination from '@mui/material/TablePagination';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import PaginationActions from '../PaginationActions/PaginationActions';
import getLocaleFile from '../lang';
import useStyles from './Pagination.styles';
import { DEFAULT_PAGE_SIZE } from '../constants';

var Pagination = function Pagination(props) {
  var count = props.count,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      onPageChange = props.onPageChange,
      onRowsPerPageChange = props.onRowsPerPageChange,
      rowsPerPageOptions = props.rowsPerPageOptions,
      paginationTestId = props.paginationTestId,
      noBorder = props.noBorder,
      otherProps = _objectWithoutProperties(props, ["count", "page", "rowsPerPage", "onPageChange", "onRowsPerPageChange", "rowsPerPageOptions", "paginationTestId", "noBorder"]);

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var rowsPerPageText = formatMessage({
    id: 'pagination.rowsPerPage'
  });
  return /*#__PURE__*/React.createElement(TablePagination, _extends({
    component: "div",
    "data-testid": paginationTestId,
    "aria-live": "polite",
    classes: classes,
    rowsPerPageOptions: rowsPerPageOptions,
    rowsPerPage: rowsPerPage,
    onPageChange: onPageChange,
    page: page,
    onRowsPerPageChange: onRowsPerPageChange,
    count: count,
    labelRowsPerPage: rowsPerPageText,
    labelDisplayedRows: function labelDisplayedRows(values) {
      return formatMessage({
        id: 'pagination.labelDisplayedRows'
      }, values);
    },
    SelectProps: {
      inputProps: {
        'aria-label': rowsPerPageText,
        'data-testid': 'per-page-select'
      },
      "native": true
    } // Warning! Don't change to ActionsComponent={() => <PaginationActions {...props} />}
    // It will cause Pagination to remount on every table render and break focus behaviour
    ,
    ActionsComponent: PaginationActions
  }, otherProps));
};

Pagination.defaultProps = {
  onRowsPerPageChange: function onRowsPerPageChange() {},
  rowsPerPageOptions: [],
  noBorder: false,
  rowsPerPage: DEFAULT_PAGE_SIZE
};
Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number,
  onRowsPerPageChange: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  noBorder: PropTypes.bool,
  paginationTestId: PropTypes.string
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(Pagination, props));
});