import { datadogLogs } from '@datadog/browser-logs';
import { addContext, removeContext } from './monitoringContextSetters';
/**
 * register an error to datadog logs
 *
 * @param {object} error error object
 */

export function trackError(error) {
  if (window.DATADOG_LOGS_ENABLED) {
    datadogLogs.logger.error(error);
  } // Default to console if nothing is enabled or RUM enabled


  if (window.DATADOG_RUM_ENABLED || !window.DATADOG_LOGS_ENABLED) {
    console.error(error);
  }
}
/**
 * Log an error in Datadog and include a custom / temporary context
 *
 * @param {object} error error object
 * @param {array} contextArray temporary monitoring context to set targetted at datadog
 */

export default function (error) {
  var contextArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  addContext(contextArray);
  trackError(error);
  removeContext(contextArray);
}