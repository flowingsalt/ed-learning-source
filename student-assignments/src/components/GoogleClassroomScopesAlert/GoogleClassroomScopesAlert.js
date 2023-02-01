import React from 'react';
import { func } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import Button from '@mui/material/Button';
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import useStyles from './GoogleClassroomScopesAlert.styles';

var GoogleClassroomScopesAlert = function GoogleClassroomScopesAlert(_ref) {
  var handleClick = _ref.handleClick;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement(AlertNotification, {
    "data-testid": "createAssignmentsGoogleScopesAlert",
    severity: "error",
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: handleClick,
      size: "large",
      className: classes.alertBtn,
      "aria-label": formatMessage({
        id: 'studentAssigments.GoogleScopesAlert.review.btn'
      })
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssigments.GoogleScopesAlert.review.btn"
    })),
    label: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssigments.GoogleScopesAlert.label"
    })
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentAssigments.GoogleScopesAlert.info"
  }));
};

GoogleClassroomScopesAlert.propTypes = {
  handleClick: func.isRequired
};
export default GoogleClassroomScopesAlert;