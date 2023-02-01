import { globalNotifications, mainNavigation, contentProvider, ltierror, assessmentView, teacherScoring } from './appsCommon.config';

var getProfessionalLearning = function getProfessionalLearning(route) {
  return {
    imports: function imports() {
      return import(
      /* webpackChunkName: "plsFamilyRoom" */
      '@hmhco/professional-learning/src/indexCtsFamilyRoom');
    },
    route: route,
    domElement: 'main-content'
  };
};

export default {
  mainNavigation: mainNavigation,
  globalNotifications: globalNotifications,
  contentProvider: contentProvider,
  ltierror: ltierror,
  assessmentView: assessmentView,
  teacherScoring: teacherScoring,
  studentDashboard: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "student-dashboard" */
      '@hmhco/student-dashboard');
    },
    route: 'dashboard',
    domElement: 'main-content'
  },
  assignments: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "student-assignments" */
      '@hmhco/student-assignments');
    },
    route: 'assignments',
    domElement: 'main-content'
  },
  scores: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "scores" */
      '@hmhco/scores');
    },
    route: 'scores',
    domElement: 'main-content'
  },
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
  allResources: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "allResources" */
      '@hmhco/allResources');
    },
    route: 'allResources',
    domElement: 'main-content'
  },
  professionalLearning: getProfessionalLearning('FamilyRoom'),
  professionalLearningAliasForTeachers: getProfessionalLearning('TeachersCorner'),
  // this is required for link sharing with Teachers
  professionalLearningAliasForAdmins: getProfessionalLearning('LeadersCorner') // this is required for link sharing with Admins

};