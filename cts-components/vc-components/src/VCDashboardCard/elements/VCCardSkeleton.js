import React from 'react';
import { Skeleton } from '@mui/material';
import VCListSkeleton from './VCListSkeleton';

var VCCardSkeleton = function VCCardSkeleton() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    width: "45%",
    height: "var(--ebl-h3-line-height)",
    "data-testid": "vc-list-title-skeleton",
    style: {
      marginBottom: 'var(--ebl-s3)'
    }
  }), /*#__PURE__*/React.createElement(VCListSkeleton, {
    count: 3
  }));
};

export default VCCardSkeleton;