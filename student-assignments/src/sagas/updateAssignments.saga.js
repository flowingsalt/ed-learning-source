import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(submitAssignment),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(handleManualStart),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(updateAssignmentStatusFromLearnosity),
    _marked4 = /*#__PURE__*/_regeneratorRuntime.mark(submitAssignmentFromPostMessage),
    _marked5 = /*#__PURE__*/_regeneratorRuntime.mark(handleManualCompletion);

import { put, select, call } from 'redux-saga/effects';
import { getSifToken } from 'orchid-common/reducers/user.selectors';
import { getEnvFromStore } from 'orchid-common/reducers/env.selectors';
import { reportNetworkFail } from 'orchid-common/actions';
import { assignmentStatuses } from '@hmhco/business-logic-models/src/models/Assignment/AssignmentFieldTypes';
import isError from 'lodash/isError';
import { TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
import fetchAssignmentCheckAvailableApi from '@hmhco/assignment-api/src/fetchAssignmentCheckAvailableApi';
import { loadTabCounts, updateAssignmentStatus, removeSubmittedAssignment, showNotAvailableInstruction } from '../actions';
import assignmentsApi from '../api/assignmentsApi';
import { getDoneTabCount, getTodoTabCount, getOverdueTabCount } from '../reducers/tabCounts.selectors';
import { getCurrentTab } from '../reducers/pageState.selectors';
import { fetchAssignments, fetchTabCounts } from './assignmentFetchers.saga';
import { getAssignmentList } from '../reducers/assignmentList.selectors';
export function submitAssignment(action) {
  var sif, env, refId, activityId, assignmentList, assignment, _fetchAssignmentCheck, fetchCheckAvailable, response, available, assignmentResponse;

  return _regeneratorRuntime.wrap(function submitAssignment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select(getSifToken);

        case 2:
          sif = _context.sent;
          _context.next = 5;
          return select(getEnvFromStore);

        case 5:
          env = _context.sent;
          refId = action.refId;
          activityId = action.value;
          _context.next = 10;
          return select(getAssignmentList);

        case 10:
          assignmentList = _context.sent;
          assignment = assignmentList.assignments.find(function (assignmentInList) {
            return assignmentInList.refId === refId;
          });
          _fetchAssignmentCheck = fetchAssignmentCheckAvailableApi(), fetchCheckAvailable = _fetchAssignmentCheck.fetchCheckAvailable;
          _context.next = 15;
          return call(fetchCheckAvailable, refId, sif);

        case 15:
          response = _context.sent;
          available = response.available;

          if (available) {
            _context.next = 22;
            break;
          }

          _context.next = 20;
          return put(showNotAvailableInstruction(response, assignment.title));

        case 20:
          _context.next = 34;
          break;

        case 22:
          _context.next = 24;
          return call(assignmentsApi.submitAssignment, {
            env: env,
            sif: sif,
            activityId: activityId
          });

        case 24:
          assignmentResponse = _context.sent;

          if (!isError(assignmentResponse)) {
            _context.next = 30;
            break;
          }

          _context.next = 28;
          return put(reportNetworkFail());

        case 28:
          _context.next = 34;
          break;

        case 30:
          _context.next = 32;
          return call(fetchTabCounts);

        case 32:
          _context.next = 34;
          return call(fetchAssignments);

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
export function handleManualStart(assignment) {
  var needsManualStart, sif, activityId, response;
  return _regeneratorRuntime.wrap(function handleManualStart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          needsManualStart = assignment.isOtherTextResource() || assignment.isPerformanceTask() || assignment.isStudentGrowthMeasure() || assignment.isHMHAssessment();

          if (!(assignment.isNotStarted() && needsManualStart)) {
            _context2.next = 15;
            break;
          }

          _context2.next = 4;
          return select(getSifToken);

        case 4:
          sif = _context2.sent;
          activityId = assignment.getActivityId();
          _context2.next = 8;
          return call(assignmentsApi.startAssignment, {
            sif: sif,
            activityId: activityId
          });

        case 8:
          response = _context2.sent;

          if (!isError(response)) {
            _context2.next = 13;
            break;
          }

          _context2.next = 12;
          return put(reportNetworkFail());

        case 12:
          return _context2.abrupt("return");

        case 13:
          _context2.next = 15;
          return put(updateAssignmentStatus(assignment.getHmhAssignmentId(), assignmentStatuses.IN_PROGRESS));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
export function updateAssignmentStatusFromLearnosity(action) {
  var assignment, status;
  return _regeneratorRuntime.wrap(function updateAssignmentStatusFromLearnosity$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          assignment = action.assignment, status = action.status;
          _context3.next = 3;
          return put(updateAssignmentStatus(assignment.getHmhAssignmentId(), status));

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
export function submitAssignmentFromPostMessage(action) {
  var assignment, todoCount, doneCount, currentTab, overdueCount, newCounts;
  return _regeneratorRuntime.wrap(function submitAssignmentFromPostMessage$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          assignment = action.assignment;
          _context4.next = 3;
          return put(removeSubmittedAssignment(assignment.getHmhAssignmentId()));

        case 3:
          _context4.next = 5;
          return select(getTodoTabCount);

        case 5:
          todoCount = _context4.sent;
          _context4.next = 8;
          return select(getDoneTabCount);

        case 8:
          doneCount = _context4.sent;
          _context4.next = 11;
          return select(getCurrentTab);

        case 11:
          currentTab = _context4.sent;
          _context4.next = 14;
          return select(getOverdueTabCount);

        case 14:
          overdueCount = _context4.sent;
          newCounts = {
            todo: todoCount,
            overdue: overdueCount,
            done: doneCount
          };

          if (currentTab === TAB_STATES.OVERDUE) {
            newCounts.overdue -= 1;
            newCounts.done += 1;
          } else {
            newCounts.todo -= 1;
            newCounts.done += 1;
          }

          _context4.next = 19;
          return put(loadTabCounts(newCounts));

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
export function handleManualCompletion(assignment) {
  var sif, activityId, response;
  return _regeneratorRuntime.wrap(function handleManualCompletion$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return select(getSifToken);

        case 2:
          sif = _context5.sent;
          activityId = assignment.getActivityId();

          if (assignment.isCompleted()) {
            _context5.next = 14;
            break;
          }

          _context5.next = 7;
          return call(assignmentsApi.submitAssignment, {
            sif: sif,
            activityId: activityId
          });

        case 7:
          response = _context5.sent;

          if (!isError(response)) {
            _context5.next = 12;
            break;
          }

          _context5.next = 11;
          return put(reportNetworkFail());

        case 11:
          return _context5.abrupt("return");

        case 12:
          _context5.next = 14;
          return put(updateAssignmentStatus(assignment.getHmhAssignmentId(), assignmentStatuses.COMPLETED));

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}