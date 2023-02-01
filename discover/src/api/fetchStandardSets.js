import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import flatStandardsApi from '@hmhco/onesearch-standards-api/src/flatStandardsApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';

var fetchStandardSets = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(programId, hasIntegrations) {
    var _flatStandardsApi, getStandardSetsForProgram, queryParams;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _flatStandardsApi = flatStandardsApi(), getStandardSetsForProgram = _flatStandardsApi.getStandardSetsForProgram;
            _context.prev = 1;
            queryParams = hasIntegrations ? {
              showIntegratedResources: hasIntegrations
            } : undefined;
            _context.next = 5;
            return getStandardSetsForProgram(programId, queryParams);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            logErrorWithContext('fetch standard sets error', [{
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

  return function fetchStandardSets(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

export default fetchStandardSets;