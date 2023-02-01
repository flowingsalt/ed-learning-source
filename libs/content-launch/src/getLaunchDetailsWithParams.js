import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { isFeatureActive } from '@hmhco/feature-flags';
import { getLaunchDetails // eslint-disable-next-line camelcase
, getLaunchDetails_1_3_0 } from 'orchid-common/api/contentProviderApi';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';

function getLaunchDetailsWithParams(_x, _x2, _x3, _x4) {
  return _getLaunchDetailsWithParams.apply(this, arguments);
}

function _getLaunchDetailsWithParams() {
  _getLaunchDetailsWithParams = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sif, assignment, classId, studentId) {
    var resourceId, studentAssignmentId, activityId, studentAssignmentStatus, assignmentTitle, assignmentDueDate, environment, programId, isStudentLaunchUpgradeActive, customParams, launchParams, queryParams;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resourceId = assignment.getResourceId();
            studentAssignmentId = assignment.teacherAssignmentRefId;
            activityId = assignment.getActivityId();
            studentAssignmentStatus = assignment.status;
            assignmentTitle = assignment.title;
            assignmentDueDate = assignment.dueDate;
            environment = getEnvironment();
            programId = assignment.getProgramId() || '';
            isStudentLaunchUpgradeActive = isFeatureActive('studentLaunchContentProviderUpgradeV2', true);

            if (resourceId) {
              _context.next = 12;
              break;
            }

            console.log(' error ', resourceId);
            return _context.abrupt("return", new Error("Tried to launch content using a falsy resource ID at ".concat(window.location, ". This is a bug.")));

          case 12:
            customParams = {
              resource_id: resourceId,
              student_assignment_id: studentAssignmentId,
              student_assessment_id: activityId,
              activity_id: activityId,
              assignment_title: assignmentTitle,
              assignment_status: studentAssignmentStatus,
              program_id: programId,
              learnosity: isStudentLaunchUpgradeActive ? true : null
            };
            launchParams = {
              integration: 'ed',
              integrationpoint: 'content',
              context: 'coursesection',
              contextid: 'na'
            };
            queryParams = {
              studentAssignmentId: studentAssignmentId,
              activityId: activityId,
              studentAssignmentStatus: studentAssignmentStatus,
              assignmentTitle: assignmentTitle,
              assignmentDueDate: assignmentDueDate // print, this was a var in the angular land but never set?

            }; // These come from a `scope.data` in arvo. Not used for student assignment list

            if (classId) {
              queryParams.classId = classId;
            }

            if (studentId) {
              queryParams.studentId = studentId;
            }

            if (!(assignment.isLearnosityAssessment() && !isStudentLaunchUpgradeActive || assignment.isPerformanceTask())) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", getLaunchDetails(resourceId, sif, queryParams));

          case 19:
            return _context.abrupt("return", getLaunchDetails_1_3_0(environment, sif, launchParams, customParams));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getLaunchDetailsWithParams.apply(this, arguments);
}

export default getLaunchDetailsWithParams;