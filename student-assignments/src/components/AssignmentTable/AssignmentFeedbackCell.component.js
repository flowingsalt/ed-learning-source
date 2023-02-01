import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import { bool, string, func } from 'prop-types';
import feedbackSm from '@ed/baseline/icons/cts/feedback-sm.svg';
import assignmentStatuses from '@hmhco/business-logic-models/src/models/Assignment/AssignmentFieldTypes';
import { FormattedMessage, useIntl } from 'react-intl';
import Button from '@mui/material/Button';
import Icon from '@hmhco/icon/src/Icon';
import Styles from './AssignmentFeedbackCell.component.css';
import useStyles from './AssignmentTableButtons.Styles';

var AssignmentFeedbackCell = function AssignmentFeedbackCell(props) {
  var hasFeedback = props.hasFeedback,
      assignmentStatus = props.assignmentStatus,
      assignmentId = props.assignmentId,
      assignmentTitle = props.assignmentTitle,
      handleOpenFeedbackModal = props.handleOpenFeedbackModal;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var openFeedbackModal = function openFeedbackModal() {
    handleOpenFeedbackModal(assignmentId);
  };

  if (!hasFeedback && assignmentStatus !== assignmentStatuses.SCORING_IN_PROGRESS && assignmentStatus !== assignmentStatuses.READY_FOR_SCORING) {
    return /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.feedback.noAssignmentFeedbackAvailable"
    }, function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          text = _ref2[0];

      return /*#__PURE__*/React.createElement("p", {
        className: Styles.ariaLabel,
        "data-test-id": "no-feedback-".concat(assignmentId),
        "aria-label": text
      }, text);
    });
  }

  if (!hasFeedback && assignmentStatus === assignmentStatuses.SCORING_IN_PROGRESS || assignmentStatus === assignmentStatuses.READY_FOR_SCORING) {
    return /*#__PURE__*/React.createElement("div", {
      "data-test-id": "scoring-in-progress-div"
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.feedback.scoringInProgress"
    }));
  }

  return /*#__PURE__*/React.createElement("div", {
    "data-test-id": "feedback-available-".concat(assignmentId)
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentAssignmentList.feedback.assignmentFeedbackAvailable"
  }, function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        text = _ref4[0];

    return /*#__PURE__*/React.createElement("div", {
      "aria-label": text
    }, /*#__PURE__*/React.createElement(Button, {
      className: classes.root,
      "data-test-id": "feedbackassignment-button-".concat(assignmentId),
      variant: "outlined",
      size: "small",
      onClick: openFeedbackModal,
      "aria-label": formatMessage({
        id: 'studentAssignmentList.buttonAria.feedback'
      }, {
        assignmentTitle: assignmentTitle
      }),
      startIcon: /*#__PURE__*/React.createElement(Icon, {
        size: "16",
        svg: feedbackSm,
        colour: "var(--ebl-button-outlined-text-color)"
      })
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.button.feedback"
    })));
  }));
};

AssignmentFeedbackCell.propTypes = {
  hasFeedback: bool,
  assignmentId: string,
  assignmentStatus: string,
  handleOpenFeedbackModal: func.isRequired,
  assignmentTitle: string.isRequired
};
export default AssignmentFeedbackCell;