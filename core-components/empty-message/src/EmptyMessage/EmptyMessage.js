import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/* eslint-disable react/jsx-props-no-spreading */


import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Typography, Button } from '@mui/material';
import Icon from '@hmhco/icon/src/Icon';
var useStyles = makeStyles({
  name: 'EmptyMessage'
})(function (_theme, _params, classes) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 'var(--ebl-empty-headline-padding)',
      backgroundColor: 'var(--ebl-empty-headline-bg)',
      borderRadius: '0.5rem',
      height: '100%',
      justifyContent: 'center'
    },
    icon: {
      marginBottom: 'var(--ebl-empty-headline-icon-margin-bottom)'
    },
    title: {
      width: '100%',
      textAlign: 'center',
      marginBottom: 'var(--ebl-empty-headline-title-margin-bottom)'
    },
    text: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      marginBottom: 'var(--ebl-empty-headline—text-margin-bottom)'
    },
    button: {
      display: 'flex',
      flexDirection: 'column'
    },
    compact: _defineProperty({
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 'var(--ebl-empty-headline-compact-margin-bottom)'
    }, "& .".concat(classes.icon, ", & .").concat(classes.title, ", & .").concat(classes.text, ", & .").concat(classes.button), {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0
    })
  };
});

function EmptyMessage(props) {
  var iconProps = props.iconProps,
      text = props.text,
      title = props.title,
      buttonProps = props.buttonProps,
      compact = props.compact,
      role = props.role;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var compactClass = compact ? classes.compact : '';
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classes.root, " ").concat(compactClass),
    "data-testid": "emptyMessageComponent",
    role: role
  }, iconProps && /*#__PURE__*/React.createElement("div", {
    className: classes.icon,
    "data-testid": "emptyMessageIcon"
  }, /*#__PURE__*/React.createElement(Icon, iconProps)), /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    component: "p"
  }, /*#__PURE__*/React.createElement("strong", null, title))), text && /*#__PURE__*/React.createElement("div", {
    className: classes.text
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "overline",
    component: "span"
  }, text)), buttonProps && /*#__PURE__*/React.createElement("div", {
    className: classes.button
  }, /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps, {
    size: "small",
    variant: "contained",
    color: "primary"
  }))));
}

EmptyMessage.propTypes = {
  iconProps: PropTypes.shape(_objectSpread({}, Icon.propTypes)),
  buttonProps: PropTypes.shape(_objectSpread({}, Button.propTypes)),
  title: PropTypes.node,
  text: PropTypes.node,
  compact: PropTypes.bool,
  role: PropTypes.string
};
EmptyMessage.defaultProps = {
  iconProps: undefined,
  buttonProps: undefined,
  title: undefined,
  text: undefined,
  compact: false,
  role: undefined
};
export default EmptyMessage;