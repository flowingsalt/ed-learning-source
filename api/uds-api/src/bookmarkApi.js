import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
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
import { getFetchBookmarkUrl, getSetBookmarkUrl } from './config';
export var APP_NAME = 'ed-ui-bookmarks';
export var DISCOVER_BOOKMARK_PROGRAM_KEY = "".concat(APP_NAME, "-discover");
export function getRequestHeaders(sif, config) {
  return _objectSpread(_objectSpread({}, config), getAuthHeader(sif));
}

function sendBookmarkRequest(url, headers, props) {
  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      isCancel = _createAxiosCancelabl.isCancel,
      cancelToken = _createAxiosCancelabl.cancelToken;

  var payload = _objectSpread({
    app: APP_NAME
  }, props);

  return client.post(url, payload, _objectSpread(_objectSpread({}, headers), {}, {
    cancelToken: cancelToken
  })).then(function (response) {
    var _response$data, _response$data2;

    return {
      ok: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.ok,
      error: false,
      data: response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.result
    };
  })["catch"](function (error) {
    return handleError(error, isCancel);
  });
}

function getBookmark(_x) {
  return _getBookmark.apply(this, arguments);
}

function _getBookmark() {
  _getBookmark = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var env, userId, sif, programId, _ref$config, config, bookmarkKey, key;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            env = _ref.env, userId = _ref.userId, sif = _ref.sif, programId = _ref.programId, _ref$config = _ref.config, config = _ref$config === void 0 ? {} : _ref$config;
            bookmarkKey = programId !== null && programId !== void 0 ? programId : 'program';
            key = [DISCOVER_BOOKMARK_PROGRAM_KEY, bookmarkKey].join('-');
            return _context.abrupt("return", sendBookmarkRequest(getFetchBookmarkUrl(env), getRequestHeaders(sif, config), {
              requestor: userId,
              key: key
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getBookmark.apply(this, arguments);
}

function setBookmark(_x2) {
  return _setBookmark.apply(this, arguments);
}

function _setBookmark() {
  _setBookmark = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref2) {
    var env, programId, sif, _ref2$levelData, levelData, _ref2$config, config, bookmarkKey, key, data;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            env = _ref2.env, programId = _ref2.programId, sif = _ref2.sif, _ref2$levelData = _ref2.levelData, levelData = _ref2$levelData === void 0 ? '' : _ref2$levelData, _ref2$config = _ref2.config, config = _ref2$config === void 0 ? {} : _ref2$config;
            bookmarkKey = levelData === '' ? 'program' : programId;
            key = [DISCOVER_BOOKMARK_PROGRAM_KEY, bookmarkKey].join('-');
            data = levelData === '' ? {
              identifier: programId
            } : levelData;
            return _context2.abrupt("return", sendBookmarkRequest(getSetBookmarkUrl(env), getRequestHeaders(sif, config), {
              data: data,
              key: key
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _setBookmark.apply(this, arguments);
}

export default function bookmarkApiCancelable() {
  var _createAxiosCancelabl2 = createAxiosCancelable(),
      cancel = _createAxiosCancelabl2.cancel;

  return {
    getBookmark: getBookmark,
    setBookmark: setBookmark,
    cancel: cancel
  };
}