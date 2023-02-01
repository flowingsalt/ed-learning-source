import React from 'react';
import PropTypes from 'prop-types';
import ModalDialogContent from './ModalDialogContent';
import ModalDialogContainer from './ModalDialogContainer';
import ModalDialogActions from './ModalDialogActions';
import modalHeading from './enums/modalHeading';
import ModalDialogTitle from './ModalDialogTitle';
var modalHeadingValues = Object.values(modalHeading);

var ModalDialog = function ModalDialog(props) {
  var children = props.children,
      title = props.title,
      subTitle = props.subTitle,
      open = props.open,
      handleClose = props.handleClose,
      handlePrimaryAction = props.handlePrimaryAction,
      handleSecondaryAction = props.handleSecondaryAction,
      handleAction = props.handleAction,
      displayControls = props.displayControls,
      secondaryActionButtonText = props.secondaryActionButtonText,
      secondaryActionButtonAriaLabel = props.secondaryActionButtonAriaLabel,
      secondaryButtonDisabled = props.secondaryButtonDisabled,
      ActionButtonComponent = props.ActionButtonComponent,
      actionButtonText = props.actionButtonText,
      actionButtonAriaLabel = props.actionButtonAriaLabel,
      cancelButtonText = props.cancelButtonText,
      cancelButtonAriaLabel = props.cancelButtonAriaLabel,
      actionButtonDisabled = props.actionButtonDisabled,
      customTestId = props.customTestId,
      clickOutsideCanClose = props.clickOutsideCanClose,
      minHeight = props.minHeight,
      minView = props.minView,
      alternateMobileDisplay = props.alternateMobileDisplay,
      titleHeading = props.titleHeading,
      subTitleHeading = props.subTitleHeading,
      titleVariantHeading = props.titleVariantHeading,
      subTitleVariantHeading = props.subTitleVariantHeading,
      handleTitleAction = props.handleTitleAction,
      titleButtonText = props.titleButtonText,
      titleButtonAriaLabel = props.titleButtonAriaLabel,
      titleButtonDisabled = props.titleButtonDisabled,
      hideCancelButton = props.hideCancelButton,
      hideTitleButton = props.hideTitleButton,
      width = props.width,
      customClasses = props.customClasses,
      fullScreen = props.fullScreen,
      closeButtonAriaLabel = props.closeButtonAriaLabel;
  return /*#__PURE__*/React.createElement(ModalDialogContainer, {
    open: open,
    handleClose: handleClose,
    customTestId: customTestId,
    clickOutsideCanClose: clickOutsideCanClose,
    minHeight: minHeight,
    minView: minView,
    alternateMobileDisplay: alternateMobileDisplay,
    width: width,
    customClasses: customClasses,
    fullScreen: fullScreen
  }, /*#__PURE__*/React.createElement(ModalDialogTitle, {
    onClose: handleClose,
    title: title,
    subTitle: subTitle,
    alternateMobileDisplay: alternateMobileDisplay,
    titleHeading: titleHeading,
    subTitleHeading: subTitleHeading,
    titleVariantHeading: titleVariantHeading,
    subTitleVariantHeading: subTitleVariantHeading,
    handleTitleAction: handleTitleAction,
    titleButtonText: titleButtonText,
    titleButtonAriaLabel: titleButtonAriaLabel,
    titleButtonDisabled: titleButtonDisabled,
    hideTitleButton: hideTitleButton,
    closeButtonAriaLabel: closeButtonAriaLabel
  }), /*#__PURE__*/React.createElement(ModalDialogContent, null, children), displayControls && /*#__PURE__*/React.createElement(ModalDialogActions, {
    handlePrimaryAction: handlePrimaryAction,
    handleSecondaryAction: handleSecondaryAction,
    handleAction: handleAction,
    handleClose: handleClose,
    secondaryActionButtonText: secondaryActionButtonText,
    secondaryActionButtonAriaLabel: secondaryActionButtonAriaLabel,
    secondaryButtonDisabled: secondaryButtonDisabled,
    ActionButtonComponent: ActionButtonComponent,
    actionButtonText: actionButtonText,
    actionButtonAriaLabel: actionButtonAriaLabel,
    actionButtonDisabled: actionButtonDisabled,
    cancelButtonText: cancelButtonText,
    cancelButtonAriaLabel: cancelButtonAriaLabel,
    isAlternateMobileDisplay: alternateMobileDisplay,
    hideCancelButton: hideCancelButton
  }));
};

ModalDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.node.isRequired,
  handlePrimaryAction: PropTypes.bool,
  handleSecondaryAction: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  handleAction: PropTypes.func,
  ActionButtonComponent: PropTypes.node,
  actionButtonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondaryActionButtonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondaryActionButtonAriaLabel: PropTypes.string,
  secondaryButtonDisabled: PropTypes.bool,
  actionButtonAriaLabel: PropTypes.string,
  cancelButtonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cancelButtonAriaLabel: PropTypes.string,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actionButtonDisabled: PropTypes.bool,
  customTestId: PropTypes.string,
  clickOutsideCanClose: PropTypes.bool,
  displayControls: PropTypes.bool,
  minView: PropTypes.bool,
  minHeight: PropTypes.string,
  alternateMobileDisplay: PropTypes.bool,
  titleHeading: PropTypes.oneOf(modalHeadingValues),
  subTitleHeading: PropTypes.oneOf(modalHeadingValues),
  titleVariantHeading: PropTypes.oneOf(modalHeadingValues),
  subTitleVariantHeading: PropTypes.oneOf(modalHeadingValues),
  handleTitleAction: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  titleButtonText: PropTypes.string,
  titleButtonAriaLabel: PropTypes.string,
  titleButtonDisabled: PropTypes.bool,
  hideCancelButton: PropTypes.bool,
  hideTitleButton: PropTypes.bool,
  width: PropTypes.string,
  customClasses: PropTypes.object,
  fullScreen: PropTypes.bool,
  closeButtonAriaLabel: PropTypes.string
};
ModalDialog.defaultProps = {
  handlePrimaryAction: true,
  handleSecondaryAction: false,
  customTestId: 'modalDialog',
  clickOutsideCanClose: false,
  cancelButtonAriaLabel: null,
  ActionButtonComponent: null,
  actionButtonAriaLabel: null,
  secondaryActionButtonAriaLabel: null,
  actionButtonText: null,
  secondaryActionButtonText: null,
  secondaryButtonDisabled: false,
  handleAction: function handleAction() {},
  handleClose: function handleClose() {},
  cancelButtonText: null,
  subTitle: null,
  actionButtonDisabled: false,
  displayControls: true,
  alternateMobileDisplay: false,
  minView: false,
  minHeight: null,
  titleHeading: modalHeading.h1,
  subTitleHeading: modalHeading.h2,
  titleVariantHeading: modalHeading.h3,
  subTitleVariantHeading: modalHeading.overline,
  handleTitleAction: false,
  titleButtonText: null,
  titleButtonAriaLabel: null,
  titleButtonDisabled: false,
  hideCancelButton: false,
  hideTitleButton: false,
  width: null,
  customClasses: undefined,
  fullScreen: false,
  closeButtonAriaLabel: undefined
};
export default ModalDialog;