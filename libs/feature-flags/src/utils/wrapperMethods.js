import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import localCohorts from '../../config/featureFlagsCohorts.local.config';
var env = getEnvironment();
export var mergeCohorts = function mergeCohorts(cohorts) {
  return [].concat(_toConsumableArray(cohorts), _toConsumableArray(localCohorts));
};

var setFeatureFlags = function setFeatureFlags(userContext, fflip, cohorts, demoUser) {
  var flags = new Set([]);
  var allCohorts = [undefined, 'local'].includes(env) ? mergeCohorts(cohorts) : cohorts;
  allCohorts.forEach(function (cohort) {
    var _cohort$filter = cohort.filter,
        value = _cohort$filter.value,
        target = _cohort$filter.target;
    var isFlagActive = fflip.isFeatureEnabledForUser(target, {
      userContext: userContext,
      value: value
    }) || value.includes('*');

    if (isFlagActive) {
      flags.add(cohort.flag);
    }
  });

  if (demoUser) {
    flags.add('demoEntitlements');
  }

  localStorage.setItem('featureFlags', JSON.stringify(_toConsumableArray(flags)));
};

export default setFeatureFlags;