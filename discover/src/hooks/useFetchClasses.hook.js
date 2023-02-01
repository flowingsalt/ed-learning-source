import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';
import studentApi from '@hmhco/student-api/src/studentApi';
import useFetchTeacherClasses from '@hmhco/fetch-teacher-classes-hook/src/useFetchTeacherClasses';
import { isInstructor } from '../constants';

var useFetchClassesHook = function useFetchClassesHook(userId, role, isLearner) {
  var _useFetchTeacherClass = useFetchTeacherClasses(userId, isInstructor(role) ? null : []),
      classes = _useFetchTeacherClass.classes;

  var _studentApi = studentApi(),
      fetchStudentClassesCached = _studentApi.fetchStudentClassesCached,
      cancelFetchStudentClasses = _studentApi.cancel;

  var _useState = useState({
    loading: true,
    error: null,
    userClasses: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    if (!isLearner) {
      setData({
        loading: false,
        error: null,
        userClasses: classes
      });
    } else {
      fetchStudentClassesCached(userId).then(function (result) {
        if (!result.isCancelled) {
          setData({
            loading: false,
            error: null,
            userClasses: _toConsumableArray(result)
          });
        }
      })["catch"](function (error) {
        setData({
          loading: false,
          error: error,
          userClasses: null
        });
      });
    }

    return function () {
      cancelFetchStudentClasses('cancelled by Student fetch classes');
    };
  }, [classes]);
  return data;
};

export default useFetchClassesHook;