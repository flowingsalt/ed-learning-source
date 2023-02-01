import createOauthWindow from './createOauthWindow';
/**
 * Function opens a new window with third party login
 * @param {string} path - third party login url address
 * @returns {Promise} - login window closed
 */

export default function openThirdPartyLogin(path) {
  return new Promise(function (resolve, reject) {
    try {
      var oauthWindow = createOauthWindow(path);

      if (oauthWindow) {
        var windowWatcher = setInterval(function () {
          if (oauthWindow.closed) {
            clearInterval(windowWatcher);
            resolve({
              closed: true
            });
          }
        }, 500);
      }
    } catch (error) {
      reject(error);
    }
  });
}