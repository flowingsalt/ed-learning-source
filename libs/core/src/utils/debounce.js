/**
 * Creates a debounced function that delays invoking `func` until after wait milliseconds
 * have elapsed since the last time the debounced function was invoked.
 *
 * @param {function} func function to run after the wait time
 * @param {number} wait The number of milliseconds to delay.
 *
 * @returns {function} func wrapped in another function that delay it's execution.
 */
var debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      func.apply(_this, args);
    }, wait);
    if (!timeout) func.apply(this, args);
  };
};

export default debounce;