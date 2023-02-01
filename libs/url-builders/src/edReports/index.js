export var LEARNOSITY_LTS_VERSION = '2021.2.LTS';
export function getLearnosityBaseUrl(env) {
  // CERT has a different URL because it is used for performance testing
  var urlPrefix = env === 'cert' ? '-ca' : '';
  return "".concat(urlPrefix, ".learnosity.com");
}
export function getReportsUrl(env) {
  var urlDomain = getLearnosityBaseUrl(env);
  return "https://reports".concat(urlDomain, "?v").concat(LEARNOSITY_LTS_VERSION);
}