import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import { FormattedMessage } from 'react-intl';

var AssignmentsDirectionsModal = function AssignmentsDirectionsModal(_ref) {
  var currentDirectionsAssignment = _ref.currentDirectionsAssignment,
      launchAssignmentFromDirections = _ref.launchAssignmentFromDirections,
      open = _ref.open,
      handleClose = _ref.handleClose;

  var launchAssignmentAndHideDirections = function launchAssignmentAndHideDirections() {
    launchAssignmentFromDirections(currentDirectionsAssignment.assessmentId, currentDirectionsAssignment.launchType);
    handleClose();
  };

  return /*#__PURE__*/React.createElement(ModalDialog, {
    customTestId: "assignmentDirectionsModal",
    open: open,
    handleClose: handleClose,
    handleAction: launchAssignmentAndHideDirections,
    actionButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.directions.continue"
    }),
    title: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.directions"
    }),
    actionButtonDisabled: false,
    cancelButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.directions.cancel"
    })
  }, /*#__PURE__*/React.createElement("p", null, currentDirectionsAssignment.currentDirections));
};

AssignmentsDirectionsModal.propTypes = {
  currentDirectionsAssignment: PropTypes.object,
  launchAssignmentFromDirections: PropTypes.func,
  open: PropTypes.bool,
  handleClose: PropTypes.func
};
export default AssignmentsDirectionsModal;