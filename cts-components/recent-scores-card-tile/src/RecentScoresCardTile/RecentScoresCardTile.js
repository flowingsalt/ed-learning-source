import React from 'react';
import PropTypes from 'prop-types';
import { DashboardCardTile } from '@hmhco/dashboard-card-tile/src/DashboardCardTile';
import Typography from '@mui/material/Typography';
import infoSvgSm from '@ed/baseline/icons/cts/info-sm.svg';
import Icon from '@hmhco/icon/src/Icon';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { SimpleNotification } from '@hmhco/simple-notification/src/SimpleNotification';
import Link from '@mui/material/Link';
import { PARTNER_AMIRA } from '@hmhco/connected-partner-helper';
import useStyles from './RecentScoresCardTile.Styles';
var ENTER = 13;
var SPACEBAR = 32;

var RecentScoresCardTile = function RecentScoresCardTile(props) {
  var score = props.score,
      primaryText = props.primaryText,
      subText = props.subText,
      performanceBand = props.performanceBand,
      percentageScore = props.percentageScore,
      scoresReviewPageCallback = props.scoresReviewPageCallback,
      scoresReviewPageLink = props.scoresReviewPageLink,
      ariaLabel = props.ariaLabel,
      customScoreColours = props.customScoreColours,
      reviewAvailable = props.reviewAvailable,
      parentReviewRestrictedDate = props.parentReviewRestrictedDate,
      onClick = props.onClick,
      isPartnerAssignment = props.isPartnerAssignment,
      partnerIdentifier = props.partnerIdentifier,
      isFromPreviousSchoolYears = props.isFromPreviousSchoolYears;
  var reviewNotAvailableNotification = null;

  var _useStyles = useStyles({
    performanceBand: performanceBand,
    customScoreColours: customScoreColours
  }, {
    props: props
  }),
      classes = _useStyles.classes;

  var handleKeyDown = function handleKeyDown(e) {
    if (isPartnerAssignment && (e.keyCode === ENTER || e.keycode === SPACEBAR)) {
      onClick();
    }

    if (scoresReviewPageCallback && (e.keyCode === ENTER || e.keycode === SPACEBAR)) {
      scoresReviewPageCallback();
    }
  };

  var cardTitle;

  var isNotAmira = function isNotAmira(partnerId) {
    return partnerId !== PARTNER_AMIRA;
  };

  var textObjectNoLink = /*#__PURE__*/React.createElement(Typography, {
    className: classes.primaryText,
    variant: "subtitle2",
    "data-testid": "recent-scores-card-tile-title",
    component: "span"
  }, primaryText);

  if (isPartnerAssignment && isNotAmira(partnerIdentifier)) {
    cardTitle = /*#__PURE__*/React.createElement(Typography, {
      onKeyDown: handleKeyDown,
      className: classes.connectedPartnerLink,
      variant: "subtitle2",
      onClick: onClick,
      tabIndex: 0,
      "data-testid": "recent-scores-card-tile-CPlink",
      component: "span",
      role: "link"
    }, primaryText);
  } else if (isPartnerAssignment && !isNotAmira(partnerIdentifier)) {
    cardTitle = /*#__PURE__*/React.createElement(Typography, {
      variant: "subtitle2",
      tabIndex: 0,
      "data-testid": "recent-scores-card-tile-CPlink",
      component: "span"
    }, primaryText);
  } else if (reviewAvailable && !isFromPreviousSchoolYears) {
    cardTitle = percentageScore ? /*#__PURE__*/React.createElement(Link, {
      onClick: scoresReviewPageCallback,
      onKeyDown: handleKeyDown,
      "data-testid": "recent-scores-card-tile-link",
      variant: "subtitle2",
      tabIndex: 0,
      href: scoresReviewPageLink,
      "aria-label": ariaLabel
    }, primaryText) : textObjectNoLink;
  } else {
    reviewNotAvailableNotification = /*#__PURE__*/React.createElement(SimpleNotification, {
      justifyContent: "flex-start",
      component: "span",
      icon: /*#__PURE__*/React.createElement(Icon, {
        svg: infoSvgSm,
        size: "16",
        colour: "var(--ebl-signal-info)"
      })
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "body2",
      component: "span"
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "recentScoresCardTile.restrictedDate",
      values: {
        date: moment(parentReviewRestrictedDate).format('MMM DD, YYYY')
      }
    })));
    cardTitle = textObjectNoLink;
  }

  var cardScore = percentageScore ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "recent-scores-card-tile-score-".concat(performanceBand || 'text'),
    className: classes.score,
    variant: "h2",
    component: "span"
  }, score), /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "recent-scores-card-tile-percent",
    component: "span",
    variant: "body1",
    className: classes.percent
  }, "%")) : /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    variant: "h2",
    "data-testid": "recent-scores-card-tile-lexile",
    className: classes.lexile
  }, score);
  return /*#__PURE__*/React.createElement(DashboardCardTile, {
    primary: cardTitle,
    secondary: subText,
    secondaryComponents: reviewAvailable ? null : reviewNotAvailableNotification,
    count: cardScore,
    clickAction: null,
    role: "presentation",
    classes: {
      count: classes.count,
      text: classes.text,
      root: classes.root,
      textWrapper: classes.textWrapper
    },
    hideChevron: true,
    hideDueDate: true,
    disabled: false
  });
};

RecentScoresCardTile.propTypes = {
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  primaryText: PropTypes.string.isRequired,
  subText: PropTypes.string,
  scoresReviewPageCallback: PropTypes.func,
  onClick: PropTypes.func,
  scoresReviewPageLink: PropTypes.string,
  partnerIdentifier: PropTypes.string,
  performanceBand: PropTypes.string,
  percentageScore: PropTypes.bool,
  reviewAvailable: PropTypes.bool,
  isPartnerAssignment: PropTypes.bool,
  parentReviewRestrictedDate: PropTypes.string,
  ariaLabel: PropTypes.string,
  customScoreColours: PropTypes.shape({
    success: PropTypes.string,
    warning: PropTypes.string,
    error: PropTypes.string
  }),
  isFromPreviousSchoolYears: PropTypes.bool.isRequired
};
RecentScoresCardTile.defaultProps = {
  subText: null,
  performanceBand: null,
  scoresReviewPageCallback: null,
  scoresReviewPageLink: null,
  percentageScore: true,
  ariaLabel: null,
  customScoreColours: null
};
export default RecentScoresCardTile;