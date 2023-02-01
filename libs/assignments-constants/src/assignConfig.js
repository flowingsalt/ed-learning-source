import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
} // assignConfig - copied parts from arvo


export var assignConfig = {
  status: {
    NOT_STARTED: 'NOT_STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    TURNED_IN: 'TURNED_IN',
    NOT_SCORED: 'NOT_SCORED',
    TEACHER_ACTION_REQUIRED: 'TEACHER_ACTION_REQUIRED',
    PEER_REVIEW_REQUIRED: 'PEER_REVIEW_REQUIRED',
    COMPLETED: 'COMPLETED',
    EXPIRED: 'EXPIRED',
    READY_FOR_SCORING: 'READY_FOR_SCORING',
    READY_FOR_SCORING_STUDENT: 'READY_FOR_SCORING_STUDENT',
    READY_FOR_SCORING_STUDENT_LIST: 'READY_FOR_SCORING_STUDENT_LIST',
    NONE: '',
    SCORING_IN_PROGRESS: 'SCORING_IN_PROGRESS',
    // Grading Service status
    SCORING_COMPLETED: 'SCORING_COMPLETED',
    // Grading Service status
    ONLY_IN_ED: 'ONLY_IN_ED',
    // Google Classroom roster sync mismatch status
    ONLY_IN_GOOGLE: 'ONLY_IN_GOOGLE' // Google Classroom roster sync mismatch status

  },
  assignmentType: {
    programAssessment: 'PROGRAM_ASSESSMENT',
    performanceTask: 'PERFORMANCE_TASK',
    customAssessment: 'CUSTOM_ASSESSMENT',
    sgmAssessment: 'STUDENT_GROWTH_MEASURE',
    hmhAssessment: 'HMH_ASSESSMENT',
    amiraAssessment: 'HMH_AMIRA',
    waggleAssessment: 'HMH_WAGGLE',
    writableAssessment: 'HMH_WRITABLE',
    other: 'OTHER_TEXT_RESOURCE'
  },
  msgType: {
    userHasLoadedAssessment: 'userHasLoadedAssessment',
    userhasPressedStart: 'userhasPressedStart',
    userhasPressedSubmit: 'userhasPressedSubmit'
  },
  scoresList: {
    pageSize: 10,
    offset: 0,
    currentPage: 1,
    submitDate: 'submitDate',
    title: 'title',
    dueDate: 'dueDate',
    sortDesc: 'desc',
    sortAsc: 'asc'
  },
  assignmentList: {
    teacherPageSize: 50,
    viewByStudentPageSize: 25,
    studentAssignmentPageSize: 50,
    teacherDefaultPage: 0,
    studentDefaultPage: 0,
    pageSize: 10,
    offset: 0,
    currentPage: 1,
    submitDate: 'submitDate',
    startTime: 'startTime',
    title: 'title',
    feedback: 'feedback',
    dueDate: 'dueDate',
    sortDesc: 'desc',
    sortAsc: 'asc',
    discipline: 'All'
  },
  assignmentDetailsList: {
    submitdate: 'submitdate',
    title: 'title',
    startdate: 'startdate',
    student: 'student',
    sortDesc: 'desc',
    sortAsc: 'asc',
    discipline: 'All',
    score: 'score'
  },
  createAssignments: {
    ASSIGNMENT_TITLE_LIMIT: 250,
    ASSIGNMENT_DIRECTIONS_LIMIT: 500,
    CUSTOM_ASSESSMENTS_PROGRAMID: 'CUSTOM',
    CUSTOM_ASSESSMENTS_MEDIATYPE: 'Digital Assessment'
  },
  mdsType: {
    performanceTask: 'Performance Task',
    sgm: 'Student_Growth_Measure',
    hmhAssessment: 'HMH_Assessment'
  },
  partnerAssignments: {
    AMIRA_CUSTOM_ASSIGNMENT_ID: 'AMIRA_CUSTOM_ID',
    WAGGLE_CUSTOM_ASSIGNMENT_ID: 'WAGGLE_CUSTOM_ID',
    WRITABLE_CUSTOM_ASSIGNMENT_ID: 'WRITABLE_CUSTOM_ID'
  },
  sharedAssignmentType: {
    googleClassroom: 'GOOGLE_CLASSROOM'
  }
};
export var NEEDS_GRADING = 'NEEDS_GRADING';
export var OVERDUE = 'OVERDUE';
export var BY_FILTERS = 'BY_FILTERS';
export var DUE_TODAY = 'DUE_TODAY';
export var STUDENT_GROWTH_MEASURE_FILTER = 'SGM';
export var STUDENTS_COUNT = 'studentsCount';
export var NEEDS_GRADING_DAYS_LIMIT = 20;
export var OVERDUE_DAYS_LIMIT = 20;
var SGM_ASSIGNMENT_FILTER_TYPE = 'STUDENT_GROWTH_MEASURE';
var SGM_ASSIGNMENT_FILTER_LIMIT = 1000;
export var COMMON_PARAMS = {
  counts: 'status',
  teamTeachers: true,
  limit: 1000
};
export var NEEDS_GRADING_PARAMS = _objectSpread(_objectSpread({}, COMMON_PARAMS), {}, {
  status: "".concat(assignConfig.status.READY_FOR_SCORING, ",").concat(assignConfig.status.SCORING_IN_PROGRESS),
  studentAssignmentStatus: "".concat(assignConfig.status.READY_FOR_SCORING, ",").concat(assignConfig.status.SCORING_IN_PROGRESS),
  dueDaysLimit: NEEDS_GRADING_DAYS_LIMIT
});
export var DUE_TODAY_PARAMS = _objectSpread(_objectSpread({}, COMMON_PARAMS), {}, {
  dueToday: true
});
export var OVERDUE_PARAMS = _objectSpread(_objectSpread({}, COMMON_PARAMS), {}, {
  studentAssignmentStatus: "".concat(assignConfig.status.NOT_STARTED, ",").concat(assignConfig.status.IN_PROGRESS),
  overdue: true,
  dueDaysLimit: OVERDUE_DAYS_LIMIT
});
export var SGM_PARAMS = {
  sourceObjectTypes: SGM_ASSIGNMENT_FILTER_TYPE,
  limit: SGM_ASSIGNMENT_FILTER_LIMIT
};
export var TEACHER_ASSIGNMENT_URL = '/api/assignment/v5/teacherAssignments';
export var TEACHER_ASSIGNMENT_URL_BY_FILTERS = '/api/assignment/v5/teacherAssignments/byFilters';