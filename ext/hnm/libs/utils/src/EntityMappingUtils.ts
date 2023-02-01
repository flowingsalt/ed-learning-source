import { UserMembership, User, RoleType } from '@hnm/types';
import {
  assembleQualifierKeyValue,
  assembleAltIdKeyValue,
} from './DataStructureUtils';

const mapAccount = (
  account,
): Omit<
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  ReturnType<typeof mapGroup>,
  'groupId' | 'groupName' | 'groupParentId'
> => {
  if (!account) {
    return {} as any;
  }

  return {
    accountId: account.id,
    accountType: account.accountType,
    dealerId: account.dealerId,
    domainId: account.domainId,
    sourceId: account.source,
    ...assembleQualifierKeyValue(account.accountQualifier ?? []),
    ...assembleAltIdKeyValue(account.accountAltId ?? []),
  };
};

const mapGroup = (
  group,
): Omit<
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  ReturnType<typeof mapMembership>,
  'membershipId' | 'membershipRole'
> => {
  if (!group) {
    return {} as any;
  }

  return {
    groupId: group.id,
    groupParentId: group.parentId,
    groupName: group.name,
    ...mapAccount(group.account),
  };
};

export const mapMembership = (membership): UserMembership => {
  if (!membership) {
    return {} as UserMembership;
  }

  return {
    membershipId: membership.id,
    membershipRole: membership.role,
    ...mapGroup(membership.group),
  };
};

export const mapUser = (user): User => {
  if (!user) {
    return {} as User;
  }

  const memberships: Array<UserMembership> = (user.memberships ?? []).map(
    mapMembership,
  );
  const isAdmin = memberships.some(
    membership => membership.membershipRole === RoleType.Owner,
  );

  return {
    id: user.id,
    givenName: user.givenName,
    familyName: user.familyName,
    email: user.email,
    name: `${user.givenName} ${user.familyName}`,
    isAdmin,
    memberships,
  };
};
