import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import useStyles from './ReadOnlyField.styles';

var ReadOnlyField = function ReadOnlyField(props) {
  var label = props.label,
      value = props.value,
      contentProps = _objectWithoutProperties(props, ["label", "value"]);

  var _useStyles = useStyles(props, {
    props: props
  }),
      styleClasses = _useStyles.classes;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormLabel, {
    component: "p",
    className: styleClasses.label
  }, label), /*#__PURE__*/React.createElement(Typography, _extends({
    className: styleClasses.value,
    variant: "body2"
  }, contentProps), value));
};

ReadOnlyField.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired
};
export default ReadOnlyField;