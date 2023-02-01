import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useIntl } from 'react-intl';
import modalHeading from './enums/modalHeading';
import getLocaleFile from './lang';
import useStyles from './ModalDialogTitle.styles';
var modalHeadingValues = Object.values(modalHeading);

var ModalDialogTitle = function ModalDialogTitle(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      onClose = _ref.onClose,
      titleHeading = _ref.titleHeading,
      subTitleHeading = _ref.subTitleHeading,
      titleVariantHeading = _ref.titleVariantHeading,
      subTitleVariantHeading = _ref.subTitleVariantHeading,
      handleTitleAction = _ref.handleTitleAction,
      titleButtonText = _ref.titleButtonText,
      titleButtonAriaLabel = _ref.titleButtonAriaLabel,
      titleButtonDisabled = _ref.titleButtonDisabled,
      hideTitleButton = _ref.hideTitleButton,
      closeButtonAriaLabel = _ref.closeButtonAriaLabel;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var titleOptionalProps = {};

  if (titleButtonAriaLabel) {
    titleOptionalProps['aria-label'] = titleButtonAriaLabel;
  }

  return /*#__PURE__*/React.createElement("section", {
    className: classes.modaleTitleWrapper
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "data-testid": "modalTitleBox",
    className: classes.modalTitle
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: titleVariantHeading,
    component: titleHeading,
    color: "inherit",
    id: "modal-title",
    "data-testid": "modalTitle"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: classes.titleButtonWrapper
  }, handleTitleAction ? /*#__PURE__*/React.createElement(Button, _extends({
    onClick: handleTitleAction,
    "data-testid": "modalTitleButton"
  }, titleOptionalProps, {
    disabled: titleButtonDisabled,
    className: classes.titleButton,
    "aria-label": titleButtonAriaLabel
  }), titleButtonText) : null, !hideTitleButton && /*#__PURE__*/React.createElement(Button, {
    autoFocus: true,
    "data-testid": "modalCloseIconButton",
    color: "primary",
    onClick: onClose,
    className: classes.closeIcon,
    "aria-label": closeButtonAriaLabel !== null && closeButtonAriaLabel !== void 0 ? closeButtonAriaLabel : formatMessage({
      id: 'modalDialog.title.closeModalAriaLabel'
    })
  }, /*#__PURE__*/React.createElement(CloseIcon, null)))), subTitle && /*#__PURE__*/React.createElement("span", {
    "data-testid": "modalSubTitleBox"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: subTitleVariantHeading,
    color: "inherit",
    id: "modal-subtitle",
    "data-testid": "modalSubTitle",
    component: subTitleHeading
  }, subTitle)));
};

ModalDialogTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  alternateMobileDisplay: PropTypes.bool,
  titleHeading: PropTypes.oneOf(modalHeadingValues),
  subTitleHeading: PropTypes.oneOf(modalHeadingValues),
  titleVariantHeading: PropTypes.oneOf(modalHeadingValues),
  subTitleVariantHeading: PropTypes.oneOf(modalHeadingValues),
  handleTitleAction: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  titleButtonText: PropTypes.string,
  titleButtonAriaLabel: PropTypes.string,
  titleButtonDisabled: PropTypes.bool,
  hideTitleButton: PropTypes.bool,
  closeButtonAriaLabel: PropTypes.string
};
ModalDialogTitle.defaultProps = {
  onClose: function onClose() {},
  subTitle: null,
  alternateMobileDisplay: false,
  titleHeading: modalHeading.h1,
  subTitleHeading: modalHeading.h2,
  titleVariantHeading: modalHeading.h3,
  subTitleVariantHeading: modalHeading.overline,
  handleTitleAction: false,
  titleButtonText: null,
  titleButtonAriaLabel: null,
  titleButtonDisabled: false,
  hideTitleButton: false,
  closeButtonAriaLabel: undefined
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(ModalDialogTitle, props));
});