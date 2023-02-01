import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

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

import { useState, useEffect } from 'react';
import { preferencesCancelable } from '@hmhco/ebr-preferences-api/src/preferencesApi';

var useFetchPreferences = function useFetchPreferences() {
  var _preferencesCancelabl = preferencesCancelable(),
      fetchPreferences = _preferencesCancelabl.fetchPreferences,
      cancel = _preferencesCancelabl.cancel;

  var _useState = useState({
    isLoading: true,
    error: null,
    data: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    setData(_objectSpread(_objectSpread({}, data), {}, {
      isLoading: true
    }));
    fetchPreferences().then(function (respData) {
      return setData({
        isLoading: false,
        error: null,
        data: respData || {}
      });
    })["catch"](function (error) {
      setData({
        isLoading: false,
        data: {},
        error: error
      });
    });
    return cancel;
  }, []);
  return data;
};

export default useFetchPreferences;