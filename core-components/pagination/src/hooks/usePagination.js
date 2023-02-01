import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useCallback, useState } from 'react';
import { DEFAULT_PAGE_SIZE } from '../constants';

var usePagination = function usePagination() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$rowsPerPage = _ref.rowsPerPage,
      initialRowsPerPage = _ref$rowsPerPage === void 0 ? DEFAULT_PAGE_SIZE : _ref$rowsPerPage;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = useState(initialRowsPerPage),
      _useState4 = _slicedToArray(_useState3, 2),
      rowsPerPage = _useState4[0],
      setRowsPerPage = _useState4[1];

  var onPageChange = useCallback(function (ev, newPage) {
    setCurrentPage(newPage);
  }, []);
  var onRowsPerPageChange = useCallback(function (ev) {
    var newPageSize = parseInt(ev.target.value, 10);
    setRowsPerPage(newPageSize);
  }, []);
  var getCurrentPageData = useCallback(function (data) {
    return data.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);
  }, [currentPage, rowsPerPage]);
  return {
    currentPage: currentPage,
    rowsPerPage: rowsPerPage,
    onPageChange: onPageChange,
    onRowsPerPageChange: onRowsPerPageChange,
    getCurrentPageData: getCurrentPageData
  };
};

export default usePagination;