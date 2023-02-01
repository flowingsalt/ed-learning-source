/**
 * Function that opens a new popup window
 * @param {string} path url address
 * @param {string} title popup title
 * @param {object} size popup window
 * @param {string} size.width popup with window size in px
 * @param {string} size.height popup with window size in px
 * @returns {window} return window object
 */
export default function createOauthWindow(path, title) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    width: '400',
    height: '500'
  };
  var windowOptions = 'menubar=yes,location=yes,resizable=yes,scrollbars=no,status=yes';
  return window.open(path, title, "".concat(windowOptions, ",width=").concat(size.width, ",height=").concat(size.height));
}