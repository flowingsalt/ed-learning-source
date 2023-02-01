/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import carrouselStyles from './CarouselSkeletonLoader.style';

var CarouselSkeletonLoader = function CarouselSkeletonLoader(_ref) {
  var count = _ref.count;

  var _carrouselStyles = carrouselStyles(),
      classes = _carrouselStyles.classes;

  return /*#__PURE__*/React.createElement(Grid, {
    spacing: 2,
    alignContent: "flex-start",
    "data-testid": "skeleton-list",
    component: "ul",
    container: true
  }, Array.from(Array(count)).map(function (_, index) {
    return /*#__PURE__*/React.createElement(Grid, {
      key: index,
      "data-testid": "carousel-skeleton-loader",
      item: true,
      xs: 6,
      md: 3
    }, /*#__PURE__*/React.createElement(Card, {
      className: classes.cardWrapper
    }, /*#__PURE__*/React.createElement(Skeleton, {
      className: classes.cardWidth,
      variant: "rectangular"
    })));
  }));
};

CarouselSkeletonLoader.defaultProps = {
  count: 1
};
CarouselSkeletonLoader.propTypes = {
  count: PropTypes.number
};
export default CarouselSkeletonLoader;