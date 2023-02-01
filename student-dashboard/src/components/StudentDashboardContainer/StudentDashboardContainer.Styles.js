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
var commonStyles = {
  padding: '0 0 var(--ebl-s4) 0'
};
export default makeStyles()(function (_theme, props) {
  return {
    greeting: _objectSpread({}, commonStyles),
    error: _objectSpread({}, commonStyles),
    assignmentCenter: {
      order: props.DASHBOARD_LAYOUT.assignmentCenter.order
    },
    virtualClassroom: {
      order: props.DASHBOARD_LAYOUT.virtualClassroom.order
    },
    programLaunch: {
      order: props.DASHBOARD_LAYOUT.programLaunch.order
    },
    recentlyViewed: {
      order: props.DASHBOARD_LAYOUT.recentlyViewed.order
    },
    recentScores: {
      order: props.DASHBOARD_LAYOUT.recentScores.order
    },
    recentlyViewedWidget: {
      height: '100%'
    },
    dashboardCardsContainer: {
      paddingBottom: '16px'
    },
    partnerModalDescription: {
      marginBottom: "var(--ebl-s4)"
    }
  };
});