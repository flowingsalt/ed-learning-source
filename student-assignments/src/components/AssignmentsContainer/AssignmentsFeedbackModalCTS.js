import React from 'react';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import { useIntl } from 'react-intl';
import { bool, func, object } from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import { Typography } from '@mui/material';
import useStyles from './AssignmentsFeedbackModal.Styles';

var AssignmentsFeedbackModalCTS = function AssignmentsFeedbackModalCTS(_ref) {
  var feedbackForModal = _ref.feedbackForModal,
      open = _ref.open,
      handleClose = _ref.handleClose;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement(ModalDialog, {
    customTestId: "assignmentFeedbackModal",
    open: open,
    handleClose: handleClose,
    handleAction: handleClose,
    actionButtonText: formatMessage({
      id: 'studentAssignmentList.feedback.done'
    }),
    title: formatMessage({
      id: 'studentAssignmentList.feedback'
    }),
    actionButtonDisabled: false,
    hideCancelButton: true
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    display: "inline",
    variant: "h4",
    component: "h2"
  }, formatMessage({
    id: 'studentAssignmentList.feedback.teacherName'
  })), feedbackForModal.loading && /*#__PURE__*/React.createElement(Skeleton, {
    "data-testid": "teacher-name-skeleton",
    className: classes.feedbackSkeleton
  }), /*#__PURE__*/React.createElement(Typography, {
    display: "inline"
  }, feedbackForModal.teacher)), /*#__PURE__*/React.createElement("div", {
    className: classes.ctsAssignmentTitle
  }, /*#__PURE__*/React.createElement(Typography, {
    display: "inline",
    variant: "h4",
    component: "h2"
  }, formatMessage({
    id: 'studentAssignmentList.feedback.assignmentName'
  })), /*#__PURE__*/React.createElement(Typography, {
    display: "inline"
  }, feedbackForModal.title)), /*#__PURE__*/React.createElement("div", {
    className: classes.ctsAssignmentMessage
  }, feedbackForModal.feedback.map(function (feedback) {
    return /*#__PURE__*/React.createElement("div", {
      key: feedback.key
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "sh1",
      "data-test-id": "feedback.item"
    }, feedback.text));
  }))));
};

AssignmentsFeedbackModalCTS.propTypes = {
  feedbackForModal: object,
  open: bool,
  handleClose: func
};
export default AssignmentsFeedbackModalCTS;