import { ASSIGNMENT_ACTIONS } from 'orchid-common/actions/types';
export var launchLiveAssessment = function launchLiveAssessment(target) {
  return {
    type: ASSIGNMENT_ACTIONS.LAUNCH_LIVE_ASSIGNMENT,
    value: {
      target: target
    }
  };
};
export var launchPreviewAssessment = function launchPreviewAssessment(target) {
  return {
    type: ASSIGNMENT_ACTIONS.LAUNCH_PREVIEW_ASSIGNMENT,
    value: {
      target: target
    }
  };
};