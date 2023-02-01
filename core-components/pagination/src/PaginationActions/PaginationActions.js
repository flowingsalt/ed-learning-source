import React, { useRef } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getLocaleFile from '../lang';
import useStyles from './PaginationActions.styles';

var PaginationActions = function PaginationActions(props) {
  var count = props.count,
      onPageChange = props.onPageChange,
      page = props.page,
      rowsPerPage = props.rowsPerPage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var nextBtn = useRef();
  var prevBtn = useRef();
  var lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

  var setFocusNextBtn = function setFocusNextBtn() {
    setTimeout(function () {
      var _nextBtn$current;

      (_nextBtn$current = nextBtn.current) === null || _nextBtn$current === void 0 ? void 0 : _nextBtn$current.focus();
    }, 0);
    return function () {
      return clearTimeout(setFocusNextBtn);
    };
  };

  var setFocusPrevBtn = function setFocusPrevBtn() {
    setTimeout(function () {
      var _prevBtn$current;

      (_prevBtn$current = prevBtn.current) === null || _prevBtn$current === void 0 ? void 0 : _prevBtn$current.focus();
    }, 0);
    return function () {
      return clearTimeout(setFocusPrevBtn);
    };
  };

  var handleFirstPageButtonClick = function handleFirstPageButtonClick(event) {
    onPageChange(event, 0);
    setFocusNextBtn();
  };

  var handleBackButtonClick = function handleBackButtonClick(event) {
    onPageChange(event, page - 1);

    if (page === 1) {
      setFocusNextBtn();
    }
  };

  var handleNextButtonClick = function handleNextButtonClick(event) {
    onPageChange(event, page + 1);

    if (page + 1 === lastPage) {
      setFocusPrevBtn();
    }
  };

  var handleLastPageButtonClick = function handleLastPageButtonClick(event) {
    onPageChange(event, lastPage);
    setFocusPrevBtn();
  };

  var isPreviousDisabled = page === 0;
  var isNextDisabled = page >= lastPage;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    role: "navigation",
    "aria-label": formatMessage({
      id: 'pagination.ariaLabel'
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.previousButtons
  }, /*#__PURE__*/React.createElement(IconButton, {
    "data-testid": "first-page-button",
    onClick: handleFirstPageButtonClick,
    disabled: isPreviousDisabled,
    "aria-label": formatMessage({
      id: 'pagination.firstPage'
    })
  }, /*#__PURE__*/React.createElement(FirstPageIcon, null)), /*#__PURE__*/React.createElement(IconButton, {
    "data-testid": "previous-page-button",
    onClick: handleBackButtonClick,
    disabled: isPreviousDisabled,
    "aria-label": formatMessage({
      id: 'pagination.previousPage'
    }),
    ref: prevBtn
  }, /*#__PURE__*/React.createElement(KeyboardArrowLeft, null))), /*#__PURE__*/React.createElement("div", {
    className: classes.nextButtons
  }, /*#__PURE__*/React.createElement(IconButton, {
    "data-testid": "next-page-button",
    onClick: handleNextButtonClick,
    disabled: isNextDisabled,
    "aria-label": formatMessage({
      id: 'pagination.nextPage'
    }),
    ref: nextBtn
  }, /*#__PURE__*/React.createElement(KeyboardArrowRight, null)), /*#__PURE__*/React.createElement(IconButton, {
    "data-testid": "last-page-button",
    onClick: handleLastPageButtonClick,
    disabled: isNextDisabled,
    "aria-label": formatMessage({
      id: 'pagination.lastPage'
    })
  }, /*#__PURE__*/React.createElement(LastPageIcon, null))));
};

PaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(PaginationActions, props));
});