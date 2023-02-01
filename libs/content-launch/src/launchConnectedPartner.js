import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import fetchParamsAndLaunch from './fetchParamsAndLaunch';
import fetchParamsAndOpen from './fetchParamsAndOpen';
var WRITABLE_INTEGRATION = 'writable';
export var buildLaunchParams = function buildLaunchParams(_ref) {
  var integration = _ref.integration,
      integrationpoint = _ref.integrationpoint,
      sectionId = _ref.sectionId;
  return {
    integration: integration,
    integrationpoint: integrationpoint,
    context: 'coursesection',
    contextid: sectionId
  };
};
export default function launchConnectedPartner(_x) {
  return _launchConnectedPartner.apply(this, arguments);
}

function _launchConnectedPartner() {
  _launchConnectedPartner = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref2) {
    var sif, env, sectionId, identifier, resourceId, programId, tool, teacherAssignmentRefId, _ref2$errorCallback, errorCallback, _ref2$customParams, customParams, lowerCaseIntegration, params, result;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sif = _ref2.sif, env = _ref2.env, sectionId = _ref2.sectionId, identifier = _ref2.identifier, resourceId = _ref2.resourceId, programId = _ref2.programId, tool = _ref2.tool, teacherAssignmentRefId = _ref2.teacherAssignmentRefId, _ref2$errorCallback = _ref2.errorCallback, errorCallback = _ref2$errorCallback === void 0 ? function () {} : _ref2$errorCallback, _ref2$customParams = _ref2.customParams, customParams = _ref2$customParams === void 0 ? {} : _ref2$customParams; // split because writable :()

            lowerCaseIntegration = identifier.toLowerCase().split('_')[0];
            params = {
              env: env,
              sif: sif,
              launchParams: buildLaunchParams({
                integration: lowerCaseIntegration,
                integrationpoint: tool,
                sectionId: sectionId
              }),
              customParams: _objectSpread(_objectSpread({}, customParams), {}, {
                resource_id: resourceId,
                assignment_id: teacherAssignmentRefId,
                program_id: programId
              })
            };

            if (!(lowerCaseIntegration === WRITABLE_INTEGRATION)) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return fetchParamsAndLaunch(params);

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return fetchParamsAndOpen(params);

          case 11:
            _context.t0 = _context.sent;

          case 12:
            result = _context.t0;

            if (!(result === null || result === void 0 ? void 0 : result.error)) {
              _context.next = 17;
              break;
            }

            logErrorWithContext('launchConnectedPartnerFail', [{
              key: 'errorMessage',
              value: result.error
            }]);
            errorCallback(true);
            return _context.abrupt("return", false);

          case 17:
            return _context.abrupt("return", true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchConnectedPartner.apply(this, arguments);
}