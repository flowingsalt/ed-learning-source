import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
var useStyles = makeStyles()({
  container: {
    marginTop: '20px'
  }
});

var FullAppSkeleton = function FullAppSkeleton() {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: classes.container,
    "data-testid": "full-app-skeleton"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    height: "30px"
  }), /*#__PURE__*/React.createElement(Divider, {
    "aria-hidden": "true",
    style: {
      marginTop: '12px'
    }
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
    height: "500px"
  })));
};

export default FullAppSkeleton;