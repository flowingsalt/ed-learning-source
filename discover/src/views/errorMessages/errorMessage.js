import React from 'react';
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import { useIntl } from 'react-intl';
import PropTypes, { string } from 'prop-types';
import useStyles from './errorMessage.style';

function ErrorMessage(props) {
  var loadingSectionsCheck = props.loadingSectionsCheck,
      severity = props.severity,
      id = props.id;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return loadingSectionsCheck.filteredData && loadingSectionsCheck.currentProgramData && loadingSectionsCheck.bookmarkData && /*#__PURE__*/React.createElement("section", {
    "data-testid": "alert-notification",
    className: classes.errorMessage
  }, /*#__PURE__*/React.createElement(AlertNotification, {
    severity: severity,
    textMode: "wrap",
    label: formatMessage({
      id: 'errorMessage.customTitle'
    })
  }, formatMessage({
    id: id
  })));
}

export default ErrorMessage;
ErrorMessage.propTypes = {
  severity: string.isRequired,
  id: string.isRequired,
  loadingSectionsCheck: PropTypes.shape({
    filteredData: PropTypes.bool,
    currentProgramData: PropTypes.bool,
    bookmarkData: PropTypes.bool
  }).isRequired
};