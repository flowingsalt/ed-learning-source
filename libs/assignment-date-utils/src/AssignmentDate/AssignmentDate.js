import React from 'react';
import { FormattedDate, FormattedRelativeTime, FormattedTime } from 'react-intl';
import PropTypes from 'prop-types';
import { isDatePriorToEndOfTomorrow, getRelativeDates, getDueDateTime } from '../AssignmentDateCell.utils';
import useStyles from './AssignmentDate.Styles';
/**
 * Format a date using react-intl
 *
 * @param {object} options for date formatting: value,  hideDaysAgo, displayBlock, showTime, isStudentDashboard and dataTestId
 *
 * @returns JSX for formatted date
 */

var AssignmentDate = function AssignmentDate(_ref) {
  var value = _ref.value,
      dataTestId = _ref.dataTestId,
      hideDaysAgo = _ref.hideDaysAgo,
      displayBlock = _ref.displayBlock,
      showTime = _ref.showTime,
      isStudentDashboard = _ref.isStudentDashboard,
      isTeacherDashboard = _ref.isTeacherDashboard;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  if (value) {
    var today = new Date(Date.now());
    var valueDate = new Date(value);
    var valueDateWithUserSetTime = new Date(value); // Set the input date value to the end of the day to ensure reliable relative date (today/tomorrow/yesterday) behaviour

    valueDate.setHours(23, 59, 59, 999); // Any relative due dates prior to EOD tomorrow should be BOLD on the UI

    var isDueAssignment = isDatePriorToEndOfTomorrow(today, valueDate);

    var _getRelativeDates = getRelativeDates(valueDate, getDueDateTime(today)),
        differenceValue = _getRelativeDates.differenceValue,
        unit = _getRelativeDates.unit;

    if (isStudentDashboard || isTeacherDashboard) {
      return /*#__PURE__*/React.createElement("span", {
        className: displayBlock ? classes.dateWrapperBlock : classes.dateWrapperInherit,
        "data-testid": dataTestId
      }, !hideDaysAgo && /*#__PURE__*/React.createElement(FormattedRelativeTime, {
        value: differenceValue,
        unit: unit,
        numeric: "auto"
      }, function (date) {
        return /*#__PURE__*/React.createElement("span", {
          className: isDueAssignment ? classes.isBold : classes.date
        }, date);
      }), showTime ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormattedDate, {
        value: valueDateWithUserSetTime,
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      })) : /*#__PURE__*/React.createElement(FormattedDate, {
        value: valueDate,
        year: "numeric",
        month: "short",
        day: "2-digit"
      }));
    }

    return /*#__PURE__*/React.createElement("span", {
      className: displayBlock ? classes.dateWrapperBlock : classes.dateWrapperInherit,
      "data-testid": dataTestId
    }, !hideDaysAgo && /*#__PURE__*/React.createElement(FormattedRelativeTime, {
      value: differenceValue,
      unit: unit,
      numeric: "auto"
    }, function (date) {
      return /*#__PURE__*/React.createElement("span", {
        className: isDueAssignment ? classes.isBold : classes.date
      }, date);
    }), showTime ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedDate, {
      value: valueDate,
      year: "numeric",
      month: "short",
      day: "2-digit"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedTime, {
      value: value,
      hour: "numeric",
      minute: "numeric"
    }))) : /*#__PURE__*/React.createElement(FormattedDate, {
      value: valueDate,
      year: "numeric",
      month: "short",
      day: "2-digit"
    }));
  }

  return null;
};

AssignmentDate.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  dataTestId: PropTypes.string,
  hideDaysAgo: PropTypes.bool,
  displayBlock: PropTypes.bool,
  showTime: PropTypes.bool,
  isStudentDashboard: PropTypes.bool,
  isTeacherDashboard: PropTypes.bool
};
AssignmentDate.defaultProps = {
  hideDaysAgo: false,
  displayBlock: false,
  showTime: false
};
export default AssignmentDate;