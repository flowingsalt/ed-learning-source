import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(fetchTabCounts),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(fetchAssignments),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(invalidateAndFetchTabCounts);

import { put, select, call } from 'redux-saga/effects';
import feedbackSaga from 'orchid-common/sagas/feedback.saga';
import { getSifToken } from 'orchid-common/reducers/user.selectors';
import { getEnvFromStore } from 'orchid-common/reducers/env.selectors';
import { reportNetworkFail } from 'orchid-common/actions';
import isError from 'lodash/isError';
import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
import { getAssignmentServiceQueries, getCurrentTab, getDiscipline } from '../reducers/pageState.selectors';
import assignmentsApi from '../api/assignmentsApi';
import { loadTabCounts, loadTabCount, loadAssignments, fetchAssignments as fetchAssignmentsAction, fetchAssignmentsError, invalidateTabCounts } from '../actions';
export function fetchTabCounts() {
  var sif, env, currentTab, discipline, countsResponse;
  return _regeneratorRuntime.wrap(function fetchTabCounts$(_context) {
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
          _context.next = 8;
          return select(getCurrentTab);

        case 8:
          currentTab = _context.sent;
          _context.next = 11;
          return select(getDiscipline);

        case 11:
          discipline = _context.sent;
          _context.next = 14;
          return call(assignmentsApi.fetchCounts, {
            env: env,
            sif: sif,
            discipline: discipline,
            currentTab: currentTab
          });

        case 14:
          countsResponse = _context.sent;

          if (!isError(countsResponse)) {
            _context.next = 19;
            break;
          }

          _context.next = 18;
          return put(reportNetworkFail());

        case 18:
          return _context.abrupt("return");

        case 19:
          _context.next = 21;
          return put(loadTabCounts(countsResponse));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
export function fetchAssignments() {
  var _assignmentResponse$r, _assignmentResponse$r3;

  var sif, env, queries, tabOnLaunch, assignmentResponse, completedAndInProgressAssignments, _assignmentResponse$r2, total;

  return _regeneratorRuntime.wrap(function fetchAssignments$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return put(fetchAssignmentsAction());

        case 2:
          _context2.next = 4;
          return select(getSifToken);

        case 4:
          sif = _context2.sent;
          _context2.next = 7;
          return select(getEnvFromStore);

        case 7:
          env = _context2.sent;
          _context2.next = 10;
          return select(getAssignmentServiceQueries);

        case 10:
          queries = _context2.sent;
          _context2.next = 13;
          return select(getCurrentTab);

        case 13:
          tabOnLaunch = _context2.sent;
          _context2.next = 16;
          return call(assignmentsApi.fetchAssignments, {
            env: env,
            sif: sif,
            queries: queries
          });

        case 16:
          assignmentResponse = _context2.sent;

          if (!isError(assignmentResponse)) {
            _context2.next = 23;
            break;
          }

          _context2.next = 20;
          return put(reportNetworkFail());

        case 20:
          _context2.next = 22;
          return put(fetchAssignmentsError());

        case 22:
          return _context2.abrupt("return");

        case 23:
          completedAndInProgressAssignments = assignmentResponse === null || assignmentResponse === void 0 ? void 0 : (_assignmentResponse$r = assignmentResponse.response) === null || _assignmentResponse$r === void 0 ? void 0 : _assignmentResponse$r.items.filter(function (assignment) {
            return assignment.status === assignConfig.status.COMPLETED || assignment.status === assignConfig.status.IN_PROGRESS;
          });
          _context2.next = 26;
          return call(feedbackSaga.fetchFeedbackForAssignments, completedAndInProgressAssignments);

        case 26:
          _assignmentResponse$r2 = assignmentResponse === null || assignmentResponse === void 0 ? void 0 : assignmentResponse.response, total = _assignmentResponse$r2.total;
          _context2.next = 29;
          return put(loadAssignments(assignmentResponse === null || assignmentResponse === void 0 ? void 0 : (_assignmentResponse$r3 = assignmentResponse.response) === null || _assignmentResponse$r3 === void 0 ? void 0 : _assignmentResponse$r3.items, total));

        case 29:
          _context2.next = 31;
          return put(loadTabCount(total, tabOnLaunch));

        case 31:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
export function invalidateAndFetchTabCounts() {
  return _regeneratorRuntime.wrap(function invalidateAndFetchTabCounts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return put(invalidateTabCounts());

        case 2:
          _context3.next = 4;
          return call(fetchTabCounts);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
export default {
  fetchTabCounts: fetchTabCounts,
  fetchAssignments: fetchAssignments,
  invalidateAndFetchTabCounts: invalidateAndFetchTabCounts
};