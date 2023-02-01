import { Config } from './Config';
import DevConfig from './config.dev';
import IntConfig from './config.int';
import CertConfig from './config.cert';
import ProdConfig from './config.prod';
import LocalConfig from './config.local';

const configs: Map<string, Config> = new Map([
  ['local', LocalConfig],
  ['dev', DevConfig],
  ['int', IntConfig],
  ['cert', CertConfig],
  ['prod', ProdConfig],
]);

export const getConfig = (
  environment: string = process.env.RUNTIME_ENV || window.RUNTIME_ENV,
): Config => {
  return configs.get(environment ?? 'local') ?? LocalConfig;
};
