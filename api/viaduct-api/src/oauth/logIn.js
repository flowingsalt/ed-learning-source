import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import shouldInitiateOAuthFlow from './shouldInitiateOAuthFlow';
import openThirdPartyLogin from '../utils/openThirdPartyLogin';
/**
 * Function initiates third party login in popup window and checks if it succeeded
 * @param {string} redirectUrl - third party login url address
 * @param {string} provider - third party provider name
 * @returns {Promise} - rejects when login not successful
 */

export default function logIn(_x, _x2, _x3) {
  return _logIn.apply(this, arguments);
}

function _logIn() {
  _logIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(redirectUrl, provider, sif) {
    var result, logInSuccess;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return openThirdPartyLogin(redirectUrl);

          case 2:
            _context.next = 4;
            return shouldInitiateOAuthFlow(provider, sif);

          case 4:
            result = _context.sent;
            logInSuccess = result.connected; // Window was closed by user

            if (logInSuccess) {
              _context.next = 8;
              break;
            }

            throw new Error('Login not finished');

          case 8:
            return _context.abrupt("return", result);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _logIn.apply(this, arguments);
}