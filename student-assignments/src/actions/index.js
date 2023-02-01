import { PAGE_ACTIONS, QUERY_STATE_ACTIONS } from './types';
export var loadTabCounts = function loadTabCounts(counts) {
  return {
    type: PAGE_ACTIONS.LOAD_TAB_COUNTS,
    value: counts
  };
};
export var loadTabCount = function loadTabCount(count, currentTab) {
  return {
    type: PAGE_ACTIONS.LOAD_TAB_COUNT,
    count: count,
    currentTab: currentTab
  };
};
export var invalidateTabCounts = function invalidateTabCounts() {
  return {
    type: PAGE_ACTIONS.INVALIDATE_TAB_COUNTS
  };
};
export var loadTableState = function loadTableState(fields) {
  return {
    type: QUERY_STATE_ACTIONS.LOAD_TABLE_STATE,
    value: fields
  };
};
export var fetchAssignments = function fetchAssignments() {
  return {
    type: PAGE_ACTIONS.FETCH_ASSIGNMENTS
  };
};
export var fetchAssignmentsError = function fetchAssignmentsError() {
  return {
    type: PAGE_ACTIONS.FETCH_ASSIGNMENTS_ERROR
  };
};
export var loadAssignments = function loadAssignments(assignments, total) {
  return {
    type: PAGE_ACTIONS.LOAD_ASSIGNMENTS,
    assignments: assignments,
    total: total
  };
};
export var setCurrentTab = function setCurrentTab(currentTab) {
  return {
    type: QUERY_STATE_ACTIONS.SET_CURRENT_TAB,
    value: currentTab
  };
};
export var setSortDirection = function setSortDirection(sortDirection) {
  return {
    type: QUERY_STATE_ACTIONS.SET_SORT_DIRECTION,
    value: sortDirection
  };
};
export var setSort = function setSort(sort) {
  return {
    type: QUERY_STATE_ACTIONS.SET_SORT,
    value: sort
  };
};
export var setCurrentPage = function setCurrentPage(page) {
  return {
    type: QUERY_STATE_ACTIONS.SET_CURRENT_PAGE,
    value: page
  };
};
export var updateSort = function updateSort(newSort, sortDirection) {
  return {
    type: QUERY_STATE_ACTIONS.UPDATE_SORT,
    value: newSort,
    sortDirection: sortDirection
  };
};
export var updatePage = function updatePage(newPage) {
  return {
    type: QUERY_STATE_ACTIONS.UPDATE_PAGE,
    value: newPage
  };
};
export var submitAssignment = function submitAssignment(activityId, refId) {
  return {
    type: PAGE_ACTIONS.SUBMIT_ASSIGNMENT,
    value: activityId,
    refId: refId
  };
};
export var launchAssignment = function launchAssignment(assessmentId, launchType) {
  return {
    type: PAGE_ACTIONS.LAUNCH_ASSIGNMENT,
    assessmentId: assessmentId,
    launchType: launchType
  };
};
export var updateAssignmentStatus = function updateAssignmentStatus(assignmentId, newStatus) {
  return {
    type: PAGE_ACTIONS.UPDATE_ASSIGNMENT_STATUS,
    assignmentId: assignmentId,
    newStatus: newStatus
  };
};
export var removeSubmittedAssignment = function removeSubmittedAssignment(assignmentId) {
  return {
    type: PAGE_ACTIONS.REMOVE_ASSIGNMENT,
    assignmentId: assignmentId
  };
};
export var showDirections = function showDirections(currentDirections, assessmentId, launchType) {
  return {
    type: PAGE_ACTIONS.SHOW_DIRECTIONS,
    currentDirections: currentDirections,
    assessmentId: assessmentId,
    launchType: launchType
  };
};
export var hideDirections = function hideDirections() {
  return {
    type: PAGE_ACTIONS.HIDE_DIRECTIONS
  };
};
export var showPartnerAssignmentModal = function showPartnerAssignmentModal(currentAssignmentShowPartnerModal) {
  return {
    type: PAGE_ACTIONS.SHOW_PARTNER_ASSIGNMENT_MODAL,
    currentAssignmentShowPartnerModal: currentAssignmentShowPartnerModal
  };
};
export var hidePartnerAssignmentModal = function hidePartnerAssignmentModal() {
  return {
    type: PAGE_ACTIONS.HIDE_PARTNER_ASSIGNMENT_MODAL
  };
};
export var setAssignmentPartner = function setAssignmentPartner(partner) {
  return {
    type: PAGE_ACTIONS.SET_ASSIGNMENT_PARTNER,
    partner: partner
  };
};
export var showNotAvailableInstruction = function showNotAvailableInstruction(available, title, availableDate, assessmentId) {
  return {
    type: PAGE_ACTIONS.SHOW_NOT_AVAILABLE_INSTRUCTION,
    available: available,
    title: title,
    availableDate: availableDate,
    assessmentId: assessmentId
  };
};
export var hideNotAvailableInstruction = function hideNotAvailableInstruction() {
  return {
    type: PAGE_ACTIONS.HIDE_NOT_AVAILABLE_INSTRUCTION
  };
};
export var launchAssignmentFromDirections = function launchAssignmentFromDirections(assessmentId, launchType) {
  return {
    type: PAGE_ACTIONS.LAUNCH_ASSIGNMENT_FROM_DIRECTIONS,
    assessmentId: assessmentId,
    launchType: launchType
  };
};
export var openFeedback = function openFeedback(assignmentId) {
  return {
    type: PAGE_ACTIONS.SHOW_FEEDBACK,
    assignmentId: assignmentId
  };
};
export var closeFeedback = function closeFeedback() {
  return {
    type: PAGE_ACTIONS.CLOSE_FEEDBACK
  };
};
export var compareUrlToCurrentStateAndFetchData = function compareUrlToCurrentStateAndFetchData(fields) {
  return {
    type: PAGE_ACTIONS.COMPARE_URL,
    value: fields
  };
};