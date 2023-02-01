import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { BaseAvatar } from '@hmhco/base-avatar/src/BaseAvatar';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getLocaleFile from './lang';
import useStyles from './Greetings.styles';

function Greetings(_ref) {
  var message = _ref.message,
      avatar = _ref.avatar,
      dateProp = _ref.date;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var date = new Date(dateProp || Date.now());
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, avatar && /*#__PURE__*/React.createElement("div", {
    className: classes.avatar
  }, /*#__PURE__*/React.createElement(BaseAvatar, _extends({}, avatar, {
    alt: "",
    imgProps: {
      'data-testid': 'avatar-img'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1",
    className: classes.greetingHeading
  }, /*#__PURE__*/React.createElement("span", {
    "data-testid": "greeting-name",
    className: classes.greetingName
  }, message)), /*#__PURE__*/React.createElement("span", {
    "data-testid": "greeting-date"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h5",
    component: "p"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "greeting.todayIs",
    values: {
      date: /*#__PURE__*/React.createElement(FormattedDate, {
        value: date,
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long"
      })
    }
  })))));
}

Greetings.propTypes = {
  message: PropTypes.string.isRequired,
  avatar: PropTypes.shape(_objectSpread({}, BaseAvatar.propTypes)),

  /** if date isn't passed, component will use Date.now() */
  date: PropTypes.string
};
Greetings.defaultProps = {
  avatar: undefined,

  /** not using defaultProps to set default because it'd be evaluated only once
   * and it wouldn't be updated if date changed between renders */
  date: undefined
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(Greetings, props));
});