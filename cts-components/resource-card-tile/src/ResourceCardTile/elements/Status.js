import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import useStyles from '../ResourceCardTile.Styles';
import getLocaleFile from '../../lang';

var Status = function Status(props) {
  var status = props.status,
      _props$statusVariant = props.statusVariant,
      statusVariant = _props$statusVariant === void 0 ? 'h6' : _props$statusVariant;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var statusclass = classes.defaultStatus;
  var statusText = status;

  if (status) {
    if (status === 'overdue' || status.includes('dueToday')) {
      statusclass = classes[status];
      statusText = /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "resourceCardTile.status.".concat(status)
      });
    }

    return /*#__PURE__*/React.createElement(AddTranslations, {
      getLocaleFile: getLocaleFile
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: statusVariant,
      component: "span",
      className: statusclass,
      "data-testid": "sublist-status"
    }, statusText));
  }

  return null;
};

Status.propTypes = {
  status: PropTypes.string,
  statusVariant: PropTypes.string
};
export default Status;