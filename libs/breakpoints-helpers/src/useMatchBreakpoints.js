import useMediaQuery from '@mui/material/useMediaQuery';
export var createMultiQuery = function createMultiQuery(theme, breakpointKeys) {
  var _theme$breakpoints;

  var query = '';

  if (theme === null || theme === void 0 ? void 0 : (_theme$breakpoints = theme.breakpoints) === null || _theme$breakpoints === void 0 ? void 0 : _theme$breakpoints.only) {
    query = breakpointKeys.map(function (key) {
      return theme.breakpoints.only(key);
    }).join(', ').replace(/@media /gi, '');
    query = "@media ".concat(query);
  }

  return query;
};

var useMatchBreakpoints = function useMatchBreakpoints(breakpointKeys) {
  var defaultMatches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return useMediaQuery(function (theme) {
    return createMultiQuery(theme, breakpointKeys);
  }, {
    defaultMatches: defaultMatches
  });
};

export default useMatchBreakpoints;