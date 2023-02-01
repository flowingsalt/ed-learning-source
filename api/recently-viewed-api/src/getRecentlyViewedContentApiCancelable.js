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

import { createAxiosCancelable, getAuthHeader, handleError } from '@hmhco/core-network/src/axiosHelpers';
import { getRecentlyViewedContentUrl, APP_NAME } from './config';
import { getDataFromCache, writeDataToCache } from './cache';
export default function getRecentlyViewedContentApiCancelable() {
  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  return {
    getRecentlyViewed: function () {
      var _getRecentlyViewed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
        var userId, sif, env, _ref$config, config, cached, requestPayload;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = _ref.userId, sif = _ref.sif, env = _ref.env, _ref$config = _ref.config, config = _ref$config === void 0 ? {} : _ref$config; // if data exists in cache, return it

                cached = getDataFromCache(userId);

                if (!(cached && cached.length)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", {
                  ok: true,
                  error: false,
                  userId: userId,
                  data: cached
                });

              case 4:
                requestPayload = {
                  app: APP_NAME,
                  key: userId
                };
                return _context.abrupt("return", client.post(getRecentlyViewedContentUrl(env), requestPayload, _objectSpread(_objectSpread(_objectSpread({}, config), getAuthHeader(sif)), {}, {
                  cancelToken: cancelToken
                })).then(function (response) {
                  var _response$data, _response$data$result, _response$data$result2; // Write to cache before returning the data


                  var contentList = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$result = _response$data.result) === null || _response$data$result === void 0 ? void 0 : (_response$data$result2 = _response$data$result.data) === null || _response$data$result2 === void 0 ? void 0 : _response$data$result2.recentlyViewed;

                  if (contentList && contentList.length) {
                    writeDataToCache(userId, contentList);
                  }

                  return {
                    ok: response.data.ok,
                    error: false,
                    userId: userId,
                    data: contentList || []
                  };
                })["catch"](function (error) {
                  return handleError(error, isCancel);
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getRecentlyViewed(_x) {
        return _getRecentlyViewed.apply(this, arguments);
      }

      return getRecentlyViewed;
    }(),
    cancel: cancel
  };
}