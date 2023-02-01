/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import { useIntl } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import useStyles from './AssignmentsLink.Styles';
import getLocaleFile from '../../lang';

var AssignmentsLink = function AssignmentsLink(_ref) {
  var callback = _ref.callback;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var title = formatMessage({
    id: 'resourceCard.assignmentsLink'
  });

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var handleKeyDown = function handleKeyDown(event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      callback('/assignments/');
    }
  };

  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#/assignments/",
    onClick: function onClick() {
      return callback('/assignments/');
    },
    "data-testid": "assignments-link",
    className: classes.link,
    "aria-label": title,
    onKeyDown: handleKeyDown
  }, title));
};

AssignmentsLink.propTypes = {
  callback: PropTypes.func
};
export default AssignmentsLink;