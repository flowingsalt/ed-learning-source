import React from 'react';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
export default function AccessibilityOutOfScreenMessage(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    "data-testid": "AccessibilityOutOfScreenMessage",
    style: visuallyHidden
  }, children);
}
AccessibilityOutOfScreenMessage.propTypes = {
  children: PropTypes.node.isRequired
};