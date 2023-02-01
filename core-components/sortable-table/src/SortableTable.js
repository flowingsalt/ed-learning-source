import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
/* eslint-disable react/no-array-index-key */

/* eslint-disable no-nested-ternary */

import React, { useRef, useEffect } from 'react';
import { arrayOf, shape, oneOfType, instanceOf, string, number, bool, func, object, node } from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import classNames from 'classnames';
import useMatchBreakpoints from '@hmhco/breakpoints-helpers/src/useMatchBreakpoints';
import SortableTableHead from './elements/SortableTableHead';
import MobileTable from './MobileTable/MobileTable';
import SortableTableSkeleton from './elements/SortableTableSkeleton';
import useStyles from './SortableTable.styles';
import { topNavHeight } from './SortableTable.utils';

var getTableBorderClass = function getTableBorderClass(tableFooter, tableHeader, classes) {
  if (tableFooter && tableHeader) {
    return classes.headerAndFooterTable;
  }

  if (!tableFooter && !tableHeader) {
    return '';
  }

  return tableFooter ? classes.footerTable : classes.headerTable;
};

var SortableTable = function SortableTable(props) {
  var rows = props.rows,
      handleRequestSort = props.handleRequestSort,
      tableTestId = props.tableTestId,
      hasActionColumn = props.hasActionColumn,
      showRowIcon = props.showRowIcon,
      ariaLabel = props.ariaLabel,
      stickyHeader = props.stickyHeader,
      customClass = props.customClass,
      tableFooter = props.tableFooter,
      tableHeader = props.tableHeader,
      isLoading = props.isLoading,
      headers = props.headers,
      isFirstColRowHead = props.isFirstColRowHead,
      floatingHeader = props.floatingHeader;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var tableBorders = getTableBorderClass(tableFooter, tableHeader, classes);
  var headerRef = useRef();
  var isMobileOrTablet = useMatchBreakpoints(['xs', 'sm']);

  function getDistaceFromTopOfScreen() {
    headerRef.current.distanceFromTopOfScreen = headerRef.current.getBoundingClientRect().top + window.scrollY; // this is the initial distance to top of screen, remove height of topNav

    headerRef.current.distanceFromTopOfScreen -= topNavHeight();
  }

  useEffect(function () {
    if (!stickyHeader && !isLoading) {
      if (headerRef.current) {
        if (floatingHeader) {
          if (headerRef.current.distanceFromTopOfScreen === undefined && headerRef.current.getBoundingClientRect().top < 0) {
            // if the top value is negative send user to top to re-init header
            window.scrollTo(0, 0);
          }

          if (headerRef.current.getBoundingClientRect().top !== headerRef.current.distanceFromTopOfScreen || headerRef.current.distanceFromTopOfScreen === undefined) {
            // get header distance from top nav as the DOM updates, needed to cope with updating of screen when breakpoints change
            getDistaceFromTopOfScreen();
          }

          window.onscroll = function floatingHeaderScroll() {
            if (window.scrollY > headerRef.current.distanceFromTopOfScreen && headerRef.current.distanceFromTopOfScreen > 0) {
              headerRef.current.topPx = window.scrollY - headerRef.current.distanceFromTopOfScreen;
              headerRef.current.style.top = "".concat(headerRef.current.topPx, "px");
            } else if (window.scrollY < headerRef.current.distanceFromTopOfScreen && headerRef.current.distanceFromTopOfScreen > 0) {
              // when we have moved the header, but now we scroll back up to top it needs to be re-fixed
              headerRef.current.style.top = '0px';
            }
          };
        }
      }
    }

    return function cleanup() {
      if (headerRef.current && floatingHeader) {
        // this is needed to stop the header momentarily from jumping to the bottom on pagination
        headerRef.current.style.top = '0px';
      }

      window.onscroll = null;
    };
  });
  return isMobileOrTablet ? /*#__PURE__*/React.createElement("div", {
    className: classes.mobileTableWrapper
  }, tableHeader, /*#__PURE__*/React.createElement(MobileTable, _extends({}, props, {
    "data-testid": "".concat(tableTestId, "-mobile"),
    tableFooter: tableFooter
  })), tableFooter && /*#__PURE__*/React.createElement("div", {
    className: classes.mobilePageFooter
  }, tableFooter)) : /*#__PURE__*/React.createElement("div", {
    className: tableBorders
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.tableHeader
  }, tableHeader), /*#__PURE__*/React.createElement("div", {
    className: classes.tableWrapper,
    "data-sticky-header": stickyHeader
  }, /*#__PURE__*/React.createElement(Table, {
    className: customClass && customClass.table,
    "data-testid": tableTestId,
    "aria-label": ariaLabel,
    stickyheader: stickyHeader ? 'true' : 'false'
  }, ariaLabel && /*#__PURE__*/React.createElement("caption", {
    className: classes.visuallyHidden
  }, ariaLabel), /*#__PURE__*/React.createElement(SortableTableHead, _extends({}, props, {
    floatingHeader: floatingHeader,
    classes: classes,
    onRequestSort: handleRequestSort,
    myRef: headerRef
  })), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(React.Fragment, null, isLoading ? /*#__PURE__*/React.createElement(SortableTableSkeleton, {
    customClass: customClass,
    classes: classes,
    headers: headers,
    hasActionColumn: hasActionColumn
  }) : rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement(TableRow, {
      key: index,
      "data-testid": row.id
    }, showRowIcon && /*#__PURE__*/React.createElement(TableCell, {
      className: classes.iconCell
    }, row.icon), row.data.map(function (data, colIndex) {
      var _classNames;

      var cellClasses = classNames((_classNames = {}, _defineProperty(_classNames, data.presentationClass, data.presentationClass), _defineProperty(_classNames, classes.firstRealCell, colIndex === 0), _defineProperty(_classNames, customClass.firstRealCell, customClass.firstRealCell && colIndex === 0), _classNames), _defineProperty({}, classes.hasAction, data.hasAction));
      var options = {};

      if (colIndex === 0 && isFirstColRowHead) {
        options.component = 'th';
        options.scope = 'row';
        options.role = 'rowheader';
      }

      return /*#__PURE__*/React.createElement(TableCell, _extends({
        key: "".concat(index).concat(colIndex),
        className: cellClasses,
        "data-align": data.align,
        align: data.align,
        "data-testid": data.dataTestId
      }, options), data.presentationClass ? /*#__PURE__*/React.createElement("div", null, data.value) : data.value);
    }), hasActionColumn && /*#__PURE__*/React.createElement(TableCell, {
      className: classNames(classes.actionCell, _defineProperty({}, customClass.actionCell, customClass.actionCell))
    }, row.actionRowElement));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: classes.tableFooter
  }, tableFooter));
};

