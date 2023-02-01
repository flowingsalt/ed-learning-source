import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import fetchParamsAndLaunch from './fetchParamsAndLaunch';
export var STUDENT_LAUNCH_PARAMS = {
  integration: 'read180',
  integrationpoint: 'student',
  context: 'coursesection',
  contextid: 'na'
};
export default function launchRead180(_x, _x2, _x3) {
  return _launchRead.apply(this, arguments);
}

function _launchRead() {
  _launchRead = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sif, env, stage) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetchParamsAndLaunch({
              sif: sif,
              env: env,
              launchParams: STUDENT_LAUNCH_PARAMS,
              customParams: {
                stage: stage,
                target: 'read180_student'
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchRead.apply(this, arguments);
}