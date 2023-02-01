import { PAGE_ACTIONS } from '../actions/types';
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PAGE_ACTIONS.SHOW_DIRECTIONS:
      {
        var currentDirections = action.currentDirections,
            assessmentId = action.assessmentId,
            launchType = action.launchType;
        return {
          currentDirections: currentDirections,
          assessmentId: assessmentId,
          launchType: launchType
        };
      }

    case PAGE_ACTIONS.HIDE_DIRECTIONS:
      {
        return null;
      }

    default:
      {
        return state;
      }
  }
});