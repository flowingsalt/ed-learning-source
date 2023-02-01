/**
 * Determine if the environment is deployed
 *
 * @param {string} env
 * @returns {boolean}
 */
export function isDeployedEnvironment(env) {
  var envConfig = {
    "int": true,
    cert: true,
    prod: true
  };
  return Boolean(envConfig[env]);
}
/**
 * getter for HMH software version
 *
 * @returns {string} software version
 */

export function getVersion() {
  return window.HMH_VERSION || window.APP_VERSION || 'no_version_set';
}