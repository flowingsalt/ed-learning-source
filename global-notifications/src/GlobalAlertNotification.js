import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { eventRegistry as events } from '@hmhco/amp-core-events';

var GlobalAlertNotification = function GlobalAlertNotification() {
  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var handleClose = function handleClose() {
    setError(false);
    setMessage(undefined);
  };

  var handleGlobalNotification = function handleGlobalNotification(errorMessage) {
    setMessage(errorMessage.detail ? errorMessage.detail : '');
    setError(true);
  };

  useEffect(function () {
    window.addEventListener(events.GLOBAL_NOTIFICATION, handleGlobalNotification);
    return function () {
      return window.removeEventListener(events.GLOBAL_NOTIFICATION, handleGlobalNotification);
    };
  }, []);

  if (!error) {
    return null;
  }

  return /*#__PURE__*/React.createElement(AlertNotification, {
    severity: "error",
    onClose: handleClose
  }, message || formatMessage({
    id: 'globalNotification.defaultError'
  }));
};

export default GlobalAlertNotification;