import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import { launchAssignment } from './assignmentsUtils';

var AssignmentDirectionsModal = function AssignmentDirectionsModal(props) {
  var open = props.open,
      handleClose = props.handleClose,
      sif = props.sif,
      assignment = props.assignment,
      writeCache = props.writeCache,
      openPartnerAssignmentModal = props.openPartnerAssignmentModal;

  var launchAndClose = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return launchAssignment(sif, assignment, writeCache, undefined, undefined, openPartnerAssignmentModal);

            case 2:
              handleClose();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function launchAndClose() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(ModalDialog, {
    customTestId: "assignmentDirectionModal",
    open: open,
    handleClose: handleClose,
    handleAction: function handleAction() {
      launchAndClose();
    },
    actionButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentDashboard.assignmentsCenter.directionsModal.continue"
    }),
    cancelButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentDashboard.assignmentsCenter.directionsModal.cancel"
    }),
    title: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentDashboard.assignmentsCenter.directionsModal.title"
    }),
    actionButtonDisabled: false
  }, assignment.preamble);
};

AssignmentDirectionsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  assignment: PropTypes.object.isRequired,
  sif: PropTypes.string.isRequired,
  writeCache: PropTypes.func.isRequired,
  openPartnerAssignmentModal: PropTypes.func
};
export default AssignmentDirectionsModal;