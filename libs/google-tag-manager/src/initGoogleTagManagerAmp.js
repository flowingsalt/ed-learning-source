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

import TagManager from 'react-gtm-module';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import { isRunningInAmp, isRunningInEd } from '@hmhco/amp-core/src/environmentHelpers';
import { GA_CONTAINER_ID, localArgs, intArgs, certArgs, devCertArgs, prodArgs } from './constants';
/**
 * on AMP Load, google tag manager is initiated, don't run on Ed
 *
 */

var initGoogleTagManagerAmp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _getUserCtx, districtPid, districtId, schoolPid, schoolId, roles, userId, tagManagerProfile, tagManagerArgs;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isRunningInAmp() || isRunningInEd())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _getUserCtx = getUserCtx(), districtPid = _getUserCtx.districtPid, districtId = _getUserCtx.districtId, schoolPid = _getUserCtx.schoolPid, schoolId = _getUserCtx.schoolId, roles = _getUserCtx.roles, userId = _getUserCtx.userId;
            tagManagerProfile = {
              gtmId: GA_CONTAINER_ID,
              dataLayer: {
                districtPid: districtPid,
                districtId: districtId,
                roles: roles,
                schoolPid: schoolPid,
                schoolId: schoolId,
                userId: userId
              }
            };
            tagManagerArgs = {
              local: _objectSpread(_objectSpread({}, tagManagerProfile), localArgs),
              "int": _objectSpread(_objectSpread({}, tagManagerProfile), intArgs),
              cert: _objectSpread(_objectSpread({}, tagManagerProfile), certArgs),
              devCert: _objectSpread(_objectSpread({}, tagManagerProfile), devCertArgs),
              prod: _objectSpread(_objectSpread({}, tagManagerProfile), prodArgs)
            };
            TagManager.initialize(tagManagerArgs[process.env.RUNTIME_ENV || window.RUNTIME_ENV]);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initGoogleTagManagerAmp() {
    return _ref.apply(this, arguments);
  };
}();

export default initGoogleTagManagerAmp;