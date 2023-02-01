/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import accListCardStyles from './AccordionListSkeletonLoader.style';

var AccordionListSkeletonLoader = function AccordionListSkeletonLoader(_ref) {
  var count = _ref.count;

  var _accListCardStyles = accListCardStyles(),
      classes = _accListCardStyles.classes;

  return /*#__PURE__*/React.createElement(Grid, {
    spacing: 2,
    direction: "column",
    alignContent: "flex-start",
    "data-testid": "skeleton-list",
    component: "ul",
    container: true
  }, Array.from(Array(count)).map(function (_, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: classes.container,
      "data-testid": "skeleton-loader"
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "elevation",
      className: classes.card
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 1
    }, /*#__PURE__*/React.createElement(Skeleton, {
      className: classes.skeletonIcon
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 11
    }, /*#__PURE__*/React.createElement(Skeleton, {
      className: classes.skeletonTitle
    })))));
  }));
};

AccordionListSkeletonLoader.defaultProps = {
  count: 1
};
AccordionListSkeletonLoader.propTypes = {
  count: PropTypes.number
};
export default AccordionListSkeletonLoader;