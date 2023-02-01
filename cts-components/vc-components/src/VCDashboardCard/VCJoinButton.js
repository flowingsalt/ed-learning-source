import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Button from '@mui/material/Button';
import linkIcon from '@ed/baseline/icons/cts/open-sm.svg';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import Icon from '@hmhco/icon/src/Icon';
import useStyles from './VCJoinButton.styles';
import { DATE_FORMAT_SHORT, TIME_FORMAT } from './constants';
import getLocaleFile from '../lang';

var VCJoinButton = function VCJoinButton(_ref) {
  var title = _ref.title,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      joinUrl = _ref.joinUrl,
      passcode = _ref.passcode,
      handleOnBtnClick = _ref.handleOnBtnClick,
      fullwidth = _ref.fullwidth;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage,
      formatTime = _useIntl.formatTime,
      formatDate = _useIntl.formatDate;

  var date = formatDate(startDate, DATE_FORMAT_SHORT);
  var startTime = formatTime(startDate, TIME_FORMAT);
  var endTime = formatTime(endDate, TIME_FORMAT);

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var ariaLabel = formatMessage({
    id: 'virtualClassroom.menu.item.join.ariaLabel'
  }, {
    title: title,
    date: date,
    startTime: startTime,
    endTime: endTime
  });
  return /*#__PURE__*/React.createElement(Button, {
    size: "small",
    className: "".concat(fullwidth && classes.fullwidth),
    variant: "outlined",
    role: "link",
    onClick: function onClick() {
      return handleOnBtnClick({
        passcode: passcode,
        joinUrl: joinUrl
      });
    },
    "aria-label": ariaLabel,
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: linkIcon,
      size: "16",
      colour: "var(--ebl-button-outlined-text-color)"
    }),
    "data-testid": "vc-join-btn"
  }, formatMessage({
    id: 'virtualClassroom.menu.item.join'
  }));
};

VCJoinButton.propTypes = {
  fullwidth: false
};
VCJoinButton.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  joinUrl: PropTypes.string.isRequired,
  passcode: PropTypes.string,
  handleOnBtnClick: PropTypes.func.isRequired,
  fullwidth: PropTypes.bool
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(VCJoinButton, props));
});