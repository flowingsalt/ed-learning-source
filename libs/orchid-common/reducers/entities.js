import { API_SUCCESS } from '../actions/types';
import merge from 'ramda/src/merge';
import mergeWith from 'ramda/src/mergeWith';
var mergeOneLevelDeep = mergeWith(merge);
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case API_SUCCESS:
      {
        // merge data to entities only if it's normalized
        if (action.normalized) {
          return mergeOneLevelDeep(state, action.normalized.entities);
        }

        return state;
      }

    default:
      return state;
  }
});