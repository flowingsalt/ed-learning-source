import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import VCDashboardCard from '@hmhco/vc-components/src/VCDashboardCard/VCDashboardCard';
import VCDate from '@hmhco/vc-components/src/VCDashboardCard/VCDate';
import VCJoinButton from '@hmhco/vc-components/src/VCDashboardCard/VCJoinButton';
import VCJoinMeetingModal from '@hmhco/vc-components/src/VCJoinMeetingModal/VCJoinMeetingModal';
import useVirtualClassroomData from './useVirtualClassroomData';
import useJoinMeeting from './useJoinMeeting';

var VirtualClassroomCard = function VirtualClassroomCard(_ref) {
  var provider = _ref.provider;

  var _useJoinMeeting = useJoinMeeting(),
      joinMeeting = _useJoinMeeting.joinMeeting,
      joinMeetingModalSettings = _useJoinMeeting.joinMeetingModalSettings,
      closeJoinMeetingModal = _useJoinMeeting.closeJoinMeetingModal;

  var _useVirtualClassroomD = useVirtualClassroomData(),
      data = _useVirtualClassroomD.data,
      loading = _useVirtualClassroomD.loading,
      error = _useVirtualClassroomD.error;

  return /*#__PURE__*/React.createElement(React.Fragment, null, joinMeetingModalSettings.open && /*#__PURE__*/React.createElement(VCJoinMeetingModal, {
    onCloseClick: closeJoinMeetingModal,
    settings: joinMeetingModalSettings
  }), /*#__PURE__*/React.createElement(VCDashboardCard, {
    isLoading: loading,
    customTestId: "vc-student-".concat(provider),
    items: data.map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          startDateTime = _ref2.startDateTime,
          endDateTime = _ref2.endDateTime,
          teacherName = _ref2.teacherName,
          joinUrl = _ref2.joinUrl,
          passcode = _ref2.passcode;
      return {
        id: id,
        title: title,
        subtitle: /*#__PURE__*/React.createElement(VCDate, {
          startDate: startDateTime,
          endDate: endDateTime
        }),
        bottomText: teacherName,
        buttons: /*#__PURE__*/React.createElement(VCJoinButton, {
          title: title,
          handleOnBtnClick: joinMeeting,
          startDate: startDateTime,
          endDate: endDateTime,
          joinUrl: joinUrl,
          passcode: passcode,
          fullwidth: true
        })
      };
    }),
    errorMessage: error && /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentDashboard.virtualClassroom.list.error"
    })
  }));
};

VirtualClassroomCard.propTypes = {
  provider: PropTypes.string
};
export default VirtualClassroomCard;