import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
export var shareSessionToNewTab = function shareSessionToNewTab() {
  window.localStorage.setItem('sessionStorage', JSON.stringify(window.sessionStorage));
};
export var getSessionFromPreviousTab = function getSessionFromPreviousTab() {
  var sessionFromLocalStorage = window.localStorage.getItem('sessionStorage');

  if (sessionFromLocalStorage) {
    // Copy data from local storage to session storage and delete from localStorage.
    try {
      var data = JSON.parse(sessionFromLocalStorage);
      Object.entries(data).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            item = _ref2[1];

        return window.sessionStorage.setItem(key, item);
      });
      window.localStorage.removeItem('sessionStorage');
    } catch (error) {
      logErrorWithContext('Parsing data from session storage failed', [{
        key: 'errorStack',
        value: error
      }]);
    }
  }
};