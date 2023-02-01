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
}

import * as singleSpa from 'single-spa';
import { eventRegistry as events } from '@hmhco/amp-core-events';
import { sifChanged } from '@hmhco/amp-core/src/userContext/auth';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { clearLocalForageCache } from '@hmhco/core-network/src/axiosHelpers';
import getDomElementGetter from '@hmhco/amp-dom-element-getter/src/getDomElementGetter';
import errorBoundary from '@hmhco/error-boundary-message/src/errorBoundary';
import redirectToLogin from '@hmhco/redirect-to-login/src/redirectToLogin';
import { isVanillaRoute, VANILLA_ROUTE_EXCLUSIONS } from '@hmhco/amp-vanilla-routes';
import { datadogRum } from '@datadog/browser-rum';
import { isFeatureActive } from '@hmhco/feature-flags';
import adminApps from '../appsAdmin.config';
import studentApps from '../appsStudent.config';
import teacherApps from '../appsTeacher.config';
import { nonAuthApps } from '../appsCommon.config';
import { fetchFailedModule, hasAppFailedToLoad } from './fetchFailedModule';
import { LANDING_ROUTE_TEACHER_STUDENT, LANDING_ROUTE_EVALUATOR, LANDING_ROUTE_ADMINISTRATOR, ROLE_TEACHER, ROLE_STUDENT, ROLE_ADMIN } from './constants';
export var appActivity = function appActivity(location, routePath, appName) {
  if (isVanillaRoute() && VANILLA_ROUTE_EXCLUSIONS.includes(appName)) {
    return false;
  }

  var appPath = location.pathname + location.hash;
  /**
   * We don't want singleSpa.unloadApplication to automatically refetch the module
   * Single Spa will automaitcally refecth code for all apps that should be active
   * We disable the app and activate it manually if the import is successful
   */

  return appPath.startsWith("/".concat(routePath)) && hasAppFailedToLoad(appName) !== true;
};
/**
 * App registration loop using the config JSON
 *
 * Last attribute of register is `customProps` with attributes:
 * - `domElementGetter`: element creator func for single-spa-react
 * - `token`: authetication token from Login app
 * - `basename`: base URL path for app subroutes
 * - `ampBasename`: base URL path for AMP (to be able to route out to other apps)
 * - TODO: also add some event bus object, once designed
 */

export var appRegistration = function appRegistration(conf, ampRouteAnchor) {
  Object.keys(conf).forEach(function (appName) {
    var AMP_BASE_PATH = process.env.AMP_BASE_PATH;
    var appConfig = conf[appName];
    var imports = appConfig.imports,
        route = appConfig.route,
        appSections = appConfig.appSections,
        domElement = appConfig.domElement;
    var routePath = "".concat((AMP_BASE_PATH || '/ui').replace('/', ''), "/").concat(ampRouteAnchor).concat(route);
    singleSpa.registerApplication({
      name: appName,
      app: function app() {
        return imports()["catch"](function () {
          // we retry fetching the module
          fetchFailedModule(appName, imports);
        });
      },
      activeWhen: function activeWhen(location) {
        return appActivity(location, routePath, appName);
      },
      customProps: {
        domElementGetter: getDomElementGetter(domElement),
        basename: routePath,
        skipLinks: appSections,
        ampBasename: "ui/#",
        errorBoundary: errorBoundary,
        appConfig: appConfig,
        isCTS: true // for HNM apps loaded in CTS

      }
    });
  });
};
/**
 * select a default landing page depending on user role
 */

export var getFallbackUrl = function getFallbackUrl(userContext) {
  var isEvaluator = userContext.isEvaluator,
      isDistrictAdmin = userContext.isDistrictAdmin,
      isSchoolAdmin = userContext.isSchoolAdmin;

  if (isEvaluator) {
    return LANDING_ROUTE_EVALUATOR;
  }

  if (isSchoolAdmin || isDistrictAdmin) {
    return LANDING_ROUTE_ADMINISTRATOR;
  }

  return LANDING_ROUTE_TEACHER_STUDENT;
};
/**
 * Init url to dashboard if none set, otherwise use what has been specified
 */

