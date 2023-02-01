import { Record } from 'immutable';
import { HISTORY_ACTIONS, PAGE_ACTIONS } from '../actions/types';
export var HistoryListen = Record({
  historyUnlisten: null
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HistoryListen();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case HISTORY_ACTIONS.SET_HISTORY_UNLISTEN:
      return HistoryListen({
        historyUnlisten: action.value
      });

    case PAGE_ACTIONS.RESET_STATE:
      return HistoryListen();

    default:
      {
        return state;
      }
  }
});