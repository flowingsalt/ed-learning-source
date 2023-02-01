import React from 'react';
import propTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
export default function LearningResourceDate(_ref) {
  var value = _ref.value,
      useDateTime = _ref.useDateTime;
  var hasMinutes = Boolean(new Date(value).getMinutes());
  var formattedDateProps = {
    value: value,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };

  if (useDateTime) {
    formattedDateProps.hour12 = 'true';
    formattedDateProps.hour = 'numeric';
  }

  if (hasMinutes) {
    formattedDateProps.minute = 'numeric';
  }

  return /*#__PURE__*/React.createElement("span", {
    "data-testid": useDateTime ? 'learningResourceDateExtra' : 'learningResourceDate'
  }, /*#__PURE__*/React.createElement(FormattedDate, formattedDateProps));
}
LearningResourceDate.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.object, // as a Date object
  propTypes.number]).isRequired,
  useDateTime: propTypes.bool
};
LearningResourceDate.defaultProps = {
  useDateTime: false
};