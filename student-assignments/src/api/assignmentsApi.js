import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _STATE_LISTS;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import qs from 'qs';
import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
import requestFactory from 'orchid-common/api/requestFactory';
import assignmentStatuses from '@hmhco/business-logic-models/src/models/Assignment/AssignmentFieldTypes';
import get from 'lodash/get';
import { TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
export var TODO_STATES = [assignmentStatuses.IN_PROGRESS, assignmentStatuses.NOT_STARTED].join(',');
export var DONE_STATES = [assignmentStatuses.COMPLETED, assignmentStatuses.READY_FOR_SCORING, assignmentStatuses.SCORING_IN_PROGRESS].join(',');
export var OVERDUE_STATES = [assignmentStatuses.NOT_STARTED, assignmentStatuses.IN_PROGRESS].join(',');
var DEFAULT_LIMIT = assignConfig.assignmentList.pageSize;
var DEFAULT_SORT = 'dueDate,title';
var STATE_LISTS = (_STATE_LISTS = {}, _defineProperty(_STATE_LISTS, TAB_STATES.OVERDUE, OVERDUE_STATES), _defineProperty(_STATE_LISTS, TAB_STATES.DONE, DONE_STATES), _defineProperty(_STATE_LISTS, TAB_STATES.TODO, TODO_STATES), _STATE_LISTS);
var currentUrlBase = '/api/assignment/v4/studentAssignments';

var activityStartUrl = function activityStartUrl(activityId) {
  return "/api/assignment/v2/activities/".concat(activityId, "/start");
};

var activitySubmitUrl = function activitySubmitUrl(activityId) {
  return "/api/assignment/v2/activities/".concat(activityId, "/submit");
};

export function getExpiredFlag(state) {
  if (state === TAB_STATES.OVERDUE) {
    return {
      onlyExpired: true
    };
  }

  if (state === TAB_STATES.DONE) {
    return {
      inclExpired: true
    };
  }

  return {
    inclExpired: false
  };
}
export function getFields() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? DEFAULT_LIMIT : _ref$limit,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? DEFAULT_SORT : _ref$sort,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset,
      discipline = _ref.discipline;

  var expiredFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var fields = _objectSpread(_objectSpread({}, expiredFlag), {}, {
    limit: limit,
    sort: sort,
    offset: offset,
    context: 'basel',
    'incl-available-today': true
  });

  return discipline === assignConfig.assignmentList.discipline ? fields : _objectSpread(_objectSpread({}, fields), {}, {
    disciplineId: discipline
  });
}
export function getUrl(state, queries) {
  var stateLists = STATE_LISTS[state];
  var expiredFlag = getExpiredFlag(state);
  var fields = getFields(queries, expiredFlag); // Stringify fields and sort alphabetically (makes it more testable)

  var query = qs.stringify(fields, {
    sort: function sort(a, b) {
      return a.localeCompare(b);
    }
  });
  return "".concat(currentUrlBase, "?status=").concat(stateLists, "&").concat(query);
}
export var countUrls = {
  todo: function todo(discipline) {
    return getUrl(TAB_STATES.TODO, {
      limit: 1,
      discipline: discipline
    });
  },
  overdue: function overdue(discipline) {
    return getUrl(TAB_STATES.OVERDUE, {
      limit: 1,
      discipline: discipline
    });
  },
  done: function done(discipline) {
    return getUrl(TAB_STATES.DONE, {
      limit: 1,
      discipline: discipline
    });
  }
};
export function getResponseCount(response) {
  return get(response, 'response.total', null);
}
export function makeRequestsForTabs(_ref2) {
  var sif = _ref2.sif,
      discipline = _ref2.discipline,
      currentTab = _ref2.currentTab; // This is an optimistion requested by the assignments backend team. We don't fetch the tab count for
  // the currently selected tab since we can get this from the fetchAssignments response

  var todo = Promise.resolve();
  var overdue = Promise.resolve();
  var done = Promise.resolve();

  if (currentTab !== TAB_STATES.TODO) {
    todo = requestFactory(countUrls.todo(discipline), 'get', sif);
  }

  if (currentTab !== TAB_STATES.DONE) {
    done = requestFactory(countUrls.done(discipline), 'get', sif);
  }

  if (currentTab !== TAB_STATES.OVERDUE) {
    overdue = requestFactory(countUrls.overdue(discipline), 'get', sif);
  }

  return {
    todo: todo,
    done: done,
    overdue: overdue
  };
}
export default {
  fetchCounts: function fetchCounts() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        sif = _ref3.sif,
        discipline = _ref3.discipline,
        _ref3$currentTab = _ref3.currentTab,
        currentTab = _ref3$currentTab === void 0 ? TAB_STATES.TODO : _ref3$currentTab;

    var _makeRequestsForTabs = makeRequestsForTabs({
      sif: sif,
      discipline: discipline,
      currentTab: currentTab
    }),
        todo = _makeRequestsForTabs.todo,
        done = _makeRequestsForTabs.done,
        overdue = _makeRequestsForTabs.overdue;

    return Promise.all([todo, overdue, done]).then(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 3),
          todoResponse = _ref5[0],
          overdueResponse = _ref5[1],
          doneResponse = _ref5[2];

      return {
        todo: getResponseCount(todoResponse),
        overdue: getResponseCount(overdueResponse),
        done: getResponseCount(doneResponse)
      };
    })["catch"](function (error) {
      return {
        error: error
      };
    });
  },
  fetchAssignments: function fetchAssignments() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        sif = _ref6.sif,
        _ref6$queries = _ref6.queries,
        queries = _ref6$queries === void 0 ? {} : _ref6$queries;

    var url = getUrl(queries.currentTab, queries);
    return requestFactory(url, 'get', sif)["catch"](function (error) {
      return {
        error: error
      };
    });
  },
  startAssignment: function startAssignment(_ref7) {
    var sif = _ref7.sif,
        activityId = _ref7.activityId;
    var url = activityStartUrl(activityId);
    return requestFactory(url, 'put', sif)["catch"](function (error) {
      return {
        error: error
      };
    });
  },
  submitAssignment: function submitAssignment() {
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        sif = _ref8.sif,
        activityId = _ref8.activityId;

    var url = activitySubmitUrl(activityId);
    return requestFactory(url, 'put', sif)["catch"](function (error) {
      return {
        error: error
      };
    });
  }
};