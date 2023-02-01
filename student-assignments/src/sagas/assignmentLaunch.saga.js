import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(launchLiveAssignment),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(launchReviewAssignment),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(launchPartnerAssignment),
    _marked4 = /*#__PURE__*/_regeneratorRuntime.mark(launchAssignment),
    _marked5 = /*#__PURE__*/_regeneratorRuntime.mark(launchAssignmentScores),
    _marked6 = /*#__PURE__*/_regeneratorRuntime.mark(showDirectionsOrLaunch),
    _marked7 = /*#__PURE__*/_regeneratorRuntime.mark(launchAssignmentDirections);

import { put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { loadAssignment, reportLaunchFail } from 'orchid-common/actions';
import { assignmentLaunchTypes, TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
import { launchLiveAssessment } from '@ed/orchid/src/apps/ContentLaunch/actions';
import { setFeedbackId } from '@hmhco/student-assignments-helper/src/actions/index';
import { STUDENT_ASSESSMENT_REVIEW, STUDENT_ASSIGNMENTS } from '@hmhco/url-builders/src/constants';
import fetchAssignmentCheckAvailableApi from '@hmhco/assignment-api/src/fetchAssignmentCheckAvailableApi';
import launchConnectedPartner from '@hmhco/content-launch/src/launchConnectedPartner';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import { isFeatureActive } from '@hmhco/feature-flags';
import { getSifToken } from 'orchid-common/reducers/user.selectors';
import { getAssignmentList } from '../reducers/assignmentList.selectors';
import { handleManualStart } from './updateAssignments.saga';
import { showDirections, showNotAvailableInstruction, showPartnerAssignmentModal, setAssignmentPartner } from '../actions/index';
import { fetchStudentsTeachers } from './teacherDataFetcher.saga';
import { getCurrentAssignmentFeedback } from '../reducers/currentAssignmentFeedbackId.selectors';
import { getCurrentTab } from '../reducers/pageState.selectors';
export function launchLiveAssignment(assignment) {
  return _regeneratorRuntime.wrap(function launchLiveAssignment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return put(launchLiveAssessment(assignment.getHmhAssignmentId()));

        case 2:
          _context.next = 4;
          return call(handleManualStart, assignment);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
export function launchReviewAssignment(assignment) {
  var id, currentFeedback;
  return _regeneratorRuntime.wrap(function launchReviewAssignment$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = assignment.refId;
          _context2.next = 3;
          return put(setFeedbackId(assignment.teacherAssignmentRefId));

        case 3:
          _context2.next = 5;
          return select(getCurrentAssignmentFeedback);

        case 5:
          currentFeedback = _context2.sent;
          _context2.next = 8;
          return put(push({
            pathname: "/".concat(STUDENT_ASSIGNMENTS, "/").concat(STUDENT_ASSESSMENT_REVIEW, "/").concat(id)
          }));

        case 8:
          if (!currentFeedback) {
            _context2.next = 11;
            break;
          }

          _context2.next = 11;
          return call(fetchStudentsTeachers);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
export function launchPartnerAssignment(assignment) {
  var sif, env, connectedPartnerLaunch, params;
  return _regeneratorRuntime.wrap(function launchPartnerAssignment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return select(getSifToken);

        case 2:
          sif = _context3.sent;
          env = getEnvironment();
          connectedPartnerLaunch = assignment.getConnectedPartnerLaunch();
          params = {
            sif: sif,
            env: env,
            sectionId: assignment.sectionId,
            identifier: assignment.partnerIdentifier,
            resourceId: connectedPartnerLaunch === null || connectedPartnerLaunch === void 0 ? void 0 : connectedPartnerLaunch.resourceId,
            tool: connectedPartnerLaunch === null || connectedPartnerLaunch === void 0 ? void 0 : connectedPartnerLaunch.tool,
            teacherAssignmentRefId: assignment.teacherAssignmentRefId,
            customParams: assignment.getDeepLinkParameters()
          };
          _context3.next = 8;
          return call(launchConnectedPartner, params);

        case 8:
          return _context3.abrupt("return", _context3.sent);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
export function launchAssignment(action) {
  var assessmentId, launchType, assignmentList, assignment, result;
  return _regeneratorRuntime.wrap(function launchAssignment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          assessmentId = action.assessmentId, launchType = action.launchType;
          _context4.next = 3;
          return select(getAssignmentList);

        case 3:
          assignmentList = _context4.sent;
          assignment = assignmentList.assignments.find(function (assignmentInList) {
            return assignmentInList.getHmhAssignmentId() === assessmentId;
          });
          _context4.next = 7;
          return put(loadAssignment(assignment.toJS()));

        case 7:
          if (!(launchType === assignmentLaunchTypes.live)) {
            _context4.next = 12;
            break;
          }

          _context4.next = 10;
          return call(launchLiveAssignment, assignment);

        case 10:
          _context4.next = 31;
          break;

        case 12:
          if (!(launchType === assignmentLaunchTypes.review)) {
            _context4.next = 17;
            break;
          }

          _context4.next = 15;
          return call(launchReviewAssignment, assignment);

        case 15:
          _context4.next = 31;
          break;

        case 17:
          if (!(launchType === assignmentLaunchTypes.partner)) {
            _context4.next = 31;
            break;
          }

          if (!isFeatureActive('connectedPartner', true)) {
            _context4.next = 31;
            break;
          }

          _context4.next = 21;
          return call(launchPartnerAssignment, assignment);

        case 21:
          result = _context4.sent;

          if (!result) {
            _context4.next = 29;
            break;
          }

          _context4.next = 25;
          return put(showPartnerAssignmentModal(true));

        case 25:
          _context4.next = 27;
          return put(setAssignmentPartner(assignment.partnerIdentifier));

        case 27:
          _context4.next = 31;
          break;

        case 29:
          _context4.next = 31;
          return put(reportLaunchFail());

        case 31:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
export function launchAssignmentScores(action) {
  var assignment;
  return _regeneratorRuntime.wrap(function launchAssignmentScores$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          assignment = action.assignment;
          _context5.next = 3;
          return put(loadAssignment(assignment.toJS()));

        case 3:
          if (!isFeatureActive('connectedPartner', true)) {
            _context5.next = 8;
            break;
          }

          _context5.next = 6;
          return call(launchPartnerAssignment, assignment);

        case 6:
          _context5.next = 8;
          return put(showPartnerAssignmentModal(true));

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
export function showDirectionsOrLaunch(assignment, assessmentId, launchType, action) {
  return _regeneratorRuntime.wrap(function showDirectionsOrLaunch$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!(assignment.hasDirections() && !assignment.isCompleted())) {
            _context6.next = 5;
            break;
          }

          _context6.next = 3;
          return put(showDirections(assignment.getDirections(), assessmentId, launchType));

        case 3:
          _context6.next = 7;
          break;

        case 5:
          _context6.next = 7;
          return call(launchAssignment, action);

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
} // Action that will check if assignment is available, if true check for directions, if no directions, launch the assignment,
// if directions and assignment is not yet completed, show directions modal, if assignment is not available show Not Available modal

export function launchAssignmentDirections(action) {
  var assessmentId, launchType, sif, currentTab, assignmentList, assignment, skipCheckAvailable, _fetchAssignmentCheck, fetchCheckAvailable, response;

  return _regeneratorRuntime.wrap(function launchAssignmentDirections$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          assessmentId = action.assessmentId, launchType = action.launchType;
          _context7.next = 3;
          return select(getSifToken);

        case 3:
          sif = _context7.sent;
          _context7.next = 6;
          return select(getCurrentTab);

        case 6:
          currentTab = _context7.sent;
          _context7.next = 9;
          return select(getAssignmentList);

        case 9:
          assignmentList = _context7.sent;
          assignment = assignmentList.assignments.find(function (assignmentInList) {
            return assignmentInList.getHmhAssignmentId() === assessmentId;
          });
          skipCheckAvailable = assignment.getSkipCheckAvailable();

          if (!(skipCheckAvailable === false || skipCheckAvailable === null)) {
            _context7.next = 36;
            break;
          }

          _fetchAssignmentCheck = fetchAssignmentCheckAvailableApi(), fetchCheckAvailable = _fetchAssignmentCheck.fetchCheckAvailable;
          _context7.next = 16;
          return call(fetchCheckAvailable, assignment.refId, sif);

        case 16:
          response = _context7.sent;

          if (!(!response.available || response.dueDateTimePassed)) {
            _context7.next = 27;
            break;
          }

          if (!(!response.lockedAfterDueDateTime && currentTab === TAB_STATES.OVERDUE || currentTab === TAB_STATES.DONE)) {
            _context7.next = 23;
            break;
          }

          _context7.next = 21;
          return call(showDirectionsOrLaunch, assignment, assessmentId, launchType, action);

        case 21:
          _context7.next = 25;
          break;

        case 23:
          _context7.next = 25;
          return put(showNotAvailableInstruction(response, assignment.title, assignment.availableDate, assessmentId));

        case 25:
          _context7.next = 34;
          break;

        case 27:
          if (!(assignment.hasDirections() && !assignment.isCompleted())) {
            _context7.next = 32;
            break;
          }

          _context7.next = 30;
          return put(showDirections(assignment.getDirections(), assessmentId, launchType));

        case 30:
          _context7.next = 34;
          break;

        case 32:
          _context7.next = 34;
          return call(launchAssignment, action);

        case 34:
          _context7.next = 38;
          break;

        case 36:
          _context7.next = 38;
          return call(launchAssignment, action);

        case 38:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
export default {
  launchAssignment: launchAssignment,
  launchAssignmentDirections: launchAssignmentDirections
};