import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Skeleton } from '@mui/material';
import useStyles from './DashboardCardTile.Styles';

var DashboardCardTileSkeleton = function DashboardCardTileSkeleton(_ref) {
  var ariaLabel = _ref.ariaLabel;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    className: "".concat(classes.root, " ").concat(classes.skeletonListItem),
    "aria-label": ariaLabel
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.text
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    "data-testid": "skeletonPrimary",
    className: classes.skeletonText
  })), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    "data-testid": "skeletonCount",
    className: "".concat(classes.count, " ").concat(classes.skeletonCount)
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    "data-testid": "skeletonIcon",
    className: "".concat(classes.icon, " ").concat(classes.skeletonCountIcon)
  })));
};

DashboardCardTileSkeleton.propTypes = {
  ariaLabel: PropTypes.string
};
DashboardCardTileSkeleton.defaultProps = {
  ariaLabel: undefined
};
export default DashboardCardTileSkeleton;