import _defineProperty from "@babel/runtime/helpers/defineProperty";
import keyMirror from '@hmhco/react-utils/src/keyMirror';
import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
export var assignmentStatuses = keyMirror({
  UNKNOWN: null,
  COMPLETED: null,
  NOT_STARTED: null,
  IN_PROGRESS: null,
  READY_FOR_SCORING: null,
  SCORING_IN_PROGRESS: null // Add other valid statuses here

});
export var sifRefObjectTypes = keyMirror(_defineProperty({
  CUSTOM_ASSESSMENT: null,
  PROGRAM_ASSESSMENT: null,
  OTHER_TEXT_RESOURCE: null,
  PERFORMANCE_TASK: null,
  STUDENT_GROWTH_MEASURE: null,
  HMH_ASSESSMENT: null
}, assignConfig.assignmentType.amiraAssessment, null));
export default assignmentStatuses;