import { Record } from 'immutable';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';
import { PAGE_ACTIONS as RESET_STATE_ACTIONS } from '@hmhco/assignments-history-helpers/src/actions/types';
import { PAGE_ACTIONS } from '../actions/types';
export var TabCounts = Record({
  todo: null,
  overdue: null,
  done: null,
  loading: true
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TabCounts();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = action.value,
      currentTab = action.currentTab,
      count = action.count;

  switch (action.type) {
    case PAGE_ACTIONS.LOAD_TAB_COUNTS:
      {
        var countsWithoutNull = omitBy(value, isNil);
        countsWithoutNull.loading = false;
        return state.merge(countsWithoutNull);
      }

    case PAGE_ACTIONS.LOAD_TAB_COUNT:
      {
        return state.set(currentTab.toLowerCase(), count).set('loading', false);
      }

    case PAGE_ACTIONS.INVALIDATE_TAB_COUNTS:
      {
        return TabCounts();
      }

    case RESET_STATE_ACTIONS.RESET_STATE:
      {
        return TabCounts();
      }

    default:
      {
        return state;
      }
  }
});