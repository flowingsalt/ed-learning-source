import _extends from "@babel/runtime/helpers/extends";
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useStyles from './CardTitle.styles';

var CardTitle = function CardTitle(props) {
  var title = props.title,
      subtitle = props.subtitle,
      icon = props.icon,
      titleProps = props.titleProps,
      subtitleProps = props.subtitleProps,
      reverse = props.reverse;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var subtitleElem = subtitle && /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "subtitle1",
    component: "span"
  }, subtitleProps), subtitle);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, icon && /*#__PURE__*/React.createElement("div", {
    className: classes.icon
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: classes.titleContainer
  }, reverse && subtitleElem, typeof title === 'string' ? /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "h4",
    component: "span"
  }, titleProps), title) : title, !reverse && subtitleElem));
};

CardTitle.defaultProps = {
  subtitle: undefined,
  icon: undefined,
  titleProps: {},
  subtitleProps: {},
  reverse: false
};
CardTitle.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  icon: PropTypes.node,

  /** allows setting `Typography` props for title */
  titleProps: PropTypes.object,

  /** allows setting `Typography` props for subtitle */
  subtitleProps: PropTypes.object,
  reverse: PropTypes.bool
};
export default CardTitle;