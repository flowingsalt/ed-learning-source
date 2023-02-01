/* eslint-disable import/prefer-default-export */
import React from 'react';
import ErrorBoundaryMessage from './ErrorBoundaryMessage';
export default function errorBoundary(err, info) {
  var stackTrace = info === null || info === void 0 ? void 0 : info.componentStack;
  return /*#__PURE__*/React.createElement(ErrorBoundaryMessage, {
    errorMessage: err.toString(),
    stackTrace: stackTrace
  });
}