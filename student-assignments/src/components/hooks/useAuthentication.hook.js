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
import shouldInitiateOAuthFlow from '@hmhco/viaduct-api/src/oauth/shouldInitiateOAuthFlow';
import { logOut } from '@hmhco/viaduct-api/src/oauth';
import logIn from '@hmhco/viaduct-api/src/oauth/logIn';
import { GOOGLE_CLASSROOM_PROVIDER } from '../../constants';
var initialState = {
  connected: false,
  sufficientScopes: false,
  fetchAccount: {
    isLoading: false,
    success: false,
    error: null
  },
  signIn: {
    isLoading: false,
    success: false,
    error: null
  },
  signOut: {
    isLoading: false,
    success: false,
    error: null
  }
};
export default function useAuthentication() {
  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      authResults = _useState2[0],
      setAuthResults = _useState2[1];

  var checkAuthentication = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setAuthResults(_objectSpread(_objectSpread({}, authResults), {}, {
                fetchAccount: {
                  isLoading: true,
                  success: false,
                  error: null
                }
              }));
              shouldInitiateOAuthFlow(GOOGLE_CLASSROOM_PROVIDER).then(function (result) {
                setAuthResults(_objectSpread(_objectSpread({}, authResults), {}, {
                  fetchAccount: {
                    isLoading: false,
                    success: true,
                    error: null
                  },
                  connected: result.connected,
                  sufficientScopes: result.sufficientScopes
                }));
              })["catch"](function (error) {
                setAuthResults(_objectSpread(_objectSpread({}, initialState), {}, {
                  fetchAccount: {
                    isLoading: false,
                    success: false,
                    error: error
                  }
                }));
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkAuthentication() {
      return _ref.apply(this, arguments);
    };
  }();

  var authSignIn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var authResponse, loginResponse;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setAuthResults(_objectSpread(_objectSpread({}, authResults), {}, {
                signIn: {
                  isLoading: true,
                  success: false,
                  error: null
                }
              }));
              _context2.next = 4;
              return shouldInitiateOAuthFlow(GOOGLE_CLASSROOM_PROVIDER);

            case 4:
              authResponse = _context2.sent;
              _context2.next = 7;
              return logIn(authResponse.redirectUrl, GOOGLE_CLASSROOM_PROVIDER);

            case 7:
              loginResponse = _context2.sent;
              setAuthResults(_objectSpread(_objectSpread({}, authResults), {}, {
                signIn: {
                  isLoading: false,
                  success: true,
                  error: null
                },
                connected: loginResponse.connected,
                sufficientScopes: loginResponse.sufficientScopes
              }));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setAuthResults(_objectSpread(_objectSpread({}, initialState), {}, {
                signIn: {
                  isLoading: false,
                  success: false,
                  error: _context2.t0
                }
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function authSignIn() {
      return _ref2.apply(this, arguments);
    };
  }();

  var signOut = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var result;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setAuthResults(_objectSpread(_objectSpread({}, authResults), {}, {
                signOut: {
                  isLoading: true,
                  error: null,
                  success: false
                }
              }));
              _context3.next = 4;
              return logOut(GOOGLE_CLASSROOM_PROVIDER);

            case 4:
              result = _context3.sent;
              setAuthResults(_objectSpread(_objectSpread({}, authResults), {}, {
                signOut: {
                  isLoading: false,
                  error: null,
                  success: true
                },
                connected: result.connected,
                sufficientScopes: result.sufficientScopes
              }));
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              setAuthResults(_objectSpread(_objectSpread({}, initialState), {}, {
                signOut: {
                  isLoading: false,
                  error: _context3.t0,
                  success: false
                }
              }));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function signOut() {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    checkAuthentication: checkAuthentication,
    authSignIn: authSignIn,
    signOut: signOut,
    authResults: authResults
  };
}