import { Qualifier, AltId } from '@hnm/types';

export const assembleQualifierKeyValue = (qualifiers: Qualifier[]): any => {
  return Object.fromEntries(
    qualifiers.map(qualifier => [qualifier.key, qualifier.value]),
  );
};

export const assembleAltIdKeyValue = (altIds: AltId[]): any => {
  return Object.fromEntries(
    altIds.map(altId => [altId.altKeyType, altId.altKey]),
  );
};
