import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/* eslint-disable camelcase */


import { axiosInstance } from '../api/apiConfig';
var apiUrl = '/api/provider/v1/launch/resourceid';
export var getLaunchDetails = function getLaunchDetails(id, sif) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var pactConfig = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var call = _objectSpread({
    url: "".concat(apiUrl, "/").concat(id),
    method: 'get',
    params: params
  }, pactConfig);

  if (sif) {
    call.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sif
    };
  }

  return axiosInstance(call).then(function (response) {
    return response.data;
  });
};
/**
 * Swagger docs
 *
 * // https://api.int.br.internal/lti-platform/swagger-ui.html#!/platform45create45launch45endpoint/createLaunchWithContextUsingGET
 */

export var buildUrl = function buildUrl(env, integration, integrationpoint, context, contextid, resourceId) {
  if (integration === 'amira' || integration === 'waggle' || integration === 'writable') {
    if (resourceId) {
      return "".concat(urls[env], "/launcher/1.3.1/").concat(integration, "/").concat(integrationpoint, "/").concat(context, "/").concat(contextid, "/resource/").concat(resourceId);
    }

    return "".concat(urls[env], "/launcher/1.3.1/").concat(integration, "/").concat(integrationpoint, "/").concat(context, "/").concat(contextid);
  } // TODO : should handle most LTI launches with new 1.3.0 approach - may require updates


  return "".concat(urls[env], "/launcher/1.3.0/").concat(integration, "/").concat(integrationpoint, "/").concat(context, "/").concat(contextid);
};
var certUrl = 'https://api.cert.hmhco.com/lti-platform';
var urls = {
  dev: 'https://api.int.br.internal/lti-platform',
  local: 'https://api.int.br.internal/lti-platform',
  "int": 'https://api.int.br.internal/lti-platform',
  cert: certUrl,
  devCert: certUrl,
  prod: 'https://papi.hmhco.com/lti-platform',
  pact: '/lti-platform'
};
export var getLaunchDetails_1_3_0 = function getLaunchDetails_1_3_0(env, sif, params, customParams) {
  var pactConfig = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var integration = params.integration,
      integrationpoint = params.integrationpoint,
      context = params.context,
      contextid = params.contextid,
      resourceId = params.resourceId;

  var call = _objectSpread(_objectSpread({
    url: buildUrl(env, integration, integrationpoint, context, contextid, resourceId),
    method: 'get'
  }, customParams && {
    params: customParams
  }), pactConfig);

  if (sif) {
    call.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sif
    };
  }

  return axiosInstance(call).then(function (response) {
    return response.data;
  });
};