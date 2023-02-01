import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { isVanillaRoute } from '@hmhco/amp-vanilla-routes';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import { eventRegistry as events } from '@hmhco/amp-core-events';
import { googleEventRegistry as googleEvents } from '@hmhco/google-events';
export var pendoCustomConfig = {
  accountKey: '61eca664-c603-493a-5595-b0c9ba6577dd',
  logError: function logError(error) {
    return logErrorWithContext('Failed initializing Pendo', [{
      key: 'errorMessage',
      value: error
    }]);
  },
  trackingEvents: [events.TEACHER_NO_CLASS, events.TEACHER_CLASSES_TO_SETUP, events.NO_STUDENTS_IN_CLASS, events.FAVORITES, events.SEARCH_NO_RESULTS, googleEvents.GOOGLE_CLASSROOM_LINKED_ASSIGNMENT]
};
export var googleTagManager = {
  load: function load() {
    return import(
    /* webpackChunkName: "googleTagManager" */
    '@hmhco/google-tag-manager/src/initGoogleTagManagerAmp').then(function (m) {
      return m["default"]();
    });
  }
};

var getPendo = function getPendo() {
  var userContext = getUserCtx();
  return import(
  /* webpackChunkName: "pendo" */
  '@ed/pendo-install').then(function (m) {
    m.registerPendoWhenEnabled(userContext, pendoCustomConfig);
  });
};

export var pendo = {
  load: function load() {
    return !isVanillaRoute() && getPendo();
  }
};
export var userProfile = {
  imports: function imports() {
    return import(
    /* webpackChunkName: "user-profile" */
    '@hmhco/user-profile');
  },
  route: '',
  domElement: 'user-profile'
};
export var mainNavigation = {
  imports: function imports() {
    return import(
    /* webpackChunkName: "main-navigation" */
    '@hmhco/main-navigation');
  },
  route: '',
  domElement: 'main-nav',
  appSections: [{
    sectionId: 'main',
    sectionName: 'Main'
  }]
};
export var globalNotifications = {
  imports: function imports() {
    return import(
    /* webpackChunkName: "global-notifications" */
    '@hmhco/global-notifications');
  },
  route: '',
  domElement: 'global-notifications'
};
export var globalNavigationConfirmation = {
  imports: function imports() {
    return import(
    /* webpackChunkName: "global-navigation-confirmation" */
    '@hmhco/global-navigation-confirmation-dialog');
  },
  route: '',
  domElement: 'global-navigation-confirmation'
};
export var contentProvider = {
  imports: function imports() {
    return import(
    /* webpackChunkName: "content-provider" */
    '@hmhco/content-provider');
  },
  route: 'contentProvider',
  domElement: 'main-content'
};
export var ltierror = {
  imports: function imports() {
    return import(
    /* webpackChunkName: "ltierror" */
    '@hmhco/ltierror');
  },
  route: 'ltierror',
  domElement: 'main-content'
};
export var assessmentView = {
  imports: function imports() {
    return import(
    /* webpackChunkName: "assessment-view" */
    '@hmhco/assessment-view');
  },
  route: 'assessment-view',
  domElement: 'main-content'
};
export var teacherScoring = {
  imports: function imports() {
    return import(
    /* webpackChunkName: "teacher-scoring" */
    '@hmhco/teacher-scoring');
  },
  route: 'scoring',
  domElement: 'main-content'
};
export var nonAuthApps = {
  fallbackRoute: {
    imports: function imports() {
      return import(
      /* webpackChunkName: "fallbackNonAuth" */
      '@hmhco/fallbackNonAuth');
    },
    route: '',
    domElement: 'fallbackNonAuth'
  },
  ltierror: ltierror,
  contentProvider: contentProvider,
  assessmentView: assessmentView
};
export var utilityModules = [googleTagManager, pendo];