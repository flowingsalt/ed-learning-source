import { PAGE_ACTIONS } from '../actions/types';
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PAGE_ACTIONS.SHOW_NOT_AVAILABLE_INSTRUCTION:
      {
        var available = action.available,
            title = action.title,
            availableDate = action.availableDate,
            assessmentId = action.assessmentId;
        return {
          available: available,
          title: title,
          availableDate: availableDate,
          assessmentId: assessmentId
        };
      }

    case PAGE_ACTIONS.HIDE_NOT_AVAILABLE_INSTRUCTION:
      {
        return null;
      }

    default:
      {
        return state;
      }
  }
});