import hasValidRedirect from '@hmhco/redirect-validator/src/hasValidRedirect';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { STATE_QUERY_PARAM } from '@hmhco/url-const-loginstate/src/loginState';
export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$encodeStateInUrl = _ref.encodeStateInUrl,
      encodeStateInUrl = _ref$encodeStateInUrl === void 0 ? false : _ref$encodeStateInUrl;

  var _getConfigForCurrentE = getConfigForCurrentEnv(),
      ampLogin = _getConfigForCurrentE.ampLogin;

  var currentUrl = window.location.href;
  var urlSearch = new URLSearchParams();

  if (encodeStateInUrl && hasValidRedirect(currentUrl)) {
    urlSearch.append(STATE_QUERY_PARAM, currentUrl);
  }

  window.location.assign("".concat(ampLogin, "?").concat(urlSearch.toString()));
});