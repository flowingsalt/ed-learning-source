import React from 'react';
import { List, Skeleton } from '@mui/material';
import { ResourceCardTileSkeleton } from '@hmhco/resource-card-tile/src/ResourceCardTile';
import useStyles from './ResourceCardSkeleton.Styles';
var MAX_NUM_CARDS = 3;
export var generateTiles = function generateTiles() {
  var res = [];

  for (var i = 0; i < MAX_NUM_CARDS; i += 1) {
    res.push( /*#__PURE__*/React.createElement(ResourceCardTileSkeleton, {
      key: i
    }));
  }

  return res;
};
export default (function () {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.skeletonContent
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: classes.skeletonTitle
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: classes.skeletonFilter
  })), /*#__PURE__*/React.createElement(List, {
    className: classes.list
  }, generateTiles()));
});