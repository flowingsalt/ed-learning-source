import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { hasAuth, hasEntitlements, setEntitlements } from '@hnm/session-context';
import { getPersonalEntitlements } from '@hnm/product-api';
/**
 * Create HCP_USER_ENTITLEMENTS session variable for loading HCP apps
 *
 * - Ensure HCP_USER_ENTITLEMENTS session variable is present
 * - if necessary obtain EDS enttilements by calling the graphQL endpoint
 *
 * @returns {boolean} true for success, failure otherwise
 */

var createEDSEntitlements = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var isCTS,
        _getPersonalEntitleme,
        request,
        entitlements,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isCTS = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;

            if (!(!isCTS || !hasAuth())) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", false);

          case 3:
            if (hasEntitlements()) {
              _context.next = 9;
              break;
            }

            _getPersonalEntitleme = getPersonalEntitlements(), request = _getPersonalEntitleme.request;
            _context.next = 7;
            return request(isCTS);

          case 7:
            entitlements = _context.sent;
            setEntitlements(entitlements);

          case 9:
            return _context.abrupt("return", true);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createEDSEntitlements() {
    return _ref.apply(this, arguments);
  };
}();

export default createEDSEntitlements;