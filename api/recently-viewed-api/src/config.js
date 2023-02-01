// This UDS app was set up initially to work for the Alver/Go HMH Player
// replacement app. We need the data to be consistent between there and Ed.
// The namespace remains as it was originally set up.
export var APP_NAME = 'alver-recently-viewed-content';
var ROUTE = '/uds/api/v1/';
var certURl = 'https://api.cert.hmhco.com';
var ENDPOINTS = {
  dev: 'https://api.int.eng.hmhco.com',
  local: 'https://api.int.eng.hmhco.com',
  "int": 'https://api.int.eng.hmhco.com',
  cert: certURl,
  devCert: certURl,
  prod: 'https://papi.hmhco.com'
};
var UDS_METHODS = {
  fetch: 'data.app.get',
  write: 'data.app.set'
};
export var CONTENT_LIST_SIZE = 6;
export var getRecentlyViewedPactPath = function getRecentlyViewedPactPath() {
  return "".concat(ROUTE).concat(UDS_METHODS.fetch);
};
export var setRecentlyViewedPactPath = function setRecentlyViewedPactPath() {
  return "".concat(ROUTE).concat(UDS_METHODS.write);
};
export var getRecentlyViewedContentUrl = function getRecentlyViewedContentUrl(env) {
  return env === 'pact' ? getRecentlyViewedPactPath() : "".concat(ENDPOINTS[env]).concat(ROUTE).concat(UDS_METHODS.fetch);
};
export var setRecentlyViewedContentUrl = function setRecentlyViewedContentUrl(env) {
  return env === 'pact' ? setRecentlyViewedPactPath() : "".concat(ENDPOINTS[env]).concat(ROUTE).concat(UDS_METHODS.write);
};