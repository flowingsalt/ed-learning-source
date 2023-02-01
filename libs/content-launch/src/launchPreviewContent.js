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
/* eslint camelcase: 0 */


import { getLaunchDetails_1_3_0, getLaunchDetails } from 'orchid-common/api/contentProviderApi';
import { postTheForm_1_3_0, postTheForm } from './contentLaunchWithSideEffects';
export var launchPreviewContentDeprecated = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resource_id, sif) {
    var errorCallback,
        response,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errorCallback = _args.length > 2 && _args[2] !== undefined ? _args[2] : function () {};
            _context.prev = 1;
            _context.next = 4;
            return getLaunchDetails(resource_id, sif);

          case 4:
            response = _context.sent;
            return _context.abrupt("return", postTheForm(response, resource_id));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", errorCallback(true));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function launchPreviewContentDeprecated(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
export var launchAssessmentViewContent = function launchAssessmentViewContent(assessment) {
  var _ref2 = assessment || '',
      env = _ref2.env;

  if (env) {
    localStorage.setItem("com.hmhco.security.openID.authInfo.".concat(env), sessionStorage.getItem("com.hmhco.security.openID.authInfo.".concat(env)));
  }

  window.sessionStorage.setItem('learnosityAssessment', JSON.stringify(assessment));
  window.open("/ui/#/assessment-view/preview");
};
export default function launchPreviewContent(_x3, _x4, _x5) {
  return _launchPreviewContent.apply(this, arguments);
}

function _launchPreviewContent() {
  _launchPreviewContent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(resource_id, sif, env) {
    var errorCallback,
        customLaunchParams,
        launchParams,
        response,
        targetURL,
        id_token,
        _args2 = arguments;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            errorCallback = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : function () {};
            customLaunchParams = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : {};
            launchParams = {
              integration: 'ed',
              integrationpoint: 'content',
              context: 'coursesection',
              contextid: 'na'
            };
            _context2.prev = 3;
            _context2.next = 6;
            return getLaunchDetails_1_3_0(env, sif, launchParams, _objectSpread({
              resource_id: resource_id
            }, customLaunchParams));

          case 6:
            response = _context2.sent;
            targetURL = response.targetURL, id_token = response.id_token;
            return _context2.abrupt("return", postTheForm_1_3_0({
              id_token: id_token
            }, {
              target: resource_id,
              targetURL: targetURL
            }));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", errorCallback(true));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 11]]);
  }));
  return _launchPreviewContent.apply(this, arguments);
}