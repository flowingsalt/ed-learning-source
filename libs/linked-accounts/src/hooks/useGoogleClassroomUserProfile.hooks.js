import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState } from 'react';
import getUserProfileApi from '@hmhco/viaduct-api/src/googleClassroom/getUserProfileApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { GOOGLE_CLASSROOM_USER_PROFILE_FIELDS } from '../constants';
export default (function () {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      userEmail = _useState2[0],
      setUserEmail = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      userName = _useState4[0],
      setUserName = _useState4[1];

  var getUserProfile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var result;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return getUserProfileApi(GOOGLE_CLASSROOM_USER_PROFILE_FIELDS);

            case 3:
              result = _context.sent;

              if (result.emailAddress) {
                setUserEmail(result.emailAddress);
              }

              if (result.name) {
                setUserName(result.name);
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              logErrorWithContext('Failed to fetch google user profile', [{
                key: 'errorMessage',
                value: _context.t0
              }]);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getUserProfile() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    userEmail: userEmail,
    userName: userName,
    getUserProfile: getUserProfile
  };
});