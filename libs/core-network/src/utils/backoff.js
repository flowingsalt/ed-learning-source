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
/**
 *
 * Converts `angular-backoff`-like parameters to
 * `axios-retry` compatible ones.
 *
 * @param {number} min
 * @param {number} max
 * @param {Function} retryCondition returning bool
 * @returns {IAxiosRetryConfig}
 */


var backoff = function backoff(min, max, retryCondition) {
  return _objectSpread({
    retries: Math.ceil(Math.log2(max / (1.2 * min))),
    // see the extra delay below
    retryDelay: function retryDelay() {
      var retryCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var delay = (Math.pow(2, retryCount) - 1) * min;
      var randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay

      return delay + randomSum;
    }
  }, retryCondition ? {
    retryCondition: retryCondition
  } : {});
};

export default backoff;