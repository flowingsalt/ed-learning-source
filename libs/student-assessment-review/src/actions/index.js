import { ASSIGNMENT_FETCH_ACTIONS } from './types';
export var launchReview = function launchReview(assignment, consumerKey) {
  return {
    type: ASSIGNMENT_FETCH_ACTIONS.LAUNCH_REVIEW_ASSIGNMENT,
    value: assignment,
    consumerKey: consumerKey
  };
};
export var fetchAssignment = function fetchAssignment(assignmentId, consumerKey) {
  return {
    type: ASSIGNMENT_FETCH_ACTIONS.FETCH_ASSIGNMENT,
    assignmentId: assignmentId,
    consumerKey: consumerKey
  };
};