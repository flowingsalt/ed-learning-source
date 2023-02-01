/* eslint-disable import/prefer-default-export */
var TEACHER_ASSIGNMENTS_DETAILS_SUBROUTE = 'classAssignmentsDetails'; // TODO: Remove "my-classes" from the URL altogether in the next PR https://jira.hmhco.com/browse/AE-1036

var MY_CLASSES = 'my-classes';
export var TEACHER_ASSIGNMENTS_DETAILS_URL = "".concat(MY_CLASSES, "/").concat(TEACHER_ASSIGNMENTS_DETAILS_SUBROUTE);
export var TEACHER_ASSIGNMENTS_DETAILS_AMP_URL = TEACHER_ASSIGNMENTS_DETAILS_SUBROUTE;
export var TEACHER_ASSIGNMENTS_DETAILS_ROUTE = "/".concat(TEACHER_ASSIGNMENTS_DETAILS_URL, "/:assignmentId/:studentId?");
export var TEACHER_ASSIGNMENTS_DETAILS_AMP_ROUTE = "/".concat(TEACHER_ASSIGNMENTS_DETAILS_AMP_URL, "/:assignmentId/:studentId?");