import { globalNotifications, mainNavigation, contentProvider, ltierror, assessmentView } from './appsCommon.config';

var getProfessionalLearning = function getProfessionalLearning(route) {
  return {
    imports: function imports() {
      return import(
      /* webpackChunkName: "plsLeadersCorner" */
      '@hmhco/professional-learning/src/indexCtsLeadersCorner');
    },
    route: route,
    domElement: 'main-content'
  };
};

export default {
  mainNavigation: mainNavigation,
  trainingPath: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "teacher-training-path" */
      '@hmhco/teacher-training-path');
    },
    route: 'training-path',
    domElement: 'main-content'
  },
  globalNotifications: globalNotifications,
  contentProvider: contentProvider,
  assessmentView: assessmentView,
  ltierror: ltierror,
  roster: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "roster-dashboard" */
      '@hmhco/roster-dashboard');
    },
    route: 'roster',
    domElement: 'main-content'
  },
  adminReport: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-growth-report" */
      '@hmhco/admin-growth-report');
    },
    route: 'admin-growth-report',
    domElement: 'main-content'
  },
  adminStandardReport: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-standard-report" */
      '@hmhco/admin-standard-report');
    },
    route: 'admin-standard-report',
    domElement: 'main-content'
  },
  adminProgramActivity: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-program-activity" */
      '@hmhco/admin-program-activity');
    },
    route: 'admin-program-activity',
    domElement: 'main-content',
    featureFlag: 'reportingSuiteNewVision'
  },
  adminUsageReport: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-usage-report" */
      '@hmhco/admin-usage-report');
    },
    route: 'admin-usage-report',
    domElement: 'main-content'
  },
  adminClassReports: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-class-reports" */
      '@hmhco/admin-class-reports');
    },
    route: 'admin-class-reports',
    domElement: 'main-content'
  },
  adminReportingLandingPage: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-reporting-landing-page" */
      '@hmhco/admin-reporting-landing-page');
    },
    route: 'admin-reporting-landing-page',
    domElement: 'main-content'
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
  professionalLearning: getProfessionalLearning('LeadersCorner'),
  professionalLearningAliasForTeachers: getProfessionalLearning('TeachersCorner'),
  professionalLearningAliasForLearners: getProfessionalLearning('FamilyRoom'),
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
  myLessons: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "my-lessons" */
      '@hmhco/my-lessons');
    },
    route: 'my-stuff',
    domElement: 'main-content'
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
  myAssessments: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "my-assessments" */
      '@hmhco/my-assessments');
    },
    route: 'my-stuff/assessments',
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
  mySchools: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "my-schools" */
      '@hmhco/admin-manual-roster');
    },
    route: 'admin/my-schools',
    domElement: 'main-content'
  },
  adminPreferences: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-preferences" */
      '@hmhco/admin-preferences');
    },
    route: 'admin/preferences',
    domElement: 'main-content'
  },
  adminRoster: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-roster" */
      '@hmhco/admin-roster');
    },
    route: 'admin/roster',
    domElement: 'main-content'
  },
  licensing: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "licensing" */
      '@hmhco/licensing');
    },
    route: 'licenses',
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
  adminLms: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "admin-lms-settings" */
      '@hmhco/admin-lms-settings');
    },
    route: 'admin/lms-settings',
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
  sharedWithMe: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "shared-with-me" */
      '@hmhco/shared-with-me');
    },
    route: 'my-stuff/shared-with-me',
    domElement: 'main-content'
  },
  hcpLicensing: {
    imports: function imports() {
      return import('@hnm/license-management');
    },
    route: 'hcpLicensing',
    domElement: 'main-content',
    needsEdsToken: true,
    featureFlag: 'licensingApp'
  }
};