import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import useStyles from './CardBody.styles';

var CardBody = function CardBody(props) {
  var children = props.children,
      prefix = props.prefix,
      otherProps = _objectWithoutProperties(props, ["children", "prefix"]);

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(CardContent, _extends({
    classes: {
      root: classes.root
    }
  }, otherProps), prefix, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    wrap: "nowrap",
    className: classes.row
  }, children));
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  prefix: PropTypes.node
};
export default CardBody;