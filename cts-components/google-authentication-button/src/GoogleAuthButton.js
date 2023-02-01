import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { func, string } from 'prop-types';
import Button from '@mui/material/Button';
import Icon from '@hmhco/icon/src/Icon';
import gcIcon from '@ed/baseline/images/google-classroom/btn_google_dark_normal_ios.svg';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getLocaleFile from './lang';
import useStyles from './GoogleAuthButton.styles';

var GoogleAuthButton = function GoogleAuthButton(_ref) {
  var handleClick = _ref.handleClick,
      type = _ref.type;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    size: "large",
    classes: {
      root: classes.rootButton,
      startIcon: classes.startIcon
    },
    onClick: handleClick,
    "data-testid": "googleClassroom-".concat(type, "-btn"),
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: gcIcon,
      size: "45"
    }),
    "aria-label": formatMessage({
      id: "googleClassroom.button.".concat(type)
    })
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "googleClassroom.button.".concat(type)
  }));
};

GoogleAuthButton.propTypes = {
  handleClick: func.isRequired,
  type: string.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(GoogleAuthButton, props));
});