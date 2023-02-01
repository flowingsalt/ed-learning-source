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

import React from 'react';
import getMeetingsApi from '@hmhco/virtual-classroom-api/src/meeting/getMeetingsApi';
export default function useVirtualClassroomData() {
  var _getMeetingsApi = getMeetingsApi(),
      getMeetings = _getMeetingsApi.getMeetings,
      cancel = _getMeetingsApi.cancel;

  var _React$useState = React.useState({
    loading: true,
    error: false,
    data: []
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      _React$useState2$ = _React$useState2[0],
      loading = _React$useState2$.loading,
      error = _React$useState2$.error,
      data = _React$useState2$.data,
      setRequestState = _React$useState2[1];

  React.useEffect(function () {
    var fetchData = function fetchData() {
      setRequestState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          loading: true,
          error: false
        });
      });
      return getMeetings().then(function (response) {
        setRequestState({
          loading: false,
          error: false,
          data: response.meetings
        });
      })["catch"](function () {
        setRequestState(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            loading: false,
            error: true
          });
        });
      });
    };

    fetchData();
    return cancel;
  }, []);
  return {
    data: data,
    loading: loading,
    error: error
  };
}