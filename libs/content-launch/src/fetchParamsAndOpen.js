import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
/* eslint-disable camelcase */

import { getLaunchDetails_1_3_0 } from 'orchid-common/api/contentProviderApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
export default function fetchParamsAndOpen(_x) {
  return _fetchParamsAndOpen.apply(this, arguments);
}

function _fetchParamsAndOpen() {
  _fetchParamsAndOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var env, sif, launchParams, _ref$customParams, customParams, partnerWindow, response, login_init_uri;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            env = _ref.env, sif = _ref.sif, launchParams = _ref.launchParams, _ref$customParams = _ref.customParams, customParams = _ref$customParams === void 0 ? {} : _ref$customParams;
            _context.prev = 1;
            partnerWindow = window.open('about:blank');
            _context.next = 5;
            return getLaunchDetails_1_3_0(env, sif, launchParams, customParams);

          case 5:
            response = _context.sent;
            login_init_uri = response.login_init_uri;
            return _context.abrupt("return", login_init_uri ? partnerWindow.location.replace(login_init_uri) : logErrorWithContext('fetchParamsAndOpen', [{
              key: 'errorMessage',
              value: 'no login_init_uri'
            }]));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {
              error: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));
  return _fetchParamsAndOpen.apply(this, arguments);
}