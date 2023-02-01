import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import fetchParamsAndLaunch from './fetchParamsAndLaunch';
export var buildStudentLaunchParams = function buildStudentLaunchParams(sectionId) {
  return {
    integration: 'writable',
    integrationpoint: 'dashboard',
    context: 'coursesection',
    contextid: sectionId || 'none'
  };
};
export default function launchTeacherWritable(_x, _x2, _x3, _x4) {
  return _launchTeacherWritable.apply(this, arguments);
}

function _launchTeacherWritable() {
  _launchTeacherWritable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sif, env, sectionId, programId) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetchParamsAndLaunch({
              sif: sif,
              env: env,
              launchParams: buildStudentLaunchParams(sectionId),
              customParams: {
                type: 'Writable',
                program_code: programId
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchTeacherWritable.apply(this, arguments);
}