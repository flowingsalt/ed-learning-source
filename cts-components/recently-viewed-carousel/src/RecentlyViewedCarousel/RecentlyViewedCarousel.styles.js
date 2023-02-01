import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'recentlyViewedCarousel'
})(function (theme, _ref) {
  var breakpointsStudentDashboard = _ref.breakpointsStudentDashboard;
  return {
    root: _objectSpread({
      minWidth: '100%',
      maxWidth: 'calc(100vw - var(--ebl-s4))',
      padding: '0 calc(- var(--ebl-s0))'
    }, breakpointsStudentDashboard ? {
      height: '100%',
      maxHeight: 'var(--ebl-db-card-height)'
    } : {}),
    carouselBox: {
      height: breakpointsStudentDashboard ? '100%' : null
    },
    carousel: _objectSpread(_objectSpread({
      paddingBottom: theme.spacing(3),
      display: 'flex',
      justifyContent: 'space-between'
    }, breakpointsStudentDashboard ? {
      paddingBottom: 0,
      height: 'calc(100% - 48px)'
    } : {}), {}, {
      '& ul': {
        height: breakpointsStudentDashboard ? '100%' : null
      }
    }),
    headerBox: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingBottom: 0
    },
    carouselTitle: {
      flexGrow: 1,
      paddingBottom: 0,
      marginBottom: 'var(--ebl-label-margin-bottom)',
      marginLeft: '10px' // waiting for baseline update

    },
    controls: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginRight: 'var(--ebl-s1)'
    },
    carouselItem: {
      display: 'flex',
      width: '100%',
      padding: '0 calc(var(--ebl-s4) / 2)'
    }
  };
});