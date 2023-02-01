import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Link from '@mui/material/Link';
import { getHelpRoute } from '../config/edAppRoutes.utils';
import { ROLES } from '../constants';
import useStyles from './HelpButton.styles';
import HelpIconSVG from './HelpIconSVG';
var TEST_ID = 'navHelp';
export var getMobileMenuHelpItem = function getMobileMenuHelpItem(role) {
  return {
    key: 'navHelp',
    route: getHelpRoute(role),
    isExternal: true,
    menuName: 'topNav.mobileMenu.help',
    elementProps: {
      'data-testid': TEST_ID,
      id: TEST_ID
    }
  };
};

var HelpLink = function HelpLink(_ref) {
  var role = _ref.role,
      className = _ref.className,
      children = _ref.children;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var helpRoute = getHelpRoute(role);
  var ariaLabel = [ROLES.STUDENT, ROLES.ADMIN, ROLES.TEACHER].includes(role) ? formatMessage({
    id: 'topNav.avatarMenu.help.ariaLabel.newTab'
  }) : formatMessage({
    id: 'topNav.avatarMenu.help.ariaLabel.newPanel'
  });

  if (role === ROLES.ADMIN) {
    return /*#__PURE__*/React.createElement(Link, {
      "aria-label": ariaLabel,
      className: className || classes.helpBtn,
      "data-testid": TEST_ID,
      href: helpRoute,
      target: "_blank",
      rel: "noopener noreferrer"
    }, children || /*#__PURE__*/React.createElement(HelpIconSVG, null));
  }

  return /*#__PURE__*/React.createElement(Link, {
    "aria-label": ariaLabel,
    className: className || classes.helpBtn,
    "data-testid": TEST_ID,
    href: helpRoute,
    id: TEST_ID,
    target: "_blank",
    rel: "noopener noreferrer"
  }, children || /*#__PURE__*/React.createElement(HelpIconSVG, null));
};

HelpLink.defaultProps = {
  className: undefined,
  children: undefined
};
HelpLink.propTypes = {
  role: PropTypes.oneOf(Object.values(ROLES)).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};
export default HelpLink;