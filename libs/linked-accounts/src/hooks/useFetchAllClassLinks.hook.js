import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
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

import { useState } from 'react';
import classLinkApi from '@hmhco/viaduct-api/src/classLink/classLinkApi';
import { GOOGLE_CLASSROOM_PROVIDER } from '../constants';
export default function useFetchAllClassLinks() {
  var API = classLinkApi();

  var _useState = useState({
    isLoading: false,
    error: null,
    data: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      results = _useState2[0],
      setResults = _useState2[1];

  var fetchAll = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var response;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setResults(function (prevResults) {
                return _objectSpread(_objectSpread({}, prevResults), {}, {
                  isLoading: true
                });
              });
              _context.next = 4;
              return API.fetchAllClassLinks(GOOGLE_CLASSROOM_PROVIDER);

            case 4:
              response = _context.sent;
              setResults(function (prevResults) {
                return _objectSpread(_objectSpread({}, prevResults), {}, {
                  data: response
                });
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setResults(function (prevResults) {
                return _objectSpread(_objectSpread({}, prevResults), {}, {
                  error: _context.t0,
                  isLoading: false
                });
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function fetchAll() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    fetchAll: fetchAll,
    results: results
  };
}