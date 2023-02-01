import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { eventRegistry as events } from '@hmhco/amp-core-events';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import React from 'react';
import PropTypes from 'prop-types';
var UserContext = /*#__PURE__*/React.createContext(null);
export var UserContextProvider = function UserContextProvider(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState(getUserCtx()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      userCtx = _React$useState2[0],
      setUserCtx = _React$useState2[1];

  React.useEffect(function () {
    var handleUserChange = function handleUserChange(_ref2) {
      var detail = _ref2.detail;
      return setUserCtx(detail);
    };

    window.addEventListener(events.USER_CTX_UPDATE, handleUserChange);
    return function () {
      return window.removeEventListener(events.USER_CTX_UPDATE, handleUserChange);
    };
  }, []);
  return /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: userCtx
  }, children);
};
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
export var useUserContext = function useUserContext() {
  return React.useContext(UserContext);
};