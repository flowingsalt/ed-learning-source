import keyMirror from '@hmhco/react-utils/src/keyMirror';
export var PAGE_ACTIONS = keyMirror({
  RESET_STATE: null,
  FETCH_ASSIGNMENTS_ERROR: null
});
export var HISTORY_ACTIONS = keyMirror({
  SET_HISTORY_UNLISTEN: null,
  FIRE_UNLISTEN_AND_RESET_HISTORY_LISTEN: null
});