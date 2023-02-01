import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
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

import { useState } from 'react';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import teacherApi from '@hmhco/teacher-api/src/teacherApi';
export default (function () {
  var _getUserCtx = getUserCtx(),
      userId = _getUserCtx.userId;

  var _teacherApi = teacherApi(),
      getTeacherClassesCached = _teacherApi.getTeacherClassesCached,
      cancel = _teacherApi.cancel;

  var initialState = {
    isLoading: false,
    error: null,
    classes: null
  };

  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      teacherResults = _useState2[0],
      classesResults = _useState2[1];

  var fetchTeachersClasses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var data;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              classesResults(_objectSpread(_objectSpread({}, teacherResults), {}, {
                isLoading: true
              }));
              _context.prev = 1;
              _context.next = 4;
              return getTeacherClassesCached(userId);

            case 4:
              data = _context.sent;
              classesResults(_objectSpread(_objectSpread({}, initialState), {}, {
                classes: data
              }));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              classesResults(_objectSpread(_objectSpread({}, teacherResults), {}, {
                error: _context.t0
              }));

            case 11:
              return _context.abrupt("return", function () {
                cancel('Cancelled by useFetchTeacherClasses');
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function fetchTeachersClasses() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    teacherResults: teacherResults,
    fetchTeachersClasses: fetchTeachersClasses
  };
});