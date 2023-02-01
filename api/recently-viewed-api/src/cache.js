// Session Storage cache for users' recently viewed content data
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext'; // Ed recently viewed content

var NAMESPACE = 'ED-RVC';
export var getKey = function getKey(userId) {
  return "".concat(NAMESPACE, "-").concat(userId);
};
export var getDataFromCache = function getDataFromCache(userId) {
  var data = window.sessionStorage.getItem(getKey(userId));
  var parsed;

  try {
    parsed = JSON.parse(data);
  } catch (err) {
    logErrorWithContext('Recently viewed content cache read - json parse failed', [{
      key: 'recentlyViewedSessionStorageDataRead',
      value: data
    }, {
      key: 'errorStack',
      value: err
    }]);
  }

  return parsed;
};
export var writeDataToCache = function writeDataToCache(userId, data) {
  try {
    var keyName = getKey(userId);
    var jsonFormattedData = JSON.stringify(data);
    window.sessionStorage.setItem(keyName, jsonFormattedData);
  } catch (err) {
    logErrorWithContext('Recently viewed content cache write - json stringify failed', [{
      key: 'recentlyViewedSessionStorageDataWrite',
      value: data
    }, {
      key: 'errorStack',
      value: err
    }]);
  }
};
export var isItemLatestInCache = function isItemLatestInCache(userId, data) {
  var contentId = data === null || data === void 0 ? void 0 : data.id;

  if (!contentId) {
    return false;
  }

  var cachedData = getDataFromCache(userId);
  var latestItemInCache = cachedData === null || cachedData === void 0 ? void 0 : cachedData[0];
  return (latestItemInCache === null || latestItemInCache === void 0 ? void 0 : latestItemInCache.id) === contentId;
};