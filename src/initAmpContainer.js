import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as singleSpa from 'single-spa';
import tabHandler from '@hmhco/tab-handler/src/tabHandler';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import getLocale from '@hmhco/i18n-react/src/localeApi/getLocale';
import { getSessionFromPreviousTab } from '@hmhco/amp-core/src/utils/sharedSession';
import initRUM from '@hmhco/client-monitoring-init/src/datadog/initRum';
import initBrowserLogs from '@hmhco/client-monitoring-init/src/datadog/initBrowserLogs';
import { instantiateFeatureFlagConfig } from '@hmhco/feature-flags';
import addEssentialMonitoringContext from '@hmhco/client-monitoring/src/context/addEssentialMonitoringContext';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { clearLocalForageCache } from '@hmhco/core-network/src/axiosHelpers';
import { ampRouteAnchor } from './constants';
import { utilityModules } from '../appsCommon.config';
import { installStorageEvent, installViewTracker, addErrorHandler, getAppConfigBasedOnUserRole, applyFeatureFlagFilter, appRegistration, initNavigation, serviceWorkerWatcher, forageStoreWatcher } from './container.utils';

var initAmpContainer = function initAmpContainer() {
  var userContext = getUserCtx(); // Define the sample rates for RUM. The value rumSampleRate is the percentage of sessions to sample
  // and the sessionReplayRate is the percentage of those to use Session Replay with.
  // For example if there are are 1000 sessions then 10 will be sampled with RUM and 2 will use Session Replay

  var rumSampleRate = 1;
  var sessionReplaySampleRate = 20; // DataDog logging: browser and Real User Monitoring

  initBrowserLogs('AMP_UI', 'pub6215bb5978f75631c332ae0ca6639655');
  initRUM('f8fa8137-0752-4416-b7d1-d693b654ac6c', 'AMP_RUM', 'pub180dbd0eb7c9190919db56946a7227c5', rumSampleRate, sessionReplaySampleRate); // ensuring that if it was open in a new tab we can load the session

  getSessionFromPreviousTab();

  try {
    var userId = userContext.userId,
        districtId = userContext.districtId,
        districtPid = userContext.districtPid,
        schoolPid = userContext.schoolPid,
        roles = userContext.roles;
    addEssentialMonitoringContext(userId, districtId, districtPid, schoolPid, roles);
  } catch (error) {
    logErrorWithContext('AddingMonitoringContextFailed', [{
      key: 'errorMessage',
      value: error
    }]);
  }

  installStorageEvent();
  installViewTracker();
  addErrorHandler(); // load locale into sessionStorage and update HTML lang attribute

  getLocale();
  singleSpa.start();
  var config = getAppConfigBasedOnUserRole(userContext.role);
  instantiateFeatureFlagConfig()["finally"](function () {
    var featureFlagFilteredConfig = applyFeatureFlagFilter(config);
    appRegistration(featureFlagFilteredConfig, ampRouteAnchor);
    utilityModules.forEach(function (module) {
      return module.load();
    });
  });
  initNavigation(ampRouteAnchor, userContext);
  serviceWorkerWatcher(); // Clear the localForage cache named with the current userId so we can ensure a fresh cache on load / browser refresh

  clearLocalForageCache();
  forageStoreWatcher();
  tabHandler();
};

export default initAmpContainer;