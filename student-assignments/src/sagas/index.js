import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(_callee);

import { all, takeLatest } from 'redux-saga/effects';
import reviewSagaRoot from '@hmhco/student-assessment-review/src/sagas';
import contentLaunchRoot from '@ed/orchid/src/apps/ContentLaunch/sagas';
import { ASSIGNMENT_ACTIONS, FEEDBACK_ACTIONS } from 'orchid-common/actions/types';
import { watchFeedbackFetchForAssignment } from 'orchid-common/sagas/feedback.saga';
import { HISTORY_ACTIONS } from '@hmhco/assignments-history-helpers/src/actions/types';
import { fireAndResetHistoryListen } from '@hmhco/assignments-history-helpers/src/sagas/historyListen.saga';
import { PAGE_ACTIONS, QUERY_STATE_ACTIONS, DISCIPLINE_ACTIONS } from '../actions/types';
import { setCurrentTabParameter, setSortParameter, setPageParameter, setDisciplineParameter } from './setUrlParameters.saga';
import { submitAssignment, updateAssignmentStatusFromLearnosity, submitAssignmentFromPostMessage } from './updateAssignments.saga';
import { launchAssignmentDirections, launchAssignment } from './assignmentLaunch.saga';
import { fetchStudentsTeachers } from './teacherDataFetcher.saga';
import { fetchDisciplines } from './disciplineFetchers.saga';
import { compareUrlAndRefetchData } from './compareUrlAndRefetchData.saga';
export default function _callee() {
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return all([contentLaunchRoot(), reviewSagaRoot(), takeLatest(FEEDBACK_ACTIONS.FETCH_SINGLE_ASSIGNMENT_FEEDBACK, watchFeedbackFetchForAssignment), takeLatest(PAGE_ACTIONS.SUBMIT_ASSIGNMENT, submitAssignment), takeLatest(QUERY_STATE_ACTIONS.SET_CURRENT_TAB, setCurrentTabParameter), // should only be called on click of the tab components
          takeLatest(QUERY_STATE_ACTIONS.UPDATE_SORT, setSortParameter), // should only be called on click of the table headers component
          takeLatest(QUERY_STATE_ACTIONS.UPDATE_PAGE, setPageParameter), // should only be called on click of the pagination component
          takeLatest(PAGE_ACTIONS.LAUNCH_ASSIGNMENT, launchAssignmentDirections), takeLatest(DISCIPLINE_ACTIONS.FETCH_DISCIPLINES, fetchDisciplines), takeLatest(DISCIPLINE_ACTIONS.SET_DISCIPLINE, setDisciplineParameter), // should be called once on load and on click of the subject dropdown
          takeLatest(PAGE_ACTIONS.LAUNCH_ASSIGNMENT_FROM_DIRECTIONS, launchAssignment), takeLatest(PAGE_ACTIONS.SHOW_FEEDBACK, fetchStudentsTeachers), takeLatest(ASSIGNMENT_ACTIONS.START_ASSIGNMENT_FROM_LEARNOSITY, updateAssignmentStatusFromLearnosity), takeLatest(ASSIGNMENT_ACTIONS.SUBMIT_ASSIGNMENT_FROM_POSTMESSAGE, submitAssignmentFromPostMessage), takeLatest(PAGE_ACTIONS.COMPARE_URL, compareUrlAndRefetchData), takeLatest(HISTORY_ACTIONS.FIRE_UNLISTEN_AND_RESET_HISTORY_LISTEN, fireAndResetHistoryListen)]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}