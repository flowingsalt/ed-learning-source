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
import getRecentlyViewedContentApiCancelable from './getRecentlyViewedContentApiCancelable';
import { setRecentlyViewedContentUrl, APP_NAME } from './config';
import { isItemLatestInCache, writeDataToCache } from './cache';
import getUpdatedList from './utils/getUpdatedList';
export default function setRecentlyViewedContentApiCancelable() {
  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  return {
    setRecentlyViewed: function () {
      var _setRecentlyViewed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
        var userRefId, sif, env, contentObject, _ref$config, config, _getRecentlyViewedCon, getRecentlyViewed, recentlyViewed, existingList, useCache, updatedList, payload;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userRefId = _ref.userRefId, sif = _ref.sif, env = _ref.env, contentObject = _ref.contentObject, _ref$config = _ref.config, config = _ref$config === void 0 ? {} : _ref$config; // We need to return the list every time this function is called, so we must first retrieve it.

                _getRecentlyViewedCon = getRecentlyViewedContentApiCancelable(), getRecentlyViewed = _getRecentlyViewedCon.getRecentlyViewed;
                _context.next = 4;
                return getRecentlyViewed({
                  userId: userRefId,
                  sif: sif,
                  env: env
                });

              case 4:
                recentlyViewed = _context.sent;

                if (!(recentlyViewed === null || recentlyViewed === void 0 ? void 0 : recentlyViewed.isCancelled)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", {
                  isCancelled: true
                });

              case 7:
                existingList = recentlyViewed.data; // This just checks that the user isn't opening the same piece of content as last time during current session

                useCache = isItemLatestInCache(userRefId, contentObject);

                if (!useCache) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", Promise.resolve({
                  ok: true,
                  data: existingList
                }));

              case 11:
                updatedList = getUpdatedList(contentObject, existingList);
                payload = {
                  app: APP_NAME,
                  key: userRefId,
                  data: {
                    recentlyViewed: updatedList
                  }
                };
                return _context.abrupt("return", client.post(setRecentlyViewedContentUrl(env), payload, _objectSpread(_objectSpread(_objectSpread({}, config), getAuthHeader(sif)), {}, {
                  cancelToken: cancelToken
                })).then(function (response) {
                  // Write to cache before returning the data
                  writeDataToCache(userRefId, updatedList);
                  return {
                    ok: response.data.ok,
                    data: updatedList
                  };
                })["catch"](function (error) {
                  return handleError(error, isCancel);
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function setRecentlyViewed(_x) {
        return _setRecentlyViewed.apply(this, arguments);
      }

      return setRecentlyViewed;
    }(),
    cancel: cancel
  };
}