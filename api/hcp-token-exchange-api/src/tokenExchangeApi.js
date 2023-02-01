import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    EDSLoginUrl = _getConfigForCurrentE.EDSLoginUrl,
    EDSResourceUrl = _getConfigForCurrentE.EDSResourceUrl;

export var LOGIN_TOKEN_ENDPOINT = '/login/token'; // not security related but for providing client ID to service

var ED_CLIENT_ID = 'e7f0b2e5-dcc6-410c-b90e-d18662bc923f';
var ED_SECRET = 'Xfqd5F9apCwtCiHQZO80n5M8sTeizr2xGKWzZU3W';
export default (function () {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var userContext = getUserCtx();

  if (!(userContext === null || userContext === void 0 ? void 0 : userContext.rawToken)) {
    return {};
  }

  var _createAxiosCancelabl = createAxiosCancelable({
    includeAuth: false
  }),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  var request = requestHelper({
    client: client,
    cancelToken: cancelToken,
    isCancel: isCancel,
    baseURL: EDSLoginUrl,
    pactConfig: pactConfig
  });
  var _userContext$rawToken = userContext.rawToken;
  _userContext$rawToken = _userContext$rawToken === void 0 ? {} : _userContext$rawToken;
  var _userContext$rawToken2 = _userContext$rawToken.sif;
  _userContext$rawToken2 = _userContext$rawToken2 === void 0 ? {} : _userContext$rawToken2;
  var accessToken = _userContext$rawToken2.accessToken;
  var basicAuth = Buffer.from("".concat(ED_CLIENT_ID, ":").concat(ED_SECRET)).toString('base64');
  var body = new URLSearchParams();
  body.append('grant_type', 'urn:ietf:params:oauth:grant-type:token-exchange');
  body.append('resource', EDSResourceUrl);
  body.append('subject_token_type', 'urn:ietf:params:oauth:token-type:access_token');
  body.append('subject_token', accessToken);
  var options = {
    headers: {
      Authorization: "Basic ".concat(basicAuth),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true // this should tell axios to use credentials: 'include'

  };
  return {
    getEdsToken: function getEdsToken() {
      return request.post(LOGIN_TOKEN_ENDPOINT, body, options);
    },
    cancel: cancel
  };
});