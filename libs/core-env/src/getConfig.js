import certConfig from '../../../../config/config.cert';
import devConfig from '../../../../config/config.dev';
import intConfig from '../../../../config/config.int';
import prodConfig from '../../../../config/config.prod';
import devCertConfig from '../../../../config/config.devCert';
/**
 * return configuration for the environment passed as argument
 *
 * @param {string} env name of the environment, expected: local, int, cert or prod
 *
 * @returns {object} configuration (endpoints urls)
 */

var getConfig = function getConfig(env) {
  // process.env.STORYBOOK_ENV is set when running Storybook locally
  var currentEnv = env || window.HMH_ENV || process.env.RUNTIME_ENV || process.env.STORYBOOK_ENV || window.RUNTIME_ENV;

  switch (currentEnv) {
    case 'local':
      return devConfig;

    case 'dev':
      return devConfig;

    case 'int':
      return intConfig;

    case 'cert':
      return certConfig;

    case 'devCert':
      return devCertConfig;

    case 'prod':
      return prodConfig;

    default:
      if (process.env.NODE_ENV === 'production') {
        throw new Error("[KERNEL PANIC!!] RUNTIME_ENV environment variable is not recognised.\n\n          Set one of these values: local, dev, int, cert, prod");
      } // During development environment settings defaulted back to the "dev" settings,
      // but can be overwritten with the RUNTIME_ENV environment variable.


      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error("[WARNING] RUNTIME_ENV environment variable is not recognised.\nConfig for the development environment is used.\n\n          You can explicitly set the environment with these values: local, dev, int, cert, prod");
      } // During unit testing (NODE_ENV == "test") we don't need access
      // to any API or external URL, so the environment settings don't matter.


      return devConfig;
  }
};

export var getAmpConfig = function getAmpConfig() {
  return getConfig(process.env.RUNTIME_ENV || window.RUNTIME_ENV);
};
export var getEdConfig = function getEdConfig() {
  return getConfig(window.HMH_ENV);
};
export default getConfig;