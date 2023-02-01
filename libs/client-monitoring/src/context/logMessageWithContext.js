import { datadogLogs } from '@datadog/browser-logs';
import { addContext, removeContext } from './monitoringContextSetters';
export function trackMessage(message) {
  if (window.DATADOG_LOGS_ENABLED) {
    var _datadogLogs$logger;

    datadogLogs === null || datadogLogs === void 0 ? void 0 : (_datadogLogs$logger = datadogLogs.logger) === null || _datadogLogs$logger === void 0 ? void 0 : _datadogLogs$logger.log(message);
  }

  if (window.DATADOG_RUM_ENABLED || !window.DATADOG_LOGS_ENABLED) {
    console.info(message);
  }
}
export default function (message) {
  var contextArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  addContext(contextArray);
  trackMessage(message);
  removeContext(contextArray);
}