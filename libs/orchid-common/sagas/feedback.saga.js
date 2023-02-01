import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(fetchFeedbackForAssignments),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(watchFeedbackFetchForAssignment);

import { put, select, call } from 'redux-saga/effects';
import { loadAssignmentFeedbacks, fetchAssignmentFeedbacks, loadAssignmentFeedbacksError } from '../actions/feedback.actions';
import { getSifToken, getCurrentUserId } from '../reducers/user.selectors';
import { getEnvFromStore } from '../reducers/env.selectors';
import { toastrErrorAction } from '../actions';
import feedbackApi from '../api/feedbackApi';
import { getAssignment } from '../reducers/assignment.selectors';
import isError from 'lodash/isError';
import { fetchStudentTeachers } from 'orchid-common/actions/ids.actions';
export function processFeedbackResponse(feedbackResponse) {
  return feedbackResponse.response.result.reduce(function (acc, feedback) {
    if (feedback.result.length === 0) {
      return acc;
    }

    var feedbackResponse = feedback.result[0];
    var assignmentId = feedbackResponse.key.split('.', 3)[1];
    acc[assignmentId] = feedback.result;
    return acc;
  }, {});
}
export function fetchFeedbackForAssignments(assignments) {
  var userId, sif, env, requestData, assignmentFeedback, processedFeedback;
  return _regeneratorRuntime.wrap(function fetchFeedbackForAssignments$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(assignments.length === 0)) {
            _context.next = 4;
            break;
          }

          _context.next = 3;
          return put(loadAssignmentFeedbacks([]));

        case 3:
          return _context.abrupt("return");

        case 4:
          _context.next = 6;
          return select(getCurrentUserId);

        case 6:
          userId = _context.sent;
          _context.next = 9;
          return select(getSifToken);

        case 9:
          sif = _context.sent;
          _context.next = 12;
          return select(getEnvFromStore);

        case 12:
          env = _context.sent;
          requestData = {
            ops: assignments.map(function (assignment) {
              return {
                method: 'data.user.query',
                args: {
                  keyPrefix: "feedback.".concat(assignment.teacherAssignmentRefId),
                  owner: userId
                }
              };
            })
          };
          _context.next = 16;
          return put(fetchAssignmentFeedbacks());

        case 16:
          _context.next = 18;
          return call(feedbackApi.fetchAssignmentFeedback, {
            sif: sif,
            env: env,
            request: requestData
          });

        case 18:
          assignmentFeedback = _context.sent;

          if (!isError(assignmentFeedback)) {
            _context.next = 25;
            break;
          }

          _context.next = 22;
          return put(toastrErrorAction('studentAssignmentList.error.fetchError'));

        case 22:
          _context.next = 24;
          return put(loadAssignmentFeedbacksError());

        case 24:
          return _context.abrupt("return");

        case 25:
          processedFeedback = processFeedbackResponse(assignmentFeedback);
          _context.next = 28;
          return put(loadAssignmentFeedbacks(processedFeedback));

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
export function watchFeedbackFetchForAssignment() {
  var assignment;
  return _regeneratorRuntime.wrap(function watchFeedbackFetchForAssignment$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return select(getAssignment);

        case 2:
          assignment = _context2.sent;
          _context2.next = 5;
          return call(fetchFeedbackForAssignments, [assignment]);

        case 5:
          _context2.next = 7;
          return call(fetchStudentTeachers);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
export default {
  processFeedbackResponse: processFeedbackResponse,
  fetchFeedbackForAssignments: fetchFeedbackForAssignments
};