import { createSelector } from 'reselect';
export var getAssignment = function getAssignment(state) {
  return state.assignment;
};
export var canLaunchLiveAssessment = createSelector([getAssignment], function (assignment) {
  return assignment.canLaunchLiveAssessment();
});