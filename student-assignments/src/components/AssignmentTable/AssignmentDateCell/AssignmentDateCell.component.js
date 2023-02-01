import React from 'react';
import { FormattedDate, FormattedRelativeTime, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { getRelativeDates, shouldWeShowDueTime } from '@hmhco/assignment-date-utils/src/AssignmentDateCell.utils';
import Styles from './AssignmentDateCell.component.css';
import useStyles from './AssignmentDateCell.Styles';

var getCurrentTimeForDateType = function getCurrentTimeForDateType(today, dateType) {
  // If relativeDate is required for the submitted date, use an End of Day time for today to ensure reliable today/tomorrow/yesterday behaviour
  var endDayToday = new Date(today);
  endDayToday.setHours(23, 59, 59, 999);
  return dateType === 'submitDate' ? today : endDayToday;
};

var DEFAULT_START_TIME = '00:00:00';

var AssignmentDateCell = function AssignmentDateCell(_ref) {
  var value = _ref.value,
      dataTestId = _ref.dataTestId,
      dateType = _ref.dateType,
      lockedAfterDueDate = _ref.lockedAfterDueDate;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var currentTimeUTC = value === null || value === void 0 ? void 0 : value.toString().slice(11, 19);
  var showDateOnly = dateType === 'startTime' && currentTimeUTC === DEFAULT_START_TIME;

  if (!value) {
    return null;
  }

  var today = new Date(Date.now());
  var valueDate = new Date(value); // Set the input date value to the end of the day to ensure reliable relative date (today/tomorrow/yesterday) behaviour

  valueDate.setHours(23, 59, 59, 999);

  var _getRelativeDates = getRelativeDates(valueDate, getCurrentTimeForDateType(today, dateType)),
      differenceValue = _getRelativeDates.differenceValue,
      unit = _getRelativeDates.unit;

  var dueDateObject = /*#__PURE__*/React.createElement(FormattedDate, {
    value: value,
    year: "numeric",
    month: "short",
    day: "2-digit"
  });

  if (dateType === 'dueDate') {
    if (shouldWeShowDueTime(value)) {
      dueDateObject = /*#__PURE__*/React.createElement(FormattedDate, {
        value: value,
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      });
    }

    if (lockedAfterDueDate) {
      dueDateObject = /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssignments.noLateWorkAllowed",
        values: {
          date: dueDateObject
        }
      });
    }
  }

  var startDateObject = showDateOnly ? /*#__PURE__*/React.createElement(FormattedDate, {
    value: value,
    year: "numeric",
    month: "short",
    day: "2-digit"
  }) : /*#__PURE__*/React.createElement(FormattedDate, {
    value: value,
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: Styles.assignmentDateCell,
    "data-test-id": dataTestId
  }, /*#__PURE__*/React.createElement(FormattedRelativeTime, {
    value: differenceValue,
    unit: unit,
    numeric: "auto"
  }, function (date) {
    return /*#__PURE__*/React.createElement("span", {
      className: classes.textStyling
    }, date);
  }), dateType === 'startTime' ? startDateObject : dueDateObject);
};

AssignmentDateCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  lockedAfterDueDate: PropTypes.bool,
  dataTestId: PropTypes.string,
  dateType: PropTypes.string
};
export default AssignmentDateCell;