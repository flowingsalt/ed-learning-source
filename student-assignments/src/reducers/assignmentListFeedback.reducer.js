import { FEEDBACK_ACTIONS } from 'orchid-common/actions/types';
import { Record, Map } from 'immutable';
export var Feedback = Record({
  feedback: Map(),
  loading: null,
  error: null
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Feedback();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = action.value;

  switch (action.type) {
    case FEEDBACK_ACTIONS.FETCH_ASSIGNMENT_FEEDBACKS:
      return state.set('loading', true);

    case FEEDBACK_ACTIONS.FETCH_ASSIGNMENT_FEEDBACKS_ERROR:
      return state.set('error', true);

    case FEEDBACK_ACTIONS.LOAD_ASSIGNMENT_FEEDBACKS:
      {
        return Feedback({
          feedback: Map(value)
        });
      }

    default:
      {
        return state;
      }
  }
});