import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

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

import axios from 'axios';
import axiosRetry from 'axios-retry';
import { setupCache } from 'axios-cache-adapter';
import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';
import getMainCorrelationId from '@hmhco/correlation-id-helper/utils/getMainCorrelationId';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import { pushGlobalError } from '@hmhco/amp-core/src/globalError';
import { NO_CACHE } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { isRunningInAmp } from '@hmhco/amp-core/src/environmentHelpers';
import redirectToLogin from '@hmhco/redirect-to-login/src/redirectToLogin';
import backoff from './utils/backoff';
var FORAGE_STORE_PREFIX = 'HMH';
/**
 * CACHE_KEY_SEPARATOR separates the prefix from the rest of the URL made for the request.
 * This is to allow us to easily strip the prefix from the key if we need to later.
 */

var CACHE_KEY_SEPARATOR = '::';
/**
 * Change KILL_CACHE to TRUE if you want to turn off caching, and deploy this change through to PROD (for investigating MIs, CSIs, etc)
 * Exported only for unit test coverage.
 */

export var KILL_CACHE = false;
/**
 * create the local forage key using keyPrefix and url in request
 *
 * The key for each request item in the cache should start with the current user ID.
 * We also allow requests to add an optional prefix _after_ the userId to the key used in the localForage store,
 * otherwise use the request URL (including query parameters) is appended to the userId after a `::` separator.
 * Exported only for unit test coverage.
 *
 * @param {object} request contains { url: 'string', cache: { keyPrefix: 'string' }}
 *
 * @returns {string} local forage key for this user
 */

export var setLocalForageKey = function setLocalForageKey(request) {
  var _getUserCtx = getUserCtx(),
      userId = _getUserCtx.userId;

  return request.cache && request.cache.keyPrefix ? "".concat(userId, "_").concat(request.cache.keyPrefix).concat(CACHE_KEY_SEPARATOR).concat(request.url) : "".concat(userId).concat(CACHE_KEY_SEPARATOR).concat(request.url);
};
/**
 * Create forageStore and cache values for using in axios client:
 *  - In the forageStore, we name the store with a prefix, and each request key also includes the current userId to prevent conflicts if users log in/out of the same browser
 *  - localforage.createInstance with the same name will reuse an existing store if it already exists in the browser
 *  - All requests made through createAxiosCancelable will be logged in the store with a default maxAge of 0, & this can be overridden by the request itself
 *  - LocalStorage is the default driver for the store, with a JS in-memory driver for Safari in private mode.
 *    - localforage.WEBSQL didn't appear to provide any caching with Chrome & axios-cache-adapter
 *    - localforage.INDEXEDDB didn't support multiple tabs open with different user sessions and also left empty databases behind after clearing.
 */

export var forageStore = localforage.createInstance({
  name: FORAGE_STORE_PREFIX,
  driver: [localforage.LOCALSTORAGE,
  /* eslint-disable-next-line no-underscore-dangle */
  memoryDriver._driver]
});
var cache = setupCache({
  maxAge: NO_CACHE,
  // Allow requests with query parameters (query params will appear in cache keys)
  exclude: {
    query: false
  },
  store: forageStore,
  key: setLocalForageKey
});
/**
 * Clears the store named FORAGE_STORE_PREFIX, to avoid potential conflicts between users signing into the same browser session.
 *
 * This occurs:
 * - On login of Ed in @ed/arvo userContext.js
 * - On logout of Ed in @ed/arvo appContext.js
 * - On window.beforeunload of Ed header component @ed/arvo header.js
 * - On unmount of AMP in @hmhco/amp-container container.js
 *
 * A browser refresh, tab close without logout, logout, and new login should clear all FORAGE_STORE_PREFIX named items in the cache.
 */

export var clearLocalForageCache = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return forageStore.clear();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function clearLocalForageCache() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Used to clear related cache items when other requests are made successfully.
 * Should _only_ be used by @hmhco/cache-api-helper package.
 *
 * @param {string} keyPrefix string value that should be used to identify cache items that need to be expired
 */

