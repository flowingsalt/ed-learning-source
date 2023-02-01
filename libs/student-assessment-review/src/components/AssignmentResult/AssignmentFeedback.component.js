import React, { Fragment } from 'react';
import { string, shape, number, arrayOf } from 'prop-types';
import { FormattedMessage } from 'react-intl';

var AssignmentFeedback = function AssignmentFeedback(_ref) {
  var feedback = _ref.feedback,
      teachers = _ref.teachers;

  if (!feedback || !feedback.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("h3", {
    "data-test-id": "student-asssignment-feedback-heading"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentFeedback.heading"
  })), teachers && /*#__PURE__*/React.createElement("p", {
    "data-test-id": "student-asssignment-teacher-names"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentFeedback.teacherNames",
    values: {
      teacherNames: teachers
    }
  })), feedback.map(function (teacherFeedback) {
    return /*#__PURE__*/React.createElement("p", {
      "data-test-id": "student-asssignment-feedback-text",
      key: teacherFeedback.key
    }, teacherFeedback.text);
  }));
};

export var feedbackShape = shape({
  createdBy: string,
  type: string,
  key: string,
  data: shape({
    createdAt: number,
    text: string
  })
});
AssignmentFeedback.propTypes = {
  feedback: arrayOf(feedbackShape),
  teachers: string
};
export default AssignmentFeedback;