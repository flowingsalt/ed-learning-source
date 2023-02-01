export var min = 1000; // retry delay in ms

export var max = 15000; // retry delay in ms

export var retryLimit = Math.ceil(Math.log2(max / (1.2 * min)));
export var calculateDelayTime = function calculateDelayTime() {
  var retryCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var delay = (Math.pow(2, retryCount) - 1) * min;
  var randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay

  return delay + randomSum;
};
export var retryDelay = function retryDelay(attempt) {
  var ms = calculateDelayTime(attempt);
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(attempt);
    }, ms);
  });
};