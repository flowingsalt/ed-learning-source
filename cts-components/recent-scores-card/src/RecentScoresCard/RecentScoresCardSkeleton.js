import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Skeleton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import useStyles from './RecentScoresCardSkeleton.Styles';
var MAX_NUM_CARDS = 4;

var RecentScoresCardSkeleton = function RecentScoresCardSkeleton(_ref) {
  var position = _ref.position;

  var _useStyles = useStyles({
    position: position
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Paper, {
    elevation: 3
  }, /*#__PURE__*/React.createElement(Card, {
    className: classes.card
  }, /*#__PURE__*/React.createElement(CardHeader, {
    className: classes.header,
    title: /*#__PURE__*/React.createElement("div", {
      "data-testid": "recent-scores-card-skeleton",
      className: classes.titleSkeleton
    }, /*#__PURE__*/React.createElement(Skeleton, {
      variant: "rectangular",
      className: classes.skeletonTitle
    }))
  }), /*#__PURE__*/React.createElement(CardContent, {
    className: classes.content
  }, /*#__PURE__*/React.createElement(List, {
    component: "div",
    className: classes.list
  }, _toConsumableArray(Array(MAX_NUM_CARDS).keys()).map(function (i) {
    return /*#__PURE__*/React.createElement(ListItem, {
      role: "presentation",
      key: i,
      button: true,
      className: classes.skeletonListItem,
      tabIndex: -1
    }, /*#__PURE__*/React.createElement("div", {
      "data-testid": "recent-scores-tile",
      className: classes.skeletonListItemText
    }, /*#__PURE__*/React.createElement(Skeleton, {
      variant: "rectangular",
      className: classes.skeletonText
    }), /*#__PURE__*/React.createElement(Skeleton, {
      variant: "rectangular",
      className: classes.skeletonText
    })), /*#__PURE__*/React.createElement(Skeleton, {
      variant: "rectangular",
      className: "".concat(classes.icon, " ").concat(classes.skeletonIcon)
    }));
  }))))));
};

export default RecentScoresCardSkeleton;
RecentScoresCardSkeleton.propTypes = {
  position: PropTypes.number
};
RecentScoresCardSkeleton.defaultProps = {
  position: 5
};