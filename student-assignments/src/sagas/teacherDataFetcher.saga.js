import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(fetchStudentsTeachers);
/* eslint-disable import/prefer-default-export */


import { put, select, call } from 'redux-saga/effects';
import { getStudentTeachersArray } from 'orchid-common/reducers/studentsTeachers.selectors';
import { getSifToken, getCurrentUserId } from 'orchid-common/reducers/user.selectors';
import { loadStudentTeachers, errorStudentTeachers, fetchStudentTeachers as fetchStudentTeachersAction } from 'orchid-common/actions/ids.actions';
import { reportNetworkFail } from 'orchid-common/actions';
import { getStudentsTeachers } from 'orchid-common/api/idsApi';
export function fetchStudentsTeachers() {
  var currentLoadedTeachers, sif, studentRefId, studentsTeachers;
  return _regeneratorRuntime.wrap(function fetchStudentsTeachers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select(getStudentTeachersArray);

        case 2:
          currentLoadedTeachers = _context.sent;

          if (!(currentLoadedTeachers.length > 0)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return");

        case 5:
          _context.next = 7;
          return select(getSifToken);

        case 7:
          sif = _context.sent;
          _context.next = 10;
          return select(getCurrentUserId);

        case 10:
          studentRefId = _context.sent;
          _context.next = 13;
          return put(fetchStudentTeachersAction());

        case 13:
          _context.next = 15;
          return call(getStudentsTeachers, {
            sif: sif,
            studentRefId: studentRefId
          });

        case 15:
          studentsTeachers = _context.sent;

          if (!studentsTeachers.error) {
            _context.next = 22;
            break;
          }

          _context.next = 19;
          return put(reportNetworkFail());

        case 19:
          _context.next = 21;
          return put(errorStudentTeachers());

        case 21:
          return _context.abrupt("return");

        case 22:
          _context.next = 24;
          return put(loadStudentTeachers(studentsTeachers.result));

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}