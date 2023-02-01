import { useMemo } from 'react';
import { isFeatureActive } from '@hmhco/feature-flags';
import { EDS_MANAGED_PRODUCTS } from './constants';
export var filterProgramsForEdsEntitlements = function filterProgramsForEdsEntitlements(programs, edsEntitlements) {
  if (!(programs === null || programs === void 0 ? void 0 : programs.length)) {
    return programs;
  }

  var edsProductIds = new Map(edsEntitlements === null || edsEntitlements === void 0 ? void 0 : edsEntitlements.map(function (item) {
    return [item.bundleName, item.productLine];
  }));
  return programs === null || programs === void 0 ? void 0 : programs.filter(function (bundle) {
    return !EDS_MANAGED_PRODUCTS.has(bundle.title) || edsProductIds.has(bundle.title);
  });
}; // use a memo to ensure filteredPrograms does not have a new reference on each render

var useFilterProgramsForEdsEntitlements = function useFilterProgramsForEdsEntitlements(programs, edsEntitlements) {
  return useMemo(function () {
    return isFeatureActive('licensingApp', true) ? filterProgramsForEdsEntitlements(programs, edsEntitlements) : programs;
  }, [programs, edsEntitlements]);
};

export default useFilterProgramsForEdsEntitlements;