import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, FormattedMessage } from 'react-intl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import copyIcon from '@ed/baseline/icons/cts/copy-sm.svg';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import Icon from '@hmhco/icon/src/Icon';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import useCopyToClipboard from '@hmhco/clipboard/src/useCopyToClipboard';
import useStyles from './VCJoinMeetingModal.style';
import getLocaleFile from '../lang';

var VCJoinMeetingModal = function VCJoinMeetingModal(_ref) {
  var settings = _ref.settings,
      onCloseClick = _ref.onCloseClick;
  var joinUrl = settings.joinUrl,
      passcode = settings.passcode;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var passcodeInputRef = React.useRef();

  var _useCopyToClipboard = useCopyToClipboard({
    passcodeInputRef: passcodeInputRef
  }),
      copyToClipboard = _useCopyToClipboard.copyToClipboard,
      textCopied = _useCopyToClipboard.textCopied;

  var handleOnJoinMeetingBtnClick = function handleOnJoinMeetingBtnClick() {
    window.open(joinUrl, '_blank');
    onCloseClick();
  };

  return /*#__PURE__*/React.createElement(ModalDialog, {
    title: formatMessage({
      id: 'virtualClassroom.joinMeetingModal.title'
    }),
    open: true,
    handleAction: handleOnJoinMeetingBtnClick,
    handleClose: onCloseClick,
    actionButtonText: formatMessage({
      id: 'virtualClassroom.joinMeetingModal.actionButtonText'
    }),
    cancelButtonText: formatMessage({
      id: 'virtualClassroom.modal.cancelButtonText'
    })
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.textDescription
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "virtualClassroom.joinMeetingModal.description"
  })), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 7,
    xs: 12,
    className: classes.gridPasscodeInput
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "vc-passcode-field",
    fullWidth: true,
    className: classes.passcodeInput,
    value: passcode,
    FormHelperTextProps: {
      className: classes.helperText
    },
    name: "vc-passcode-field",
    label: formatMessage({
      id: 'virtualClassroom.joinMeetingModal.passcodeInputLabel'
    }),
    helperText: textCopied ? formatMessage({
      id: 'virtualClassroom.joinMeetingModal.passcodeCopied'
    }) : null,
    inputProps: {
      ref: passcodeInputRef,
      'data-testid': 'meeting-passode-field',
      'aria-readonly': 'true'
    }
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 5,
    xs: 12,
    className: classes.gridPasscodeCopyToClipboardBtn
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    className: classes.copyToClipboardBtn,
    variant: "outlined",
    color: "primary",
    "data-testid": "vc-copy-to-clipboard-btn",
    onClick: copyToClipboard,
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: copyIcon,
      size: "16",
      colour: "var(--ebl-button-outlined-text-color)"
    })
  }, formatMessage({
    id: 'virtualClassroom.joinMeetingModal.copyToClipboardBtn'
  })))));
};

VCJoinMeetingModal.propTypes = {
  settings: PropTypes.shape({
    joinUrl: PropTypes.string,
    passcode: PropTypes.string
  }).isRequired,
  onCloseClick: PropTypes.func.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(VCJoinMeetingModal, props));
});