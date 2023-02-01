import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import useStyles from '../VCDashboardCard.styles';
import VCBaseTile from '../../VCBaseTile/VCBaseTile';

var VCList = function VCList(_ref) {
  var items = _ref.items;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(List, {
    className: classes.list,
    "data-testid": "vc-tile-list"
  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement(VCBaseTile, _extends({
      key: item.id
    }, item));
  }));
};

VCList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(VCBaseTile.propTypes)).isRequired
};
export default VCList;