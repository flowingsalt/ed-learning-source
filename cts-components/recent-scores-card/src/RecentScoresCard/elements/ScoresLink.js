/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import { useIntl } from 'react-intl';
import useStyles from './ScoresLink.Styles';

var ScoresLink = function ScoresLink(_ref) {
  var callback = _ref.callback,
      disabled = _ref.disabled;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var title = formatMessage({
    id: 'recentScoresCard.scoresLink'
  });

  var _useStyles = useStyles({
    disabled: disabled
  }),
      classes = _useStyles.classes;

  var handleCallback = function handleCallback() {
    if (!disabled) {
      callback('/scores/');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      handleCallback();
    }
  };

  return /*#__PURE__*/React.createElement(Link, {
    href: disabled ? null : '#/scores/',
    onClick: function onClick() {
      return handleCallback();
    },
    "data-testid": "scores-link",
    className: classes.link,
    "aria-label": title,
    tabIndex: disabled ? '-1' : '0',
    onKeyDown: handleKeyDown
  }, title);
};

ScoresLink.propTypes = {
  callback: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
ScoresLink.defaultProps = {
  disabled: false
};
export default ScoresLink;