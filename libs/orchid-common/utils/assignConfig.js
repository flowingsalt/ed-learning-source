// assignConfig - copied parts from arvo
var config = {
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
    SCORING_COMPLETED: 'SCORING_COMPLETED' // Grading Service status

  },
  assignmentType: {
    programAssessment: 'PROGRAM_ASSESSMENT',
    performanceTask: 'PERFORMANCE_TASK',
    customAssessment: 'CUSTOM_ASSESSMENT',
    sgmAssessment: 'STUDENT_GROWTH_MEASURE',
    hmhAssessment: 'HMH_ASSESSMENT',
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
    teacherPageSize: 25,
    teacherDefaultPage: 0,
    pageSize: 10,
    offset: 0,
    currentPage: 1,
    submitDate: 'submitDate',
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
    discipline: 'All'
  }
};
export default config;