import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import tokenExchangeApi from '@hmhco/hcp-token-exchange-api/src/tokenExchangeApi';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import { hasAuth, setAuth, getAuth } from '@hnm/session-context';
import JWT from '@hmh/eds-login-js/lib/lib/jwt';
export var hasExpired = function hasExpired() {
  var _authContext$accessTo, _authContext$accessTo2;

  var _getAuth = getAuth(),
      authContext = _getAuth.authContext;

  var expiration = authContext === null || authContext === void 0 ? void 0 : (_authContext$accessTo = authContext.accessToken) === null || _authContext$accessTo === void 0 ? void 0 : (_authContext$accessTo2 = _authContext$accessTo.claims) === null || _authContext$accessTo2 === void 0 ? void 0 : _authContext$accessTo2.exp;

  if (!expiration || expiration <= 0) {
    return true;
  } // is expiration in less than 5 min?


  return expiration * 1000 < Date.now() + 5 * 60 * 1000;
};
/**
 * Create HCP_AUTH session variable for loading HCP apps
 *
 * - Ensure HCP_AUTH session variable is present
 * - if necessary obtain EDS token by calling the exchange token endpoint
 *
 * @returns {boolean} true for success, failure otherwise
 */

var createEdsTokens = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var isCTS,
        userContext,
        _tokenExchangeApi,
        getEdsToken,
        response,
        edsToken,
        codeJWT,
        claims,
        userId,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isCTS = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;

            if (isCTS) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", false);

          case 3:
            userContext = getUserCtx();

            if (userContext === null || userContext === void 0 ? void 0 : userContext.rawToken) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", false);

          case 6:
            if (!(!hasAuth() || hasExpired())) {
              _context.next = 18;
              break;
            }

            _tokenExchangeApi = tokenExchangeApi(), getEdsToken = _tokenExchangeApi.getEdsToken;
            _context.next = 10;
            return getEdsToken();

          case 10:
            response = _context.sent;

            if (response === null || response === void 0 ? void 0 : response.access_token) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", false);

          case 13:
            edsToken = response.access_token;
            codeJWT = new JWT(edsToken);
            claims = codeJWT.claims;
            userId = claims.sub;
            setAuth({
              token: edsToken,
              userId: userId,
              // user id EDS
              authContext: {
                accessToken: {
                  encoded: edsToken,
                  claims: claims
                },
                idToken: {
                  encoded: edsToken,
                  claims: claims
                },
                user: {
                  id: userId,
                  name: claims.name,
                  role: claims.role
                },
                sessionId: claims.sid
              }
            });

          case 18:
            return _context.abrupt("return", true);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createEdsTokens() {
    return _ref.apply(this, arguments);
  };
}();

export default createEdsTokens;