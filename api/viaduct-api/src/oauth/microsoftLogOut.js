import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import { MICROSOFT_LOGOUT_URL } from '../constants';
/**
 * Function calling
 * @param {string} provider
 * @returns {Promise}
 */

export default function microsoftLogOut(_x) {
  return _microsoftLogOut.apply(this, arguments);
}

function _microsoftLogOut() {
  _microsoftLogOut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(provider) {
    var _createAxiosCancelabl, client, cancelToken;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _createAxiosCancelabl = createAxiosCancelable(), client = _createAxiosCancelabl.client, cancelToken = _createAxiosCancelabl.cancelToken;
            return _context.abrupt("return", client.get("".concat(MICROSOFT_LOGOUT_URL, "?client=").concat(provider), {
              withCredentials: true,
              cancelToken: cancelToken,
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _microsoftLogOut.apply(this, arguments);
}