import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import fetchParamsAndLaunch from './fetchParamsAndLaunch';
export var buildTeacherLaunchParams = function buildTeacherLaunchParams(sectionId) {
  return {
    integration: 'waggle',
    integrationpoint: 'tool',
    context: 'coursesection',
    contextid: sectionId
  };
};
export default function launchTeacherWaggle(_x) {
  return _launchTeacherWaggle.apply(this, arguments);
}

function _launchTeacherWaggle() {
  _launchTeacherWaggle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var sif, env, sectionId;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sif = _ref.sif, env = _ref.env, sectionId = _ref.sectionId;
            return _context.abrupt("return", fetchParamsAndLaunch({
              env: env,
              sif: sif,
              launchParams: buildTeacherLaunchParams(sectionId)
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchTeacherWaggle.apply(this, arguments);
}