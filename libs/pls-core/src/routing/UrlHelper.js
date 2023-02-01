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

import { RouteConfig } from './Route.config';
import basePath from '../enums/basePath';
import appMode from '../enums/appMode';
export function getAppUrl(mode, url) {
  var paramsToAdd = url.match(/(:[a-zA-Z]*)/g);

  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params.reduce(function (p, c, i) {
    return p.replace("".concat(paramsToAdd[i], "?"), c).replace(paramsToAdd[i], c);
  }, "".concat(basePath[mode]).concat(url));
}
export var appUrls = function appUrls() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appMode.TEACHERS_CORNER;
  return Object.keys(RouteConfig).reduce(function (p, c) {
    var routeConfigs = _objectSpread({}, p);

    routeConfigs[c] = {
      getUrl: function getUrl() {
        for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          params[_key2] = arguments[_key2];
        }

        return getAppUrl.apply(void 0, [mode, RouteConfig[c]].concat(params));
      },
      key: c
    };
    return routeConfigs;
  }, {});
};