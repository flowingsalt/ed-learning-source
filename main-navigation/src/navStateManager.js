import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
export var StateContext = /*#__PURE__*/createContext();
export var StateProvider = function StateProvider(_ref) {
  var reducer = _ref.reducer,
      initState = _ref.initState,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(StateContext.Provider, {
    value: useReducer(reducer, initState)
  }, children);
};
StateProvider.propTypes = {
  reducer: PropTypes.func,
  initState: PropTypes.object,
  children: PropTypes.node
};
export var useStateValue = function useStateValue() {
  return useContext(StateContext);
};