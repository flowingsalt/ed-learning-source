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

import { ASSIGN, GRADE, REVIEW, PREVIEW, EDIT } from './constants';

var getPartnerParams = function getPartnerParams(paramType) {
  var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // at present, all partners do the same thing, but this could change.
  // If so then we'll also need partner identifier as a parameter

  switch (paramType) {
    case ASSIGN:
      return _objectSpread({
        action: ASSIGN
      }, queryParams);

    case GRADE:
      return _objectSpread({
        action: GRADE
      }, queryParams);

    case PREVIEW:
      return _objectSpread({
        action: PREVIEW
      }, queryParams);

    case REVIEW:
      return _objectSpread({
        action: REVIEW
      }, queryParams);

    case EDIT:
      return _objectSpread({
        action: EDIT
      }, queryParams);

    default:
      return queryParams;
  }
};

export default getPartnerParams;