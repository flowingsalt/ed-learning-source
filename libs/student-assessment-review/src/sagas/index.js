import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(_callee);

import { all, takeLatest } from 'redux-saga/effects';
import { ASSIGNMENT_FETCH_ACTIONS } from '../actions/types';
import { watchAssignmentFetch } from './assignment.saga';
import { watchReviewAssessmentAction } from './renderReview.saga';
export default function _callee() {
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return all([takeLatest(ASSIGNMENT_FETCH_ACTIONS.LAUNCH_REVIEW_ASSIGNMENT, watchReviewAssessmentAction), takeLatest(ASSIGNMENT_FETCH_ACTIONS.FETCH_ASSIGNMENT, watchAssignmentFetch)]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}