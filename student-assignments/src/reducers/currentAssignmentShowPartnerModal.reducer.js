import { PAGE_ACTIONS } from '../actions/types';
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PAGE_ACTIONS.SHOW_PARTNER_ASSIGNMENT_MODAL:
      {
        return true;
      }

    case PAGE_ACTIONS.HIDE_PARTNER_ASSIGNMENT_MODAL:
      {
        return false;
      }

    default:
      {
        return state;
      }
  }
});