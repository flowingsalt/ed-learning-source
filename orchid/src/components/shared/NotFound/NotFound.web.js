import React from 'react';
import PropTypes from 'prop-types';
import Styles from './NotFound.css';
import { NotFoundMed } from 'orchid-common/svg/med';
import { FormattedMessage } from 'react-intl';
export var NotFound = function NotFound(_ref) {
  var message = _ref.message,
      isError = _ref.isError,
      dataTestId = _ref.dataTestId;
  return /*#__PURE__*/React.createElement("div", {
    className: Styles.errorTile,
    "data-test-id": dataTestId
  }, isError && /*#__PURE__*/React.createElement(NotFoundMed, null), /*#__PURE__*/React.createElement("p", {
    className: Styles.message
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: message
  })));
};
NotFound.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  dataTestId: PropTypes.string
};