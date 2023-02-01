import { datadogLogs } from '@datadog/browser-logs';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import { isDeployedEnvironment, getVersion } from '@hmhco/client-monitoring/src/environmentFunctions';
export default (function (applicationName, clientToken) {
  var env = getEnvironment();
  var version = getVersion();

  if (!isDeployedEnvironment(env)) {
    return;
  }

  datadogLogs.init({
    clientToken: clientToken,
    forwardErrorsToLogs: true,
    site: 'datadoghq.com',
    sampleRate: 100,
    env: env,
    version: version,
    service: applicationName
  }); // Needed otherwise it is not tracked with Datadog
  // It seems DD drops errors if the env is local. Something to be aware of when testing locally

  datadogLogs.addLoggerGlobalContext('stage', env);
  datadogLogs.addLoggerGlobalContext('service', applicationName);
  window.DATADOG_LOGS_ENABLED = true;
});