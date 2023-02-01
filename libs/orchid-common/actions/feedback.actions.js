import { FEEDBACK_ACTIONS } from './types';
export var fetchSingleAssignmentFeedback = function fetchSingleAssignmentFeedback() {
  return {
    type: FEEDBACK_ACTIONS.FETCH_SINGLE_ASSIGNMENT_FEEDBACK
  };
};
export var fetchAssignmentFeedbacks = function fetchAssignmentFeedbacks() {
  return {
    type: FEEDBACK_ACTIONS.FETCH_ASSIGNMENT_FEEDBACKS
  };
};
export var loadAssignmentFeedbacks = function loadAssignmentFeedbacks(feedbacks) {
  return {
    type: FEEDBACK_ACTIONS.LOAD_ASSIGNMENT_FEEDBACKS,
    value: feedbacks
  };
};
export var loadAssignmentFeedbacksError = function loadAssignmentFeedbacksError() {
  return {
    type: FEEDBACK_ACTIONS.FETCH_ASSIGNMENT_FEEDBACKS_ERROR
  };
};