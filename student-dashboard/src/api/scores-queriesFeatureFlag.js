import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query getRecentScores {\n    student {\n      refId\n      assignments(\n        offset: 0\n        status: \"COMPLETED\"\n        sifRefObject: ", "\n        sort: \"-updatedDateTime\"\n        recentlyScoredDaysLimit: 20\n      ) {\n        total\n        items {\n          refId\n          dueDate\n          submitDate\n          parentReviewRestrictedDate\n          isFromPreviousSchoolYears\n          partnerIdentifier\n          reviewAvailable\n          sectionId\n          title\n          sectionName\n          teacherAssignmentRefId\n          activities {\n            refId\n            sourceObject {\n              value\n              sifRefObject\n              isbn\n              name\n              customLessonId\n              manualScoring\n              deepLinkParameters\n              attributes {\n                programId\n                pool\n                resourceType\n                refId\n              }\n              connectedPartnerLaunch {\n                resourceId\n                tool\n              }\n            }\n            assignmentProficiency(\n              includeItemLevelScores: false\n              size: 1000\n              page: 0\n              numberOfDecimalToRoundOff: 1\n            ) {\n              _embedded {\n                scores {\n                  sessionId\n                  displayScore\n                  totalProficiencyPercentage\n                  totalItems\n                  performanceBand {\n                    id\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { gql } from '@apollo/client';
import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
var _assignConfig$assignm = assignConfig.assignmentType,
    programAssessment = _assignConfig$assignm.programAssessment,
    performanceTask = _assignConfig$assignm.performanceTask,
    customAssessment = _assignConfig$assignm.customAssessment,
    sgmAssessment = _assignConfig$assignm.sgmAssessment,
    hmhAssessment = _assignConfig$assignm.hmhAssessment,
    waggleAssessment = _assignConfig$assignm.waggleAssessment,
    writableAssessment = _assignConfig$assignm.writableAssessment,
    amiraAssessment = _assignConfig$assignm.amiraAssessment;
var sifRefObject = "\"".concat(programAssessment, ",").concat(performanceTask, ",").concat(customAssessment, ",").concat(sgmAssessment, ",").concat(hmhAssessment, ",").concat(waggleAssessment, ",").concat(writableAssessment, ",").concat(amiraAssessment, "\"");
var RECENT_SCORES_QUERY_FF = gql(_templateObject(), sifRefObject);
export default RECENT_SCORES_QUERY_FF;