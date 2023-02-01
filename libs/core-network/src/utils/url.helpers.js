import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/**
 * create a query string from the provided object using key,value pairs
 *
 * @deprecated prefer URLSearchParams https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 *
 * @param {object} obj params in an object
 *
 * @returns {string} params parse to url format
 */

export var parseObjectToParams = function parseObjectToParams(obj) {
  return Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return "".concat(key, "=").concat(val);
  }).join('&');
};
/**
 * @param {object} obj
 * @param {string} obj.basePath
 * @param {object} obj.queryParams
 *
 * @returns {string}
 */

export var createUrlFromParams = function createUrlFromParams(_ref3) {
  var basePath = _ref3.basePath,
      queryParams = _ref3.queryParams;
  var params = queryParams ? "?".concat(parseObjectToParams(queryParams)) : '';
  return "".concat(basePath).concat(params);
};