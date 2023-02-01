export function isIPad() {
  var windowObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if (windowObject.navigator.userAgent.match(/iPad/i) != null) {
    return true;
  } // The default user agent string on iPad has changed in iOS 13
  // The new string cannot be differentiated from Safari on macOS.
  // However, the standalone property is null in macOS, and not null in iOS


  if (windowObject.navigator.userAgent.match(/Mac/i) != null && windowObject.navigator.standalone != null) {
    return true;
  }

  return false;
}