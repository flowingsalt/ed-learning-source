import { PAGE_ACTIONS } from './types';
export var resetState = function resetState() {
  return {
    type: PAGE_ACTIONS.RESET_STATE
  };
};