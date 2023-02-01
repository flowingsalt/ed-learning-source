import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

var LearnositySkeleton = function LearnositySkeleton() {
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    height: "30px"
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    height: "30px"
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    height: "30px"
  })));
};

export default LearnositySkeleton;