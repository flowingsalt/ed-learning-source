import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/* eslint-disable react/require-default-props */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getLaunchError } from 'orchid-common/reducers/launchError.selectors';
import { TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
import { ThemeProvider } from '@mui/material/styles';
import ctsDefaultTheme from '@hmhco/cts-default-theme';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import Link from '@mui/material/Link';
import { FormattedMessage, useIntl } from 'react-intl';
import Typography from '@mui/material/Typography';
import { getPartnerDisplayName } from '@hmhco/connected-partner-helper/src/util';
import { PARTNER_MODAL_TIMEOUT } from '@hmhco/connected-partner-helper/src/constants';
import { getShouldShowPartnerAssignmentModal } from '../../reducers/currentAssignmentShowPartnerModal.selector';
import { getCurrentAssignmentPartner } from '../../reducers/currentAssignmentPartner.selector';
import AssignmentTable from '../AssignmentTable/AssignmentTable.component';
import NoAssignmentsCTS from '../NoAssignments/NoAssignmentsCTS.component';
import AssignmentsDirectionsModal from './AssignmentsDirectionsModal.component';
import AssignmentNotAvailableModal from './AssignmentNotAvailableModal.component';
import { updateSort, updatePage, openFeedback, closeFeedback, hideDirections, hideNotAvailableInstruction, submitAssignment, launchAssignment, launchAssignmentFromDirections, hidePartnerAssignmentModal } from '../../actions/index';
import { fetchDisciplines } from '../../actions/discipline.actions';
import AssignmentsFeedbackModalCTS from './AssignmentsFeedbackModalCTS';
import useStyles from './AssignmentsTableContainer.styles';

var isCurrentTabEmpty = function isCurrentTabEmpty(todoCount, overdueCount, doneCount, tabId) {
  return tabId === TAB_STATES.TODO && todoCount === 0 || tabId === TAB_STATES.OVERDUE && overdueCount === 0 || tabId === TAB_STATES.DONE && doneCount === 0;
};

var AssignmentsTableContainer = function AssignmentsTableContainer(_ref) {
  var _totalAssignmentsForE;

  var tableHeaders = _ref.tableHeaders,
      assignmentsList = _ref.assignmentsList,
      handleSignInClick = _ref.handleSignInClick,
      connected = _ref.connected,
      sufficientScopes = _ref.sufficientScopes,
      currentTab = _ref.currentTab,
      sortDirection = _ref.sortDirection,
      sort = _ref.sort,
      totalPages = _ref.totalPages,
      currentPage = _ref.currentPage,
      todoCount = _ref.todoCount,
      overdueCount = _ref.overdueCount,
      doneCount = _ref.doneCount,
      currentDirectionsAssignment = _ref.currentDirectionsAssignment,
      currentNotAvailableInstruction = _ref.currentNotAvailableInstruction,
      feedbackForModal = _ref.feedbackForModal,
      hasEntitledProducts = _ref.hasEntitledProducts,
      rowsPerPage = _ref.rowsPerPage,
      isLoading = _ref.isLoading,
      queries = _ref.queries,
      setToDoneTab = _ref.setToDoneTab;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var dispatch = useDispatch();

  var updateSortCallback = function updateSortCallback() {
    return dispatch(updateSort.apply(void 0, arguments));
  };

  var updatePageCallback = function updatePageCallback() {
    return dispatch(updatePage.apply(void 0, arguments));
  };

  var openFeedbackCallback = function openFeedbackCallback() {
    return dispatch(openFeedback.apply(void 0, arguments));
  };

  var closeFeedbackCallback = function closeFeedbackCallback() {
    return dispatch(closeFeedback.apply(void 0, arguments));
  };

  var hideDirectionsCallback = function hideDirectionsCallback() {
    return dispatch(hideDirections.apply(void 0, arguments));
  };

  var hidePartnerAssignmentModalCallback = function hidePartnerAssignmentModalCallback() {
    return dispatch(hidePartnerAssignmentModal.apply(void 0, arguments));
  };

  var hideNotAvailableInstructionCallback = function hideNotAvailableInstructionCallback() {
    return dispatch(hideNotAvailableInstruction.apply(void 0, arguments));
  };

  var assignmentClickActionCallback = function assignmentClickActionCallback() {
    return dispatch(launchAssignment.apply(void 0, arguments));
  };

  var submitAssignmentCallback = function submitAssignmentCallback() {
    return dispatch(submitAssignment.apply(void 0, arguments));
  };

  var launchAssignmentFromDirectionsCallback = function launchAssignmentFromDirectionsCallback() {
    return dispatch(launchAssignmentFromDirections.apply(void 0, arguments));
  };

  var launchError = useSelector(getLaunchError);
  var shouldShowPartnerAssignmentModal = useSelector(getShouldShowPartnerAssignmentModal);
  var partnerIdentifier = useSelector(getCurrentAssignmentPartner);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openPartnerModal = _useState4[0],
      setOpenPartnerModal = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      assignmentPartner = _useState6[0],
      setAssignmentPartner = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      openDirectionsModal = _useState8[0],
      setOpenDirectionsModal = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      openFeedbackModal = _useState10[0],
      setOpenFeedbackModal = _useState10[1];

  var totalAssignmentsForEachTab = (_totalAssignmentsForE = {}, _defineProperty(_totalAssignmentsForE, TAB_STATES.TODO, todoCount), _defineProperty(_totalAssignmentsForE, TAB_STATES.OVERDUE, overdueCount), _defineProperty(_totalAssignmentsForE, TAB_STATES.DONE, doneCount), _totalAssignmentsForE);
  useEffect(function () {
    setAssignmentPartner(getPartnerDisplayName(partnerIdentifier));
    setTimeout(setOpenPartnerModal, PARTNER_MODAL_TIMEOUT, shouldShowPartnerAssignmentModal || false);
  }, [shouldShowPartnerAssignmentModal, partnerIdentifier]);

  var handleCloseModal = function handleCloseModal() {
    hideNotAvailableInstructionCallback();
    setOpenModal(false);
  };

  var handleOpenModal = function handleOpenModal() {
    setOpenModal(true);
  };

  var handleOpenDirectionsModal = function handleOpenDirectionsModal() {
    setOpenDirectionsModal(true);
  };

  var handleCloseDirectionsModal = function handleCloseDirectionsModal() {
    hideDirectionsCallback();
    setOpenDirectionsModal(false);
  };

  var handleOpenFeedbackModal = function handleOpenFeedbackModal(assessmentId) {
    setOpenFeedbackModal(true);
    openFeedbackCallback(assessmentId);
  };

  var handleCloseFeedbackModal = function handleCloseFeedbackModal() {
    closeFeedbackCallback();
    setOpenFeedbackModal(false);
  };

  var handleClosePartnerModal = function handleClosePartnerModal() {
    // close partner modal
    setOpenPartnerModal(false);
    dispatch(hidePartnerAssignmentModalCallback()); // refresh student assignment table

    dispatch(fetchDisciplines(queries));
  };

  var handleDoneLinkClick = function handleDoneLinkClick() {
    setOpenPartnerModal(false);
    dispatch(hidePartnerAssignmentModalCallback());
    setToDoneTab(2);
  };

  var tabId = currentTab;
  var tableSortDirection = sortDirection;
  var tableSort = sort; // eslint-disable-next-line radix

  var page = parseInt(currentPage);

  if (isCurrentTabEmpty(todoCount, overdueCount, doneCount, tabId) && !isLoading) {
    return /*#__PURE__*/React.createElement(NoAssignmentsCTS, {
      todoCount: todoCount,
      overdueCount: overdueCount,
      doneCount: doneCount,
      tabId: tabId,
      hasEntitledProducts: hasEntitledProducts
    });
  }

  var partnerName = assignmentPartner ? formatMessage({
    id: "partnerAssignmentModal.partner.".concat(assignmentPartner)
  }) : '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, currentNotAvailableInstruction && /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: ctsDefaultTheme
  }, /*#__PURE__*/React.createElement(AssignmentNotAvailableModal, {
    open: openModal,
    handleClose: handleCloseModal,
    currentNotAvailableInstruction: currentNotAvailableInstruction,
    currentTab: currentTab
  })), currentDirectionsAssignment && /*#__PURE__*/React.createElement(AssignmentsDirectionsModal, {
    currentDirectionsAssignment: currentDirectionsAssignment,
    launchAssignmentFromDirections: launchAssignmentFromDirectionsCallback,
    open: openDirectionsModal,
    handleClose: handleCloseDirectionsModal
  }), feedbackForModal && /*#__PURE__*/React.createElement(AssignmentsFeedbackModalCTS, {
    feedbackForModal: feedbackForModal,
    open: openFeedbackModal,
    handleClose: handleCloseFeedbackModal
  }), /*#__PURE__*/React.createElement(ModalDialog, {
    open: openPartnerModal,
    handleAction: handleClosePartnerModal,
    customTestId: "partner-modal",
    title: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "partnerAssignmentModal.title"
    }),
    actionButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "partnerAssignmentModal.button"
    }),
    hideCancelButton: true,
    hideTitleButton: true
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.description
  }, /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "p",
    "data-testid": "wwa-update-description"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "partnerAssignmentModal.partnerSpecific.description",
    values: {
      partner: partnerName
    }
  })), /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "h2",
    "data-testid": "wwa-done-description"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "partnerAssignmentModal.done.link",
    values: {
      a: function a() {
        for (var _len = arguments.length, chunks = new Array(_len), _key = 0; _key < _len; _key++) {
          chunks[_key] = arguments[_key];
        }

        return (
          /*#__PURE__*/
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          React.createElement(Link, {
            component: "button",
            onClick: handleDoneLinkClick
          }, chunks)
        );
      }
    }
  })))), /*#__PURE__*/React.createElement(AssignmentTable, {
    cellData: assignmentsList.loading ? [] : assignmentsList,
    isLoading: isLoading,
    cellHeaders: tableHeaders,
    tabId: tabId,
    updateSort: updateSortCallback,
    sortDirection: tableSortDirection,
    sort: tableSort,
    totalPages: totalPages,
    currentPage: page,
    updatePage: updatePageCallback,
    submitAssignment: submitAssignmentCallback,
    assignmentClickAction: assignmentClickActionCallback,
    openFeedback: openFeedbackCallback,
    showLaunchError: launchError.value,
    handleOpenModal: handleOpenModal,
    rowsPerPage: rowsPerPage,
    totalAssignments: totalAssignmentsForEachTab[tabId],
    handleOpenDirectionsModal: handleOpenDirectionsModal,
    handleOpenFeedbackModal: handleOpenFeedbackModal,
    handleSignInClick: handleSignInClick,
    connected: connected,
    sufficientScopes: sufficientScopes
  }));
};

AssignmentsTableContainer.propTypes = {
  tableHeaders: PropTypes.array,
  assignmentsList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  currentTab: PropTypes.string,
  sortDirection: PropTypes.string,
  sort: PropTypes.string,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  todoCount: PropTypes.number,
  overdueCount: PropTypes.number,
  doneCount: PropTypes.number,
  currentDirectionsAssignment: PropTypes.object,
  feedbackForModal: PropTypes.object,
  hasEntitledProducts: PropTypes.bool,
  currentNotAvailableInstruction: PropTypes.object,
  rowsPerPage: PropTypes.number,
  isLoading: PropTypes.bool,
  handleSignInClick: PropTypes.func,
  connected: PropTypes.bool,
  sufficientScopes: PropTypes.bool,
  queries: PropTypes.object,
  setToDoneTab: PropTypes.func
};
export default AssignmentsTableContainer;