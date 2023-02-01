import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import React from 'react';
import SortableTableCTS from '@hmhco/sortable-table/src/SortableTable';
import { Pagination } from '@hmhco/pagination';
import { Iterable } from 'immutable';
import { arrayOf, shape, oneOfType, string, number, bool, instanceOf, object, func } from 'prop-types';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
import AssignmentSharedIconCell from './AssignmentSharedIconCell/AssignmentSharedIconCell.component';
import AssignmentDateCell from './AssignmentDateCell/AssignmentDateCell.component';
import AssignmentFeedbackCell from './AssignmentFeedbackCell.component';
import AssignmentTableButtons from './AssignmentTableButtons.component';
import Styles from './AssignmentTable.component.css';
import PROGRAM_IDS from '../../constants/programIds';
import gradeReviewR180FS from './AssignmentTable.helper';
import GOOGLE_CLASSROOM_ASSIGNMENT from '../../constants';
export function getAssignmentStatus(row) {
  return row.actionRowElement.assignmentStatus;
}
export function transformRowAction() {
  var _PROGRAM_IDS$R180FS;

  var actionData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var clickAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var submitAssignment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  var openFeedback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var handleOpenModal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var handleOpenDirectionsModal = arguments.length > 5 ? arguments[5] : undefined;
  var handleOpenFeedbackModal = arguments.length > 6 ? arguments[6] : undefined;
  var tabId = arguments.length > 7 ? arguments[7] : undefined;
  var parentReviewRestrictedDate = arguments.length > 8 ? arguments[8] : undefined;
  var reviewAvailable = arguments.length > 9 ? arguments[9] : undefined;
  var programId = arguments.length > 10 ? arguments[10] : undefined;
  var scoringPath = arguments.length > 11 ? arguments[11] : undefined;
  var manualScoring = arguments.length > 12 ? arguments[12] : undefined;
  var isFromPreviousSchoolYears = arguments.length > 13 ? arguments[13] : undefined;
  var sharedAssignmentType = arguments.length > 14 ? arguments[14] : undefined;
  var handleSignInClick = arguments.length > 15 ? arguments[15] : undefined;
  var connected = arguments.length > 16 ? arguments[16] : undefined;
  var sufficientScopes = arguments.length > 17 ? arguments[17] : undefined;
  var showButton = actionData.showButton,
      buttonType = actionData.buttonType,
      launchType = actionData.launchType,
      assessmentId = actionData.assessmentId,
      assignmentTitle = actionData.assignmentTitle,
      showDoneButton = actionData.showDoneButton,
      showFeedbackButton = actionData.showFeedbackButton,
      activityId = actionData.activityId,
      getLockedAfterDueDate = actionData.getLockedAfterDueDate,
      refId = actionData.refId,
      partnerIdentifier = actionData.partnerIdentifier;
  var isR180FSProgram = (PROGRAM_IDS === null || PROGRAM_IDS === void 0 ? void 0 : (_PROGRAM_IDS$R180FS = PROGRAM_IDS.R180FS) === null || _PROGRAM_IDS$R180FS === void 0 ? void 0 : _PROGRAM_IDS$R180FS.length) && PROGRAM_IDS.R180FS.includes(programId) && manualScoring;

  if (!showButton && !isR180FSProgram) {
    return null;
  }

  if (getLockedAfterDueDate && tabId !== TAB_STATES.TODO && tabId !== TAB_STATES.DONE) {
    return /*#__PURE__*/React.createElement("div", {
      className: Styles.assignmentExpiredMessage
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignments.assignmentExpired"
    }));
  }

  if (parentReviewRestrictedDate && tabId === TAB_STATES.DONE && !reviewAvailable && buttonType === 'review') {
    var dateFromReviewAvailableObject = /*#__PURE__*/React.createElement(FormattedDate, {
      value: parentReviewRestrictedDate,
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
    return /*#__PURE__*/React.createElement("div", {
      className: Styles.assignmentExpired
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignments.restrictedDate",
      values: {
        date: dateFromReviewAvailableObject
      }
    }));
  }

  var isReviewFromPreviousYears = isFromPreviousSchoolYears && buttonType !== 'open';
  return !isReviewFromPreviousYears ? /*#__PURE__*/React.createElement(AssignmentTableButtons, {
    buttonType: isR180FSProgram ? 'review' : buttonType,
    onClick: isR180FSProgram ? function () {
      return gradeReviewR180FS(scoringPath);
    } : clickAction,
    launchType: launchType,
    assessmentId: assessmentId,
    assignmentTitle: assignmentTitle,
    showDoneButton: showDoneButton,
    showFeedbackButton: showFeedbackButton,
    activityId: activityId,
    onSubmit: submitAssignment,
    openFeedback: openFeedback,
    handleOpenModal: handleOpenModal,
    refId: refId,
    handleOpenDirectionsModal: handleOpenDirectionsModal,
    handleOpenFeedbackModal: handleOpenFeedbackModal,
    partnerIdentifier: partnerIdentifier,
    sharedAssignmentType: sharedAssignmentType,
    handleSignInClick: handleSignInClick,
    connected: connected,
    sufficientScopes: sufficientScopes
  }) : null;
}
export function transformCellDataToRows(_ref) {
  var cellData = _ref.cellData,
      assignmentClickAction = _ref.assignmentClickAction,
      submitAssignment = _ref.submitAssignment,
      openFeedback = _ref.openFeedback,
      tabId = _ref.tabId,
      handleOpenModal = _ref.handleOpenModal,
      handleOpenDirectionsModal = _ref.handleOpenDirectionsModal,
      handleOpenFeedbackModal = _ref.handleOpenFeedbackModal,
      handleSignInClick = _ref.handleSignInClick,
      connected = _ref.connected,
      sufficientScopes = _ref.sufficientScopes;
  return cellData.map(function (row) {
    var rowButtons = transformRowAction(row.actionRowElement, assignmentClickAction, submitAssignment, openFeedback, handleOpenModal, handleOpenDirectionsModal, handleOpenFeedbackModal, tabId, row.parentReviewRestrictedDate, row.reviewAvailable, row.programId, row.scoringPath, row.manualScoring, row.isFromPreviousSchoolYears, row.data[0].sharedAssignmentType, handleSignInClick, connected, sufficientScopes);
    var filteredRow = row.data;
    var cells = filteredRow.map(function (cell) {
      if (cell.sharedAssignmentType === GOOGLE_CLASSROOM_ASSIGNMENT) {
        return {
          value: /*#__PURE__*/React.createElement(AssignmentSharedIconCell, {
            originalAssignmentTitle: cell.value,
            dataTestId: cell.dataTestId
          })
        };
      }

      if (cell.isDate) {
        return {
          value: /*#__PURE__*/React.createElement(AssignmentDateCell, {
            value: cell.value,
            shouldBoldText: tabId !== TAB_STATES.DONE // Only bold the date if not on the DONE tab
            ,
            dataTestId: cell.dataTestId,
            dateType: cell.dateType,
            lockedAfterDueDate: tabId === TAB_STATES.DONE ? null : cell.getLockedAfterDueDate
          })
        };
      }

      if (cell.isFeedbackCell) {
        var _row$actionRowElement;

        return {
          value: /*#__PURE__*/React.createElement(AssignmentFeedbackCell, {
            hasFeedback: cell.value,
            assignmentStatus: getAssignmentStatus(row),
            assignmentId: row.actionRowElement.assessmentId,
            assignmentTitle: row === null || row === void 0 ? void 0 : (_row$actionRowElement = row.actionRowElement) === null || _row$actionRowElement === void 0 ? void 0 : _row$actionRowElement.assignmentTitle,
            openFeedbackCallback: openFeedback,
            handleOpenFeedbackModal: handleOpenFeedbackModal
          })
        };
      }

      return cell;
    });
    return _objectSpread(_objectSpread({}, row), {}, {
      actionRowElement: rowButtons,
      data: cells
    });
  });
}
export var isCellDataArrayOrIterable = function isCellDataArrayOrIterable(rows) {
  return typeof rows.toJS === 'function' ? rows.toJS() : rows;
};

