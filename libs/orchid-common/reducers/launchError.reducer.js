import { Record } from 'immutable';
import { NETWORK_ACTIONS } from '../actions/types';
export var launchError = Record({
  value: false
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : launchError();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (action.type === NETWORK_ACTIONS.NETWORK_LAUNCH_ERROR) {
    return state.set('value', true);
  }

  if (action.type === NETWORK_ACTIONS.SET_STATUS_AND_DISMISS_NETWORK_ERROR) {
    return state.set('value', false);
  }

  return state;
});