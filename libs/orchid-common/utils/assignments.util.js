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
  review: null
});
export function getActionRowElement(assignment, assignmentFeedback) {
  var showButton = getShowButton(assignment);
  var launchType = getLaunchType(assignment);
  var buttonType = getActionButtonType(assignment);
  var showDoneButton = getShowDoneButton(assignment);
  var showFeedbackButton = getShowFeedbackButton(assignment, assignmentFeedback);
  return {
    showButton: showButton,
    launchType: launchType,
    buttonType: buttonType,
    assessmentId: assignment.getHmhAssignmentId(),
    assignmentTitle: assignment.getAssignmentTitle(),
    activityId: assignment.getActivityId(),
    showDoneButton: showDoneButton,
    showFeedbackButton: showFeedbackButton,
    assignmentStatus: assignment.getStatus()
  };
}
export function getShowButton(assignment) {
  return assignment.canLaunchLiveAssessment() || assignment.canLaunchReviewAssessment() || assignment.canReopenTextAssessment();
}
export function getLaunchType(assignment) {
  return assignment.canLaunchReviewAssessment() ? assignmentLaunchTypes.review : assignmentLaunchTypes.live;
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
export function getShowDoneButton(assignment) {
  return assignment.isInProgress() && assignment.isOtherTextResource();
}
export function getShowFeedbackButton(assignment, assignmentFeedback) {
  return assignment.isCompleted() && assignment.isOtherTextResource() && assignmentFeedback && assignmentFeedback.feedback.has(assignment.teacherAssignmentRefId);
}