export var initNavigation = function initNavigation(ampRouteAnchor, userContext) {
  // assuming that url uses #, not other symbols to indicate app
  var hashPortion = window.location.hash;
  var appRoute = hashPortion.substr(1); // remove #
  // if there is something after anchor, set it as url

  if (appRoute && appRoute.trim() !== '' && appRoute.trim() !== '/') {
    singleSpa.navigateToUrl(window.location.pathname + hashPortion);
  } else {
    // if the user is not logged in, redirect
    if (!(userContext === null || userContext === void 0 ? void 0 : userContext.sif)) {
      redirectToLogin({
        encodeStateInUrl: true
      });
      return;
    }

    singleSpa.navigateToUrl("/ui/".concat(ampRouteAnchor).concat(getFallbackUrl(userContext)));
  }
};
export function loadErrorLogger(error) {
  var appOrParcelName = error.appOrParcelName,
      message = error.message;
  logErrorWithContext('ContainerLaunchFailed', [{
    key: 'appOrParcelName',
    value: appOrParcelName
  }, {
    key: 'errorMessage',
    value: message
  }]);
}
export var errorHandler = function errorHandler(err) {
  var appOrParcelName = err.appOrParcelName;

  if (singleSpa.getAppStatus(appOrParcelName) === singleSpa.LOAD_ERROR) {
    loadErrorLogger(err);
  }
};
export var onStorage = function onStorage(event) {
  // normalise storage event for Safari browser
  if (!document.hasFocus()) {
    sifChanged(event);
  }
};
export var installStorageEvent = function installStorageEvent() {
  /** Listen to SIF changes being triggered */
  // eslint-disable-next-line @hmhco/amp-internal/registered-events-only
  window.addEventListener(events.STORAGE, onStorage);
};
export var installViewTracker = function installViewTracker() {
  window.addEventListener(events.SINGLE_SPA_ROUTING_EVENT, function (e) {
    if (e.detail.newUrl !== e.detail.oldUrl) {
      datadogRum.startView({
        name: e.detail.newUrl.split('/#')[1]
      });
    }
  });
};
/**
 * Applications that fail to load has their loading functions retried/recalled when
 * you navigate away from the route with the failed app and then come back to it.
 * {@link https://github.com/CanopyTax/single-spa/releases/tag/v4.4.0}
 */

export var addErrorHandler = function addErrorHandler() {
  singleSpa.addErrorHandler(errorHandler);
  return true;
};
export var installServiceWorker = function installServiceWorker() {
  navigator.serviceWorker.register('./container.sw.js');
};
/**
 * PWA stuff
 */

export var serviceWorkerWatcher = function serviceWorkerWatcher() {
  if ('serviceWorker' in navigator) {
    window.addEventListener(events.WINDOW_LOAD, installServiceWorker);
  } else {// no service worker
  }
};
export var clearLocalForage = function clearLocalForage() {
  clearLocalForageCache();
}; // Set up a onbeforeunload listener to clear the cache when the user refreshes the page or closes a tab without logging out

export var forageStoreWatcher = function forageStoreWatcher() {
  window.addEventListener(events.WINDOW_BEFOREUNLOAD, clearLocalForage);
};
/**
 * App config based of user role
 */

export var getAppConfigBasedOnUserRole = function getAppConfigBasedOnUserRole(userRole) {
  switch (userRole) {
    case ROLE_TEACHER:
      return teacherApps;

    case ROLE_STUDENT:
      return studentApps;

    case ROLE_ADMIN:
      return adminApps;

    default:
      console.warn("your user 'role' in token is undefined or is not supported yet - we do have a lovely selection of apps you can use without auth");
      return nonAuthApps;
  }
};
export var applyFeatureFlagFilter = function applyFeatureFlagFilter(config) {
  var isBehindFeatureFlag = function isBehindFeatureFlag(app) {
    return Boolean(app.featureFlagName);
  };

  var applyFeatureFlagCondition = function applyFeatureFlagCondition(key) {
    return !isBehindFeatureFlag(config[key]) || isFeatureActive(config[key].featureFlagName, true) ? _defineProperty({}, "".concat(key), config[key]) : {};
  };

  return Object.keys(config).reduce(function (aggregate, key) {
    return _objectSpread(_objectSpread({}, aggregate), applyFeatureFlagCondition(key));
  }, {});
};