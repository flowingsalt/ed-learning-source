import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { clearCacheContainingKey } from '@hmhco/core-network/src/axiosHelpers';
import { UPDATE_ADMINISTRATOR, UPDATE_ROSTERS, UPDATE_STUDENT, UPDATE_TEACHER, UPDATE_PROGRAM_SETTINGS } from './actionsAndCacheKeyValues';
import getCacheKeysToClear from './getCacheKeysToClear';

var clearCacheKeysForRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(requestAction) {
    var keysToClear;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            keysToClear = getCacheKeysToClear(requestAction);

            if (!(keysToClear && keysToClear.length > 0)) {
              _context2.next = 4;
              break;
            }

            _context2.next = 4;
            return keysToClear.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(keyToClear) {
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return clearCacheContainingKey(keyToClear);

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function clearCacheKeysForRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

export var clearCacheAfterRosteringActions = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return clearCacheKeysForRequest(UPDATE_ROSTERS);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function clearCacheAfterRosteringActions() {
    return _ref3.apply(this, arguments);
  };
}();
export var clearTeachersCacheAfterAdminActions = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return clearCacheKeysForRequest(UPDATE_TEACHER);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function clearTeachersCacheAfterAdminActions() {
    return _ref4.apply(this, arguments);
  };
}();
export var clearStudentsCacheAfterAdminActions = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return clearCacheKeysForRequest(UPDATE_STUDENT);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function clearStudentsCacheAfterAdminActions() {
    return _ref5.apply(this, arguments);
  };
}();
export var clearAdminsCacheAfterAdminActions = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return clearCacheKeysForRequest(UPDATE_ADMINISTRATOR);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function clearAdminsCacheAfterAdminActions() {
    return _ref6.apply(this, arguments);
  };
}();
export var clearManifestsCacheAfterProgramSettingsActions = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
    return _regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return clearCacheKeysForRequest(UPDATE_PROGRAM_SETTINGS);

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function clearManifestsCacheAfterProgramSettingsActions() {
    return _ref7.apply(this, arguments);
  };
}(); // export any other functions for dynamic clearing actions here...

export default clearCacheKeysForRequest;