import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
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
/* eslint-disable camelcase */


import { getLaunchDetails_1_3_0 } from 'orchid-common/api/contentProviderApi';
import { postTheForm_1_3_0 } from './contentLaunchWithSideEffects';
export default function fetchParamsAndLaunch(_x) {
  return _fetchParamsAndLaunch.apply(this, arguments);
}

function _fetchParamsAndLaunch() {
  _fetchParamsAndLaunch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var env, sif, launchParams, _ref$customParams, customParams, response, target, targetURL, id_token, login_init_uri, allOtherParams;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            env = _ref.env, sif = _ref.sif, launchParams = _ref.launchParams, _ref$customParams = _ref.customParams, customParams = _ref$customParams === void 0 ? {} : _ref$customParams;
            _context.prev = 1;
            _context.next = 4;
            return getLaunchDetails_1_3_0(env, sif, launchParams, customParams);

          case 4:
            response = _context.sent;
            target = customParams.target;
            targetURL = response.targetURL, id_token = response.id_token, login_init_uri = response.login_init_uri, allOtherParams = _objectWithoutProperties(response, ["targetURL", "id_token", "login_init_uri"]);

            if (!login_init_uri) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", window.open(login_init_uri));

          case 9:
            return _context.abrupt("return", postTheForm_1_3_0(_objectSpread({
              id_token: id_token
            }, allOtherParams), {
              targetURL: targetURL,
              target: target
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {
              error: _context.t0
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _fetchParamsAndLaunch.apply(this, arguments);
}