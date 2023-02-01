import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { Record, List } from 'immutable';
import AssignmentModel from '@hmhco/business-logic-models/src/models/Assignment/AssignmentModel';
import { PAGE_ACTIONS as RESET_STATE_ACTIONS } from '@hmhco/assignments-history-helpers/src/actions/types';
import { PAGE_ACTIONS } from '../actions/types';
export var AssignmentsList = Record({
  assignments: List(),
  total: null,
  loading: true,
  error: null
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AssignmentsList();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PAGE_ACTIONS.FETCH_ASSIGNMENTS:
      return state.set('loading', true);

    case PAGE_ACTIONS.FETCH_ASSIGNMENTS_ERROR:
      return AssignmentsList({
        error: true,
        loading: false
      });

    case PAGE_ACTIONS.LOAD_ASSIGNMENTS:
      {
        var assignments = action.assignments,
            total = action.total;
        var assignmentList = List(assignments).map(function (assignment) {
          return new AssignmentModel(assignment);
        });
        return AssignmentsList({
          assignments: assignmentList,
          total: total,
          loading: false
        });
      }

    case PAGE_ACTIONS.UPDATE_ASSIGNMENT_STATUS:
      {
        var assignmentId = action.assignmentId,
            newStatus = action.newStatus;

        var _state$assignments$fi = state.assignments.findEntry(function (assignment) {
          return assignment.getHmhAssignmentId() === assignmentId;
        }),
            _state$assignments$fi2 = _slicedToArray(_state$assignments$fi, 2),
            assignmentIndex = _state$assignments$fi2[0],
            assignmentState = _state$assignments$fi2[1];

        var newAssignmentState = assignmentState.set('status', newStatus);
        return state.setIn(['assignments', assignmentIndex], newAssignmentState);
      }

    case PAGE_ACTIONS.REMOVE_ASSIGNMENT:
      {
        var _assignmentId = action.assignmentId;

        var _state$assignments$fi3 = state.assignments.findEntry(function (assignment) {
          return assignment.getHmhAssignmentId() === _assignmentId;
        }),
            _state$assignments$fi4 = _slicedToArray(_state$assignments$fi3, 1),
            _assignmentIndex = _state$assignments$fi4[0];

        return state.removeIn(['assignments', _assignmentIndex]);
      }

    case RESET_STATE_ACTIONS.RESET_STATE:
      {
        return AssignmentsList();
      }

    default:
      {
        return state;
      }
  }
});