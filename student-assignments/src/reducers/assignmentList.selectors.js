import { createSelector } from 'reselect';
import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
import trackEvents from 'orchid-common/conf/trackEvents';
import keyMirror from '@hmhco/react-utils/src/keyMirror';
import { getActionRowElement, TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
import { getDisciplines } from './disciplineList.selectors';
import PROGRAM_IDS from '../constants/programIds';
import { getAssignmentFeedback } from './assignmentListFeedback.selectors';
import { getCurrentTab } from './pageState.selectors';
import { getTabCounts } from './tabCounts.selectors';
export var dateCellTypes = keyMirror({
  startTime: null,
  submitDate: null,
  dueDate: null
});
export var getAssignmentList = function getAssignmentList(state) {
  return state.assignmentList;
};
export var getTableHeadersForTable = createSelector([getCurrentTab], function (currentTab) {
  if (currentTab === TAB_STATES.DONE) {
    return [{
      id: assignConfig.assignmentList.title,
      label: 'studentAssignmentList.assignmentName',
      isSortable: true,
      trackEvent: trackEvents.studentAssignmentList.doneTabNameSort
    }, {
      id: assignConfig.assignmentList.feedback,
      label: 'studentAssignmentList.feedback',
      isSortable: false
    }, {
      id: assignConfig.assignmentList.dueDate,
      label: 'studentAssignmentList.dueDate',
      isSortable: true,
      trackEvent: trackEvents.studentAssignmentList.doneTabDueDateSort
    }, {
      id: assignConfig.assignmentList.submitDate,
      label: 'studentAssignmentList.submitDate',
      isSortable: true,
      trackEvent: trackEvents.studentAssignmentList.doneTabSubmittedDateSort
    }];
  }

  var trackEventTitle = null;
  var trackEventDueDate = null;

  if (currentTab === TAB_STATES.OVERDUE) {
    trackEventTitle = trackEvents.studentAssignmentList.overdueTabNameSort;
    trackEventDueDate = trackEvents.studentAssignmentList.overdueTabDueDateSort;
  } else if (currentTab === TAB_STATES.TODO) {
    trackEventTitle = trackEvents.studentAssignmentList.toDoTabNameSort;
    trackEventDueDate = trackEvents.studentAssignmentList.toDoTabDueDateSort;
  }

  var tableHeaders = [{
    id: assignConfig.assignmentList.title,
    label: 'studentAssignmentList.assignmentName',
    isSortable: true,
    trackEvent: trackEventTitle
  }, {
    id: assignConfig.assignmentList.feedback,
    label: 'studentAssignmentList.feedback',
    isSortable: false
  }, {
    id: assignConfig.assignmentList.startTime,
    label: 'studentAssignmentList.availableOn',
    isSortable: false
  }, {
    id: assignConfig.assignmentList.dueDate,
    label: 'studentAssignmentList.dueDate',
    isSortable: true,
    trackEvent: trackEventDueDate
  }];
  return tableHeaders;
});
export var getCellDataForTable = createSelector([getAssignmentList, getCurrentTab, getAssignmentFeedback], function (assignmentList, currentTab, assignmentFeedback) {
  if ((assignmentList === null || assignmentList === void 0 ? void 0 : assignmentList.loading) || (assignmentFeedback === null || assignmentFeedback === void 0 ? void 0 : assignmentFeedback.loading)) {
    return {
      loading: true
    };
  }

  return assignmentList.assignments.map(function (assignment) {
    var _assignment$activitie;

    var hasFeedback = assignmentFeedback.feedback.has(assignment.teacherAssignmentRefId);
    var sourceObject = ((_assignment$activitie = assignment.activities.get(0)) === null || _assignment$activitie === void 0 ? void 0 : _assignment$activitie.sourceObject) || {};
    var programId = sourceObject.attributes.programId || '';
    var isFromPreviousSchoolYears = assignment.isFromPreviousSchoolYears;
    var manualScoring = sourceObject.manualScoring;

    if (currentTab === TAB_STATES.DONE) {
      var isR180FSProgram = PROGRAM_IDS.R180FS.includes(programId) && manualScoring;
      var sectionId = assignment.sectionId,
          teacherAssignmentRefId = assignment.teacherAssignmentRefId,
          studentPersonalRefId = assignment.studentPersonalRefId,
          refId = assignment.refId;
      var scoringPath = '';

      if (isR180FSProgram && sectionId && teacherAssignmentRefId && studentPersonalRefId && refId) {
        scoringPath = "".concat(sectionId, "/").concat(teacherAssignmentRefId, "/").concat(studentPersonalRefId, "/").concat(refId);
      }

      return {
        id: assignment.getHmhAssignmentId(),
        data: [{
          value: assignment.getAssignmentTitle()
        }, {
          value: hasFeedback,
          isFeedbackCell: true
        }, {
          value: assignment.dueDate,
          isDate: true,
          dataTestId: assignConfig.assignmentList.dueDate,
          dateType: dateCellTypes.dueDate
        }, {
          value: assignment.submitDate,
          isDate: true,
          dataTestId: assignConfig.assignmentList.submitDate,
          dateType: dateCellTypes.submitDate
        }],
        parentReviewRestrictedDate: assignment.parentReviewRestrictedDate,
        reviewAvailable: assignment.reviewAvailable,
        actionRowElement: getActionRowElement(assignment, assignmentFeedback),
        programId: programId,
        scoringPath: scoringPath,
        manualScoring: manualScoring,
        isFromPreviousSchoolYears: isFromPreviousSchoolYears
      };
    }

    var assignmentData = [{
      value: assignment.getAssignmentTitle(),
      sharedAssignmentType: assignment.getSharedAssignmentType(),
      dataTestId: assignConfig.assignmentList.title
    }, {
      value: hasFeedback,
      isFeedbackCell: true
    }, {
      value: assignment.availableDate,
      isDate: true,
      getLockedAfterDueDate: assignment.getLockedAfterDueDate(),
      dataTestId: assignConfig.assignmentList.startTime,
      dateType: dateCellTypes.startTime
    }, {
      value: assignment.dueDate,
      isDate: true,
      getLockedAfterDueDate: assignment.getLockedAfterDueDate(),
      dataTestId: assignConfig.assignmentList.dueDate,
      dateType: dateCellTypes.dueDate
    }];
    return {
      id: assignment.getHmhAssignmentId(),
      data: assignmentData,
      actionRowElement: getActionRowElement(assignment, assignmentFeedback)
    };
  });
});
export var getTotalTablePages = createSelector([getAssignmentList], function (assignmentList) {
  var total = assignmentList.total;
  return Math.ceil(total / assignConfig.assignmentList.pageSize);
});
export var getLoadingStatus = createSelector([getAssignmentList, getDisciplines, getTabCounts], function (assignmentList, disciplineList, tabCounts) {
  return assignmentList.loading || disciplineList.loading || tabCounts.loading;
});