import { assembleQualifierKeyValue, mapMembership } from '@hnm/utils';
import jp from 'jsonpath';
import { HeinemannProduct } from '@hnm/types';
import { HNM_BRANDNAME } from '@hnm/config';
import hasProducts from '../utils/hasProducts';
import mapProduct from './mapProduct';
import mapMyAssignableGroups, {
  getMembershipsMap,
} from './mapMyAssignableGroups';

const MEMBERSHIPS_QUERY = `$..memberships`;

const mapAssignableEntitlements = (
  payload?: any,
  showAll = false,
): Array<HeinemannProduct> => {
  const membershipsPayload =
    jp.query(payload ?? {}, MEMBERSHIPS_QUERY)[0] ?? [];
  const assignableGroups = mapMyAssignableGroups(membershipsPayload);
  const membershipsMap = getMembershipsMap(membershipsPayload);
  return assignableGroups
    .flatMap(group => group)
    .map(group => {
      return (group?.account?.allocations ?? [])
        .filter(allocation => allocation?.productBundle)
        .reduce((productsArray, allocation) => {
          if (hasProducts(allocation)) {
            const product = allocation.productBundle.bundleMemberships
              .reduce((productQualifiersArray, membership) => {
                if (membership?.product?.productQualifiers) {
                  productQualifiersArray.push(
                    membership.product.productQualifiers,
                  );
                }
                return productQualifiersArray;
              }, [])
              .map(assembleQualifierKeyValue)
              .filter(
                mappedProduct =>
                  showAll || mappedProduct?.brand === HNM_BRANDNAME,
              )
              .map(mappedProduct => mapProduct(mappedProduct, allocation))
              .map(mappedProduct => ({
                ...mappedProduct,
                membership: mapMembership(membershipsMap[group.id]),
                parentMembership: mapMembership(membershipsMap[group.parentId]),
              }));

            productsArray.push(product);
          }
          return productsArray;
        }, [])
        .flatMap(product => product);
    })
    .flatMap(product => product);
};

export default mapAssignableEntitlements;
