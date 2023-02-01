import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  {\n    student {\n      refId: refId\n      username: username\n      overdueAssignments(dueDaysLimit: 1000) {\n         ", "\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation imDone($assignmentActivityRefId: UUID!) {\n    markAssignmentActivityDone(\n      assignmentActivityRefId: $assignmentActivityRefId\n    ) {\n      status\n      refId\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query getAssignmentsList($timeZoneOffset: String!) {\n    student {\n      refId\n      username\n      overdueAssignments {\n        ", "\n      }\n      dueTodayAssignments(timeZoneOffset: $timeZoneOffset) {\n        ", "\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/* eslint-disable import/prefer-default-export */


import { gql } from '@apollo/client';
var assignmentObject = "\n        total\n        items {\n          refId\n          title\n          status\n          dueDate\n          lockedAfterDueDate\n          availableDate\n          sectionName\n          sectionId\n          teacherAssignmentRefId\n          preamble\n          partnerIdentifier\n          skipCheckAvailable\n          activities {\n            refId\n            status\n            sourceObject {\n              value\n              sifRefObject\n              isbn\n              name\n              customLessonId\n              deepLinkParameters\n              connectedPartnerLaunch {\n                resourceId\n                tool\n              }\n              attributes {\n                programId\n                mediaType\n                resourceType\n                refId\n              }\n            }\n          }\n        }\n";
export var ASSIGNMENTS_LIST_QUERY = gql(_templateObject(), assignmentObject, assignmentObject);
export var IM_DONE_MUTATION = gql(_templateObject2());
export var STUDENT_CTS_OVERDUE_QUERY = gql(_templateObject3(), assignmentObject);