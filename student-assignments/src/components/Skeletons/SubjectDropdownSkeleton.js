import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';

var SubjectDropdownSkeleton = function SubjectDropdownSkeleton() {
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    height: "30px",
    "data-testid": "subject-dropdown-skeleton"
  }), /*#__PURE__*/React.createElement(Divider, {
    "aria-hidden": "true",
    style: {
      marginTop: '12px'
    }
  })));
};

export default SubjectDropdownSkeleton;