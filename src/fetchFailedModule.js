import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import * as singleSpa from 'single-spa';
import { retryDelay, retryLimit } from './utils/retryDelay'; // Keeps track of active apps who's modules have failed to load

export var appFailedToLoad = {};
export var fetchFailedModule = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(appOrParcelName, fetchCallback) {
    var i;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /**
             * When unloading a single app:
             * singleSpa.unloadApplication will refetch all failed modules (for all active apps).
             * We only want to refetch one module at a time so we can control the timing of the requests.
             * So we will manually refetch using Import() or System.Import().
             * Then we'll re-bootstrap the app using singleSpa.unloadApplication.
             */
            appFailedToLoad[appOrParcelName] = true;
            i = 0;

          case 2:
            if (!(i < retryLimit)) {
              _context.next = 19;
              break;
            }

            _context.next = 5;
            return retryDelay(i + 1);

          case 5:
            _context.prev = 5;
            _context.next = 8;
            return fetchCallback();

          case 8:
            appFailedToLoad[appOrParcelName] = false;
            _context.next = 11;
            return singleSpa.unloadApplication(appOrParcelName);

          case 11:
            return _context.abrupt("break", 19);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](5);

          case 16:
            i += 1;
            _context.next = 2;
            break;

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 14]]);
  }));

  return function fetchFailedModule(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
export var hasAppFailedToLoad = function hasAppFailedToLoad(appOrParcelName) {
  return appFailedToLoad[appOrParcelName];
};