import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl, FormattedMessage } from 'react-intl';
import Greetings from '@hmhco/greetings/src/Greetings';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useUserContext } from '@hmhco/amp-core-react/src/userContextProvider';
import useDocumentHelper from '@hmhco/document-helper/src/useDocumentHelper';
import { ProgramLaunch } from '@hmhco/program-launch/src/ProgramLaunch';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import { isFeatureActive } from '@hmhco/feature-flags';
import AssignmentsQuery from '../Assignments/AssignmentsQuery';
import useStyles from './StudentDashboardContainer.Styles';
import { StudentDashboardAlert, ASSIGNMENT_TYPE, SCORES_TYPE, LAUNCH_TYPE } from '../StudentDashboardAlert';
import fetchDmpsBatch from '../../api/fetchDmpsBatch';
import VirtualClassroomCard from '../VirtualClassroom/VirtualClassroomCard';
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed';
import RecentScores from '../RecentScores/RecentScores';
import { APIErrorContext } from '../../context/ApiErrorContextProvider';
import { usePartnerModalContext } from '../../context/PartnerModalContextProvider';
export var setRecentScoresPosition = function setRecentScoresPosition(showProgramLaunch, virtualClassroomProvider) {
  return !virtualClassroomProvider && !showProgramLaunch ? 2 : 5;
};
export var setRecentlyViewedWidth = function setRecentlyViewedWidth(recentScoresPosition) {
  return recentScoresPosition === 2 ? 12 : 8;
};

