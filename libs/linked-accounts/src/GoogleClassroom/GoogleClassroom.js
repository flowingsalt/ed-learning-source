/* eslint-disable @hmhco/amp-internal/registered-events-only */
import React, { useEffect } from 'react';
import { func } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import Typography from '@mui/material/Typography';
import AlertModal from '@hmhco/alert-modal/src/AlertModal/AlertModal';
import googleClassroomIcon from '@ed/baseline/icons/cts/products/products-google-classroom.svg';
import { googleEventRegistry as googleEvents } from '@hmhco/google-events';
import GoogleAuthButton from '@hmhco/google-authentication-button/src/GoogleAuthButton';
import useIsMobile from '@hmhco/breakpoints-helpers/src/useIsMobile';
import useAuthentication from '../hooks/useAuthentication.hook';
import GoogleClassroomDetails from '../GoogleClassroomDetails/GoogleClassroomDetails';
import useStyles from './GoogleClassroom.styles';

var GoogleClassroom = function GoogleClassroom(_ref) {
  var handleClose = _ref.handleClose;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var isMobile = useIsMobile();

  var _useAuthentication = useAuthentication(),
      authSignIn = _useAuthentication.authSignIn,
      checkAuthentication = _useAuthentication.checkAuthentication,
      signOut = _useAuthentication.signOut,
      _useAuthentication$au = _useAuthentication.authResults,
      connected = _useAuthentication$au.connected,
      sufficientScopes = _useAuthentication$au.sufficientScopes,
      _useAuthentication$au2 = _useAuthentication$au.signIn,
      isLoading = _useAuthentication$au2.isLoading,
      signInSuccess = _useAuthentication$au2.success,
      signOutSuccess = _useAuthentication$au.signOut.success;

  useEffect(function () {
    checkAuthentication();
  }, []);

  var handleSignInClick = function handleSignInClick() {
    authSignIn();
  };

  var handleSignOutClick = function handleSignOutClick() {
    signOut();
  };

  useEffect(function () {
    if (signInSuccess || signOutSuccess) {
      var googleAuthEvent = new CustomEvent(googleEvents.GOOGLE_AUTHENTICATION);
      window.dispatchEvent(googleAuthEvent);
    }
  }, [signInSuccess, signOutSuccess]);
  return connected ? /*#__PURE__*/React.createElement(GoogleClassroomDetails, {
    handleSignOutClick: handleSignOutClick,
    handleSignInClick: handleSignInClick,
    signInSuccess: signInSuccess,
    sufficientScopes: sufficientScopes,
    isMobile: isMobile,
    handleClose: handleClose
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "linked.accounts.googleClassroom.signIn"
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.signInBtn
  }, /*#__PURE__*/React.createElement(GoogleAuthButton, {
    handleClick: handleSignInClick,
    type: "signIn"
  })), isLoading && /*#__PURE__*/React.createElement(AlertModal, {
    titleIcon: googleClassroomIcon,
    iconSize: "32",
    title: formatMessage({
      id: 'alertModal.title'
    })
  }, /*#__PURE__*/React.createElement(Typography, {
    component: "p"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "alertModal.signingIn"
  }))));
};

GoogleClassroom.propTypes = {
  handleClose: func
};
export default GoogleClassroom;