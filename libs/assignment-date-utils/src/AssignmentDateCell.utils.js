import moment from 'moment';
var MS_PER_SECOND = 1e3;
var SECS_PER_MIN = 60;
var SECS_PER_HOUR = SECS_PER_MIN * 60;
var SECS_PER_DAY = SECS_PER_HOUR * 24;
var SECS_PER_WEEK = SECS_PER_DAY * 7;
var timeFormat = 'hh:mm:ss A';
export var getRelativeDays = function getRelativeDays(fromDate, toDate) {
  var days = Math.floor((fromDate - toDate) / (MS_PER_SECOND * SECS_PER_DAY));

  if (Math.abs(days) >= 14) {
    return null;
  }

  return {
    differenceValue: Math.round(days),
    unit: 'day'
  };
};
export var getRelativeWeeks = function getRelativeWeeks(fromDate, toDate) {
  var previousMonth = new Date(fromDate);
  previousMonth.setMonth(previousMonth.getMonth() - 1);
  var nextMonth = new Date(fromDate);
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  if (toDate >= previousMonth && toDate <= nextMonth) {
    var secs = (fromDate - toDate) / MS_PER_SECOND;
    var weeks = secs / SECS_PER_WEEK;
    return {
      differenceValue: Math.round(weeks),
      unit: 'week'
    };
  }

  return null;
}; // If the months are not the same, that means a date in the originalDate does not exist in the month a year later (e.g. leap year!)
// So we set the date to the last day of the previous month instead

export var verify12MonthDifference = function verify12MonthDifference(originalDate, twelveMonthDate) {
  var month = originalDate.getMonth();
  var newMonth = twelveMonthDate.getMonth();

  if (month !== newMonth) {
    twelveMonthDate.setDate(0);
  }

  return twelveMonthDate;
};
export var get12MonthsAgo = function get12MonthsAgo(fromDate) {
  var twelveMonthsAgo = new Date(fromDate);
  twelveMonthsAgo.setFullYear(fromDate.getFullYear() - 1);
  return new Date(verify12MonthDifference(fromDate, twelveMonthsAgo));
};
export var get12MonthsAway = function get12MonthsAway(fromDate) {
  var inTwelveMonths = new Date(fromDate);
  inTwelveMonths.setFullYear(fromDate.getFullYear() + 1);
  return new Date(verify12MonthDifference(fromDate, inTwelveMonths));
};
export var getRelativeMonth = function getRelativeMonth(fromDate, toDate) {
  var yearDiff = fromDate.getFullYear() - toDate.getFullYear();
  var twelveMonthsAgo = get12MonthsAgo(fromDate);
  var inTwelveMonths = get12MonthsAway(fromDate);
  var isWithinOneYear = toDate >= twelveMonthsAgo && toDate <= inTwelveMonths;

  if (!isWithinOneYear) {
    return null;
  }

  var months = 12 * yearDiff + fromDate.getMonth() - toDate.getMonth();
  return {
    differenceValue: Math.round(months),
    unit: 'month'
  };
};
/** This function defines the rules that we follow for displaying "relative" dates to a user.
 * The rules are:
 *      If within 2 weeks (14 days), use days - "2 days ago", "in 2 days", "yesterday", "today", "tomorrow"
 *      If within calendar month, use weeks - "2 weeks ago", "in 2 weeks"
 *      If within 12 months, use month - "last month", "2 months ago", "next month", "in 2 months"
 *      If outside 12 months, use years - "last year", "2 years ago", "next year", "in 2 years"
 * */

export var getRelativeDates = function getRelativeDates(fromDate, toDate) {
  // Default to years if no previous conditions are met
  var yearDiff = fromDate.getFullYear() - toDate.getFullYear();
  return getRelativeDays(fromDate, toDate) || getRelativeWeeks(fromDate, toDate) || getRelativeMonth(fromDate, toDate) || {
    differenceValue: Math.round(yearDiff),
    unit: 'year'
  };
};
export var isDatePriorToEndOfTomorrow = function isDatePriorToEndOfTomorrow(today, valueDate) {
  var tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Set the tomorrow date value to the end of the day

  tomorrow.setHours(23, 59, 59, 999);
  return Math.floor((tomorrow - valueDate) / (MS_PER_SECOND * SECS_PER_DAY)) > -1;
};
export var getDueDateTime = function getDueDateTime(today) {
  var endDayToday = new Date(today);
  endDayToday.setHours(23, 59, 59, 999);
  return endDayToday;
};
export var shouldWeShowStartTime = function shouldWeShowStartTime(startDate) {
  var defaultStartDate = moment({
    hour: 0,
    minute: 0,
    seconds: 0
  });
  var formattedStartTime = moment(startDate).format(timeFormat);
  var formattedDefaultStartDate = moment(defaultStartDate).format(timeFormat);

  if (formattedStartTime !== formattedDefaultStartDate) {
    return true;
  }

  return false;
};
export var shouldWeShowDueTime = function shouldWeShowDueTime(dueDate) {
  var formattedDueTime = moment(dueDate).format(timeFormat);
  var defaultDueDate = moment({
    hour: 23,
    minute: 59,
    seconds: 59
  });
  var formattedDefaultDueTime = moment(defaultDueDate).format(timeFormat);

  if (formattedDueTime !== formattedDefaultDueTime) {
    return true;
  }

  return false;
};