import _defineProperty from "@babel/runtime/helpers/defineProperty";

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

import getTimezoneOffset from '@hmhco/core-network/src/utils/getTimezoneOffset';
import AssignmentModel from '@hmhco/business-logic-models/src/models/Assignment/AssignmentModel';
import { ASSIGNMENTS_LIST_QUERY } from '../../api/assignments-queries';
export var updateCache = function updateCache(client, assignmentRefId, updateFunction) {
  var assignmentsFromCache = client.readQuery({
    query: ASSIGNMENTS_LIST_QUERY,
    variables: {
      timeZoneOffset: String(getTimezoneOffset)
    }
  });
  var _assignmentsFromCache = assignmentsFromCache.student,
      overdueAssignments = _assignmentsFromCache.overdueAssignments,
      dueTodayAssignments = _assignmentsFromCache.dueTodayAssignments;
  overdueAssignments = updateFunction(overdueAssignments, assignmentRefId);
  dueTodayAssignments = updateFunction(dueTodayAssignments, assignmentRefId);

  var updatedAssignmentsFromCache = _objectSpread(_objectSpread({}, assignmentsFromCache), {}, {
    student: _objectSpread(_objectSpread({}, assignmentsFromCache.student), {}, {
      overdueAssignments: overdueAssignments,
      dueTodayAssignments: dueTodayAssignments
    })
  });

  client.writeQuery({
    query: ASSIGNMENTS_LIST_QUERY,
    variables: {
      timeZoneOffset: String(getTimezoneOffset)
    },
    data: updatedAssignmentsFromCache
  });
  return updatedAssignmentsFromCache;
};
export var removeAssignmentFromList = function removeAssignmentFromList(assignmentObj, activityRefId) {
  var items = assignmentObj.items;
  var updated = items.filter(function (assignment) {
    var assignmentModel = new AssignmentModel(assignment);
    return assignmentModel.getActivityId() !== activityRefId;
  });
  return _objectSpread(_objectSpread({}, assignmentObj), {}, {
    items: updated,
    total: updated.length
  });
};
export var updateAssignmentStatusToInProgress = function updateAssignmentStatusToInProgress(assignmentObj, activityRefId) {
  var items = assignmentObj.items;
  var updated = items.map(function (assignment) {
    if (assignment.refId === activityRefId) {
      return _objectSpread(_objectSpread({}, assignment), {}, {
        status: 'IN_PROGRESS'
      });
    }

    return assignment;
  });
  return _objectSpread(_objectSpread({}, assignmentObj), {}, {
    items: updated,
    total: updated.length
  });
};