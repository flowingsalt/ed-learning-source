import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import useIsMobile from '@hmhco/breakpoints-helpers/src/useIsMobile';
import useStyles from './CardColumn.styles';

var CardColumn = function CardColumn(props) {
  var children = props.children,
      hideOnMobile = props.hideOnMobile,
      grow = props.grow,
      otherProps = _objectWithoutProperties(props, ["children", "hideOnMobile", "grow"]);

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var isMobile = useIsMobile();
  var column = /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    container: true,
    className: classes.column
  }, otherProps), children);
  return (!hideOnMobile || !isMobile) && column;
};

CardColumn.defaultProps = {
  grow: false,
  hideOnMobile: false,
  justifyContent: undefined
};
CardColumn.propTypes = {
  children: PropTypes.node.isRequired,
  grow: PropTypes.bool,
  hideOnMobile: PropTypes.bool,

  /** MUI Grid prop; other Grid props are also supported */
  justifyContent: PropTypes.string
};
export default CardColumn;