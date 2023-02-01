import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { bool, string, instanceOf, oneOf, object } from 'prop-types';
import AssignmentModel from '@hmhco/business-logic-models/src/models/Assignment/AssignmentModel';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import BackButton from '@hmhco/back-button/src/BackButton/BackButton';
import { PageHeader } from '@hmhco/page-header';
import AssessmentContainer from './AssessmentContainer';
import useStyles from './AssignmentResultsPage.Styles';
import ReadonlyFeedback, { feedbackShape } from './AssignmentFeedback.component';
import getLocaleFile from '../../lang';
import LearnositySkeleton from './LearnositySkeleton';
import stopAllLearnosityAudio from '../../utils/stopLearnosityAudio';

var AssignmentResultsPage = function AssignmentResultsPage(props) {
  var assignment = props.assignment,
      consumerKey = props.consumerKey,
      assignmentId = props.assignmentId,
      canRenderLearnosity = props.canRenderLearnosity,
      baseUrl = props.baseUrl,
      rootUrl = props.rootUrl,
      feedback = props.feedback,
      titleI18nKey = props.titleI18nKey,
      teachers = props.teachers,
      history = props.history,
      isFromDashboard = props.isFromDashboard;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var renderedRootUrl = rootUrl || "/".concat(baseUrl, "/");
  useEffect(function () {
    stopAllLearnosityAudio(window.LearnosityApp);
    return function () {
      stopAllLearnosityAudio(window.LearnosityApp);
    };
  }, []);
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: titleI18nKey
  }, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        tableLabel = _ref2[0];

    return /*#__PURE__*/React.createElement("div", {
      "data-testid": "student-assignments-review-header"
    }, /*#__PURE__*/React.createElement(BackButton, {
      title: tableLabel,
      backButtonClick: function backButtonClick() {
        return isFromDashboard ? window.history.back() : history.push(renderedRootUrl);
      },
      role: "link"
    }), /*#__PURE__*/React.createElement("div", {
      className: classes.header,
      "data-testid": "student-assignments-review-assignment-title"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      eyebrow: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssessmentReview.pageHeader.assignmentReview"
      }),
      title: assignment.title
    })));
  }), !canRenderLearnosity && /*#__PURE__*/React.createElement(LearnositySkeleton, null), canRenderLearnosity && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReadonlyFeedback, {
    feedback: feedback,
    teachers: teachers
  }), /*#__PURE__*/React.createElement(AssessmentContainer, _extends({
    assignment: assignment,
    consumerKey: consumerKey,
    assignmentId: assignmentId
  }, props))));
};

AssignmentResultsPage.propTypes = {
  canRenderLearnosity: bool,
  isFromDashboard: bool,
  consumerKey: string,
  assignmentId: string,
  assignment: instanceOf(AssignmentModel),
  titleI18nKey: oneOf(['studentAssessmentReview.pageHeader.backTo.assignments', 'studentAssessmentReview.pageHeader.backTo.dashboard', 'studentAssessmentReview.pageHeader.backTo.scores']).isRequired,
  baseUrl: string.isRequired,
  rootUrl: string,
  feedback: feedbackShape,
  teachers: string,
  history: object
};
export default AssignmentResultsPage;