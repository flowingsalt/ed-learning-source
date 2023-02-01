import React from 'react';
import { FormattedMessage } from 'react-intl';
import { EmptyMessage } from '@hmhco/empty-message/src/EmptyMessage';
import useStyles from './NoDataMessage.Styles';

var NoDataMessage = function NoDataMessage() {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var emptyMessageTitle = /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentDashboard.assignmentsCenter.emptyMessage.title"
  });
  var emptyMessageText = /*#__PURE__*/React.createElement("span", {
    "data-testid": "student-empty-assignment-dashboard-text"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "studentDashboard.assignmentsCenter.emptyMessage.text"
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(EmptyMessage, {
    title: emptyMessageTitle,
    text: emptyMessageText
  }));
};

export default NoDataMessage;