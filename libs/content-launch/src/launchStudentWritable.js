import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import fetchParamsAndLaunch from './fetchParamsAndLaunch';
export var STUDENT_LAUNCH_PARAMS = {
  integration: 'writable',
  integrationpoint: 'student-dashboard',
  context: 'coursesection',
  contextid: 'student'
};
export default function launchStudentWritable(_x, _x2, _x3) {
  return _launchStudentWritable.apply(this, arguments);
}

function _launchStudentWritable() {
  _launchStudentWritable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sif, env, languageKey) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetchParamsAndLaunch({
              sif: sif,
              env: env,
              launchParams: STUDENT_LAUNCH_PARAMS,
              customParams: {
                languageKey: languageKey
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchStudentWritable.apply(this, arguments);
}