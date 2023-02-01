import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
import { Record } from 'immutable';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';
import { TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
import { QUERY_STATE_ACTIONS, DISCIPLINE_ACTIONS } from '../actions/types';
export var DefaultState = Record({
  offset: assignConfig.assignmentList.offset,
  currentPage: assignConfig.assignmentList.currentPage,
  sort: assignConfig.assignmentList.dueDate,
  sortDirection: assignConfig.assignmentList.sortDesc,
  discipline: assignConfig.assignmentList.discipline,
  currentTab: TAB_STATES.TODO,
  networkFailed: false,
  launchError: false,
  limit: assignConfig.assignmentList.pageSize
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultState();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = action.value;

  switch (action.type) {
    case QUERY_STATE_ACTIONS.LOAD_TABLE_STATE:
      {
        // Set with any supplied table state values, otherwise use the defaults
        var valueWithoutSetProperties = omitBy(value, isNil); // Sanitise any string values to numbers (this can happen if values are preset in the URL on load of the app)

        if (valueWithoutSetProperties.currentPage) {
          valueWithoutSetProperties.currentPage = Number(valueWithoutSetProperties.currentPage);
        }

        if (valueWithoutSetProperties.offset) {
          valueWithoutSetProperties.offset = Number(valueWithoutSetProperties.offset);
        }

        if (valueWithoutSetProperties.limit) {
          valueWithoutSetProperties.limit = Number(valueWithoutSetProperties.limit);
        }

        return DefaultState(valueWithoutSetProperties);
      }

    case QUERY_STATE_ACTIONS.SET_OFFSET:
      return state.set('offset', value);

    case QUERY_STATE_ACTIONS.SET_CURRENT_PAGE:
      return state.set('currentPage', value);

    case QUERY_STATE_ACTIONS.SET_SORT:
      return state.set('sort', value);

    case QUERY_STATE_ACTIONS.SET_SORT_DIRECTION:
      return state.set('sortDirection', value);

    case DISCIPLINE_ACTIONS.SET_DISCIPLINE:
      return state.set('discipline', value);

    case QUERY_STATE_ACTIONS.SET_CURRENT_TAB:
      return state.set('currentTab', value);

    default:
      {
        return state;
      }
  }
});