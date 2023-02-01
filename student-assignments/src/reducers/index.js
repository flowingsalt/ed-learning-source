import { combineReducers } from 'redux';
import env from 'orchid-common/reducers/env';
import user from 'orchid-common/reducers/user';
import assignment from 'orchid-common/reducers/assignment.reducer';
import networkFail from 'orchid-common/reducers/networkFail.reducer';
import studentsTeachers from 'orchid-common/reducers/studentsTeachers.reducer';
import launchError from 'orchid-common/reducers/launchError.reducer';
import historyListenState from '@hmhco/assignments-history-helpers/src/reducers/historyListen.reducer';
import disciplineList from './disciplineList.reducer';
import pageState from './pageState.reducer';
import tabCounts from './tabCounts.reducers';
import assignmentList from './assignmentList.reducer';
import assignmentFeedback from './assignmentListFeedback.reducer';
import currentAssignmentDirections from './currentAssignmentDirections.reducer';
import currentAssignmentFeedbackId from './currentAssignmentFeedbackId.reducer';
import assignmentNotAvailableInstruction from './assignmentNotAvailableInstruction.reducer';
import currentAssignmentShowPartnerModal from './currentAssignmentShowPartnerModal.reducer';
import currentAssignmentPartner from './currentAssignmentPartner.reducer'; // rootReducer
// add any additional reducers inside combineReducers

var rootReducer = combineReducers({
  env: env,
  user: user,
  pageState: pageState,
  assignment: assignment,
  tabCounts: tabCounts,
  assignmentList: assignmentList,
  assignmentFeedback: assignmentFeedback,
  disciplineList: disciplineList,
  currentAssignmentDirections: currentAssignmentDirections,
  currentAssignmentFeedbackId: currentAssignmentFeedbackId,
  assignmentNotAvailableInstruction: assignmentNotAvailableInstruction,
  studentsTeachers: studentsTeachers,
  networkFail: networkFail,
  historyListenState: historyListenState,
  launchError: launchError,
  currentAssignmentShowPartnerModal: currentAssignmentShowPartnerModal,
  currentAssignmentPartner: currentAssignmentPartner
});
export default rootReducer;