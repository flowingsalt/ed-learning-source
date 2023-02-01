import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import fetchParamsAndOpen from './fetchParamsAndOpen';
export var getTeacherLaunchParams = function getTeacherLaunchParams(sectionId) {
  return {
    integration: 'amira',
    integrationpoint: 'home',
    context: 'coursesection',
    contextid: "".concat(sectionId) || 'none'
  };
};
export default function launchTeacherAmira(_x) {
  return _launchTeacherAmira.apply(this, arguments);
}

function _launchTeacherAmira() {
  _launchTeacherAmira = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var sif, env, sectionId, customParams, params;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sif = _ref.sif, env = _ref.env, sectionId = _ref.sectionId, customParams = _ref.customParams;
            params = {
              sif: sif,
              env: env,
              launchParams: getTeacherLaunchParams(sectionId),
              customParams: customParams
            };
            return _context.abrupt("return", fetchParamsAndOpen(params));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchTeacherAmira.apply(this, arguments);
}