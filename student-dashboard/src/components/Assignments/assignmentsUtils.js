import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import React from 'react';
import { getActionRowElement } from 'orchid-common';
import AssignmentModel from '@hmhco/business-logic-models/src/models/Assignment/AssignmentModel';
import { AssignmentDate } from '@hmhco/assignment-date-utils/src/AssignmentDate';
import openSvg from '@ed/baseline/icons/open-sm.svg';
import launchLiveAssessment from '@hmhco/content-launch/src/launchLiveAssessment';
import fetchAssignmentCheckAvailableApi from '@hmhco/assignment-api/src/fetchAssignmentCheckAvailableApi';
import { shouldWeShowDueTime } from '@hmhco/assignment-date-utils/src/AssignmentDateCell.utils';
import launchConnectedPartner from '@hmhco/content-launch/src/launchConnectedPartner';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import { isFeatureActive } from '@hmhco/feature-flags';
import handleManualStart from './handleManualStart';
export var assignmentModel = function assignmentModel(assignment) {
  return new AssignmentModel(assignment);
};
export var button = function button(textId, buttonType, labelId, assignment, variant, icon) {
  return {
    text: textId,
    'aria-label': labelId,
    'data-testid': buttonType,
    buttonType: buttonType,
    assignment: assignment,
    variant: variant,
    icon: icon
  };
};
export var addButtons = function addButtons(assignment) {
  var res = []; // we using Assignment Model to determine which buttons should be displayed to the user

  var _getActionRowElement = getActionRowElement(assignmentModel(assignment)),
      buttonType = _getActionRowElement.buttonType,
      showButton = _getActionRowElement.showButton,
      showDoneButton = _getActionRowElement.showDoneButton;

  if (showButton) {
    if (showDoneButton) {
      res.push(button('studentDashboard.assignmentsCenter.button.imDone', 'iamdone', 'studentDashboard.assignmentsCenter.buttonAria.done', assignment, 'text'));
    }

    if (buttonType === 'continue') {
      res.push(button('studentDashboard.assignmentsCenter.button.continue', 'continue', 'studentDashboard.assignmentsCenter.buttonAria.continue', assignment, 'outlined', {
        svg: openSvg,
        colour: 'var(--ebl-button-outlined-text-color)',
        size: '16'
      }));
    }

    if (buttonType === 'start') {
      res.push(button('studentDashboard.assignmentsCenter.button.start', 'start', 'studentDashboard.assignmentsCenter.buttonAria.start', assignment, 'outlined', {
        svg: openSvg,
        colour: 'var(--ebl-button-outlined-text-color)',
        size: '16'
      }));
    }
  }

  return res;
};
export var mapAssignments = function mapAssignments(assignments, dueDateStatus) {
  return assignments.map(function (assignment) {
    var title = assignment.title,
        activities = assignment.activities,
        sectionName = assignment.sectionName,
        sectionId = assignment.sectionId,
        refId = assignment.refId,
        lockedAfterDueDate = assignment.lockedAfterDueDate;
    var buttons = addButtons(assignment);
    var dueDate = /*#__PURE__*/React.createElement(AssignmentDate, {
      value: assignment.dueDate,
      showTime: shouldWeShowDueTime(assignment.dueDate),
      isStudentDashboard: true
    });
    var dueDateString = dueDateStatus;

    if (lockedAfterDueDate === true) {
      dueDateString = 'dueTodayNoLateWorkAccepted';
    }

    return {
      refId: refId,
      title: title,
      sectionName: sectionName,
      sectionId: sectionId,
      dueDate: dueDate,
      dueDateStatus: dueDateString,
      buttons: buttons,
      activities: activities,
      lockedAfterDueDate: lockedAfterDueDate
    };
  });
};

var needsManualStart = function needsManualStart(assignment) {
  return assignment.isOtherTextResource() || assignment.isPerformanceTask() || assignment.isStudentGrowthMeasure() || assignment.isHMHAssessment();
};

var shouldShowNotAvailableModal = function shouldShowNotAvailableModal(isAvailableResponse, openNotAvailableModal) {
  return !isAvailableResponse.available && openNotAvailableModal;
};

var shouldShowDirectionsModal = function shouldShowDirectionsModal(model, openDirectionsModal) {
  return model.hasDirections() && openDirectionsModal;
};

var shouldHandleManualStart = function shouldHandleManualStart(model) {
  return needsManualStart(model) && model.isNotStarted();
};

