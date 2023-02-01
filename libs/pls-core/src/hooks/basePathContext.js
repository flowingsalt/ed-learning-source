import React, { createContext } from 'react';
var BasePathContext = /*#__PURE__*/createContext();

var useBasePathContext = function useBasePathContext() {
  return React.useContext(BasePathContext);
};

export default BasePathContext;
export { useBasePathContext };