import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { dmpsBatchCancellable } from '@hmhco/district-settings-api/src/dmpsBatchApi';
import { SETTINGS_VALUES_QUERY } from '@hmhco/district-settings-api/src/constants';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { getContextByUserContext, formatResponses } from './dmps.utils';
export default function fetchDmpsBatch(_x) {
  return _fetchDmpsBatch.apply(this, arguments);
}

function _fetchDmpsBatch() {
  _fetchDmpsBatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(userContext) {
    var dmpsSettingsKeys,
        _dmpsBatchCancellable,
        fetchOrSaveDmpsBatch,
        result,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dmpsSettingsKeys = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
            _dmpsBatchCancellable = dmpsBatchCancellable(), fetchOrSaveDmpsBatch = _dmpsBatchCancellable.fetchOrSaveDmpsBatch;
            _context.prev = 2;
            _context.next = 5;
            return fetchOrSaveDmpsBatch(getContextByUserContext(userContext), userContext, dmpsSettingsKeys, SETTINGS_VALUES_QUERY);

          case 5:
            result = _context.sent;
            return _context.abrupt("return", formatResponses(result));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            logErrorWithContext('Error fetching DmpsBatch');
            throw new Error();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _fetchDmpsBatch.apply(this, arguments);
}