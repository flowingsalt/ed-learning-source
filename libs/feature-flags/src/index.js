import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
/* eslint-disable react-hooks/rules-of-hooks, import/no-cycle */

import React from 'react';
import { string, node, bool } from 'prop-types';
import featureFlagService from '@hmhco/feature-flag-api/src/featureFlagApi';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import fflip from 'fflip';
import { isDemoUser } from '@hmhco/demo-entitlements-utils/src/utils/isDemoUser';
import setFeatureFlags from './utils/wrapperMethods';
import { Features, Criteria } from '../config/featureFlags.config';
export var compileFeatureFlagConfig = function compileFeatureFlagConfig(demoUser) {
  var _featureFlagService = featureFlagService(),
      getCohorts = _featureFlagService.getCohorts;

  fflip.config({
    criteria: Criteria,
    features: Features
  });
  var userContext = getUserCtx();
  return getCohorts().then(function (cohorts) {
    setFeatureFlags(userContext, fflip, cohorts, demoUser);
  })["catch"](function () {
    setFeatureFlags(userContext, fflip, [], demoUser);
  });
};
export var instantiateFeatureFlagConfig = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var demoUser;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            localStorage.setItem('featureFlags', '[]');
            _context.next = 3;
            return isDemoUser();

          case 3:
            demoUser = _context.sent;
            return _context.abrupt("return", compileFeatureFlagConfig(demoUser));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function instantiateFeatureFlagConfig() {
    return _ref.apply(this, arguments);
  };
}();
export var isFeatureActive = function isFeatureActive(flagName) {
  var isStrict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  try {
    var flags = JSON.parse(localStorage.getItem('featureFlags'));
    var isFeatureFlagged = flags === null || flags === void 0 ? void 0 : flags.includes(flagName);
    var isDemoEntitled = flags === null || flags === void 0 ? void 0 : flags.includes('demoEntitlements');
    return isStrict ? isFeatureFlagged : isFeatureFlagged || isDemoEntitled;
  } catch (e) {
    return false;
  }
};

var FeatureFlag = function FeatureFlag(props) {
  var flagName = props.flagName,
      strictMode = props.strictMode,
      children = props.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, isFeatureActive(flagName, strictMode) && children);
};

FeatureFlag.defaultProps = {
  strictMode: false
};
FeatureFlag.propTypes = {
  flagName: string.isRequired,
  children: node.isRequired,
  strictMode: bool
};
export default FeatureFlag;