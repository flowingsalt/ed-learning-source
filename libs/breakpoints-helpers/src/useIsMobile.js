import useMediaQuery from '@mui/material/useMediaQuery';

var isMobileBreakpoint = function isMobileBreakpoint(theme) {
  var _theme$breakpoints;

  if (theme === null || theme === void 0 ? void 0 : (_theme$breakpoints = theme.breakpoints) === null || _theme$breakpoints === void 0 ? void 0 : _theme$breakpoints.only) {
    return theme.breakpoints.only('xs');
  }

  return '@media (min-width:0px) and (max-width:599.95px)';
};

var useIsMobile = function useIsMobile() {
  var defaultMatches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return useMediaQuery(isMobileBreakpoint, {
    defaultMatches: defaultMatches
  });
};

export default useIsMobile;