import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react'; // eslint-disable-next-line import/no-named-default

import { default as ButtonCTS } from '@mui/material/Button';
import { string, func, bool } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import trackEvents from 'orchid-common/conf/trackEvents';
import launchSVG from '@ed/baseline/icons/cts/open-sm.svg';
import Icon from '@hmhco/icon/src/Icon';
import { buttonTypes } from '@hmhco/assignments-constants/src/assignments.util';
import { PARTNER_AMIRA } from '@hmhco/connected-partner-helper';
import useStyles from './AssignmentTableButtons.Styles';
import GOOGLE_CLASSROOM_ASSIGNMENT from '../../constants';

var AssignmentTableButtons = function AssignmentTableButtons(props) {
  var buttonType = props.buttonType,
      onClick = props.onClick,
      assessmentId = props.assessmentId,
      launchType = props.launchType,
      assignmentTitle = props.assignmentTitle,
      showDoneButton = props.showDoneButton,
      activityId = props.activityId,
      onSubmit = props.onSubmit,
      handleOpenModal = props.handleOpenModal,
      refId = props.refId,
      handleOpenDirectionsModal = props.handleOpenDirectionsModal,
      partnerIdentifier = props.partnerIdentifier,
      sharedAssignmentType = props.sharedAssignmentType,
      handleSignInClick = props.handleSignInClick,
      connected = props.connected,
      sufficientScopes = props.sufficientScopes;

  var isNotAmira = function isNotAmira(partnerId) {
    return partnerId !== PARTNER_AMIRA;
  };

  var handleClick = function handleClick() {
    onClick(assessmentId, launchType);
    handleOpenModal();
    handleOpenDirectionsModal();
  };

  var handleSubmit = function handleSubmit() {
    onSubmit(activityId, refId);
    handleOpenModal();
  };

  var isPartnerReview = function isPartnerReview() {
    return launchType === 'partner' && buttonType === 'review';
  };

  if (isPartnerReview() && !isNotAmira(partnerIdentifier)) {
    return null;
  }

  var assignmentButtonType = isPartnerReview() ? 'partnerReview' : buttonType;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AssignmentTableButton, {
    buttonType: assignmentButtonType,
    handleClick: handleClick,
    assessmentId: assessmentId,
    assignmentTitle: assignmentTitle,
    sharedAssignmentType: sharedAssignmentType,
    handleSignInClick: handleSignInClick,
    connected: connected,
    sufficientScopes: sufficientScopes,
    type: "A"
  }), showDoneButton && /*#__PURE__*/React.createElement(AssignmentTableButton, {
    buttonType: "done",
    handleClick: handleSubmit,
    assessmentId: assessmentId,
    assignmentTitle: assignmentTitle,
    sharedAssignmentType: sharedAssignmentType,
    handleSignInClick: handleSignInClick,
    connected: connected,
    sufficientScopes: sufficientScopes,
    type: "C"
  }));
};

export var getIcon = function getIcon(buttonType) {
  if (buttonType === buttonTypes.review || buttonType === buttonTypes.feedback || buttonType === buttonTypes.done) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Icon, {
    size: "16",
    svg: launchSVG,
    colour: "var(--ebl-button-outlined-text-color)"
  });
};

var AssignmentTableButton = function AssignmentTableButton(props) {
  var buttonType = props.buttonType,
      handleClick = props.handleClick,
      assessmentId = props.assessmentId,
      assignmentTitle = props.assignmentTitle,
      sharedAssignmentType = props.sharedAssignmentType,
      handleSignInClick = props.handleSignInClick,
      connected = props.connected,
      sufficientScopes = props.sufficientScopes;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentAssignmentList.buttonAria.".concat(buttonType),
    values: {
      assignmentTitle: assignmentTitle
    }
  }, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        ariaLabel = _ref2[0];

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonCTS, {
      className: classes.root,
      "data-test-id": "".concat(buttonType, "-assignment-button-").concat(assessmentId),
      variant: "outlined",
      size: "small",
      onClick: sharedAssignmentType === GOOGLE_CLASSROOM_ASSIGNMENT && (!connected || !sufficientScopes) ? handleSignInClick : handleClick,
      "data-track-event": trackEvents.scoresList.launchReview,
      "aria-label": ariaLabel,
      startIcon: getIcon(buttonType)
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.button.".concat(buttonType)
    })));
  });
};

AssignmentTableButton.propTypes = {
  buttonType: string,
  handleClick: func,
  handleSignInClick: func,
  assessmentId: string,
  assignmentTitle: string,
  sharedAssignmentType: bool,
  connected: bool,
  sufficientScopes: bool
};
AssignmentTableButtons.propTypes = {
  buttonType: string.isRequired,
  launchType: string.isRequired,
  onClick: func.isRequired,
  assessmentId: string.isRequired,
  assignmentTitle: string.isRequired,
  showDoneButton: bool.isRequired,
  activityId: string.isRequired,
  onSubmit: func.isRequired,
  handleOpenModal: func,
  refId: string,
  handleOpenDirectionsModal: func,
  partnerIdentifier: string.isRequired,
  sharedAssignmentType: bool,
  handleSignInClick: func,
  connected: bool,
  sufficientScopes: bool
};
export default AssignmentTableButtons;