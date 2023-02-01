import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

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

import { handleError } from '../axiosHelpers';
/**
 * create an Axios config with default values
 *
 * @param {object} options object containing the following values:
 * @param {string} options.cancelToken
 * @param {string} options.baseURL
 * @param {object} options.options expected content: {headers}
 * @param {object} options.data for DELETE method
 * @param {object} options.pactConfig for PACT tests only
 *
 * @returns {object} configuration for Axios client
 */

export var getConfig = function getConfig(_ref) {
  var cancelToken = _ref.cancelToken,
      baseURL = _ref.baseURL,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? null : _ref$data,
      _ref$pactConfig = _ref.pactConfig,
      pactConfig = _ref$pactConfig === void 0 ? {} : _ref$pactConfig;

  var headers = options.headers,
      requestOptions = _objectWithoutProperties(options, ["headers"]);

  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, requestOptions), {}, {
    baseURL: baseURL
  }, headers ? {
    headers: headers
  } : {}), data ? {
    data: data
  } : {}), pactConfig), cancelToken ? {
    cancelToken: cancelToken
  } : {});
};
/**
 * Helper for creating API
 * wrap Axios call with commonly use pattern (promise based, error handling)
 *
 * @param {object} options object containing the following values:
 * @param {object} client Axios client
 * @param {string} options.baseURL
 * @param {string} options.cancelToken
 * @param {boolean} options.isCancel expected content: {headers}
 * @param {object} options.pactConfig for PACT tests only
 *
 * @returns {promise} promise based response of Axios
 */

var requestHelper = function requestHelper(_ref2) {
  var client = _ref2.client,
      _ref2$baseURL = _ref2.baseURL,
      baseURL = _ref2$baseURL === void 0 ? '' : _ref2$baseURL,
      _ref2$cancelToken = _ref2.cancelToken,
      cancelToken = _ref2$cancelToken === void 0 ? null : _ref2$cancelToken,
      _ref2$isCancel = _ref2.isCancel,
      isCancel = _ref2$isCancel === void 0 ? null : _ref2$isCancel,
      _ref2$pactConfig = _ref2.pactConfig,
      pactConfig = _ref2$pactConfig === void 0 ? {} : _ref2$pactConfig,
      _ref2$fullResponse = _ref2.fullResponse,
      fullResponse = _ref2$fullResponse === void 0 ? false : _ref2$fullResponse;

  var run = function run(method) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return method.apply(void 0, args).then(function (response) {
      if (fullResponse || !(response === null || response === void 0 ? void 0 : response.data)) {
        return response;
      }

      return response === null || response === void 0 ? void 0 : response.data;
    })["catch"](function (error) {
      return handleError(error, isCancel);
    });
  };

  return {
    post: function post(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _options$maxAge = options.maxAge,
          maxAge = _options$maxAge === void 0 ? null : _options$maxAge,
          _options$keyPrefix = options.keyPrefix,
          keyPrefix = _options$keyPrefix === void 0 ? null : _options$keyPrefix,
          moreOptions = _objectWithoutProperties(options, ["maxAge", "keyPrefix"]);

      var cache = {
        keyPrefix: keyPrefix // If this value is null, axiosHelpers will fall back to the default key of the req.url itself

      }; // Only include maxAge if it has been specifically included in this request, otherwise, use the default in axiosHelpers

      if (maxAge) {
        cache.maxAge = maxAge;
      }

      return run(client.post, url, data, _objectSpread(_objectSpread({}, getConfig({
        cancelToken: cancelToken,
        baseURL: baseURL,
        options: moreOptions,
        pactConfig: pactConfig
      })), {}, {
        cache: cache
      }));
    },
    patch: function patch(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return run(client.patch, url, data, getConfig({
        cancelToken: cancelToken,
        baseURL: baseURL,
        options: options,
        pactConfig: pactConfig
      }));
    },
    "delete": function _delete(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return run(client["delete"], url, getConfig({
        cancelToken: cancelToken,
        baseURL: baseURL,
        options: options,
        data: data,
        pactConfig: pactConfig
      }));
    },
    get: function get(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _options$maxAge2 = options.maxAge,
          maxAge = _options$maxAge2 === void 0 ? null : _options$maxAge2,
          _options$keyPrefix2 = options.keyPrefix,
          keyPrefix = _options$keyPrefix2 === void 0 ? null : _options$keyPrefix2,
          moreOptions = _objectWithoutProperties(options, ["maxAge", "keyPrefix"]);

      var cache = {
        keyPrefix: keyPrefix // If this value is null, axiosHelpers will fall back to the default key of the req.url itself

      }; // Only include maxAge if it has been specifically included in this request, otherwise, use the default in axiosHelpers

      if (maxAge) {
        cache.maxAge = maxAge;
      }

      return run(client.get, url, _objectSpread(_objectSpread({}, getConfig({
        cancelToken: cancelToken,
        baseURL: baseURL,
        options: moreOptions,
        pactConfig: pactConfig
      })), {}, {
        cache: cache
      }));
    }
  };
};

export default requestHelper;