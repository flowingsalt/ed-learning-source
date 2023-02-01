import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import MuiDialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import useStyles from './ModalDialogActions.styles';

var ModalDialogActions = function ModalDialogActions(props) {
  var handlePrimaryAction = props.handlePrimaryAction,
      handleSecondaryAction = props.handleSecondaryAction,
      handleAction = props.handleAction,
      handleClose = props.handleClose,
      secondaryActionButtonText = props.secondaryActionButtonText,
      secondaryActionButtonAriaLabel = props.secondaryActionButtonAriaLabel,
      secondaryButtonDisabled = props.secondaryButtonDisabled,
      ActionButtonComponent = props.ActionButtonComponent,
      actionButtonText = props.actionButtonText,
      actionButtonAriaLabel = props.actionButtonAriaLabel,
      actionButtonDisabled = props.actionButtonDisabled,
      cancelButtonText = props.cancelButtonText,
      cancelButtonAriaLabel = props.cancelButtonAriaLabel,
      isAlternateMobileDisplay = props.isAlternateMobileDisplay,
      hideCancelButton = props.hideCancelButton;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var mobileActionClass = isAlternateMobileDisplay ? classes.actions : null;
  var actionOptionalProps = {};

  if (actionButtonAriaLabel) {
    actionOptionalProps['aria-label'] = actionButtonAriaLabel;
  }

  var secondaryActionOptionalProps = {};

  if (secondaryActionButtonAriaLabel) {
    secondaryActionOptionalProps['aria-label'] = secondaryActionButtonAriaLabel;
  }

  var cancelOptionalProps = {};

  if (cancelButtonAriaLabel) {
    cancelOptionalProps['aria-label'] = cancelButtonAriaLabel;
  }

  var alternateMobileDialogActionClass = isAlternateMobileDisplay ? classes.dialogAction : classes.dialogActionDefault;
  var PrimaryActionButton = ActionButtonComponent || Button;
  var primaryActionButton = handlePrimaryAction && /*#__PURE__*/React.createElement(PrimaryActionButton, _extends({
    disabled: actionButtonDisabled,
    color: "primary",
    variant: "contained",
    onClick: handleAction,
    className: classes.actionButton,
    "data-testid": "modalActionButton",
    size: "large"
  }, actionOptionalProps), actionButtonText);
  return /*#__PURE__*/React.createElement("section", {
    className: mobileActionClass,
    "data-testid": "mobileActionWrapper"
  }, /*#__PURE__*/React.createElement(MuiDialogActions, {
    "data-testid": "dialogActionWrapper",
    className: alternateMobileDialogActionClass
  }, !hideCancelButton && /*#__PURE__*/React.createElement(Button, _extends({
    variant: "outlined",
    className: classes.cancelButton,
    onClick: handleClose,
    "data-testid": "modalCancelButton",
    size: "large"
  }, cancelOptionalProps), cancelButtonText), handleSecondaryAction ? /*#__PURE__*/React.createElement(Button, _extends({
    disabled: secondaryButtonDisabled,
    color: "primary",
    onClick: handleSecondaryAction,
    className: classes.secondaryActionButton,
    "data-testid": "modalSecondaryActionButton",
    size: "large"
  }, secondaryActionOptionalProps), secondaryActionButtonText) : null, handlePrimaryAction && primaryActionButton));
};

ModalDialogActions.propTypes = {
  handlePrimaryAction: PropTypes.bool,
  handleSecondaryAction: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  handleAction: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
  ActionButtonComponent: PropTypes.node,
  actionButtonDisabled: PropTypes.bool,
  actionButtonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondaryActionButtonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondaryActionButtonAriaLabel: PropTypes.string,
  secondaryButtonDisabled: PropTypes.bool,
  actionButtonAriaLabel: PropTypes.string,
  cancelButtonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cancelButtonAriaLabel: PropTypes.string,
  isAlternateMobileDisplay: PropTypes.bool,
  hideCancelButton: PropTypes.bool
};
ModalDialogActions.defaultProps = {
  handleAction: function handleAction() {},
  actionButtonDisabled: false,
  actionButtonText: null,
  secondaryActionButtonText: null,
  secondaryActionButtonAriaLabel: null,
  secondaryButtonDisabled: false,
  ActionButtonComponent: null,
  actionButtonAriaLabel: null,
  cancelButtonText: null,
  cancelButtonAriaLabel: null,
  handleSecondaryAction: false,
  handlePrimaryAction: true,
  isAlternateMobileDisplay: false,
  hideCancelButton: false
};
export default ModalDialogActions;