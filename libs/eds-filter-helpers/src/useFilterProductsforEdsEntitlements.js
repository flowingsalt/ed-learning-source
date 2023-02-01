import { useMemo } from 'react';
import { isFeatureActive } from '@hmhco/feature-flags';
import { EDS_MANAGED_PRODUCTS } from './constants'; // Filter for product list

export var filterProductsforEdsEntitlements = function filterProductsforEdsEntitlements(entitledProducts, edsEntitlements) {
  if (!(entitledProducts === null || entitledProducts === void 0 ? void 0 : entitledProducts.length)) {
    return entitledProducts;
  }

  var edsProductIds = new Map(edsEntitlements === null || edsEntitlements === void 0 ? void 0 : edsEntitlements.map(function (item) {
    return [item.productId, item.productLine];
  }));
  return entitledProducts === null || entitledProducts === void 0 ? void 0 : entitledProducts.filter(function (bundle) {
    return !EDS_MANAGED_PRODUCTS.has(bundle.title) || bundle.product.some(function (productItem) {
      return edsProductIds.has(productItem.identifier);
    });
  });
}; // use a memo to ensure filteredPrograms does not have a new reference on each render

var useFilterProductsforEdsEntitlements = function useFilterProductsforEdsEntitlements(entitledProducts, edsEntitlements) {
  var isLicensingFlagActive = isFeatureActive('licensingApp', true);
  return useMemo(function () {
    return isLicensingFlagActive ? filterProductsforEdsEntitlements(entitledProducts, edsEntitlements) : entitledProducts;
  }, [entitledProducts, edsEntitlements, isLicensingFlagActive]);
};

export default useFilterProductsforEdsEntitlements;