import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(launchCustomAssessment),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(launchLearnosityAssessment),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(launchStaticAssessment),
    _marked4 = /*#__PURE__*/_regeneratorRuntime.mark(watchLaunchLiveRequest);

import { select, call, put, takeLatest } from 'redux-saga/effects';
import { getAssignment } from '../reducers/assignment.selectors';
import { getSifToken } from '../reducers/user.selectors';
import { isFeatureActive } from '@hmhco/feature-flags';
import getLaunchDetailsWithParams from '@hmhco/content-launch/src/getLaunchDetailsWithParams';
import { launchLiveLearnosityAssessment, launchLiveCustomAssessment, postTheForm, postTheForm_1_3_0 } from '@hmhco/content-launch/src/contentLaunchWithSideEffects';
import { getEventFunction } from '../reducers/trackEvent.selectors';
import { toastrErrorAction, reportLaunchFail } from '../actions/index';
import { ASSIGNMENT_ACTIONS } from '../actions/types';
import { listenForChangesFromLearnosity } from './learnosityAssessmentListener.saga';
import { listenForChangesFromRce } from './rceAssessmentListener.saga';
export function launchCustomAssessment(action) {
  var target, assignment;
  return _regeneratorRuntime.wrap(function launchCustomAssessment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          target = action.target;
          _context.next = 3;
          return select(getAssignment);

        case 3:
          assignment = _context.sent;
          _context.next = 6;
          return call(launchLiveCustomAssessment, assignment, target);

        case 6:
          _context.next = 8;
          return call(listenForChangesFromLearnosity, assignment);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
export function launchLearnosityAssessment(action) {
  var target, assignment, trackEventFunction, sif, isStudentLaunchUpgradeActive, response, transformedAssignment, _yield$call, error, id_token, targetURL;

  return _regeneratorRuntime.wrap(function launchLearnosityAssessment$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          target = action.target;
          _context2.next = 3;
          return select(getAssignment);

        case 3:
          assignment = _context2.sent;
          _context2.next = 6;
          return select(getEventFunction);

        case 6:
          trackEventFunction = _context2.sent;
          _context2.next = 9;
          return select(getSifToken);

        case 9:
          sif = _context2.sent;
          isStudentLaunchUpgradeActive = isFeatureActive('studentLaunchContentProviderUpgradeV2', true);
          _context2.prev = 11;
          _context2.next = 14;
          return call(getLaunchDetailsWithParams, sif, assignment);

        case 14:
          response = _context2.sent;

          if (!(response === undefined)) {
            _context2.next = 19;
            break;
          }

          _context2.next = 18;
          return put(reportLaunchFail());

        case 18:
          return _context2.abrupt("return");

        case 19:
          transformedAssignment = assignment.mergeWithLaunchDetailsResponse(response);

          if (isStudentLaunchUpgradeActive) {
            _context2.next = 31;
            break;
          }

          _context2.next = 23;
          return call(launchLiveLearnosityAssessment, transformedAssignment, target, trackEventFunction);

        case 23:
          _yield$call = _context2.sent;
          error = _yield$call.error;

          if (!error) {
            _context2.next = 29;
            break;
          }

          _context2.next = 28;
          return put(toastrErrorAction('notification.error.contentLaunchDetails'));

        case 28:
          return _context2.abrupt("return");

        case 29:
          _context2.next = 36;
          break;

        case 31:
          if (!(target !== 'self' && target !== '_self')) {
            _context2.next = 36;
            break;
          }

          window.sessionStorage.setItem('learnosityAssessment', JSON.stringify({
            assignment: transformedAssignment
          }));
          id_token = response.id_token, targetURL = response.targetURL;
          _context2.next = 36;
          return call(postTheForm_1_3_0, {
            id_token: id_token
          }, {
            target: transformedAssignment.teacherAssignmentRefId,
            targetURL: targetURL
          });

        case 36:
          _context2.next = 38;
          return call(listenForChangesFromLearnosity, assignment);

        case 38:
          _context2.next = 44;
          break;

        case 40:
          _context2.prev = 40;
          _context2.t0 = _context2["catch"](11);
          _context2.next = 44;
          return put(reportLaunchFail());

        case 44:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[11, 40]]);
}
export function launchStaticAssessment() {
  var assignment, sif, response, id_token, targetURL;
  return _regeneratorRuntime.wrap(function launchStaticAssessment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return select(getAssignment);

        case 2:
          assignment = _context3.sent;
          _context3.next = 5;
          return select(getSifToken);

        case 5:
          sif = _context3.sent;
          _context3.prev = 6;
          _context3.next = 9;
          return call(getLaunchDetailsWithParams, sif, assignment);

        case 9:
          response = _context3.sent;

          if (!(response === undefined)) {
            _context3.next = 14;
            break;
          }

          _context3.next = 13;
          return put(reportLaunchFail());

        case 13:
          return _context3.abrupt("return");

        case 14:
          id_token = response.id_token, targetURL = response.targetURL;

          if (!assignment.isStudentGrowthMeasure()) {
            _context3.next = 20;
            break;
          }

          _context3.next = 18;
          return call(postTheForm_1_3_0, {
            id_token: id_token
          }, {
            target: 'singleTab',
            targetURL: targetURL
          });

        case 18:
          _context3.next = 29;
          break;

        case 20:
          if (!assignment.isPerformanceTask()) {
            _context3.next = 25;
            break;
          }

          _context3.next = 23;
          return call(postTheForm, response);

        case 23:
          _context3.next = 29;
          break;

        case 25:
          _context3.next = 27;
          return call(postTheForm_1_3_0, {
            id_token: id_token
          }, {
            target: '_blank',
            targetURL: targetURL
          });

        case 27:
          _context3.next = 29;
          return call(listenForChangesFromRce, assignment);

        case 29:
          _context3.next = 35;
          break;

        case 31:
          _context3.prev = 31;
          _context3.t0 = _context3["catch"](6);
          _context3.next = 35;
          return put(reportLaunchFail());

        case 35:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[6, 31]]);
}
export function watchLaunchLiveRequest() {
  return _regeneratorRuntime.wrap(function watchLaunchLiveRequest$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return takeLatest(ASSIGNMENT_ACTIONS.LAUNCH_LIVE_ASSIGNMENT, launchLearnosityAssessment);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}