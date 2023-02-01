import React from 'react';
import { FormattedMessage } from 'react-intl';
import { EmptyMessage } from '@hmhco/empty-message/src/EmptyMessage';
import needsGradingSvgXl from '@ed/baseline/icons/cts/needs-grading-xl.svg';
import useStyles from './NoDataMessage.Styles';

var NoDataMessage = function NoDataMessage() {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var emptyMessageTitle = /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "recentScoresCard.emptyMessage.title"
  });
  var emptyMessageText = /*#__PURE__*/React.createElement("span", {
    "data-testid": "student-empty-scores-dashboard-text"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "recentScoresCard.emptyMessage.text"
  }));
  var emptyMessageIcon = {
    svg: needsGradingSvgXl,
    size: '88'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(EmptyMessage, {
    title: emptyMessageTitle,
    text: emptyMessageText,
    iconProps: emptyMessageIcon
  }));
};

export default NoDataMessage;