var StudentDashboardContainer = function StudentDashboardContainer(props) {
  var isConnectedPartnerEnabled = isFeatureActive('connectedPartner', true);
  var userContext = useUserContext();

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      assignmentsError = _useState2[0],
      setAssignmentsError = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scoresError = _useState4[0],
      setScoresError = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      virtualClassroomProvider = _useState6[0],
      setVirtualClassroomProvider = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      formattedPartnerName = _useState10[0],
      setFormattedPartnerName = _useState10[1];

  var location = props.location,
      entitledProducts = props.entitledProducts,
      firstName = props.firstName,
      sif = props.apiConfig.sif,
      env = props.env,
      languageKey = props.languageKey;
  var showProgramLaunch = entitledProducts && entitledProducts.length > 0;
  var recentScoresPosition = setRecentScoresPosition(virtualClassroomProvider, showProgramLaunch);
  var recentlyViewedWidth = setRecentlyViewedWidth(recentScoresPosition);
  /*
   Object for rearranging the layout per design requirements.
  The order and width of the widgets on this dashboard changes depending on
  if we are displaying virtualClassroom and/or programLaunch to the student.
  INSI-1200 for related spike.
  */

  var DASHBOARD_LAYOUT = {
    assignmentCenter: {
      width: 8,
      order: 1
    },
    virtualClassroom: {
      width: 4,
      order: 2
    },
    programLaunch: {
      width: virtualClassroomProvider ? 12 : 4,
      order: 3
    },
    recentlyViewed: {
      width: recentlyViewedWidth,
      order: 4
    },
    recentScores: {
      width: 4,
      order: recentScoresPosition
    }
  };

  var _useStyles = useStyles({
    DASHBOARD_LAYOUT: DASHBOARD_LAYOUT
  }),
      classes = _useStyles.classes;

  var _useContext = useContext(APIErrorContext),
      launchError = _useContext.launchError;

  var _usePartnerModalConte = usePartnerModalContext(),
      isPartnerModalOpen = _usePartnerModalConte.isPartnerModalOpen,
      partnerName = _usePartnerModalConte.partnerName,
      handleCloseModal = _usePartnerModalConte.handleCloseModal;

  var handleAssignmentsCallError = function handleAssignmentsCallError(hasError) {
    setAssignmentsError(hasError);
  };

  var handleScoresCallError = function handleScoresCallError(hasError) {
    setScoresError(hasError);
  };

  useDocumentHelper(formatMessage({
    id: 'studentDashboard.title'
  }));

  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var res;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetchDmpsBatch(userContext, ['recommended.virtual.classroom.provider']);

            case 3:
              res = _context.sent;

              if (res && res.virtualClassroomProvider !== 'none') {
                setVirtualClassroomProvider(res.virtualClassroomProvider);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setVirtualClassroomProvider(false);

            case 10:
              setLoading(false);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _fetchData.apply(this, arguments);
  }

  useEffect(function () {
    if (loading) {
      fetchData();
    }
  }, []);
  useEffect(function () {
    if (partnerName) {
      var formatted = formatMessage({
        id: "partnerAssignmentModal.partner.".concat(partnerName)
      });
      setFormattedPartnerName(formatted);
    }
  }, [partnerName]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, null, launchError.error ? /*#__PURE__*/React.createElement("div", {
    className: classes.error
  }, /*#__PURE__*/React.createElement(StudentDashboardAlert, {
    severity: "error",
    type: LAUNCH_TYPE
  })) : null), /*#__PURE__*/React.createElement(Grid, null, assignmentsError ? /*#__PURE__*/React.createElement("div", {
    className: classes.error
  }, /*#__PURE__*/React.createElement(StudentDashboardAlert, {
    severity: "error",
    type: ASSIGNMENT_TYPE
  })) : null), /*#__PURE__*/React.createElement(Grid, null, scoresError ? /*#__PURE__*/React.createElement("div", {
    className: classes.error
  }, /*#__PURE__*/React.createElement(StudentDashboardAlert, {
    severity: "error",
    type: SCORES_TYPE
  })) : null)), loading ? /*#__PURE__*/React.createElement("loader-component", {
    "data-testid": "loader"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.greeting
  }, /*#__PURE__*/React.createElement(Greetings, {
    message: formatMessage({
      id: 'studentGreeting.hi'
    }, {
      name: firstName
    }),
    avatar: {
      size: 'lg',
      classes: {
        lg: 'lg'
      }
    }
  })), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 4,
    className: classes.dashboardCardsContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    className: classes.assignmentCenter,
    item: true,
    md: DASHBOARD_LAYOUT.assignmentCenter.width,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/React.createElement(AssignmentsQuery, {
    showMessage: showProgramLaunch,
    handleError: handleAssignmentsCallError,
    location: location
  })), virtualClassroomProvider && /*#__PURE__*/React.createElement(Grid, {
    className: classes.virtualClassroom,
    item: true,
    md: DASHBOARD_LAYOUT.virtualClassroom.width,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/React.createElement("div", {
    "data-testid": "virtual-classroom-widget"
  }, /*#__PURE__*/React.createElement(VirtualClassroomCard, {
    provider: virtualClassroomProvider
  }))), showProgramLaunch && /*#__PURE__*/React.createElement(Grid, {
    className: classes.programLaunch,
    item: true,
    md: DASHBOARD_LAYOUT.programLaunch.width,
    sm: 12,
    xs: 12,
    "data-testid": "program-launch-grid"
  }, /*#__PURE__*/React.createElement("div", {
    "data-testid": "program-launch-widget"
  }, /*#__PURE__*/React.createElement(ProgramLaunch, {
    entitledProducts: entitledProducts,
    env: env,
    fullWidth: Boolean(virtualClassroomProvider),
    languageKey: languageKey
  }))), userContext && /*#__PURE__*/React.createElement(Grid, {
    className: classes.recentlyViewed,
    item: true,
    md: DASHBOARD_LAYOUT.recentlyViewed.width,
    sm: 12,
    xs: 12,
    "data-testid": "recently-viewed-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.recentlyViewedWidget,
    "data-testid": "recently-viewed-widget"
  }, /*#__PURE__*/React.createElement(RecentlyViewed, {
    sif: sif,
    env: env,
    userId: userContext.userId,
    width: DASHBOARD_LAYOUT.recentlyViewed.width
  }))), /*#__PURE__*/React.createElement(Grid, {
    className: classes.recentScores,
    item: true,
    md: DASHBOARD_LAYOUT.recentScores.width,
    sm: 12,
    xs: 12,
    "data-testid": "recent-scores-grid"
  }, /*#__PURE__*/React.createElement("div", {
    "data-testid": "recent-scores-widget"
  }, /*#__PURE__*/React.createElement(RecentScores, {
    location: location,
    position: recentScoresPosition,
    handleError: handleScoresCallError
  })))), isConnectedPartnerEnabled && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ModalDialog, {
    open: isPartnerModalOpen,
    handleAction: handleCloseModal,
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
    className: classes.partnerModalDescription
  }, /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "p",
    "data-testid": "description"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "partnerAssignmentModal.description",
    values: {
      partner: formattedPartnerName
    }
  })))))));
};

StudentDashboardContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
  location: PropTypes.func.isRequired,
  entitledProducts: PropTypes.array,
  apiConfig: PropTypes.shape({
    sif: PropTypes.string
  }),
  env: PropTypes.string,
  languageKey: PropTypes.string
};
export default StudentDashboardContainer;