import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import fetchParamsAndLaunch from './fetchParamsAndLaunch';
export var STUDENT_LAUNCH_PARAMS = {
  integration: 'waggle',
  integrationpoint: 'tool',
  context: 'role',
  contextid: 'student'
};
export default function launchStudentWaggle(_x) {
  return _launchStudentWaggle.apply(this, arguments);
}

function _launchStudentWaggle() {
  _launchStudentWaggle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var sif, env;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sif = _ref.sif, env = _ref.env;
            return _context.abrupt("return", fetchParamsAndLaunch({
              env: env,
              sif: sif,
              launchParams: STUDENT_LAUNCH_PARAMS
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchStudentWaggle.apply(this, arguments);
}