SortableTable.propTypes = {
  /** Headers define the column names, ids necessary for sorting, and whether the column is actually sortable and its corresponding track event */
  headers: arrayOf(shape({
    id: oneOfType([string, number]).isRequired,
    label: oneOfType([string, node]),
    isSortable: bool,
    trackEvent: string,
    align: string
  })).isRequired,

  /** Use this variable to specify if an action column is required in the table - if not provided, no action column appears */
  hasActionColumn: bool,

  /** Rows should contain a row id and data, and optional action element */
  rows: arrayOf(shape({
    id: oneOfType([string, number]).isRequired,
    actionRowElement: instanceOf(Object),
    data: arrayOf(object).isRequired,
    icon: instanceOf(Object)
  })).isRequired,

  /** Sorting function to be called on click of a column header */
  handleRequestSort: func.isRequired,

  /** Direction should be asc or desc */
  direction: string,

  /** Defines the column currently being sorted - this has to correspond to a header id */
  orderBy: string,

  /** Used in E2E tests */
  tableTestId: string,

  /** Provides an optional icon column on the table */
  showRowIcon: bool,

  /** Provides an optional screenreader caption for the table */
  ariaLabel: string,

  /** Use this variable to specify if the table should be announced to screenreaders with an aria live polite region */
  announceTableSorting: bool,

  /** Use this variable to add sticky header and scrollbar */
  stickyHeader: bool,

  /** Use this variable to add floating header */
  floatingHeader: bool,
  customClass: object,
  tableFooter: node,

  /** Use this when adding top pagination for the table */
  tableHeader: node,

  /* boolean when request has not completed to show the table skeleton */
  isLoading: bool,

  /* define the first column content as TH with scope row */
  isFirstColRowHead: bool,

  /* optional string to add information for unsorted columns */
  defaultSortOrder: string
};
SortableTable.defaultProps = {
  orderBy: '',
  hasActionColumn: false,
  announceTableSorting: true,
  direction: 'asc',
  stickyHeader: false,
  floatingHeader: false,
  showRowIcon: false,
  customClass: {},
  isFirstColRowHead: false,
  defaultSortOrder: '',
  tableTestId: undefined
};
export default SortableTable;