import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import { isFeatureActive } from '@hmhco/feature-flags';
import { LOGOUT_URL, TEMP_LOGOUT_URL, ZOOM } from '../constants';
/**
 * Function calling revoke-user-access endpoint for given provider
 * @param {string} provider
 * @returns {Promise}
 */

export default function logOut(_x) {
  return _logOut.apply(this, arguments);
}

function _logOut() {
  _logOut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(provider) {
    var _createAxiosCancelabl, client, cancelToken, isDistrictFlagged, checkZoomDistrict;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _createAxiosCancelabl = createAxiosCancelable(), client = _createAxiosCancelabl.client, cancelToken = _createAxiosCancelabl.cancelToken;
            isDistrictFlagged = isFeatureActive('virtualClassroomViaduct');
            checkZoomDistrict = isDistrictFlagged ? "".concat(LOGOUT_URL, "?client=").concat(provider) : "".concat(TEMP_LOGOUT_URL, "?client=").concat(provider);
            return _context.abrupt("return", client.post(provider === ZOOM ? checkZoomDistrict : "".concat(LOGOUT_URL, "?client=").concat(provider), {
              withCredentials: true,
              cancelToken: cancelToken,
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _logOut.apply(this, arguments);
}