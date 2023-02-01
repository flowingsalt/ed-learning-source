import React from 'react';
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { number, object } from 'prop-types';
import Card from '@mui/material/Card';
import { CardBody, CardColumn } from '@hmhco/card';
import useStyles from './StandardsView.styles';

var SkeletonList = function SkeletonList(props) {
  var count = props.count,
      classes = props.classes;
  var skeletonCards = [];

  for (var i = 0; i < count; i += 1) {
    skeletonCards.push( /*#__PURE__*/React.createElement("li", {
      key: "skeleton-li-".concat(i)
    }, /*#__PURE__*/React.createElement(Card, {
      className: classes.standardSetCard,
      elevation: 3,
      "data-testid": "skeleton-".concat(i)
    }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(CardColumn, {
      grow: true
    }, /*#__PURE__*/React.createElement(Skeleton, {
      variant: "text",
      height: "var(--ebl-h4-line-height)",
      width: "100%"
    })), /*#__PURE__*/React.createElement(CardColumn, null, /*#__PURE__*/React.createElement(Skeleton, {
      variant: "rectangular",
      height: "var(--ebl-button-height-sm)",
      width: "79px"
    }))))));
  }

  return skeletonCards;
};

var StandardsViewSkeleton = function StandardsViewSkeleton(props) {
  var count = props.count;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    className: classes.standardsView
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: classes.standardSetTitle
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    height: "var(--ebl-h3-line-height)",
    width: "60%",
    "data-testid": "standards-skeleton-title"
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("ul", {
    className: classes.standardsList
  }, /*#__PURE__*/React.createElement(SkeletonList, {
    count: count,
    classes: classes
  }))));
};

SkeletonList.propTypes = {
  count: number.isRequired,
  classes: object.isRequired
};
StandardsViewSkeleton.defaultProps = {
  count: 5
};
StandardsViewSkeleton.propTypes = {
  count: number
};
export default StandardsViewSkeleton;