/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { List } from '@mui/material';
import { isFeatureActive } from '@hmhco/feature-flags';
import { DashboardCard } from '@hmhco/dashboard-card/src/DashboardCard';
import { RecentScoresCardTile } from '@hmhco/recent-scores-card-tile/src/RecentScoresCardTile';
import AssignmentModel from '@hmhco/business-logic-models/src/models/Assignment/AssignmentModel';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { FROM_DASHBOARD_QUERY_PARAM } from '@hmhco/url-const-studentdashboard/src/studentdashboardUrl';
import NoDataMessage from './elements/NoDataMessage';
import ScoresLink from './elements/ScoresLink';
import RecentScoresCardSkeleton from './RecentScoresCardSkeleton';
import useStyles from './RecentScoresCard.Styles';
import getLocaleFile from './lang';
export var getPerformanceBandStatus = function getPerformanceBandStatus(id) {
  var performanceBands = ['error', 'warning', 'success'];
  return performanceBands[id - 1];
};
export var generateResourcesList = function generateResourcesList(resources, classes, btnCallback) {
  return resources.reduce(function (tiles, resourceWithAriaLabel) {
    var resource = resourceWithAriaLabel.resource,
        ariaLabel = resourceWithAriaLabel.ariaLabel;
    var model = new AssignmentModel(resource);
    var score = model.getScore();

    if (score || score === 0 || model.isPartnerAssignment()) {
      var reviewAvailable = model.getReviewAvailable();
      var parentReviewRestrictedDate = model.getParentReviewRestrictedDate();
      var primaryText = model.getAssignmentTitle();
      var performanceBandId = model.getPerformanceBandId();
      var percentageScore;

      if (isFeatureActive('connectedPartner', true)) {
        percentageScore = !model.isStudentGrowthMeasure() && !model.isNullProficiencyPercentage();
      } else {
        percentageScore = !model.isStudentGrowthMeasure();
      }

      var isFromPreviousSchoolYears = model.getIsFromPreviousSchoolYears();
      var scoresReviewPageLink = "#/scores/review/".concat(model.refId, "?").concat(FROM_DASHBOARD_QUERY_PARAM, "=true");
      var sectionName = resource.sectionName;
      var performanceBand = performanceBandId ? getPerformanceBandStatus(performanceBandId) : null;
      tiles.push( /*#__PURE__*/React.createElement(RecentScoresCardTile, {
        partnerIdentifier: model.getPartnerIdentifier(),
        isPartnerAssignment: model.isPartnerAssignment(),
        onClick: function onClick() {
          return model.isPartnerAssignment() ? btnCallback(resource) : null;
        },
        classes: {
          root: classes.cardTileRoot
        },
        key: model.refId,
        primaryText: primaryText,
        subText: sectionName,
        score: score,
        performanceBand: performanceBand,
        percentageScore: percentageScore,
        scoresReviewPageLink: model.isPartnerAssignment() ? null : scoresReviewPageLink,
        ariaLabel: ariaLabel,
        reviewAvailable: reviewAvailable,
        parentReviewRestrictedDate: parentReviewRestrictedDate,
        isFromPreviousSchoolYears: isFromPreviousSchoolYears
      }));
    }

    return tiles;
  }, []);
};

var RecentScoresCard = function RecentScoresCard(props) {
  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var resources = props.resources,
      linkCallback = props.linkCallback,
      isLoading = props.isLoading,
      position = props.position,
      onClick = props.onClick;

  var _useStyles = useStyles({
    position: position
  }),
      classes = _useStyles.classes;

  var emptyContent = !resources || resources.length === 0;
  var resourcesWithAriaLabel = resources === null || resources === void 0 ? void 0 : resources.map(function (resource) {
    var ariaLabel = formatMessage({
      id: 'recentScoresCardTile.ariaLabel'
    }, {
      title: resource.title
    });
    return {
      resource: resource,
      ariaLabel: ariaLabel
    };
  });
  var resourceList = emptyContent ? [] : generateResourcesList(resourcesWithAriaLabel, classes, onClick);
  var content = resourceList.length === 0 ? /*#__PURE__*/React.createElement(NoDataMessage, null) : /*#__PURE__*/React.createElement(List, {
    className: classes.list
  }, resourceList);
  var title = formatMessage({
    id: 'recentScoresCard.title'
  }, {
    total: resourceList.length
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isLoading ? /*#__PURE__*/React.createElement(RecentScoresCardSkeleton, {
    position: position
  }) : /*#__PURE__*/React.createElement(DashboardCard, {
    title: title,
    ariaLabel: title,
    headerDomSize: "h2",
    subheader: /*#__PURE__*/React.createElement(ScoresLink, {
      callback: linkCallback
    }),
    classes: {
      card: classes.card,
      title: classes.title,
      header: classes.header,
      content: classes.content,
      scrolledContent: classes.scrolledContent
    },
    customTestId: "recent-scores-card",
    tabIndex: "-1"
  }, content));
};

RecentScoresCard.propTypes = {
  resources: PropTypes.array,
  isLoading: PropTypes.bool,
  position: PropTypes.number,
  linkCallback: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
RecentScoresCard.defaultProps = {
  isLoading: false,
  position: 5
};

var RecentScoresCardWithIntl = function RecentScoresCardWithIntl(props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(RecentScoresCard, props));
};

export default RecentScoresCardWithIntl;