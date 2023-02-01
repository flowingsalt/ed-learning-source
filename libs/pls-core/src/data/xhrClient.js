import { createAxios } from '@hmhco/core-network/src/axiosHelpers';
import locales from '../enums/locales';
var xhrClient = createAxios(1000, 15000);

function getFromLocalStorage(key) {
  return window.sessionStorage.getItem(key) || // AMP is using sessionStorage and Ed localStorage
  window.localStorage.getItem(key) || undefined;
}

var headerKey = 'language';

function setupXhrClient() {
  var locale = {
    value: getFromLocalStorage('locale') || locales['en-US']
  };
  xhrClient.defaults.headers["delete"][headerKey] = locale.value;
  xhrClient.defaults.headers.get[headerKey] = locale.value;
  xhrClient.defaults.headers.post[headerKey] = locale.value;
  xhrClient.defaults.headers.put[headerKey] = locale.value;
}

setupXhrClient();
export { setupXhrClient };
export default xhrClient;