import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { bool, func } from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import getLocaleFile from './lang';
var useStyles = makeStyles({
  name: 'PreviewSwitcherModal'
})(function () {
  return {
    iframe: {
      border: '0',
      width: '100%',
      minHeight: '400px'
    }
  };
});
export var randomStr = function randomStr() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + s4() + s4() + s4();
};
export var getAccountSwitcherURL = function getAccountSwitcherURL() {
  var userContext = getUserCtx();
  var config = getConfigForCurrentEnv();
  var redirectUrl = encodeURIComponent(config.ampLoggedInURL);
  var prefix = config.restPrefix;
  var state = encodeURIComponent(config.liftRoot);
  var nonce = randomStr();
  var districtPid = userContext.districtPid,
      _userContext$rawToken = userContext.rawToken.sif,
      idToken = _userContext$rawToken.idToken,
      clientId = _userContext$rawToken.tokeninfo.client_id;
  return "".concat(prefix, "/api/authorization/accountSelector/index.html?connection=").concat(districtPid, "&client_id=").concat(clientId, "&scope=openid%20profile&response_type=id_token%20token&state=").concat(state, "&redirect_uri=").concat(redirectUrl, "&nonce=").concat(nonce, "&id_token_hint=").concat(idToken, "&prompt=select_account&embedded=true");
};

var PreviewSwitcherModal = function PreviewSwitcherModal(props) {
  var open = props.open,
      onRoleSwitcherClose = props.onRoleSwitcherClose;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openState = _useState2[0],
      setOpenState = _useState2[1];

  useEffect(function () {
    setOpenState(open);
  }, [open]);
  useEffect(function () {
    if (!openState) {
      onRoleSwitcherClose();
    }
  }, [openState]);

  var onClose = function onClose() {
    setOpenState(false);
  };

  window.addEventListener('message', function (e) {
    if (e.data === 'AccountSelectorCancelClicked') {
      setOpenState(false);
    }
  }, false);
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(ModalDialog, {
    customTestId: "previewSwitcherModal",
    "data-testid": "previewSwitcherModal",
    open: openState,
    handleClose: onClose,
    title: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "previewSwitcher.modal.title"
    }),
    subTitle: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "previewSwitcher.modal.subTitle"
    }),
    displayControls: false
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "previewSwitcher.modal.title"
  }, function (title) {
    return /*#__PURE__*/React.createElement("iframe", {
      "data-testid": "previewToggleIframe",
      id: "preview-toggle-iframe",
      title: title,
      className: classes.iframe,
      src: getAccountSwitcherURL()
    });
  })));
};

PreviewSwitcherModal.propTypes = {
  open: bool,
  onRoleSwitcherClose: func.isRequired
};
PreviewSwitcherModal.defaultProps = {
  open: false
};
export default PreviewSwitcherModal;