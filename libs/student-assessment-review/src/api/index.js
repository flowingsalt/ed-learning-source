import requestFactory from 'orchid-common/api/requestFactory';
import { getCurrentTimestampForAssignmentService } from 'orchid-common/utils/dateTimeFormatters'; // These are all empty as the assessment service does not have external URLs currently. See https://scm.eng.hmhco.com/Ed-Learning/orchid/pull/1053/files#r285562250

var urls = {
  local: '',
  "int": '',
  cert: '',
  prod: ''
};
var signatureSuffix = '/api/assessment/v1/learnosity/signature';
var studentAssignmentSuffix = '/api/assignment/v2/studentAssignments/';
export function getItemsAPISignature(env, sif, userId, request) {
  var baseUrl = urls[env];
  var url = "".concat(baseUrl).concat(signatureSuffix);
  var data = {
    userId: userId,
    timestamp: getCurrentTimestampForAssignmentService(),
    domain: window.location.hostname,
    request: JSON.stringify(request)
  };
  return requestFactory(url, 'post', sif, JSON.stringify(data)).then(function (response) {
    return response.response;
  })["catch"](function (error) {
    return {
      error: error
    };
  });
}
export function getStudentAssignment(env, sif, assignmentId) {
  var baseUrl = urls[env];
  var url = "".concat(baseUrl).concat(studentAssignmentSuffix).concat(assignmentId);
  return requestFactory(url, 'get', sif).then(function (response) {
    return response.response;
  })["catch"](function (error) {
    return {
      error: error
    };
  });
}