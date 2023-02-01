import { ASSIGNMENT_ACTIONS } from '../actions/types';
import AssignmentModel from '@hmhco/business-logic-models/src/models/Assignment/AssignmentModel';
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new AssignmentModel();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case ASSIGNMENT_ACTIONS.LOAD_ASSIGNMENT:
      {
        var value = action.value;
        return new AssignmentModel(value);
      }

    default:
      {
        return state;
      }
  }
});