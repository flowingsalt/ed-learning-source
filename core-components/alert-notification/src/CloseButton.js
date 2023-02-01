import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import removeIcon from '@ed/baseline/icons/cts/remove-md.svg';
import Icon from '@hmhco/icon';

var CloseButton = function CloseButton(_ref) {
  var onClose = _ref.onClose,
      buttonProps = _objectWithoutProperties(_ref, ["onClose"]);

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var closeLabel = formatMessage({
    id: 'alertNotification.icon.close'
  });
  return /*#__PURE__*/React.createElement(IconButton, _extends({
    onClick: onClose,
    size: "small",
    "aria-label": closeLabel,
    title: closeLabel
  }, buttonProps), /*#__PURE__*/React.createElement(Icon, {
    svg: removeIcon,
    size: "16",
    colour: "var(--ebl-action-color)"
  }));
};

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired
};
export default CloseButton;