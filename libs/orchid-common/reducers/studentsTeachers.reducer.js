import { TEACHER_FETCH_ACTIONS } from '../actions/types';
import { Record } from 'immutable';
import { List } from 'immutable';
export var TeachersRecord = Record({
  teachers: List(),
  loading: null,
  error: null
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TeachersRecord();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case TEACHER_FETCH_ACTIONS.FETCH_TEACHERS:
      {
        return TeachersRecord({
          loading: true
        });
      }

    case TEACHER_FETCH_ACTIONS.LOAD_TEACHERS:
      {
        var teachers = action.teachers;
        return TeachersRecord({
          teachers: List(teachers)
        });
      }

    case TEACHER_FETCH_ACTIONS.FETCH_TEACHERS_ERROR:
      {
        return TeachersRecord({
          error: true
        });
      }

    default:
      {
        return state;
      }
  }
});