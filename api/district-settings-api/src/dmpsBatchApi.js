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
/* eslint-disable import/prefer-default-export */


import { createAxiosCancelable, handleError } from '@hmhco/core-network/src/axiosHelpers';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { SHORT_SESSION } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { batchSettingsParams } from './utils/params.utils';
import { DMPS_BATCH_URL } from './constants';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    restDMPS = _getConfigForCurrentE.restDMPS;
/**
 * @param {string} context one of DMPS_CONTEXTS, see constants
 * @param {object} userContext
 * @param {array} settings list of setting names or key-value pairs
 * @param {object} pactConfig
 */


export var dmpsBatchCancellable = function dmpsBatchCancellable() {
  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  return {
    fetchOrSaveDmpsBatch: function fetchOrSaveDmpsBatch(context, // see DMPS_CONTEXTS
    userContext, settings, method) {
      var pactConfig = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var studentIds = arguments.length > 5 ? arguments[5] : undefined;
      var parameters = batchSettingsParams({
        context: context,
        userContext: userContext,
        settings: settings,
        method: method,
        studentIds: studentIds
      });

      var config = _objectSpread(_objectSpread({
        baseURL: restDMPS
      }, pactConfig), {}, {
        cancelToken: cancelToken
      });

      return client.post(DMPS_BATCH_URL, parameters, config).then(function (response) {
        return response.data.result;
      })["catch"](function (error) {
        return handleError(error, isCancel);
      });
    },
    cancel: cancel
  };
};
export var dmpsBatchCancellableCached = function dmpsBatchCancellableCached() {
  var _createAxiosCancelabl2 = createAxiosCancelable(),
      client = _createAxiosCancelabl2.client,
      cancel = _createAxiosCancelabl2.cancel,
      cancelToken = _createAxiosCancelabl2.cancelToken,
      isCancel = _createAxiosCancelabl2.isCancel;

  return {
    fetchDmpsBatchCached: function fetchDmpsBatchCached(context, userContext, settings, method) {
      var pactConfig = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var parameters = batchSettingsParams({
        context: context,
        userContext: userContext,
        settings: settings,
        method: method
      });

      var config = _objectSpread(_objectSpread({
        baseURL: restDMPS
      }, pactConfig), {}, {
        cancelToken: cancelToken,
        cache: {
          maxAge: SHORT_SESSION,
          keyPrefix: settings
        }
      });

      return client.post(DMPS_BATCH_URL, parameters, config).then(function (response) {
        return response.data.result;
      })["catch"](function (error) {
        return handleError(error, isCancel);
      });
    },
    cancel: cancel
  };
};