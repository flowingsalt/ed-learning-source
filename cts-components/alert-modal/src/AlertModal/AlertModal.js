import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Icon from '@hmhco/icon/src/Icon';
import useStyles from './AlertModal.styles';

var AlertModal = function AlertModal(_ref) {
  var titleIcon = _ref.titleIcon,
      iconSize = _ref.iconSize,
      title = _ref.title,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["titleIcon", "iconSize", "title", "children"]);

  var _useStyles = useStyles(otherProps),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(Dialog, {
    "data-testid": "alert-modal",
    classes: {
      paper: classes.dialogPaper
    },
    open: true,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-modal-body"
  }, /*#__PURE__*/React.createElement(DialogTitle, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, titleIcon && /*#__PURE__*/React.createElement(Icon, {
    svg: titleIcon,
    size: iconSize,
    className: classes.icon
  }), /*#__PURE__*/React.createElement(Typography, {
    id: "alert-modal-title",
    variant: "h6",
    component: "h1"
  }, title))), /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(Box, {
    p: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    id: "alert-modal-body"
  }, children)));
};

AlertModal.defaultProps = {
  title: '',
  children: '',
  iconSize: '24'
};
AlertModal.propTypes = {
  titleIcon: PropTypes.node,
  iconSize: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
};
export default AlertModal;