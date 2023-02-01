import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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

import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import { VIADUCT_BASE_URL } from '../constants';
/**
 * Proxy requests to external client APIs through viaduct passthrough API service.
 * Currently only used for Google Classroom so some request parameters are google classroom constants.
 */

var passthroughApi = function passthroughApi() {
  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  return {
    /**
     * @param {object} requestBodyParameters - an object containing the parameters to make the proxy request
     * @param {string} requestBodyParameters.requestClient - the name of the client service they're using E.g. "googleclassroom", "googledrive"
     * @param {string} requestBodyParameters.requestUrl - endpoint of url you want to make a request to. E.g. "/v1/courses", "/drive/v3/files"
     * @param {string} requestBodyParameters.requestHttpVerb - HTTP verb of request. e.g. 'POST', 'GET'
     * @param {object} requestBodyParameters.body - optional body of request e.g. {"courseId": "1234", "id": "567"}
     * @param {object} requestBodyParameters.headers - optional header of request.
     * @param {object} requestBodyParameters.pathVariables - optional path variables of request.
     * @param {object} requestBodyParameters.query - optional query for request.
     * @returns {Promise} - response body depends on what requestUrl and requestHttpVerb made up requestBodyParameters
     */
    passthrough: function () {
      var _passthrough = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(requestBodyParameters) {
        var config,
            requestBody,
            _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                requestBody = {
                  client: requestBodyParameters.requestClient,
                  requestUrl: requestBodyParameters.requestUrl,
                  requestHttpVerb: requestBodyParameters.requestHttpVerb,
                  body: requestBodyParameters.body || null,
                  headers: requestBodyParameters.headers || {},
                  pathVariables: requestBodyParameters.pathVariables || {},
                  query: requestBodyParameters.query || null
                };
                return _context.abrupt("return", client.post('/passthrough', requestBody, _objectSpread({
                  baseURL: VIADUCT_BASE_URL,
                  cancelToken: cancelToken
                }, config)).then(function (_ref) {
                  var data = _ref.data;
                  return data;
                })["catch"](function (error) {
                  if (!isCancel(error)) {
                    // if we have cancelled we don't want to throw the 'error'
                    throw error;
                  }
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function passthrough(_x) {
        return _passthrough.apply(this, arguments);
      }

      return passthrough;
    }(),
    cancel: cancel
  };
};

export default passthroughApi;