import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

var CardRow = function CardRow(props) {
  var left = props.left,
      right = props.right,
      otherProps = _objectWithoutProperties(props, ["left", "right"]);

  return /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    container: true,
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, otherProps), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, left), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, right));
};

CardRow.defaultProps = {
  left: undefined,
  right: undefined,
  alignItems: 'center'
};
CardRow.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,

  /** MUI Grid prop; other Grid props are also supported */
  alignItems: PropTypes.string
};
export default CardRow;