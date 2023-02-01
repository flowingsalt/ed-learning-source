import uniqBy from 'lodash/uniqBy';
import { LicenseTypes, RoleType } from '@hnm/types';

/*
For example find all institution/individual accounts that you are a member with a role of owner.
This means you can allocate any product bundles linked to that institutional/individual account group.

          "memberships": [
            {
              "role": "owner",
              "group": {
                "id": 5016,
                "parentId": null,
                "account": {
                  "accountType": "individual",
Then find the product bundles with e.g. parent group id of 5016 (the individual/institution account group id)

              "group": {
                "id": 5018,
                "parentId": 5016,
                "account": {
                  "accountType": "productbundle",

The product bundle allocations figures for each individual/institution will give you the number of licenses.

                "id": 5018,
                "parentId": 5016,
                "account": {
                  "accountType": "productbundle",
                  "allocations": [
                    {
                      "id": 4969,
                      "quantity": 4,
                      "quantityAllocated": 1,
                      "quantityUnallocated": 4,
                      "expirationDate": "2023-12-10T20:11:25.883Z",
 */

export const getMembershipsMap = (
  memberships: any[],
  licenseTypes?: LicenseTypes[],
  role?: RoleType,
): any => {
  return Object.fromEntries(
    memberships
      .filter(membership => {
        return licenseTypes
          ? licenseTypes.includes(membership?.group?.account?.accountType ?? '')
          : true;
      })
      .filter(membership => {
        const membershipRole = membership?.role ?? '';
        return role ? membershipRole === role : true;
      })
      .filter(membership => membership !== undefined)
      .map(membership => [membership?.group?.id, membership]),
  );
};

const mapMyAssignableGroups = (memberships: any[]): any[] => {
  const managedProductBundleGroups = memberships
    // only keep productbundle memberships
    .filter(
      membership =>
        (membership?.group?.account?.accountType ?? '') ===
        LicenseTypes.Organization,
    )
    // only keep memberships where user is owner of the parent
    .filter(
      membership =>
        (membership?.group?.parentId ?? undefined) in
        getMembershipsMap(
          memberships,
          [LicenseTypes.Individual, LicenseTypes.Institutional],
          RoleType.Owner,
        ),
    )
    // get group
    .map(membership => membership?.group ?? undefined)
    // undefined check
    .filter(group => typeof group !== 'undefined');

  // user can be both an owner & a member of the same productbundle group, don't want duplicate groups
  return uniqBy(managedProductBundleGroups, group => group.id);
};

export default mapMyAssignableGroups;
