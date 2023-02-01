import _extends from "@babel/runtime/helpers/extends";
/* eslint-disable react/jsx-props-no-spreading */

import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadUserToken, setEnv, loadTrackEventFunction } from 'orchid-common/actions';
import { getAssignment } from 'orchid-common/reducers/assignment.selectors';
import { getSifToken } from 'orchid-common/reducers/user.selectors';
import { withRouter } from 'react-router';
import trackEvents from 'orchid-common/conf/trackEvents';
import WrapperWithProvider from '@hmhco/student-assessment-review/src/components/WrapperWithProvider';
import { STUDENT_ASSESSMENT_REVIEW_ROUTE, STUDENT_ASSIGNMENTS } from '@hmhco/url-builders/src/constants';
import { NotFound } from '@ed/orchid/src/components/shared/NotFound/NotFound.web';
import useDocumentHelper from '@hmhco/document-helper/src/useDocumentHelper';
import { useIntl } from 'react-intl';
import { stateAsQueryString } from '../../reducers/pageState.selectors';
import { getTeacherNamesAsString, getFlattenedFeedback } from '../../reducers/currentAssignmentFeedbackId.selectors';
import AssignmentsRouteContainer from './AssignmentsRouteContainer';
import FullAppSkeleton from '../Skeletons/FullAppSkeleton';

var Routes = function Routes(props) {
  var sif = props.sif,
      env = props.env,
      consumerKey = props.consumerKey,
      entitledPrograms = props.entitledPrograms,
      isLoadingInAmp = props.isLoadingInAmp,
      trackEventFunction = props.trackEventFunction,
      hasGoogleClassroomSetting = props.hasGoogleClassroomSetting;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var assignment = useSelector(getAssignment);
  var currentAssignmentFeedback = useSelector(getFlattenedFeedback);
  var currentAssignmentTeachers = useSelector(getTeacherNamesAsString);
  var hasAppBootstrapped = useSelector(getSifToken);
  var setStateAsQueryString = useSelector(stateAsQueryString);
  var dispatch = useDispatch();
  useDocumentHelper(formatMessage({
    id: 'studentAssignments.title'
  }));
  useLayoutEffect(function () {
    dispatch(loadUserToken(sif));
    dispatch(setEnv(env));
    dispatch(loadTrackEventFunction(trackEventFunction));
  }, []);

  if (!entitledPrograms) {
    return /*#__PURE__*/React.createElement(NotFound, {
      isError: true,
      message: "app.tryAgainInAWhile"
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/".concat(STUDENT_ASSESSMENT_REVIEW_ROUTE),
    render: function render(_ref) {
      var match = _ref.match;
      return /*#__PURE__*/React.createElement(WrapperWithProvider, _extends({
        consumerKey: consumerKey,
        canRenderLearnosity: env !== '',
        assignment: assignment,
        feedback: currentAssignmentFeedback,
        teachers: currentAssignmentTeachers,
        assignmentId: match.params.assignmentId,
        baseUrl: "",
        rootUrl: "/".concat(setStateAsQueryString),
        titleI18nKey: "studentAssessmentReview.pageHeader.backTo.assignments",
        trackEvent: trackEvents.studentAssignmentList.assignmentBreadcrumb
      }, props));
    }
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/".concat(STUDENT_ASSIGNMENTS, "/").concat(STUDENT_ASSESSMENT_REVIEW_ROUTE),
    render: function render(_ref2) {
      var match = _ref2.match;
      return /*#__PURE__*/React.createElement(WrapperWithProvider, _extends({
        consumerKey: consumerKey,
        canRenderLearnosity: env !== '',
        assignment: assignment,
        feedback: currentAssignmentFeedback,
        teachers: currentAssignmentTeachers,
        assignmentId: match.params.assignmentId,
        baseUrl: "assignments",
        rootUrl: "/assignments/".concat(setStateAsQueryString),
        titleI18nKey: "studentAssessmentReview.pageHeader.backTo.assignments",
        trackEvent: trackEvents.studentAssignmentList.assignmentBreadcrumb
      }, props));
    }
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/",
    render: function render() {
      if (!hasAppBootstrapped || isLoadingInAmp) {
        return /*#__PURE__*/React.createElement(FullAppSkeleton, null);
      }

      return /*#__PURE__*/React.createElement(AssignmentsRouteContainer, _extends({
        hasGoogleClassroomSetting: hasGoogleClassroomSetting
      }, props));
    }
  }))));
};

Routes.propTypes = {
  sif: PropTypes.shape({
    accessToken: PropTypes.string,
    idToken: PropTypes.string,
    tokenInfo: PropTypes.object
  }),
  env: PropTypes.string,
  trackEventFunction: PropTypes.func,
  consumerKey: PropTypes.string,
  isLoadingInAmp: PropTypes.bool,
  entitledPrograms: PropTypes.array,
  entitledProducts: PropTypes.array,
  hasGoogleClassroomSetting: PropTypes.bool
};
Routes.defaultProps = {
  isLoadingInAmp: false
};
export default withRouter(Routes);