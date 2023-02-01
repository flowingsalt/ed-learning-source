import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import fetchParamsAndLaunch from './fetchParamsAndLaunch';
export var STUDENT_LAUNCH_PARAMS = {
  integration: 'math180',
  integrationpoint: 'student',
  context: 'coursesection',
  contextid: 'na'
};
export default function launchMath180(_x, _x2) {
  return _launchMath.apply(this, arguments);
}

function _launchMath() {
  _launchMath = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sif, env) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetchParamsAndLaunch({
              sif: sif,
              env: env,
              launchParams: STUDENT_LAUNCH_PARAMS
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchMath.apply(this, arguments);
}