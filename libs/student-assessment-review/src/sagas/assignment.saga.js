import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(watchAssignmentFetch);
/* eslint-disable import/prefer-default-export */


import { call, put, select } from 'redux-saga/effects';
import { getSifToken, getIsInstructor } from 'orchid-common/reducers/user.selectors';
import { loadAssignment } from 'orchid-common/actions';
import { getEnvFromStore } from 'orchid-common/reducers/env.selectors';
import { fetchSingleAssignmentFeedback } from 'orchid-common/actions/feedback.actions';
import { setFeedbackId } from '@hmhco/student-assignments-helper/src/actions';
import { getStudentAssignment } from '../api';
import { launchReview } from '../actions';
export function watchAssignmentFetch(action) {
  var assignmentId, consumerKey, env, sif, isInstructor, assignment;
  return _regeneratorRuntime.wrap(function watchAssignmentFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          assignmentId = action.assignmentId;
          consumerKey = action.consumerKey;
          _context.next = 4;
          return select(getEnvFromStore);

        case 4:
          env = _context.sent;
          _context.next = 7;
          return select(getSifToken);

        case 7:
          sif = _context.sent;
          _context.next = 10;
          return select(getIsInstructor);

        case 10:
          isInstructor = _context.sent;
          assignment = null;

          if (!isInstructor) {
            _context.next = 18;
            break;
          }

          _context.next = 15;
          return put({
            TYPE: 'NOT_IMPLEMENTED_FETCH_TEACHER_ASSIGNMENT'
          });

        case 15:
          assignment = {};
          _context.next = 21;
          break;

        case 18:
          _context.next = 20;
          return call(getStudentAssignment, env, sif, assignmentId);

        case 20:
          assignment = _context.sent;

        case 21:
          _context.next = 23;
          return put(loadAssignment(assignment));

        case 23:
          _context.next = 25;
          return put(fetchSingleAssignmentFeedback());

        case 25:
          _context.next = 27;
          return put(setFeedbackId(assignment.teacherAssignmentRefId));

        case 27:
          _context.next = 29;
          return put(launchReview(assignment, consumerKey));

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}