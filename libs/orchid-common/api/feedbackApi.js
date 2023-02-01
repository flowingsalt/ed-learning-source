import requestFactory from '../api/requestFactory';
var INT_BASE = 'https://api.int.eng.hmhco.com';
var CERT_BASE = 'https://api.cert.hmhco.com';
var PROD_BASE = 'https://papi.hmhco.com';
var BASE_URLS = {
  local: INT_BASE,
  "int": INT_BASE,
  devCert: CERT_BASE,
  cert: CERT_BASE,
  prod: PROD_BASE
};
var UDS_URL = 'uds/api/v1';
var UDS_BATCH_URL = "".concat(UDS_URL, "/batch");
export default {
  fetchAssignmentFeedback: function fetchAssignmentFeedback(_ref) {
    var sif = _ref.sif,
        env = _ref.env,
        request = _ref.request;
    var BASE_URL = BASE_URLS[env];
    var URL = "".concat(BASE_URL, "/").concat(UDS_BATCH_URL);
    return requestFactory(URL, 'post', sif, request)["catch"](function (error) {
      return {
        error: error
      };
    });
  }
};