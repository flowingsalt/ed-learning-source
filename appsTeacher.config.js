import { VIRTUAL_CLASSROOM_AMP_URL } from '@hmhco/url-const-virtualclassroom/src/virtualClassroomUrl';
import { TEACHER_ASSIGNMENTS_OVERVIEW_AMP } from '@hmhco/url-const-assignments/src/teacherAssignmentOverviewUrl';
import { TEACHER_ASSIGNMENTS_DETAILS_AMP_URL } from '@hmhco/url-const-assignmentsdetails/src/teacherAssignmentDetailsUrl';
import { TEACHER_GROUPS_AMP_URL } from '@hmhco/url-const-groups/src/groupsUrl';
import { MY_CLASS_SETTINGS_URL } from '@hmhco/url-const-settings/src/settingsUrl';
import { TEACHER_ROSTER_URL_AMP } from '@hmhco/url-const-roster/src/teacherRosterUrl';
import { ROSTER_STUDENTS_URL } from '@hmhco/url-const-students/src/rosterStudentsUrl';
import { TEACHER_ASSIGNMENT_REVIEW_URL } from '@hmhco/url-const-assignmentreview/src/teacherAssessmentReviewUrl';
import { globalNotifications, mainNavigation, globalNavigationConfirmation, contentProvider, ltierror, userProfile, assessmentView, teacherScoring } from './appsCommon.config';

var getProfessionalLearning = function getProfessionalLearning(route) {
  return {
    imports: function imports() {
      return import(
      /* webpackChunkName: "plsTeacherCorner" */
      '@hmhco/professional-learning/src/indexCts');
    },
    route: route,
    domElement: 'main-content'
  };
};

