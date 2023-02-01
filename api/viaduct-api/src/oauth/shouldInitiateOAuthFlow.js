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

import { createAxiosCancelable, getAuthHeader } from '@hmhco/core-network/src/axiosHelpers';
import { isFeatureActive } from '@hmhco/feature-flags';
import { OAUTH_SHOULD_INITIAL_OATH_FLOW_URL, TEMP_OAUTH_SHOULD_INITIAL_OATH_FLOW_URL, ZOOM } from '../constants';
/**
 * @typedef OauthStatus
 * @property {bool}   connected - is user account connected to third party service
 * @property {string} redirectUrl - third party login url
 * @property {string} provider - available provider value for that user
 */

/**
 * Function checks if user account is connected with third party service
 * @param {string} provider name
 * @returns {Promise<OauthStatus>}
 */

export default function shouldInitiateOAuthFlow(_x, _x2) {
  return _shouldInitiateOAuthFlow.apply(this, arguments);
}

function _shouldInitiateOAuthFlow() {
  _shouldInitiateOAuthFlow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(provider, sif) {
    var _createAxiosCancelabl, client, cancelToken, isDistrictFlagged, checkZoomDistrict;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _createAxiosCancelabl = createAxiosCancelable(), client = _createAxiosCancelabl.client, cancelToken = _createAxiosCancelabl.cancelToken;
            isDistrictFlagged = isFeatureActive('virtualClassroomViaduct');
            checkZoomDistrict = isDistrictFlagged ? "".concat(OAUTH_SHOULD_INITIAL_OATH_FLOW_URL, "?client=").concat(provider) : "".concat(TEMP_OAUTH_SHOULD_INITIAL_OATH_FLOW_URL, "?client=").concat(provider);
            return _context.abrupt("return", client.post(provider === ZOOM ? checkZoomDistrict : "".concat(OAUTH_SHOULD_INITIAL_OATH_FLOW_URL, "?client=").concat(provider), null, _objectSpread(_objectSpread({}, getAuthHeader(sif)), {}, {
              withCredentials: true,
              cancelToken: cancelToken
            })).then(function (_ref) {
              var data = _ref.data;
              return data;
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _shouldInitiateOAuthFlow.apply(this, arguments);
}