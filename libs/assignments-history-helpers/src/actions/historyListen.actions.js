import { HISTORY_ACTIONS } from './types';
export var setHistoryUnlisten = function setHistoryUnlisten(historyUnlistenFn) {
  return {
    type: HISTORY_ACTIONS.SET_HISTORY_UNLISTEN,
    value: historyUnlistenFn
  };
};
export var fireHistoryUnlistenAndResetHistoryListen = function fireHistoryUnlistenAndResetHistoryListen() {
  return {
    type: HISTORY_ACTIONS.FIRE_UNLISTEN_AND_RESET_HISTORY_LISTEN
  };
};