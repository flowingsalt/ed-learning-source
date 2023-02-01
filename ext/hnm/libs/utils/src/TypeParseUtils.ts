import { HeinemannProduct } from '@hnm/types';

export const parseStringKeyVals = (
  keyVals: { [key: string]: string },
  keysToParse: Set<string>,
): any =>
  Object.keys(keyVals).reduce(
    (parsed, key) => ({
      ...parsed,
      [key]: keysToParse.has(key)
        ? JSON.parse(keyVals[key].trim().toLocaleLowerCase())
        : keyVals[key],
    }),
    {},
  );

export class HnmKeyValsParser {
  static expectedKeysToParse: Set<string> = new Set([
    'bundleHasIncludedResources',
    'bundleHasProductSubscriptions',
    'instructionalContextOrder',
    'gradeOrder',
  ]);

  static parse(product: any): HeinemannProduct {
    return parseStringKeyVals(product, HnmKeyValsParser.expectedKeysToParse);
  }
}
