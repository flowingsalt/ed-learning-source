import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import httpStatusCodes from '../../enums/httpStatusCodes';
import xhrClient from '../xhrClient';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    plsAuthors = _getConfigForCurrentE.plsAuthors;

var defaultErrorHandler = function defaultErrorHandler(error) {
  return logErrorWithContext('plsAuthorsFetch', [{
    key: 'errorMessage',
    value: error
  }]);
};
/**
 * Allows to fetch authors from the PLS Authors service.
 * @param {*} authors - array of specific author Ids to be retrieved. Provide empty array for all authors.
 * @param {*} redirectOnFailure - in case of a failure returns NO_CONTENT code if redirectOnFailure is true, an empty array otherwise
 * @returns List of authors
 */


export default function authorsFetcher(_x, _x2) {
  return _authorsFetcher.apply(this, arguments);
}

function _authorsFetcher() {
  _authorsFetcher = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(authors, redirectOnFailure) {
    var errorHandler,
        param,
        endpoint,
        response,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errorHandler = _args.length > 2 && _args[2] !== undefined ? _args[2] : defaultErrorHandler;
            param = authors.join(',');
            _context.prev = 2;
            endpoint = authors.length > 0 ? "".concat(plsAuthors, "/").concat(param) : "".concat(plsAuthors);
            _context.next = 6;
            return xhrClient.get(endpoint);

          case 6:
            response = _context.sent;

            if (!(response.status === httpStatusCodes.NO_CONTENT)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", redirectOnFailure ? httpStatusCodes.NO_CONTENT : []);

          case 9:
            return _context.abrupt("return", response.data);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            errorHandler(_context.t0);
            return _context.abrupt("return", []);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 12]]);
  }));
  return _authorsFetcher.apply(this, arguments);
}