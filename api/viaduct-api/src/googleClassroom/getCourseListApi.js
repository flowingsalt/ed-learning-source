import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import passthroughApi from '../utils/passthroughApi';
import { CLASSROOM_API_VERSION, GOOGLE_CLASSROOM_CLIENT } from '../constants';

var getCourseListApi = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(fields) {
    var config,
        requestBodyParameters,
        _passthroughApi,
        passthrough,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            requestBodyParameters = {
              requestClient: GOOGLE_CLASSROOM_CLIENT,
              requestUrl: "".concat(CLASSROOM_API_VERSION, "/courses"),
              requestHttpVerb: 'GET',
              query: fields
            };
            _passthroughApi = passthroughApi(), passthrough = _passthroughApi.passthrough;
            return _context.abrupt("return", passthrough(requestBodyParameters, config));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCourseListApi(_x) {
    return _ref.apply(this, arguments);
  };
}();

export default getCourseListApi;