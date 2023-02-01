export default function hasValidRedirect() {
  var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var isHTTP = redirectUrl.startsWith('http://');
  var isHTTPS = redirectUrl.startsWith('https://');
  return isHTTP || isHTTPS;
}