var ROUTE = '/uds/api/v1/';
var certUrl = 'https://api.cert.hmhco.com';
var ENDPOINTS = {
  dev: 'https://api.int.eng.hmhco.com',
  local: 'https://api.int.eng.hmhco.com',
  "int": 'https://api.int.eng.hmhco.com',
  cert: certUrl,
  devCert: certUrl,
  prod: 'https://papi.hmhco.com'
};
var UDS_METHODS = {
  get: 'data.app.get',
  set: 'data.app.set'
};
export var fetchBookmarkPactPath = function fetchBookmarkPactPath() {
  return "".concat(ROUTE).concat(UDS_METHODS.get);
};
export var setBookmarkPactPath = function setBookmarkPactPath() {
  return "".concat(ROUTE).concat(UDS_METHODS.set);
};
export var getFetchBookmarkUrl = function getFetchBookmarkUrl(env) {
  return env === 'pact' ? fetchBookmarkPactPath() : "".concat(ENDPOINTS[env]).concat(ROUTE).concat(UDS_METHODS.get);
};
export var getSetBookmarkUrl = function getSetBookmarkUrl(env) {
  return env === 'pact' ? setBookmarkPactPath() : "".concat(ENDPOINTS[env]).concat(ROUTE).concat(UDS_METHODS.set);
};