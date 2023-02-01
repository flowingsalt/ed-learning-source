import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

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
/* eslint-disable react/require-default-props */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/destructuring-assignment */


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, useIntl } from 'react-intl';
import { withRouter } from 'react-router';
import { NotFound } from '@ed/orchid/src/components/shared/NotFound/NotFound.web';
import { PageHeader } from '@ed/orchid/src/components/shared/PageHeader/PageHeader.web';
import { PageHeader as PageHeaderCTS } from '@hmhco/page-header';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { ProgramLaunch } from '@hmhco/program-launch/src/ProgramLaunch';
import { getNetworkFail } from 'orchid-common/reducers/networkFail.selectors';
import { getLaunchError } from 'orchid-common/reducers/launchError.selectors';
import { dismissNetworkError } from 'orchid-common/actions/index';
import InlineDropdown from '@hmhco/inline-dropdown/src/InlineDropdown';
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import GoogleAuthButton from '@hmhco/google-authentication-button/src/GoogleAuthButton';
import { setDiscipline } from '../../actions/discipline.actions';
import { getTableHeadersForTable, getCellDataForTable, getTotalTablePages, getLoadingStatus } from '../../reducers/assignmentList.selectors';
import { getDiscipline, getCurrentTab, getPageState, getLimit } from '../../reducers/pageState.selectors';
import { getCurrentAssignmentDirections } from '../../reducers/currentAssignmentDirections.selector';
import { getNotAvailableInstruction } from '../../reducers/assignmentNotAvailableInstruction.selector';
import { getFeedbackForModal } from '../../reducers/currentAssignmentFeedbackId.selectors';
import { getDisciplines } from '../../reducers/disciplineList.selectors';
import Styles from './AssignmentsContainer.css';
import useStyles from './AssignmentsContainer.Styles';
import AssignmentsTabs from './AssignmentsTabs.component';
import SubjectDropdownSkeleton from '../Skeletons/SubjectDropdownSkeleton';
import useAuthentication from '../hooks/useAuthentication.hook';
import GoogleClassroomScopesAlert from '../GoogleClassroomScopesAlert/GoogleClassroomScopesAlert';
var studentAssignmentsHeaderTestId = 'student-assignments-header';

