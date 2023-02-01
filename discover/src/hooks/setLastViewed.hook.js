import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import bookmarkApiCancelable from '@hmhco/uds-api/src/bookmarkApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';

var setLastViewed = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(userId, sif, env, programId, data) {
    var _bookmarkApiCancelabl, setBookmark;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _bookmarkApiCancelabl = bookmarkApiCancelable(), setBookmark = _bookmarkApiCancelabl.setBookmark;
            _context.prev = 1;
            logMessageWithContext("Discover: set last viewed - user ID = ".concat(userId, " - program ID = ").concat(programId, " - level = ").concat(data));
            _context.next = 5;
            return setBookmark({
              userId: userId,
              sif: sif,
              env: env,
              programId: programId,
              levelData: {
                level: data.toString()
              }
            });

          case 5:
            return _context.abrupt("return", _context.sent);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            logErrorWithContext('set bookmark data error on Discover', [{
              key: 'errorMessage',
              value: _context.t0
            }]);
            return _context.abrupt("return", {
              error: true
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function setLastViewed(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

export default setLastViewed;