var wasLaunchVerifyError = function wasLaunchVerifyError(launchVerify) {
  return launchVerify !== undefined && launchVerify.didLaunch === false;
};

export var errorResponse = function errorResponse() {
  return Promise.reject(new Error('514 error'));
};

var launchPartnerOrManualStart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(assignmentModelParam, sif, launchPartner, openPartnerModal, assignment, liveAssessmentLaunch, manualStart) {
    var launchVerify;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!assignmentModelParam.isPartnerAssignment()) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return launchPartner(assignmentModelParam, sif);

          case 4:
            openPartnerModal(assignment);
            _context.next = 15;
            break;

          case 7:
            _context.next = 9;
            return liveAssessmentLaunch(sif, assignment);

          case 9:
            launchVerify = _context.sent;

            if (!wasLaunchVerifyError(launchVerify)) {
              _context.next = 13;
              break;
            }

            _context.next = 13;
            return errorResponse();

          case 13:
            _context.next = 15;
            return manualStart(assignmentModelParam, assignment, sif);

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function launchPartnerOrManualStart(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();

export var launchAssignment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(sif, assignment, writeCache, openDirectionsModal, openNotAvailableModal) {
    var openPartnerAssignmentModal,
        model,
        skipCheckAvailable,
        partnerLaunch,
        checkManualStart,
        _fetchAssignmentCheck,
        fetchCheckAvailable,
        isAvailableResponse,
        _args4 = arguments;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            openPartnerAssignmentModal = _args4.length > 5 && _args4[5] !== undefined ? _args4[5] : function () {};
            model = assignmentModel(assignment);
            skipCheckAvailable = model.getSkipCheckAvailable();

            partnerLaunch = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(assignModel, token) {
                var env, connectedPartnerLaunch;
                return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!isFeatureActive('connectedPartner')) {
                          _context2.next = 5;
                          break;
                        }

                        env = getEnvironment();
                        connectedPartnerLaunch = assignModel.getConnectedPartnerLaunch();
                        _context2.next = 5;
                        return launchConnectedPartner({
                          sif: token,
                          env: env,
                          sectionId: assignModel.sectionId,
                          identifier: assignModel.partnerIdentifier,
                          resourceId: connectedPartnerLaunch === null || connectedPartnerLaunch === void 0 ? void 0 : connectedPartnerLaunch.resourceId,
                          tool: connectedPartnerLaunch === null || connectedPartnerLaunch === void 0 ? void 0 : connectedPartnerLaunch.tool,
                          teacherAssignmentRefId: assignModel.teacherAssignmentRefId,
                          customParams: assignModel.getDeepLinkParameters()
                        });

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function partnerLaunch(_x13, _x14) {
                return _ref3.apply(this, arguments);
              };
            }();

            checkManualStart = /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(assignModel, assignmentItem, token) {
                return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!shouldHandleManualStart(assignModel)) {
                          _context3.next = 4;
                          break;
                        }

                        _context3.next = 3;
                        return handleManualStart(assignModel.getActivityId(), token);

                      case 3:
                        // Update the apollo cache so we see the updates in the UI without a refresh
                        writeCache(assignmentItem.refId);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function checkManualStart(_x15, _x16, _x17) {
                return _ref4.apply(this, arguments);
              };
            }();

            if (!(skipCheckAvailable === false || skipCheckAvailable === null)) {
              _context4.next = 13;
              break;
            }

            _fetchAssignmentCheck = fetchAssignmentCheckAvailableApi(), fetchCheckAvailable = _fetchAssignmentCheck.fetchCheckAvailable;
            _context4.next = 9;
            return fetchCheckAvailable(assignment.refId, sif);

          case 9:
            isAvailableResponse = _context4.sent;

            if (shouldShowNotAvailableModal(isAvailableResponse, openNotAvailableModal)) {
              openNotAvailableModal(assignment, isAvailableResponse);
            } else if (shouldShowDirectionsModal(model, openDirectionsModal)) {
              openDirectionsModal(assignment);
            } else {
              launchPartnerOrManualStart(model, sif, partnerLaunch, openPartnerAssignmentModal, assignment, launchLiveAssessment, checkManualStart);
            }

            _context4.next = 16;
            break;

          case 13:
            _context4.next = 15;
            return partnerLaunch(model, sif);

          case 15:
            openPartnerAssignmentModal(assignment);

          case 16:
            return _context4.abrupt("return", Promise.resolve());

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function launchAssignment(_x8, _x9, _x10, _x11, _x12) {
    return _ref2.apply(this, arguments);
  };
}();