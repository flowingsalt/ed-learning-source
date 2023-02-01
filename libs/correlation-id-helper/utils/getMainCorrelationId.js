import { getRandomGuid, getRandomId } from './guidUtil';

var getInitialCorrelationId = function getInitialCorrelationId() {
  var localStorageCorrelationId = window.localStorage.getItem('com.hmhco.logging.initialCorrelationId');

  if (localStorageCorrelationId) {
    return localStorageCorrelationId;
  }

  return getRandomGuid();
};

var getMainCorrelationId = function getMainCorrelationId() {
  return "".concat(getInitialCorrelationId(), "-").concat(getRandomId(3));
};

export default getMainCorrelationId;