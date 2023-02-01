import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query getRecentScores {\n    student {\n      refId\n      assignments(\n        offset: 0\n        status: \"COMPLETED\"\n        sifRefObject: \"PROGRAM_ASSESSMENT,PERFORMANCE_TASK,CUSTOM_ASSESSMENT,STUDENT_GROWTH_MEASURE,HMH_ASSESSMENT\"\n        sort: \"-updatedDateTime\"\n        recentlyScoredDaysLimit: 1000\n      ) {\n        total\n        items {\n          refId\n          dueDate\n          submitDate\n          parentReviewRestrictedDate\n          isFromPreviousSchoolYears\n          reviewAvailable\n          title\n          sectionName\n          teacherAssignmentRefId\n          activities {\n            refId\n            sourceObject {\n              value\n              sifRefObject\n              isbn\n              name\n              customLessonId\n              manualScoring\n              attributes {\n                programId\n                pool\n                resourceType\n                refId\n              }\n            }\n            assignmentProficiency(\n              includeItemLevelScores: false\n              size: 1000\n              page: 0\n              numberOfDecimalToRoundOff: 1\n            ) {\n              _embedded {\n                scores {\n                  sessionId\n                  displayScore\n                  totalProficiencyPercentage\n                  totalItems\n                  performanceBand {\n                    id\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query getRecentScores {\n    student {\n      refId\n      assignments(\n        offset: 0\n        status: \"COMPLETED\"\n        sifRefObject: \"PROGRAM_ASSESSMENT,PERFORMANCE_TASK,CUSTOM_ASSESSMENT,STUDENT_GROWTH_MEASURE,HMH_ASSESSMENT\"\n        sort: \"-updatedDateTime\"\n        recentlyScoredDaysLimit: 20\n      ) {\n        total\n        items {\n          refId\n          dueDate\n          submitDate\n          parentReviewRestrictedDate\n          isFromPreviousSchoolYears\n          reviewAvailable\n          title\n          sectionName\n          teacherAssignmentRefId\n          activities {\n            refId\n            sourceObject {\n              value\n              sifRefObject\n              isbn\n              name\n              customLessonId\n              manualScoring\n              attributes {\n                programId\n                pool\n                resourceType\n                refId\n              }\n            }\n            assignmentProficiency(\n              includeItemLevelScores: false\n              size: 1000\n              page: 0\n              numberOfDecimalToRoundOff: 1\n            ) {\n              _embedded {\n                scores {\n                  sessionId\n                  displayScore\n                  totalProficiencyPercentage\n                  totalItems\n                  performanceBand {\n                    id\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { gql } from '@apollo/client';
var RECENT_SCORES_QUERY = gql(_templateObject());
export var RECENT_SCORES_QUERY_FOR_TEST = gql(_templateObject2());
export default RECENT_SCORES_QUERY;