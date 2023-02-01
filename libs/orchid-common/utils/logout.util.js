import { getEnvironment } from '../utils/getEnvironment.util';
export function logOut() {
  var env = getEnvironment();
  window.sessionStorage.removeItem("com.hmhco.security.openID.authInfo.".concat(env));
  var path = getLoginPath();
  window.location.pathname = path;
}
export var getLoginPath = function getLoginPath() {
  return 'ui/login/';
};