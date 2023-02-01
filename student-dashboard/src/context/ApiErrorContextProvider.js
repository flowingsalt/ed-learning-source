import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
export var APIErrorContext = /*#__PURE__*/createContext();
APIErrorContext.displayName = 'APIErrorContext';
export var APIContextProvider = function APIContextProvider(_ref) {
  var children = _ref.children,
      errorProp = _ref.errorProp;

  var _useState = useState({
    error: !!errorProp
  }),
      _useState2 = _slicedToArray(_useState, 2),
      launchError = _useState2[0],
      setLaunchError = _useState2[1];

  var handleLaunchError = function handleLaunchError(_ref2) {
    var error = _ref2.error;
    setLaunchError({
      error: error
    });
  };

  return /*#__PURE__*/React.createElement(APIErrorContext.Provider, {
    value: {
      launchError: launchError,
      handleLaunchError: handleLaunchError
    }
  }, children);
};
export var useAPIContext = function useAPIContext() {
  return React.useContext(APIErrorContext);
};
APIContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  errorProp: PropTypes.object
};