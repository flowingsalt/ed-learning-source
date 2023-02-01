/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { getIsLearner, getCurrentUserId } from 'orchid-common/reducers/user.selectors';
import { getAssignment } from 'orchid-common/reducers/assignment.selectors';
export var getRequestDataForLearnosityReview = createSelector([getCurrentUserId, getIsLearner, getAssignment], function (userId, isLearner, assignment) {
  var report = {
    id: 'learnosity_assess',
    type: 'session-detail-by-item',
    user_id: userId,
    session_id: assignment.getActivityId()
  };

  if (isLearner) {
    report = Object.assign(report, {
      display_scores: true,
      questions_api_init_options: {
        showCorrectAnswers: false
      }
    });
  }

  return {
    reports: [report]
  };
});