import React from 'react';
import { FormattedMessage, FormattedTime } from 'react-intl';
import PropTypes from 'prop-types';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import useStyles from './AssignmentNotAvailableModal.Styles';

var AssignmentNotAvailableModal = function AssignmentNotAvailableModal(props) {
  var open = props.open,
      handleClose = props.handleClose,
      assignment = props.assignment,
      availableResponse = props.availableResponse,
      removeAssignmentInCache = props.removeAssignmentInCache;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var parsedTime = /*#__PURE__*/React.createElement(FormattedTime, {
    value: assignment.availableDate,
    hour: "numeric",
    minute: "numeric"
  });

  var closeAndRemoveAssignment = function closeAndRemoveAssignment(activityRefId) {
    handleClose();
    removeAssignmentInCache(activityRefId);
  };

  var dueDateTimePassed = availableResponse.dueDateTimePassed,
      lockedAfterDueDateTime = availableResponse.lockedAfterDueDateTime;
  return /*#__PURE__*/React.createElement(ModalDialog, {
    customTestId: "assignmentNotAvailableModal",
    open: open,
    handleClose: handleClose,
    handleAction: dueDateTimePassed && lockedAfterDueDateTime ? function () {
      return closeAndRemoveAssignment(assignment.activities[0].refId);
    } : handleClose,
    hideCancelButton: true,
    actionButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentDashboard.assignmentsCenter.notAvailableModal.ok"
    }),
    title: dueDateTimePassed && lockedAfterDueDateTime ? /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentDashboard.assignmentsCenter.notAvailableModal.expiredTitle"
    }) : /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentDashboard.assignmentsCenter.notAvailableModal.title"
    }),
    actionButtonDisabled: false
  }, dueDateTimePassed && lockedAfterDueDateTime ? /*#__PURE__*/React.createElement("div", {
    className: classes.infoMessage
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentDashboard.assignmentsCenter.notAvailableModal.expiredInfo",
    values: {
      title: assignment.title
    }
  }), ' ') : /*#__PURE__*/React.createElement("div", {
    className: classes.infoMessage
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentDashboard.assignmentsCenter.notAvailableModal.info",
    values: {
      title: assignment.title,
      time: parsedTime
    }
  }), ' '));
};

AssignmentNotAvailableModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  assignment: PropTypes.object.isRequired,
  availableResponse: PropTypes.object,
  removeAssignmentInCache: PropTypes.func
};
export default AssignmentNotAvailableModal;