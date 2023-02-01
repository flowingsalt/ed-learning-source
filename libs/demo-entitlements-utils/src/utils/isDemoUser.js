import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
/* eslint-disable import/prefer-default-export */

import { isLegacyPlatformToken, getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import isDemoApi from '@hmhco/demo-entitlements-api/src/isDemoApi';
/**
 * @deprecated
 *
 * Instead you should use feature-flags: packages/libs/feature-flags/README.md
 */

export var isDemoUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _getUserCtx, sif, _isDemoApi, isDemoCached, _yield, demoEntitled;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getUserCtx = getUserCtx(), sif = _getUserCtx.sif;
            _isDemoApi = isDemoApi(), isDemoCached = _isDemoApi.isDemoCached; // NOTE: HMO doesn't have a demo entitlements or a concept of feature flagging so we need to treat legacy users as NON demo

            _context.next = 4;
            return isLegacyPlatformToken(sif) ? Promise.resolve({
              demoEntitled: false
            }) : isDemoCached();

          case 4:
            _yield = _context.sent;
            demoEntitled = _yield.demoEntitled;
            return _context.abrupt("return", demoEntitled);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function isDemoUser() {
    return _ref.apply(this, arguments);
  };
}();