var AssignmentTable = function AssignmentTable(_ref2) {
  var cellData = _ref2.cellData,
      cellHeaders = _ref2.cellHeaders,
      tabId = _ref2.tabId,
      updateSort = _ref2.updateSort,
      sortDirection = _ref2.sortDirection,
      sort = _ref2.sort,
      currentPage = _ref2.currentPage,
      updatePage = _ref2.updatePage,
      submitAssignment = _ref2.submitAssignment,
      openFeedback = _ref2.openFeedback,
      assignmentClickAction = _ref2.assignmentClickAction,
      handleOpenModal = _ref2.handleOpenModal,
      rowsPerPage = _ref2.rowsPerPage,
      totalAssignments = _ref2.totalAssignments,
      handleOpenDirectionsModal = _ref2.handleOpenDirectionsModal,
      handleOpenFeedbackModal = _ref2.handleOpenFeedbackModal,
      isLoading = _ref2.isLoading,
      handleSignInClick = _ref2.handleSignInClick,
      connected = _ref2.connected,
      sufficientScopes = _ref2.sufficientScopes;
  var rows = transformCellDataToRows({
    cellData: cellData,
    assignmentClickAction: assignmentClickAction,
    submitAssignment: submitAssignment,
    openFeedback: openFeedback,
    tabId: tabId,
    handleOpenModal: handleOpenModal,
    handleOpenDirectionsModal: handleOpenDirectionsModal,
    handleOpenFeedbackModal: handleOpenFeedbackModal,
    handleSignInClick: handleSignInClick,
    connected: connected,
    sufficientScopes: sufficientScopes
  });
  var tablePagination = totalAssignments > rowsPerPage && /*#__PURE__*/React.createElement(Pagination, {
    count: totalAssignments,
    rowsPerPage: rowsPerPage,
    page: currentPage - 1,
    onPageChange: function onPageChange(event, pageNumber) {
      updatePage(pageNumber + 1);
    },
    paginationTestId: "assignmentsTablePagination"
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SortableTableCTS, {
    headers: cellHeaders,
    rows: isCellDataArrayOrIterable(rows),
    direction: sortDirection,
    isLoading: isLoading,
    orderBy: sort,
    tableTestId: "assignmentsTable" // this is used for E2Es
    ,
    hasActionColumn: true,
    announceTableSorting: true,
    handleRequestSort: function handleRequestSort(event, newSortBy) {
      return updateSort(newSortBy);
    },
    tableFooter: tablePagination
  }));
};

AssignmentTable.propTypes = {
  tabId: string,
  cellHeaders: arrayOf(shape({
    id: oneOfType([string, number]).isRequired,
    label: string,
    isSortable: bool,
    trackEvent: string
  })).isRequired,
  cellData: oneOfType([instanceOf(Iterable), arrayOf(shape({
    id: oneOfType([string, number]).isRequired,
    actionRowElement: instanceOf(Object),
    data: arrayOf(object).isRequired
  }))]).isRequired,
  currentPage: number.isRequired,
  assignmentClickAction: func.isRequired,
  openFeedback: func.isRequired,
  updateSort: func,
  sortDirection: string,
  sort: string,
  updatePage: func,
  submitAssignment: func,
  handleOpenModal: func,
  rowsPerPage: number,
  totalAssignments: number,
  handleOpenDirectionsModal: func,
  handleOpenFeedbackModal: func,
  isLoading: bool,
  handleSignInClick: func,
  connected: bool,
  sufficientScopes: bool
};
export default AssignmentTable;