import { SET_ENV_SUCCESS } from '../actions/types';
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_ENV_SUCCESS:
      return action.env;

    default:
      return state;
  }
});