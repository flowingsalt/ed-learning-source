import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
/* eslint-disable camelcase */

import fetchParamsAndOpen from './fetchParamsAndOpen';
export var STUDENT_LAUNCH_PARAMS = {
  integration: 'amira',
  integrationpoint: 'home',
  context: 'role',
  contextid: 'student'
};
export default function launchStudentAmira(_x) {
  return _launchStudentAmira.apply(this, arguments);
}

function _launchStudentAmira() {
  _launchStudentAmira = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var sif, env, params;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sif = _ref.sif, env = _ref.env;
            params = {
              env: env,
              sif: sif,
              launchParams: STUDENT_LAUNCH_PARAMS
            };
            return _context.abrupt("return", fetchParamsAndOpen(params));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchStudentAmira.apply(this, arguments);
}