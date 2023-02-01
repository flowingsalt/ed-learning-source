import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';
import CardThumb from './CardThumb/CardThumb';
import useStyles from './ProgramCard.Styles';

var ProgramCard = function ProgramCard(props) {
  var _classNames, _classNames2;

  var name = props.name,
      type = props.type,
      thumb = props.thumb,
      onClick = props.onClick,
      isLoading = props.isLoading,
      disabled = props.disabled,
      ariaLabel = props.ariaLabel,
      linkAriaLabel = props.linkAriaLabel,
      iconProps = props.iconProps;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      onHover = _useState2[0],
      setOnHover = _useState2[1];

  var handleKeyUp = function handleKeyUp(e) {
    var ENTER = 13;
    var SPACEBAR = 32;

    if (e.keyCode === ENTER || e.keycode === SPACEBAR) {
      onClick(e);
    }
  };

  return /*#__PURE__*/React.createElement(Card, {
    className: classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.isLoading, isLoading), _classNames)),
    "aria-label": ariaLabel,
    "data-testid": "program-card"
  }, isLoading ? /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    width: "100%",
    height: "auto",
    animation: false
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.loadingSke
  })) : /*#__PURE__*/React.createElement(CardThumb, {
    name: name,
    thumb: thumb,
    iconProps: iconProps,
    onClick: onClick,
    onKeyUp: handleKeyUp,
    setOnHover: setOnHover,
    classes: {
      iconHolder: classes.iconHolder,
      media: classes.media
    },
    disabled: disabled
  }), /*#__PURE__*/React.createElement(CardContent, {
    className: classes.content
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.type,
    variant: "overline",
    color: "textSecondary",
    component: "p",
    "data-testid": "card-type"
  }, isLoading ? /*#__PURE__*/React.createElement(Skeleton, {
    height: "24",
    width: "80%",
    animation: false
  }) : type), /*#__PURE__*/React.createElement(Typography, {
    className: classNames(classes.name, (_classNames2 = {}, _defineProperty(_classNames2, classes.onHover, onHover), _defineProperty(_classNames2, classes.isLoading, isLoading), _classNames2)),
    gutterBottom: true,
    variant: "h4",
    component: "a",
    onClick: onClick,
    onKeyUp: handleKeyUp,
    tabIndex: 0,
    "data-testid": "card-name",
    "aria-label": linkAriaLabel
  }, isLoading ? /*#__PURE__*/React.createElement(Skeleton, {
    height: "24",
    width: "100%",
    animation: false
  }) : name)));
};

ProgramCard.propTypes = {
  thumb: PropTypes.string,
  iconProps: PropTypes.shape({
    svg: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    transform: PropTypes.string
  }),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  ariaLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  linkAriaLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool
};
ProgramCard.defaultProps = {
  iconProps: {},
  isLoading: false,
  disabled: false,
  thumb: '',
  linkAriaLabel: undefined
};
export default ProgramCard;