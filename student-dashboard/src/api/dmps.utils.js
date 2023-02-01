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

import { DMPS_CONTEXTS } from '@hmhco/district-settings-api/src/constants';
import { flipObject } from '@hmhco/district-settings-api/src/utils/response.utils';
export var FORM_TO_DMPS_SETTINGS_MAP = {
  virtualClassroomProvider: 'recommended.virtual.classroom.provider',
  virtualClassroomStore: 'recommended.virtual.classroom.store',
  authGoogle: 'recommended.virtual.classroom.provider.auth.google',
  authMicrosoft: 'recommended.virtual.classroom.provider.auth.microsoft'
};
export var getContextByUserContext = function getContextByUserContext(userContext) {
  return userContext.isDistrictAdmin || userContext.isSchoolAdmin ? DMPS_CONTEXTS.ORG : DMPS_CONTEXTS.ROLE;
};
export var DMPS_TO_FORM_SETTINGS_MAP = flipObject(FORM_TO_DMPS_SETTINGS_MAP);
export var formatResponses = function formatResponses() {
  var responses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return responses.reduce(function (acc, resp) {
    var _resp$result = resp.result,
        result = _resp$result === void 0 ? {} : _resp$result;
    var settingName = DMPS_TO_FORM_SETTINGS_MAP[result.setting];
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, settingName, result.value || result.defaultValue));
  }, {});
};