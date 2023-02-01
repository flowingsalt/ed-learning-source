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

import { createAxiosCancelable, getAuthHeader, handleError } from '@hmhco/core-network/src/axiosHelpers';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import getTimezoneOffset from '@hmhco/core-network/src/utils/getTimezoneOffset';
var envConfig = getConfigForCurrentEnv();
export var PREFERENCES_URL = '/api/v2/ui/preferences/';
export var PREFERENCES_WITH_RESTRICTIONS_URL = '/api/v2/ui/preferences-with-restrictions/';
export var getPreferencesUrl = function getPreferencesUrl(pid) {
  return "".concat(PREFERENCES_URL).concat(pid);
};
export var getPreferencesWithRestrictionsUrl = function getPreferencesWithRestrictionsUrl(pid) {
  return "".concat(PREFERENCES_WITH_RESTRICTIONS_URL).concat(pid);
};
export var preferencesCancelable = function preferencesCancelable() {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  var _getUserCtx = getUserCtx(),
      districtPid = _getUserCtx.districtPid,
      schoolPid = _getUserCtx.schoolPid,
      isSchoolAdmin = _getUserCtx.isSchoolAdmin;

  var baseConfig = _objectSpread({
    baseURL: envConfig.ebrCore,
    cancelToken: cancelToken
  }, pactConfig);

  return {
    updatePreferences: function updatePreferences(preferences) {
      return client.post(getPreferencesUrl(isSchoolAdmin ? schoolPid : districtPid), preferences, baseConfig)["catch"](function (error) {
        return handleError(error, isCancel);
      });
    },
    fetchPreferences: function fetchPreferences() {
      return client.get(getPreferencesUrl(isSchoolAdmin ? schoolPid : districtPid), _objectSpread(_objectSpread({}, baseConfig), getAuthHeader(undefined, {
        TimeZoneOffset: getTimezoneOffset
      }))).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return handleError(error, isCancel);
      });
    },
    fetchPreferencesWithRestrictions: function fetchPreferencesWithRestrictions() {
      return client.get(getPreferencesWithRestrictionsUrl(isSchoolAdmin ? schoolPid : districtPid), _objectSpread(_objectSpread({}, baseConfig), getAuthHeader(undefined, {
        TimeZoneOffset: getTimezoneOffset
      }))).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return handleError(error, isCancel);
      });
    },
    cancel: cancel
  };
};