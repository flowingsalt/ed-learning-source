export var getStudentTeachersLoading = function getStudentTeachersLoading(state) {
  return state.studentsTeachers.loading;
};
export var getStudentTeachersArray = function getStudentTeachersArray(state) {
  var teachers = state.studentsTeachers;

  if (teachers.loading || teachers.error) {
    return [];
  }

  return teachers.teachers.toJS();
};