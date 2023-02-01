import { datadogRum } from '@datadog/browser-rum';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import { isDeployedEnvironment, getVersion } from '@hmhco/client-monitoring/src/environmentFunctions';
export default (function (applicationId, applicationName, clientToken) {
  var sampleRate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var sessionReplaySampleRate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var env = getEnvironment();
  var version = getVersion();

  if (!isDeployedEnvironment(env)) {
    return;
  }

  datadogRum.init({
    applicationId: applicationId,
    service: applicationName,
    site: 'datadoghq.com',
    clientToken: clientToken,
    sampleRate: sampleRate,
    sessionReplaySampleRate: sessionReplaySampleRate,
    trackFrustrations: true,
    trackResources: true,
    trackViewsManually: true,
    env: env,
    version: version,
    allowedTracingOrigins: [// INT
    'http://int.hmhone.app.hmhco.com', 'https://api.int.br.internal', 'https://api.int.eng.hmhco.com', // CERT
    'https://api.cert.hmhco.com', 'https://api.cert.eng.hmhco.com', 'https://cert.hmhco.com', // PROD
    'https://papi.hmhco.com', 'https://api.eng.hmhco.com', 'https://www.hmhco.com']
  });
  window.DATADOG_RUM_ENABLED = true;

  if (sessionReplaySampleRate > 0) {
    datadogRum.startSessionReplayRecording();
  }
});