import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';
import teacherApi from '@hmhco/teacher-api/src/teacherApi';
export var cancelMessage = 'Cancelled by useFetchTeacherClasses';

var useFetchTeacherClasses = function useFetchTeacherClasses(userId) {
  var defaultClasses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var _teacherApi = teacherApi(),
      getTeacherClasses = _teacherApi.getTeacherClasses,
      cancel = _teacherApi.cancel;

  var _useState = useState({
    loading: true,
    error: null,
    classes: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    if (defaultClasses) {
      setData({
        loading: false,
        error: null,
        classes: defaultClasses
      });
    } else {
      getTeacherClasses(userId).then(function (result) {
        if (!result.isCancelled) {
          setData({
            loading: false,
            error: null,
            classes: _toConsumableArray(result)
          });
        }
      })["catch"](function (error) {
        setData({
          loading: false,
          error: error,
          classes: null
        });
      });
    }

    return function () {
      cancel(cancelMessage);
    };
  }, [userId]);
  return data;
};

export default useFetchTeacherClasses;