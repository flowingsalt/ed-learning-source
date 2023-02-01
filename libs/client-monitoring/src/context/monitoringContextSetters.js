import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';
/**
 * add context to Datadog RUM and logs
 *
 * @param {array} contextArray
 */

export function addContext(contextArray) {
  contextArray.forEach(function (context) {
    var key = context.key,
        value = context.value;

    if (window.DATADOG_RUM_ENABLED) {
      datadogRum.addRumGlobalContext(key, value);
    }

    if (window.DATADOG_LOGS_ENABLED) {
      datadogLogs.addLoggerGlobalContext(key, value);
    }
  });
}
/**
 * remove context from Datadog RUM and logs
 *
 * @param {array} contextArray
 */

export function removeContext(contextArray) {
  contextArray.forEach(function (context) {
    var key = context.key;

    if (window.DATADOG_RUM_ENABLED) {
      datadogRum.removeRumGlobalContext(key);
    }

    if (window.DATADOG_LOGS_ENABLED) {
      datadogLogs.removeLoggerGlobalContext(key);
    }
  });
}