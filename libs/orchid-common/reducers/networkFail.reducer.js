import { Record } from 'immutable';
import { NETWORK_ACTIONS } from '../actions/types';
export var networkFail = Record({
  value: false
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : networkFail();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case NETWORK_ACTIONS.NETWORK_DISCONNECT_NOTIFICATION:
      return state.set('value', true);

    default:
      return state;
  }
});