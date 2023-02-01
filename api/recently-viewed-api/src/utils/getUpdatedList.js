import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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

import { CONTENT_LIST_SIZE } from '../config';

var getUpdatedList = function getUpdatedList(contentObject) {
  var existingList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var found = false;

  var updatedObject = _objectSpread(_objectSpread({}, contentObject), {}, {
    lastViewedAt: Date.now()
  });

  var updatedList = existingList.reduce(function (arr, item, i) {
    if (item.id === contentObject.id) {
      arr.splice(i, 1);
      found = true;
      return [updatedObject].concat(_toConsumableArray(arr));
    } // eslint-disable-next-line no-param-reassign


    arr[i] = item;
    return arr;
  }, []);

  if (found) {
    return updatedList;
  } // Add updated object to 1st position in list, and if list is full remove last element


  return updatedList.length < CONTENT_LIST_SIZE ? [updatedObject].concat(_toConsumableArray(updatedList)) : [updatedObject].concat(_toConsumableArray(updatedList.splice(0, updatedList.length - 1)));
};

export default getUpdatedList;