export var clearCacheContainingKey = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(keyPrefix) {
    var allCacheKeys, keysToClear;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return forageStore.keys();

          case 2:
            allCacheKeys = _context3.sent;
            keysToClear = allCacheKeys.filter(function (cacheKey) {
              return cacheKey.includes(keyPrefix);
            });

            if (!(keysToClear && keysToClear.length > 0)) {
              _context3.next = 7;
              break;
            }

            _context3.next = 7;
            return keysToClear.forEach( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(keyToClear) {
                var result;
                return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return forageStore.getItem(keyToClear);

                      case 2:
                        result = _context2.sent;

                        if (!(result && 'expires' in result)) {
                          _context2.next = 7;
                          break;
                        }

                        result.expires = Date.now(); // immediately expire

                        _context2.next = 7;
                        return forageStore.setItem(keyToClear, result);

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function clearCacheContainingKey(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * forward the error depending on current state of the request
 *
 * @param {object} error
 * @param {function} isCancel
 * @returns {object}
 */

export var handleError = function handleError(error, isCancel) {
  if (isCancel && isCancel(error)) {
    // if we have cancelled we don't want to throw the 'error', but we want to return cancelled status so it can be handled
    return {
      isCancelled: true,
      message: error.toString()
    };
  }

  throw error;
};
/**
 * Axios error interceptor,
 * that sends the error to the main Error Store.
 * It also handles the redirect if a user navigates to AMP when not logged in.
 *
 * @param {Error} error
 */

export var errorInterceptor = function errorInterceptor(error) {
  var _error$response, _error$response2;

  if (isRunningInAmp() && ((error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 403 || (error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 401)) {
    redirectToLogin({
      encodeStateInUrl: true
    });
  }
  /** @type {{ config: AxiosRequestConfig }} */


  var config = error.config;

  if (config) {
    pushGlobalError({
      title: 'API error',
      origin: 'axiosHelpers.createAxiosWithBackoff',
      method: config.method,
      link: config.url,
      error: error
    });
  }

  return Promise.reject(error);
};
/**
 * Returns header config with the SIF token
 *
 * @param {string} sif
 * @param {object} optionalHeaders
 * @returns {object} headers with authorization and correlation ID
 */

export var getAuthHeader = function getAuthHeader(sif) {
  var optionalHeaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var correlationId = getMainCorrelationId();

  if (sif) {
    return {
      headers: _objectSpread({
        Authorization: sif,
        CorrelationId: correlationId
      }, optionalHeaders)
    };
  }

  var userContext = getUserCtx();

  if (!userContext) {
    return {};
  }

  var _userContext$rawToken = userContext.rawToken;
  _userContext$rawToken = _userContext$rawToken === void 0 ? {} : _userContext$rawToken;
  var _userContext$rawToken2 = _userContext$rawToken.sif;
  _userContext$rawToken2 = _userContext$rawToken2 === void 0 ? {} : _userContext$rawToken2;
  var accessToken = _userContext$rawToken2.accessToken;

  if (!accessToken) {
    logErrorWithContext('MissingAccessToken', []);
  }

  return {
    headers: _objectSpread({
      Authorization: accessToken,
      CorrelationId: correlationId
    }, optionalHeaders)
  };
};
/**
 * create basic headers without the authentification
 *
 * @param {object} optionalHeaders
 * @returns {object} headers with correlation ID
 */

export var getHeaderWithoutAuth = function getHeaderWithoutAuth() {
  var optionalHeaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var correlationId = getMainCorrelationId();
  return {
    headers: _objectSpread({
      CorrelationId: correlationId
    }, optionalHeaders)
  };
};
/**
 * DEPRECATED: Please use createAxiosCancelable below.
 * Will be removed in subsequent PRs
 * @deprecated
 *
 * @param {number} min
 * @param {number} max
 * @param {boolean} includeAuth
 * @returns {object}
 */

export var createAxios = function createAxios(min, max) {
  var includeAuth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var auth = includeAuth ? getAuthHeader() : getHeaderWithoutAuth();
  var client = axios.create(auth);
  axiosRetry(client, backoff(min, max));

  if (includeAuth) {
    client.interceptors.response.use(null, errorInterceptor);
  }

  return client;
};
/**
 * Helper for creating an Axios client and setting it up properly
 *
 * @param {number} min retry delay in ms
 * @param {number} max retry delay in ms
 * @param {function} retryCondition function returning boolean
 * @param {boolean} includeAuth whether to include Authorization in headers (default to true and will fetch current sif)
 * @param {boolean} redirectIfFails true by default, redirect to login on 403 and 401
 *
 * @returns {object} { client: AxiosInstance, cancel, cancelToken, isCancel }
 * @returns {function} cancelableAxios.cancel
 * @returns {Promise} cancelableAxios.cancelToken
 * @returns {function} cancelableAxios.isCancel
 */

export var createAxiosCancelable = function createAxiosCancelable() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$min = _ref4.min,
      min = _ref4$min === void 0 ? 1000 : _ref4$min,
      _ref4$max = _ref4.max,
      max = _ref4$max === void 0 ? 15000 : _ref4$max,
      retryCondition = _ref4.retryCondition,
      _ref4$includeAuth = _ref4.includeAuth,
      includeAuth = _ref4$includeAuth === void 0 ? true : _ref4$includeAuth,
      _ref4$redirectIfFails = _ref4.redirectIfFails,
      redirectIfFails = _ref4$redirectIfFails === void 0 ? true : _ref4$redirectIfFails;

  var canceler = axios.CancelToken.source();
  var auth = includeAuth ? getAuthHeader() : getHeaderWithoutAuth(); // Only use the cache if the user is logged in

  if (getUserCtx().userId && !KILL_CACHE) {
    auth.adapter = cache.adapter;
  }

  var client = axios.create(auth);
  axiosRetry(client, backoff(min, max, retryCondition));

  if (includeAuth && redirectIfFails) {
    client.interceptors.response.use(null, errorInterceptor);
  }

  return {
    client: client,
    cancel: canceler.cancel,
    cancelToken: canceler.token,
    isCancel: axios.isCancel
  };
};