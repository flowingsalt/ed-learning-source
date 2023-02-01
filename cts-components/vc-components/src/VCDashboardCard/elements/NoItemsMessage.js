import React from 'react';
import { useIntl } from 'react-intl';
import logoIcon from '@ed/baseline/icons/cts/video-lg.svg';
import { EmptyMessage } from '@hmhco/empty-message/src/EmptyMessage';
import useStyles from './NoItemsMessage.Styles';

var NoItemsMessage = function NoItemsMessage() {
  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var emptyMsgTitle = formatMessage({
    id: 'studentDashboard.virtualClassroom.empty.title'
  });
  var emptyMsgText = formatMessage({
    id: 'studentDashboard.virtualClassroom.empty.text'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(EmptyMessage, {
    title: emptyMsgTitle,
    text: emptyMsgText,
    iconProps: {
      svg: logoIcon,
      size: '64'
    }
  }));
};

export default NoItemsMessage;