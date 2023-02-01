import React from 'react';
import PropTypes from 'prop-types';
import MuiDialogContent from '@mui/material/DialogContent';
import useStyles from './ModalDialogContent.styles';
export default function ModalDialogContent(_ref) {
  var children = _ref.children;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(MuiDialogContent, {
    className: classes.paper,
    "data-testid": "modalBody",
    id: "modal-body"
  }, children);
}
ModalDialogContent.propTypes = {
  children: PropTypes.node.isRequired
};