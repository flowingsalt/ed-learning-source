import keyMirror from '@hmhco/react-utils/src/keyMirror';
export var buttonTypes = keyMirror({
  start: null,
  "continue": null,
  review: null,
  open: null,
  feedback: null,
  done: null
});
export var assignmentLaunchTypes = keyMirror({
  live: null,
  review: null,
  partner: null
});
export function getShowButton(assignment) {
  return assignment.canLaunchLiveAssessment() || assignment.canLaunchReviewAssessment() || assignment.canReopenTextAssessment();
}
export function getLaunchType(assignment) {
  if (assignment.isPartnerAssignment()) {
    return assignmentLaunchTypes.partner;
  }

  return assignment.canLaunchReviewAssessment() ? assignmentLaunchTypes.review : assignmentLaunchTypes.live;
}
export function getPartnerIdentifier(assignment) {
  return assignment.getPartnerIdentifier() ? assignment.getPartnerIdentifier() : '';
}
export function getActionButtonType(assignment) {
  if (assignment.canLaunchReviewAssessment()) {
    return buttonTypes.review;
  }

  if (assignment.isNotStarted()) {
    return buttonTypes.start;
  }

  if (assignment.isInProgress()) {
    return buttonTypes["continue"];
  }

  if (assignment.canReopenTextAssessment()) {
    return buttonTypes.open;
  }

  return null;
}
export var convertToObject = function convertToObject(data) {
  return typeof data.toJS === 'function' ? data.toJS() : data;
};
export var isUUID = function isUUID(str) {
  // Regular expression to check if string is a valid UUID
  var regexExp = /^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/gi;
  return regexExp.test(str.toLowerCase());
};
export var directEntryCheck = function directEntryCheck(assignment) {
  var _assignment$activitie = assignment.activities[0].sourceObject.attributes,
      mediaType = _assignment$activitie.mediaType,
      teacherManualEntry = _assignment$activitie.teacherManualEntry;
  var manualScoring = assignment.activities[0].sourceObject.manualScoring;
  var isPDF = mediaType === 'PDF';
  var isWORD = mediaType === 'Editable File';
  return (isPDF || isWORD) && teacherManualEntry && !manualScoring;
};
export function getShowDoneButton(assignment) {
  return assignment.isInProgress() && assignment.isOtherTextResource() && !directEntryCheck(convertToObject(assignment));
}
export function getShowFeedbackButton(assignment, assignmentFeedback) {
  return (assignment.isCompleted() || assignment.isInProgress()) && assignment.isOtherTextResource() && assignmentFeedback && assignmentFeedback.feedback.has(assignment.teacherAssignmentRefId);
}
export function getActionRowElement(assignment, assignmentFeedback) {
  var showButton = getShowButton(assignment);
  var launchType = getLaunchType(assignment);
  var partnerIdentifier = getPartnerIdentifier(assignment);
  var buttonType = getActionButtonType(assignment);
  var showDoneButton = getShowDoneButton(assignment);
  var showFeedbackButton = getShowFeedbackButton(assignment, assignmentFeedback);
  var lockedAfterDueDate = assignment.lockedAfterDueDate,
      refId = assignment.refId;
  return {
    showButton: showButton,
    launchType: launchType,
    buttonType: buttonType,
    assessmentId: assignment.getHmhAssignmentId(),
    assignmentTitle: assignment.getAssignmentTitle(),
    activityId: assignment.getActivityId(),
    getLockedAfterDueDate: assignment.getLockedAfterDueDate(),
    showDoneButton: showDoneButton,
    showFeedbackButton: showFeedbackButton,
    assignmentStatus: assignment.getStatus(),
    lockedAfterDueDate: lockedAfterDueDate,
    refId: refId,
    partnerIdentifier: partnerIdentifier
  };
}
export var TAB_STATES = keyMirror({
  TODO: null,
  DONE: null,
  OVERDUE: null
});
export var TEACHER_OVERVIEW_TAB_STATES = keyMirror({
  ASSIGNMENTS: null,
  STUDENT: null
});