import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState } from 'react';
import getCourseListApi from '@hmhco/viaduct-api/src/googleClassroom/getCourseListApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { GOOGLE_CLASSROOM_COURSE_FIELDS } from '../constants';
export default (function () {
  var _useState = useState({
    isLoading: true,
    error: null,
    data: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      courseResults = _useState2[0],
      setCourseResults = _useState2[1];

  var getCourseList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var data;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCourseResults({
                isLoading: true,
                error: null,
                data: {}
              });
              _context.next = 4;
              return getCourseListApi(GOOGLE_CLASSROOM_COURSE_FIELDS);

            case 4:
              data = _context.sent;
              setCourseResults({
                isLoading: false,
                error: null,
                data: data
              });
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              logErrorWithContext('Failed to fetch google course list', [{
                key: 'errorMessage',
                value: _context.t0
              }]);
              setCourseResults({
                isLoading: false,
                error: _context.t0,
                data: {}
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getCourseList() {
      return _ref.apply(this, arguments);
    };
  }();

  return [courseResults, getCourseList];
});