import { uniqWith } from 'lodash';
import {
  LicenseTypes,
  RoleType,
  ManagedUser,
  UserMembership,
} from '@hnm/types';

export const isOrganizationIndividual = (membership: UserMembership): boolean =>
  membership.accountType === LicenseTypes.Individual;

export const isOrganizationInstitution = (
  membership: UserMembership,
): boolean => membership.accountType === LicenseTypes.Institutional;

export const getOrganizationLabel = (
  membership: UserMembership,
  // ideally, this would not need to be an input parameter if we had a way of storing some translations inside core
  individualLabel: string,
): string =>
  isOrganizationIndividual(membership)
    ? individualLabel
    : membership.hnm_institution_name || '';

// this function should be removed, it actually complicates logic everywhere it is used, getOrganizationLabel should be used instead
export const getUserOrganizations = (
  memberships: Array<UserMembership>,
  // ideally, this would not need to be an input parameter if we had a way of storing some translations inside core
  individualLabel: string,
): Array<{ groupId: number; name: string }> =>
  memberships
    .map(membership => ({
      groupId: membership.groupId,
      name: getOrganizationLabel(membership, individualLabel),
    }))
    .filter(m => m.name.length);

export const getUniqueUsers = (users: ManagedUser[]): ManagedUser[] => {
  return uniqWith(users, (left: ManagedUser, right: ManagedUser) => {
    return left.id === right.id;
  });
};

export const getManagedOrganizations = (
  memberships: Array<UserMembership>,
): Array<UserMembership> =>
  memberships
    .filter(membership => membership.membershipRole === RoleType.Owner)
    .filter(membership =>
      [LicenseTypes.Institutional, LicenseTypes.Individual].includes(
        membership.accountType,
      ),
    );
