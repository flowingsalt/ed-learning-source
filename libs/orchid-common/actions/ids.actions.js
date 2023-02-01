import { TEACHER_FETCH_ACTIONS } from './types';
export var fetchStudentTeachers = function fetchStudentTeachers() {
  return {
    type: TEACHER_FETCH_ACTIONS.FETCH_TEACHERS
  };
};
export var loadStudentTeachers = function loadStudentTeachers(teachers) {
  return {
    type: TEACHER_FETCH_ACTIONS.LOAD_TEACHERS,
    teachers: teachers
  };
};
export var errorStudentTeachers = function errorStudentTeachers() {
  return {
    type: TEACHER_FETCH_ACTIONS.FETCH_TEACHERS_ERROR
  };
};