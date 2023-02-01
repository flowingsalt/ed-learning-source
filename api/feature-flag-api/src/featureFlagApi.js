import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
import { SHORT_SESSION } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { FETCH_FEATURE_FLAG } from '@hmhco/cache-api-helper/src/actionsAndCacheKeyValues';

var featureFlagService = function featureFlagService() {
  var _createAxiosCancelabl = createAxiosCancelable({
    includeAuth: false
  }),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  var request = requestHelper({
    client: client,
    cancelToken: cancelToken,
    isCancel: isCancel
  });
  return {
    getCohorts: function getCohorts() {
      return request.get('/ui/flags/featureFlagsCohorts.config.json', {
        maxAge: SHORT_SESSION,
        keyPrefix: FETCH_FEATURE_FLAG
      });
    },
    cancel: cancel
  };
};

export default featureFlagService;