import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import fetchParamsAndLaunch from './fetchParamsAndLaunch';
export var TVSS_LAUNCH_PARAMS = {
  integration: 'read180',
  integrationpoint: 'tvss',
  context: 'coursesection',
  contextid: 'na'
};
export default function launchTVSSRead180(_x, _x2) {
  return _launchTVSSRead.apply(this, arguments);
}

function _launchTVSSRead() {
  _launchTVSSRead = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sif, env) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetchParamsAndLaunch({
              sif: sif,
              env: env,
              launchParams: TVSS_LAUNCH_PARAMS,
              customParams: {
                target: 'read180_teacher'
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchTVSSRead.apply(this, arguments);
}