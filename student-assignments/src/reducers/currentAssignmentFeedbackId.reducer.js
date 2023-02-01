import { Record } from 'immutable';
import { ASSIGNMENTS_ACTIONS } from '@hmhco/student-assignments-helper/src/actions/types';
import { PAGE_ACTIONS } from '../actions/types';
export var FeedbackRecord = Record({
  showModal: false,
  id: null
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FeedbackRecord();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PAGE_ACTIONS.SHOW_FEEDBACK:
      {
        var assignmentId = action.assignmentId;
        return FeedbackRecord({
          id: assignmentId,
          showModal: true
        });
      }

    case PAGE_ACTIONS.CLOSE_FEEDBACK:
      {
        return FeedbackRecord();
      }

    case ASSIGNMENTS_ACTIONS.SET_FEEDBACK_ID:
      {
        var _assignmentId = action.assignmentId;
        return FeedbackRecord({
          id: _assignmentId
        });
      }

    default:
      {
        return state;
      }
  }
});