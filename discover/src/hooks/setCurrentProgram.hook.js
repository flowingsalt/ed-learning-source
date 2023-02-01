import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import bookmarkApiCancelable from '@hmhco/uds-api/src/bookmarkApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';

var setCurrentProgram = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(userId, sif, env, programId) {
    var _bookmarkApiCancelabl, setBookmark, currentProgram;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _bookmarkApiCancelabl = bookmarkApiCancelable(), setBookmark = _bookmarkApiCancelabl.setBookmark;
            _context.prev = 1;
            currentProgram = {
              data: {
                identifier: programId
              }
            };
            logMessageWithContext("Discover: set bookmarks - user ID = ".concat(userId, " - program ID = ").concat(programId));
            _context.next = 6;
            return setBookmark({
              userId: userId,
              sif: sif,
              env: env,
              programId: programId,
              currentProgram: currentProgram
            });

          case 6:
            return _context.abrupt("return", _context.sent);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            logErrorWithContext('set bookmark data error on Discover', [{
              key: 'errorMessage',
              value: _context.t0
            }]);
            return _context.abrupt("return", {
              error: true
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function setCurrentProgram(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

export default setCurrentProgram;