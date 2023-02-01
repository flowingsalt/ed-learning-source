export var retryRequest = function retryRequest(instance, originalRequest, error) {
  var now = new Date().getTime();

  if (originalRequest.retryExpiry && originalRequest.retryExpiry > now) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve(instance(originalRequest));
      }, originalRequest.interval);
    });
  }

  return Promise.reject(error);
};
export var setRetryExpiryAndInterval = function setRetryExpiryAndInterval(config) {
  var interval = 15000; // default retry interval 15 secs

  if (!config.retryExpiry) {
    var now = new Date().getTime();

    if (config.url.indexOf('/onesearch/') !== -1) {
      // OneSearch is the API for OneMDS which struggles with load so we only want to re-try about 2 times and then give up
      config.retryExpiry = now + 40000;
      interval = 100000;
    } else {
      config.retryExpiry = now + 180000; // default, try for approx 3 minutes
    }
  } else {
    // add random jitter to retry  interval part if retryExpiry is already set
    var jitter = Math.floor(Math.random() * 251);
    interval += jitter;
  }

  config.interval = interval;
  return config;
};