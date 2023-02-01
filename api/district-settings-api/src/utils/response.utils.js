import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

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
/* eslint-disable import/prefer-default-export */


export var flipObject = function flipObject(obj) {
  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return [val, key];
  }));
};
export var DMPS_TO_FORM_SETTINGS_MAP = function DMPS_TO_FORM_SETTINGS_MAP(settingsMap) {
  return flipObject(settingsMap);
};
export var formatResponses = function formatResponses() {
  var responses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var settingsMap = arguments.length > 1 ? arguments[1] : undefined;
  return responses.reduce(function (acc, resp) {
    var _resp$result = resp.result,
        result = _resp$result === void 0 ? {} : _resp$result;
    var settingName = DMPS_TO_FORM_SETTINGS_MAP(settingsMap)[result.setting];

    if (settingName) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, settingName, result.value || result.defaultValue || false));
    }

    return {};
  }, {});
};