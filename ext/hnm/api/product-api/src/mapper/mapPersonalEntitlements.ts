import { assembleQualifierKeyValue } from '@hnm/utils';
import jp from 'jsonpath';
import { HeinemannProduct, LicenseTypes } from '@hnm/types';
import { HNM_BRANDNAME } from '@hnm/config';
import mapProduct from './mapProduct';

const PERSONAL_ENTITLEMENTS_QUERY = type =>
  `$..memberships[?(@.group.account.accountType==="${type}")].group.account.allocations[?(@.quantity > 0)]`;

const mapPersonalEntitlements = (
  payload?: any,
  showAll = false,
): Array<HeinemannProduct> => {
  const allocations = jp.query(
    payload ?? {},
    PERSONAL_ENTITLEMENTS_QUERY(
      showAll ? LicenseTypes.Organization : LicenseTypes.Owner,
    ),
  );

  return allocations.reduce((productsArray, allocation) => {
    if (allocation && allocation?.productBundle) {
      allocation.productBundle.bundleMemberships
        .reduce((productQualifiersArray, membership) => {
          if (membership?.product?.productQualifiers) {
            productQualifiersArray.push(membership.product.productQualifiers);
          }
          return productQualifiersArray;
        }, [])
        .map(assembleQualifierKeyValue)
        .filter(
          mappedProduct => showAll || mappedProduct?.brand === HNM_BRANDNAME,
        )
        .map(mappedProduct => mapProduct(mappedProduct, allocation))
        .forEach(mappedProduct => productsArray.push(mappedProduct));
    }
    return productsArray;
  }, []);
};

export default mapPersonalEntitlements;
