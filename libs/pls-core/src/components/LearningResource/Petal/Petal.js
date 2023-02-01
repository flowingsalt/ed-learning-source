import React from 'react';
import Box from '@mui/material/Box';
import propTypes from 'prop-types';
import LearningResourceIcon from '../Icon/Icon';
import useStyles from './Petal.style';
export default function Petal(_ref) {
  var resourceType = _ref.resourceType;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(Box, {
    "data-testid": "Petal",
    className: classes.petal,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(LearningResourceIcon, {
    resourceType: resourceType
  }));
}
Petal.propTypes = {
  resourceType: propTypes.string
};
Petal.defaultProps = {
  resourceType: null
};