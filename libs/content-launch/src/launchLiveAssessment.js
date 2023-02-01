import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
/* eslint-disable camelcase */

import { AssignmentModel } from 'orchid-common';
import { isFeatureActive } from '@hmhco/feature-flags';
import getLaunchDetailsWithParams from './getLaunchDetailsWithParams';
import { launchLiveCustomAssessment, launchLiveLearnosityAssessment, postTheForm, postTheForm_1_3_0 } from './contentLaunchWithSideEffects'; // There are three types of launch handled here:
// Custom Assessment, Learnosity Assessment & Other

function launchLiveAssessment(_x, _x2, _x3, _x4) {
  return _launchLiveAssessment.apply(this, arguments);
}

function _launchLiveAssessment() {
  _launchLiveAssessment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sif, assignment, classId, studentId) {
    var didLaunch, error, isStudentLaunchUpgradeActive, assignmentModel, target, response, id_token, targetURL, transformedAssignment, _id_token, _targetURL;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isStudentLaunchUpgradeActive = isFeatureActive('studentLaunchContentProviderUpgradeV2', true); // convert raw assignment to assignment model

            assignmentModel = new AssignmentModel(assignment);
            target = assignmentModel.getResourceId();
            _context.prev = 3;

            if (!assignmentModel.isCustomAssessment()) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return launchLiveCustomAssessment(assignmentModel, target);

          case 7:
            _context.next = 48;
            break;

          case 9:
            _context.next = 11;
            return getLaunchDetailsWithParams(sif, assignmentModel, classId, studentId);

          case 11:
            response = _context.sent;

            if (!(response.message !== undefined)) {
              _context.next = 18;
              break;
            }

            if (!response.includes('Error')) {
              _context.next = 16;
              break;
            }

            didLaunch = false;
            return _context.abrupt("return", {
              didLaunch: didLaunch
            });

          case 16:
            _context.next = 21;
            break;

          case 18:
            if (!(response.statusCode === 514)) {
              _context.next = 21;
              break;
            }

            didLaunch = false;
            return _context.abrupt("return", {
              didLaunch: didLaunch
            });

          case 21:
            if (!assignmentModel.isPerformanceTask()) {
              _context.next = 26;
              break;
            }

            _context.next = 24;
            return postTheForm(response);

          case 24:
            _context.next = 48;
            break;

          case 26:
            if (assignmentModel.isLearnosityAssessment()) {
              _context.next = 32;
              break;
            }

            id_token = response.id_token, targetURL = response.targetURL;
            _context.next = 30;
            return postTheForm_1_3_0({
              id_token: id_token
            }, {
              target: '_blank',
              targetURL: targetURL
            });

          case 30:
            _context.next = 48;
            break;

          case 32:
            transformedAssignment = assignmentModel.mergeWithLaunchDetailsResponse(response);

            if (!response.launchByUI) {
              _context.next = 38;
              break;
            }

            _context.next = 36;
            return launchLiveLearnosityAssessment(transformedAssignment, target);

          case 36:
            _context.next = 48;
            break;

          case 38:
            if (!isStudentLaunchUpgradeActive) {
              _context.next = 46;
              break;
            }

            if (!(target !== 'self' && target !== '_self')) {
              _context.next = 44;
              break;
            }

            window.sessionStorage.setItem('learnosityAssessment', JSON.stringify({
              assignment: transformedAssignment
            }));
            _id_token = response.id_token, _targetURL = response.targetURL;
            _context.next = 44;
            return postTheForm_1_3_0({
              id_token: _id_token
            }, {
              target: transformedAssignment.teacherAssignmentRefId,
              targetURL: _targetURL
            });

          case 44:
            _context.next = 48;
            break;

          case 46:
            _context.next = 48;
            return postTheForm(response);

          case 48:
            didLaunch = true;
            _context.next = 55;
            break;

          case 51:
            _context.prev = 51;
            _context.t0 = _context["catch"](3);
            console.error(_context.t0);
            error = _context.t0;

          case 55:
            return _context.abrupt("return", {
              didLaunch: didLaunch,
              error: error
            });

          case 56:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 51]]);
  }));
  return _launchLiveAssessment.apply(this, arguments);
}

export default launchLiveAssessment;