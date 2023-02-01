import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import { axiosInstance } from './apiConfig';

var requestFactory = function requestFactory(url, method, sifToken) {
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var baseURL = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var throwOnError = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var headers = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  return axiosInstance({
    url: url,
    method: method,
    baseURL: baseURL,
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sifToken
    }),
    data: data
  }).then(function (response) {
    return {
      response: response.data
    };
  })["catch"](function (error) {
    console.error(error);

    if (throwOnError) {
      throw error;
    } else {
      return error;
    }
  });
};

export default requestFactory;