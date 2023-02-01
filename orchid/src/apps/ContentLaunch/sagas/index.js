import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(watchLiveAssessmentAction),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(watchPreviewAssessmentAction),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(_callee);

import { all, fork, select, takeLatest, call, put } from 'redux-saga/effects';
import { ASSIGNMENT_ACTIONS } from 'orchid-common/actions/types';
import { launchLearnosityAssessment, launchCustomAssessment, launchStaticAssessment } from 'orchid-common/sagas/launchLiveAssessment.saga';
import { watchLaunchRequest, watchCustomLaunchRequest } from 'orchid-common/sagas/contentLaunch';
import { getAssignment } from 'orchid-common/reducers/assignment.selectors';
import { fetchContentLaunchDetails, fetchCustomContentLaunchDetails } from 'orchid-common/actions';
export var isUUID = function isUUID(str) {
  // Regular expression to check if string is a valid UUID
  var regexExp = /^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/gi;
  return regexExp.test(str.toLowerCase());
};
export var directEntryCheck = function directEntryCheck(assignment) {
  var _assignment$activitie = assignment.activities[0].sourceObject.attributes,
      mediaType = _assignment$activitie.mediaType,
      teacherManualEntry = _assignment$activitie.teacherManualEntry;
  var manualScoring = assignment.activities[0].sourceObject.manualScoring;
  var isPDF = mediaType === 'PDF';
  var isWORD = mediaType === 'Editable File';
  return (isPDF || isWORD) && teacherManualEntry && !manualScoring;
};
export function watchLiveAssessmentAction(target) {
  var assignment;
  return _regeneratorRuntime.wrap(function watchLiveAssessmentAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select(getAssignment);

        case 2:
          assignment = _context.sent;

          if (!assignment.isCustomAssessment()) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return call(launchCustomAssessment, {
            target: target
          });

        case 6:
          _context.next = 15;
          break;

        case 8:
          if (!(assignment.isProgramAssessment() && !directEntryCheck(assignment.toJS()))) {
            _context.next = 13;
            break;
          }

          _context.next = 11;
          return call(launchLearnosityAssessment, {
            target: target
          });

        case 11:
          _context.next = 15;
          break;

        case 13:
          _context.next = 15;
          return call(launchStaticAssessment, {
            target: target
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
export function watchPreviewAssessmentAction(target) {
  var assignment, resourceId;
  return _regeneratorRuntime.wrap(function watchPreviewAssessmentAction$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return select(getAssignment);

        case 2:
          assignment = _context2.sent;
          resourceId = assignment.getResourceId();

          if (!assignment.isCustomAssessment()) {
            _context2.next = 9;
            break;
          }

          _context2.next = 7;
          return put(fetchCustomContentLaunchDetails(resourceId, target));

        case 7:
          _context2.next = 11;
          break;

        case 9:
          _context2.next = 11;
          return put(fetchContentLaunchDetails(resourceId, target));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
export default function _callee() {
  return _regeneratorRuntime.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return all([takeLatest(ASSIGNMENT_ACTIONS.LAUNCH_LIVE_ASSIGNMENT, watchLiveAssessmentAction), takeLatest(ASSIGNMENT_ACTIONS.LAUNCH_PREVIEW_ASSIGNMENT, watchPreviewAssessmentAction), fork(watchLaunchRequest), fork(watchCustomLaunchRequest)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}