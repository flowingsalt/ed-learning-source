import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
import { IMMUTABLE } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
export var DEMO_ENDPOINT = "/api/oac/v3/access/organization/demoEntitled";
export default (function () {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _createAxiosCancelabl = createAxiosCancelable({
    min: 900,
    max: 1300,
    redirectIfFails: false
  }),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel; // (min: 900, max: 1300) => Retries only once (after 1 sec).


  var request = requestHelper({
    client: client,
    cancelToken: cancelToken,
    isCancel: isCancel,
    pactConfig: pactConfig
  });
  return {
    isDemoCached: function isDemoCached() {
      return request.get(DEMO_ENDPOINT, {
        maxAge: IMMUTABLE
      })["catch"](function (error) {
        logErrorWithContext('Demo Entitlements Api', [{
          key: 'errorMessage',
          value: error
        }]);
        return {
          demoEntitled: false,
          mdsPocEnabled: false
        };
      });
    },
    cancel: cancel
  };
});