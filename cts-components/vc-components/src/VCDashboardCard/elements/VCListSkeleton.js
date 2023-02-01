import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import VCBaseTileSkeleton from '../../VCBaseTile/VCBaseTileSkeleton';
import useStyles from './VCListSkeleton.styles';
export default function VCListSkeleton(_ref) {
  var count = _ref.count;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(List, {
    "data-testid": "vc-list-skeleton",
    className: classes.list,
    "aria-busy": "true"
  }, _toConsumableArray(Array(count)).map(function (_, i) {
    return /*#__PURE__*/React.createElement(VCBaseTileSkeleton, {
      key: i
    }) // eslint-disable-line react/no-array-index-key
    ;
  }));
}
VCListSkeleton.propTypes = {
  count: PropTypes.number
};
VCListSkeleton.defaultProps = {
  count: 2
};