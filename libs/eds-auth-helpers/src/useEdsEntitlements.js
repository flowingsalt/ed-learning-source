import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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

import { useEffect, useState } from 'react';
import { isFeatureActive } from '@hmhco/feature-flags';
import { getPersonalEntitlements } from '@hnm/product-api';
import createEdsTokens from './createEdsTokens';
export var getTokenAndEntitlements = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var isCTS, _getPersonalEntitleme, request;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isCTS = true; // ensure EDS auth token is present and valid

            _context.next = 3;
            return createEdsTokens(isCTS);

          case 3:
            _getPersonalEntitleme = getPersonalEntitlements(), request = _getPersonalEntitleme.request; // then fetch entitlements from EDS

            return _context.abrupt("return", request(isCTS));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTokenAndEntitlements() {
    return _ref.apply(this, arguments);
  };
}();
var initialState = {
  isLoading: false,
  error: null,
  data: []
};
/**
 * Will fetch user entitlements
 * Return value will be
 *
 * @param {array} entitledProducts CTS product list
 * @returns {array} array of EDS entitlements
 */

var useEdsEntitlements = function useEdsEntitlements(entitledProducts) {
  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      dataState = _useState2[0],
      setDataState = _useState2[1];

  useEffect(function () {
    if ((entitledProducts === null || entitledProducts === void 0 ? void 0 : entitledProducts.length) && isFeatureActive('licensingApp', true)) {
      setDataState(_objectSpread(_objectSpread({}, initialState), {}, {
        isLoading: true
      }));
      getTokenAndEntitlements().then(function (data) {
        setDataState(_objectSpread(_objectSpread({}, initialState), {}, {
          data: data
        }));
      })["catch"](function (errorReport) {
        setDataState(_objectSpread(_objectSpread({}, initialState), {}, {
          error: errorReport
        }));
      });
    }
  }, [entitledProducts === null || entitledProducts === void 0 ? void 0 : entitledProducts.length]);
  return dataState;
};

export default useEdsEntitlements;