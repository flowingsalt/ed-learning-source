import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { getUserCtx, isLegacyPlatformToken } from '@hmhco/amp-core/src/userContext/auth';
import Svg from '@hmhco/svg/src/Svg';
import logoIcon from '@ed/baseline/icons/cts/logo-hmh.svg';
import { Link } from 'react-router-dom';
import { useStateValue } from '../navStateManager';
import useStyles from './HomeButton.styles';

var HomeButton = function HomeButton(_ref) {
  var isMobile = _ref.isMobile;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStateValue = useStateValue(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      homeRoute = _useStateValue2[0].homeRoute,
      dispatch = _useStateValue2[1];

  var _getUserCtx = getUserCtx(),
      sif = _getUserCtx.sif;

  var isLegacyPlatformUser = isLegacyPlatformToken(sif);

  if (isLegacyPlatformUser) {
    return null;
  }

  var onClick = function onClick() {
    dispatch({
      type: 'resetActiveMenu'
    });
  };

  return /*#__PURE__*/React.createElement(Link, {
    to: homeRoute,
    title: formatMessage({
      id: 'topNav.helpButton.home'
    }),
    className: isMobile ? classes.logoLink : classes.logo,
    "data-test-id": "navHome",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Svg, {
    svg: logoIcon,
    className: classes.svg
  }));
};

HomeButton.defaultProps = {
  isMobile: false
};
HomeButton.propTypes = {
  isMobile: PropTypes.bool
};
export default HomeButton;