import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';

var useJoinMeeting = function useJoinMeeting() {
  var _React$useState = React.useState({
    open: false,
    passcode: undefined,
    joinUrl: undefined
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      joinMeetingModalSettings = _React$useState2[0],
      setJoinMeetingModalSettings = _React$useState2[1];

  var joinMeeting = function joinMeeting(_ref) {
    var passcode = _ref.passcode,
        joinUrl = _ref.joinUrl;

    if (passcode && passcode.length > 1) {
      setJoinMeetingModalSettings({
        open: true,
        passcode: passcode,
        joinUrl: joinUrl
      });
    } else {
      window.open(joinUrl, '_blank');
    }
  };

  var closeJoinMeetingModal = function closeJoinMeetingModal() {
    return setJoinMeetingModalSettings({
      open: false,
      passcode: undefined,
      joinUrl: undefined
    });
  };

  return {
    joinMeeting: joinMeeting,
    closeJoinMeetingModal: closeJoinMeetingModal,
    joinMeetingModalSettings: joinMeetingModalSettings
  };
};

export default useJoinMeeting;