export default {
  mainNavigation: mainNavigation,
  userProfile: userProfile,
  globalNotifications: globalNotifications,
  globalNavigationConfirmation: globalNavigationConfirmation,
  contentProvider: contentProvider,
  ltierror: ltierror,
  assessmentView: assessmentView,
  teacherScoring: teacherScoring,
  trainingPath: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-training-path" */
      '@hmhco/teacher-training-path');
    },
    route: 'training-path',
    domElement: 'main-content'
  },
  teacherDashboard: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-dashboard" */
      '@hmhco/teacher-dashboard');
    },
    route: 'dashboard',
    domElement: 'main-content',
    appSections: [{
      sectionId: 'main',
      sectionName: 'Main Content'
    }, {
      sectionId: 'dueToday',
      sectionName: 'Due Today'
    }, {
      sectionId: 'needsGrading',
      sectionName: 'Needs Grading'
    }, {
      sectionId: 'overdue',
      sectionName: 'Overdue'
    }]
  },
  myClasses: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "my-classes" */
      '@hmhco/my-classes');
    },
    route: 'my-classes',
    domElement: 'main-content'
  },
  myClassSettings: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "my-class-settings" */
      '@hmhco/my-class-settings');
    },
    route: MY_CLASS_SETTINGS_URL,
    domElement: 'main-content'
  },
  assignments: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-assignments" */
      '@hmhco/teacher-assignments');
    },
    route: TEACHER_ASSIGNMENTS_OVERVIEW_AMP,
    domElement: 'main-content'
  },
  assignmentsDetails: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-assignments-details" */
      '@hmhco/teacher-assignments-details');
    },
    route: TEACHER_ASSIGNMENTS_DETAILS_AMP_URL,
    domElement: 'main-content'
  },
  studentAssignmentDetails: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "student-assignment-details" */
      '@hmhco/student-assignment-details');
    },
    route: 'student-assignment-details',
    domElement: 'main-content'
  },
  groups: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "groups" */
      '@hmhco/groups');
    },
    route: TEACHER_GROUPS_AMP_URL,
    domElement: 'main-content'
  },
  roster: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-manual-roster" */
      '@hmhco/teacher-manual-roster');
    },
    route: TEACHER_ROSTER_URL_AMP,
    domElement: 'main-content'
  },
  virtualClassroom: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "virtual-classroom" */
      '@hmhco/virtual-classroom');
    },
    route: VIRTUAL_CLASSROOM_AMP_URL,
    domElement: 'main-content'
  },
  myLessons: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "my-lessons" */
      '@hmhco/my-lessons');
    },
    route: 'my-stuff',
    domElement: 'main-content'
  },
  productLanding: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "product-landing" */
      '@hmhco/product-landing');
    },
    route: 'product',
    domElement: 'main-content'
  },
  directEntry: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "direct-entry" */
      '@hmhco/direct-entry');
    },
    route: 'direct-entry',
    domElement: 'main-content'
  },
  growthReport: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "growth-report" */
      '@hmhco/growth-report');
    },
    route: 'reports/growth-report',
    domElement: 'main-content'
  },
  practiceReport: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "growth-report" */
      '@hmhco/practice-report');
    },
    route: 'reports/practice-report',
    domElement: 'main-content'
  },
  myAssessments: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "my-assessments" */
      '@hmhco/my-assessments');
    },
    route: 'my-stuff/assessments',
    domElement: 'main-content'
  },
  standardsReport: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "standards-report" */
      '@hmhco/standards-report');
    },
    route: 'reports/standards-report',
    domElement: 'main-content'
  },
  assessmentReport: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "assessment-report" */
      '@hmhco/assessment-report');
    },
    route: 'reports/assessment-report',
    domElement: 'main-content'
  },
  professionalLearning: getProfessionalLearning('TeachersCorner'),
  professionalLearningAliasForAdmins: getProfessionalLearning('LeadersCorner'),
  // this is required for link sharing with Admins
  professionalLearningAliasForLearners: getProfessionalLearning('FamilyRoom'),
  // this is required for link sharing with Learners
  discover: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "discover" */
      '@hmhco/discover');
    },
    location: "".concat(process.env.AMP_BASE_PATH, "/discover"),
    route: 'discover',
    domElement: 'main-content'
  },
  lesson: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "lessonPage" */
      '@hmhco/lessonPage');
    },
    location: "".concat(process.env.AMP_BASE_PATH, "/lessonPage"),
    route: 'discover',
    domElement: 'main-content-alternative'
  },
  picker2: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "content-picker-2" */
      '@hmhco/content-picker-2');
    },
    route: 'picker',
    domElement: 'main-content-picker2'
  },
  lessonPagePicker: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "lessonPage" */
      '@hmhco/lessonPage');
    },
    location: "".concat(process.env.AMP_BASE_PATH, "/lessonPage"),
    route: 'picker',
    domElement: 'main-content'
  },
  allResourcesPicker: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "allResources" */
      '@hmhco/allResources');
    },
    route: 'picker',
    domElement: 'main-content-alternative'
  },
  edUpdates: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "updates" */
      '@hmhco/updates');
    },
    location: "".concat(process.env.AMP_BASE_PATH, "/ed-updates"),
    route: 'ed-updates',
    domElement: 'main-content',
    appSections: [{
      sectionId: 'edUpdates',
      sectionName: 'EdUpdates'
    }]
  },
  evaluator: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "evaluator" */
      '@hmhco/evaluator');
    },
    location: "".concat(process.env.AMP_BASE_PATH, "/evaluator"),
    route: 'evaluator',
    domElement: 'main-content',
    appSections: [{
      sectionId: 'evaluator',
      sectionName: 'evaluator'
    }]
  },
  resourceList: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "resource-list" */
      '@hmhco/resource-list');
    },
    location: "".concat(process.env.AMP_BASE_PATH, "/resource-list"),
    route: 'resource-list',
    domElement: 'main-content'
  },
  resourceDetails: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "resourceDetails" */
      '@hmhco/resource-details');
    },
    location: "".concat(process.env.AMP_BASE_PATH, "/resource-details"),
    route: 'resource-details',
    domElement: 'main-content'
  },
  resourceDetailsPicker: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "resourceDetails" */
      '@hmhco/resource-details');
    },
    route: 'picker/resource-details',
    domElement: 'main-content-picker2'
  },
  myItems: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "my-items" */
      '@hmhco/my-items');
    },
    route: 'my-stuff/items',
    domElement: 'main-content'
  },
  ireadPracticeReport: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "iread-practice-report" */
      '@hmhco/iread-practice-report');
    },
    route: 'iread-practice-report',
    domElement: 'main-content'
  },
  ireadProductSettings: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "iread-product-settings" */
      '@hmhco/iread-product-settings');
    },
    route: 'iread-product-settings',
    domElement: 'main-content'
  },
  ireadTeacherPage: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "iread-teacher-page" */
      '@hmhco/iread-teacher-page');
    },
    route: 'iread-teacher-page',
    domElement: 'main-content'
  },
  ireadOverview: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "iread-overview" */
      '@hmhco/iread-overview');
    },
    route: 'iread-overview',
    domElement: 'main-content'
  },
  teacherAssessmentReview: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-assessment-review" */
      '@hmhco/teacher-assessment-review');
    },
    route: TEACHER_ASSIGNMENT_REVIEW_URL,
    domElement: 'main-content'
  },
  manualScoring: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "manual-scoring" */
      '@hmhco/manual-scoring');
    },
    route: 'manual-scoring',
    domElement: 'main-content'
  },
  rosterStudents: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "roster-students" */
      '@hmhco/roster-students');
    },
    route: ROSTER_STUDENTS_URL,
    domElement: 'main-content'
  },
  fullpageCreateAssignment: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "fullpage-create-assignment" */
      '@hmhco/fullpage-create-assignment');
    },
    route: 'assign-full',
    domElement: 'main-content'
  },
  sharedWithMe: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "shared-with-me" */
      '@hmhco/shared-with-me');
    },
    route: 'my-stuff/shared-with-me',
    domElement: 'main-content'
  },
  standards: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "standards" */
      '@hmhco/standards');
    },
    route: 'standards',
    domElement: 'main-content'
  },
  allResources: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "allResources" */
      '@hmhco/allResources');
    },
    route: 'allResources',
    domElement: 'main-content'
  },
  teacherSettingsStudent: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-settings-student" */
      '@hmhco/teacher-settings-student');
    },
    route: 'teacher-settings-student',
    domElement: 'main-content'
  },
  teacherSettingsClassroom: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-settings-classroom" */
      '@hmhco/teacher-settings-classroom');
    },
    route: 'teacher-settings-classroom',
    domElement: 'main-content'
  }
};