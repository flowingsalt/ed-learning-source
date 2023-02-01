import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { DATE_FORMAT_LONG, TIME_FORMAT } from './constants';
/* For now the assumption is that startDate and endDate are on the same day */

var VCDate = function VCDate(_ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate;

  var _useIntl = useIntl(),
      formatDate = _useIntl.formatDate,
      formatTime = _useIntl.formatTime;

  var date = formatDate(startDate, DATE_FORMAT_LONG);
  var startTime = formatTime(startDate, TIME_FORMAT);
  var endTime = formatTime(endDate, TIME_FORMAT);
  return /*#__PURE__*/React.createElement("span", null, "".concat(date, " | ").concat(startTime, "\u2013").concat(endTime));
};

VCDate.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};
export default VCDate;