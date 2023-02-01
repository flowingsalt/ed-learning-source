import { ProductType } from '@hnm/types';
import { CalkinsProductConfig } from './CalkinsProductConfig';
import LocalCalkinsProductConfig from './CalkinsProduct.config.local';
import DevCalkinsProductConfig from './CalkinsProduct.config.dev';
import IntCalkinsProductConfig from './CalkinsProduct.config.int';
import CertCalkinsProductConfig from './CalkinsProduct.config.cert';
import ProdCalkinsProductConfig from './CalkinsProduct.config.prod';

const calkinsProductConfigs: Map<string, CalkinsProductConfig> = new Map([
  ['local', LocalCalkinsProductConfig],
  ['dev', DevCalkinsProductConfig],
  ['int', IntCalkinsProductConfig],
  ['cert', CertCalkinsProductConfig],
  ['prod', ProdCalkinsProductConfig],
]);

const getCalkinsProductConfigByEnv = (
  environment: string,
): CalkinsProductConfig => {
  return calkinsProductConfigs.get(environment) ?? LocalCalkinsProductConfig;
};

const productConfigs: Map<
  ProductType,
  (env: string) => CalkinsProductConfig
> = new Map([['lucy-calkins', getCalkinsProductConfigByEnv]]);

export const getProductConfig = <TConfig extends CalkinsProductConfig>(
  productType: ProductType,
  environment: string = process.env.RUNTIME_ENV || window.RUNTIME_ENV,
): TConfig => {
  const fetchProductConfig = productConfigs.get(productType);
  if (!fetchProductConfig) {
    throw new Error(`No config found for "${productType}".`);
  }
  return fetchProductConfig(environment) as TConfig;
};
