import isNil from 'lodash/isNil';
import { getRandomGuid, getRandomId } from './guidUtil';

var getInitialCorrelationId = function getInitialCorrelationId() {
  var localStorageCorrelationId = window.localStorage.getItem('com.hmhco.logging.initialCorrelationId');

  if (!isNil(localStorageCorrelationId)) {
    return localStorageCorrelationId;
  }

  return getRandomGuid();
};

export var mainCorrelationId = function mainCorrelationId() {
  return "".concat(getInitialCorrelationId(), "-").concat(getRandomId(3));
};