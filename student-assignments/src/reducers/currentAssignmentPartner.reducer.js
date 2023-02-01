import { PAGE_ACTIONS } from '../actions/types';
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var partner = action.partner;
  return action.type === PAGE_ACTIONS.SET_ASSIGNMENT_PARTNER ? partner : state;
});