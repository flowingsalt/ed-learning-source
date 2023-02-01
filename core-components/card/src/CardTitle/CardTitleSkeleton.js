import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from 'tss-react/mui';
var useStyles = makeStyles({
  name: 'CardTitleSkeleton'
})({
  root: {
    marginBottom: 'var(--ebl-s2)'
  }
});

var CardTitleSkeleton = function CardTitleSkeleton(props) {
  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    height: "var(--ebl-h4-line-height)"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    width: "60%",
    height: "var(--ebl-sh1-line-height)"
  }));
};

export default CardTitleSkeleton;