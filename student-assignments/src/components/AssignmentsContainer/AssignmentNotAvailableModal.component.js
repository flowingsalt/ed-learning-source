import React from 'react';
import { FormattedMessage, FormattedTime } from 'react-intl';
import PropTypes from 'prop-types';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import { useDispatch } from 'react-redux';
import { setCurrentTab, hideNotAvailableInstruction } from '../../actions/index';
import useStyles from './AssignmentNotAvailableModal.Styles';

var navigateToOverdue = function navigateToOverdue(currentTab, setCurrentTabCallback, hideNotAvailableInstructionCallback) {
  hideNotAvailableInstructionCallback();
  setCurrentTabCallback(currentTab);
};

var AssignmentNotAvailableModal = function AssignmentNotAvailableModal(props) {
  var open = props.open,
      handleClose = props.handleClose,
      currentNotAvailableInstruction = props.currentNotAvailableInstruction;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var parsedTime = /*#__PURE__*/React.createElement(FormattedTime, {
    value: currentNotAvailableInstruction === null || currentNotAvailableInstruction === void 0 ? void 0 : currentNotAvailableInstruction.availableDate,
    hour: "numeric",
    minute: "numeric"
  });
  var dispatch = useDispatch();

  var setCurrentTabCallback = function setCurrentTabCallback() {
    return dispatch(setCurrentTab.apply(void 0, arguments));
  };

  var hideNotAvailableInstructionCallback = function hideNotAvailableInstructionCallback() {
    return dispatch(hideNotAvailableInstruction.apply(void 0, arguments));
  };

  var _currentNotAvailableI = currentNotAvailableInstruction.available,
      dueDateTimePassed = _currentNotAvailableI.dueDateTimePassed,
      lockedAfterDueDateTime = _currentNotAvailableI.lockedAfterDueDateTime;

  if (dueDateTimePassed) {
    return /*#__PURE__*/React.createElement(ModalDialog, {
      customTestId: "assignmentNotAvailableModal",
      open: open,
      handleClose: handleClose,
      handleAction: lockedAfterDueDateTime ? handleClose : function () {
        return navigateToOverdue('OVERDUE', setCurrentTabCallback, hideNotAvailableInstructionCallback);
      },
      actionButtonText: lockedAfterDueDateTime ? /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssignmentList.notAvailableModal.ok"
      }) : /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssignmentList.notAvailableModal.viewOverdue"
      }),
      title: lockedAfterDueDateTime ? /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssignmentList.notAvailableModal.expired"
      }) : /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssignmentList.notAvailableModal.overdue"
      }),
      actionButtonDisabled: false,
      hideCancelButton: lockedAfterDueDateTime,
      cancelButtonText: lockedAfterDueDateTime ? null : /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssignmentList.notAvailableModal.cancel"
      })
    }, lockedAfterDueDateTime ? /*#__PURE__*/React.createElement("div", {
      className: classes.infoMessage
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.notAvailableModal.expiredInfo",
      values: {
        title: currentNotAvailableInstruction.title
      }
    })) : /*#__PURE__*/React.createElement("div", {
      className: classes.infoMessage
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.notAvailableModal.overdueInfo"
    })));
  } // This is for response.available = false


  return /*#__PURE__*/React.createElement(ModalDialog, {
    customTestId: "assignmentNotAvailableModal",
    open: open,
    handleClose: handleClose,
    handleAction: handleClose,
    actionButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.notAvailableModal.ok"
    }),
    title: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.notAvailableModal.title"
    }),
    actionButtonDisabled: false,
    hideCancelButton: true
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.infoMessage
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentAssignmentList.notAvailableModal.info",
    values: {
      title: currentNotAvailableInstruction.title,
      time: parsedTime
    }
  })));
};

AssignmentNotAvailableModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  currentNotAvailableInstruction: PropTypes.object
};
export default AssignmentNotAvailableModal;