var AssignmentsContainer = function AssignmentsContainer(props) {
  var intl = props.intl,
      env = props.env,
      entitledProducts = props.entitledProducts,
      queries = props.queries,
      hasGoogleClassroomSetting = props.hasGoogleClassroomSetting;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      infoNotification = _useState2[0],
      setInfoNotification = _useState2[1];

  var _useAuthentication = useAuthentication(),
      authSignIn = _useAuthentication.authSignIn,
      checkAuthentication = _useAuthentication.checkAuthentication,
      signOut = _useAuthentication.signOut,
      _useAuthentication$au = _useAuthentication.authResults,
      connected = _useAuthentication$au.connected,
      sufficientScopes = _useAuthentication$au.sufficientScopes;

  useEffect(function () {
    if (hasGoogleClassroomSetting) {
      checkAuthentication();
    }
  }, [hasGoogleClassroomSetting]);

  var handleSignInClick = function handleSignInClick() {
    authSignIn();
  };

  var handleSignOutClick = function handleSignOutClick() {
    signOut();
  };

  var _useSelector = useSelector(getPageState),
      offset = _useSelector.offset,
      limit = _useSelector.limit,
      sort = _useSelector.sort,
      sortDirection = _useSelector.sortDirection,
      currentPage = _useSelector.currentPage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var networkFailed = useSelector(getNetworkFail);
  var launchError = useSelector(getLaunchError);
  var isLoading = useSelector(getLoadingStatus);
  var currentTab = useSelector(getCurrentTab);
  var tableHeaders = useSelector(getTableHeadersForTable);
  var translatedTableHeaders = tableHeaders.map(function (header) {
    return _objectSpread(_objectSpread({}, header), {}, {
      label: formatMessage({
        id: header.label
      })
    });
  });
  var totalPages = useSelector(getTotalTablePages);
  var assignmentsList = useSelector(getCellDataForTable);
  var disciplineProp = useSelector(getDiscipline);
  var disciplineList = useSelector(getDisciplines);
  var feedbackForModal = useSelector(getFeedbackForModal);
  var rowsPerPage = useSelector(getLimit);
  var currentDirectionsAssignment = useSelector(getCurrentAssignmentDirections);
  var currentNotAvailableInstruction = useSelector(getNotAvailableInstruction);
  var dispatch = useDispatch();

  var setDisciplineCallback = function setDisciplineCallback() {
    return dispatch(setDiscipline.apply(void 0, arguments));
  };

  var getAllSelectionCTS = function getAllSelectionCTS() {
    return {
      id: 'All',
      name: formatMessage({
        id: 'programDropdown.discipline.AllSubjects.label'
      })
    };
  };

  var handleProgramSelect = function handleProgramSelect(id) {
    setDisciplineCallback(id);
  };

  var hasEntitledProducts = props.entitledProducts.length > 0;

  var renderAllSubjectsLabel = function renderAllSubjectsLabel() {
    return /*#__PURE__*/React.createElement("div", {
      className: Styles.pageHeaderWrapperLabel,
      "data-testid": studentAssignmentsHeaderTestId
    }, /*#__PURE__*/React.createElement(PageHeader, {
      "aria-label": intl.formatMessage({
        id: 'programDropdown.discipline.AllSubjects.label'
      }),
      dataTestId: "no-discipline-label",
      title: intl.formatMessage({
        id: 'programDropdown.discipline.AllSubjects.label'
      })
    }));
  };

  var mapDisciplines = function mapDisciplines(discipline) {
    return {
      id: discipline.value,
      name: discipline.title
    };
  };

  var renderDisciplineSelector = function renderDisciplineSelector(disciplines) {
    var mappedDisciplines = disciplines.map(mapDisciplines);
    var mappeddisciplinesWithDefaultCTS = [getAllSelectionCTS()].concat(_toConsumableArray(mappedDisciplines));
    return /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: 2,
      className: classes.programDropdownContainer
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      className: classes.subjectLabel
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "h3"
    }, formatMessage({
      id: 'programDropdown.label'
    }))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      className: classes.programDropdown
    }, /*#__PURE__*/React.createElement(InlineDropdown, {
      labelHidden: true,
      labelId: "programDropdownLabel",
      dropdownId: "programDropdown",
      labelText: formatMessage({
        id: 'programDropdown.label'
      }),
      options: mappeddisciplinesWithDefaultCTS,
      value: disciplineProp,
      handleChange: handleProgramSelect
    })));
  };

  var handleClickNotification = function handleClickNotification() {
    setInfoNotification(false);
  };

  var handleClickErrorNotification = function handleClickErrorNotification() {
    dispatch(dismissNetworkError());
  };

  var showInfoBanner = function showInfoBanner() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, infoNotification && /*#__PURE__*/React.createElement("div", {
      className: classes.alert
    }, /*#__PURE__*/React.createElement(AlertNotification, {
      severity: "info",
      label: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssigments.info.label"
      }),
      autoFocus: true,
      "data-testid": "google-classroom-student-assignment-info-alert",
      onClose: handleClickNotification
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "alertModal.title.info"
    }))));
  };

  var showWarningBanner = function showWarningBanner() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, !sufficientScopes && /*#__PURE__*/React.createElement(Stack, {
      className: classes.container,
      spacing: 2,
      alignItems: "flex-end"
    }, /*#__PURE__*/React.createElement(GoogleClassroomScopesAlert, {
      handleClick: handleSignInClick
    })));
  };

  var renderDisciplineLabel = function renderDisciplineLabel(discipline) {
    var title = discipline.title;
    return /*#__PURE__*/React.createElement("div", {
      className: Styles.pageHeaderWrapperLabel,
      "data-testid": studentAssignmentsHeaderTestId
    }, /*#__PURE__*/React.createElement(PageHeader, {
      "aria-label": title,
      dataTestId: "single-discipline-label",
      title: title
    }));
  };

  var renderDisciplines = function renderDisciplines() {
    if (disciplineList.loading) {
      return /*#__PURE__*/React.createElement(SubjectDropdownSkeleton, null);
    }

    if (!networkFailed.value) {
      var disciplines = _toConsumableArray(disciplineList.disciplines);

      if (disciplines.length === 1) {
        return renderDisciplineLabel(disciplines[0]);
      }

      if (disciplines.length === 0) {
        return renderAllSubjectsLabel();
      }

      return renderDisciplineSelector(disciplines);
    }

    return null;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    className: classes.pageGreeting
  }, /*#__PURE__*/React.createElement(PageHeaderCTS, {
    "data-testid": "student-assignments-page-greeting",
    title: intl.formatMessage({
      id: 'studentAssignments.app.greeting'
    })
  })), /*#__PURE__*/React.createElement(React.Fragment, null, entitledProducts.length > 0 ? /*#__PURE__*/React.createElement(Grid, {
    className: classes.programLaunchCTS
  }, /*#__PURE__*/React.createElement(ProgramLaunch, {
    entitledProducts: props.entitledProducts,
    languageKey: intl.locale,
    env: env,
    fullWidth: true
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", null, renderDisciplines()), hasGoogleClassroomSetting && /*#__PURE__*/React.createElement("div", null, connected ? /*#__PURE__*/React.createElement(GoogleAuthButton, {
    handleClick: handleSignOutClick,
    type: "signOut"
  }) : /*#__PURE__*/React.createElement(GoogleAuthButton, {
    handleClick: handleSignInClick,
    type: "signIn"
  }))), hasGoogleClassroomSetting && /*#__PURE__*/React.createElement("div", null, connected ? showWarningBanner() : showInfoBanner()), networkFailed.value ? /*#__PURE__*/React.createElement(NotFound, {
    isError: true,
    message: "app.tryAgainInAWhile"
  }) : /*#__PURE__*/React.createElement(AssignmentsTabs, _extends({}, props, {
    isLoading: isLoading,
    hasEntitledProducts: hasEntitledProducts,
    currentTab: currentTab,
    offset: offset,
    limit: limit,
    sort: sort,
    sortDirection: sortDirection,
    currentPage: currentPage,
    tableHeaders: translatedTableHeaders,
    totalPages: totalPages,
    assignmentsList: assignmentsList,
    handleSignInClick: handleSignInClick,
    connected: connected,
    sufficientScopes: sufficientScopes,
    currentDirectionsAssignment: currentDirectionsAssignment,
    feedbackForModal: feedbackForModal,
    currentNotAvailableInstruction: currentNotAvailableInstruction,
    rowsPerPage: rowsPerPage,
    queries: queries,
    launchError: launchError,
    handleClickErrorNotification: handleClickErrorNotification
  })));
};

AssignmentsContainer.propTypes = {
  entitledPrograms: PropTypes.array,
  entitledProducts: PropTypes.array,
  intl: PropTypes.object,
  sif: PropTypes.object,
  env: PropTypes.string,
  queries: PropTypes.object,
  hasGoogleClassroomSetting: PropTypes.bool
};
AssignmentsContainer.defaultProps = {
  entitledProducts: []
};
export default withRouter(injectIntl(AssignmentsContainer));