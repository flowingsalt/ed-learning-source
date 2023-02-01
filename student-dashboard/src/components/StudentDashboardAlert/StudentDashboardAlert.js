import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _MESSAGES;

import React from 'react';
import PropTypes from 'prop-types';
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import { useIntl } from 'react-intl';
export var ASSIGNMENT_TYPE = 'assignment';
export var SCORES_TYPE = 'scores';
export var LAUNCH_TYPE = 'launch';
var MESSAGES = (_MESSAGES = {}, _defineProperty(_MESSAGES, ASSIGNMENT_TYPE, 'studentDashboard.studentAlertNotification.assignmentListError'), _defineProperty(_MESSAGES, SCORES_TYPE, 'studentDashboard.studentAlertNotification.scoresListError'), _defineProperty(_MESSAGES, LAUNCH_TYPE, 'studentDashboard.studentAlertNotification.assignmentLaunchError'), _MESSAGES);

var StudentDashboardAlert = function StudentDashboardAlert(_ref) {
  var severity = _ref.severity,
      type = _ref.type;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var id = MESSAGES[type];
  return /*#__PURE__*/React.createElement(AlertNotification, {
    severity: severity,
    "data-testid": "student-dashboard-alert"
  }, formatMessage({
    id: id
  }));
};

export default StudentDashboardAlert;
StudentDashboardAlert.propTypes = {
  severity: PropTypes.string.isRequired,
  type: PropTypes.oneOf([ASSIGNMENT_TYPE, SCORES_TYPE, LAUNCH_TYPE]).isRequired
};