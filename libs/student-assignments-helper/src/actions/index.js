/* eslint-disable import/prefer-default-export */
import { ASSIGNMENTS_ACTIONS } from './types';
export var setFeedbackId = function setFeedbackId(assignmentId) {
  return {
    type: ASSIGNMENTS_ACTIONS.SET_FEEDBACK_ID,
    assignmentId: assignmentId
  };
};