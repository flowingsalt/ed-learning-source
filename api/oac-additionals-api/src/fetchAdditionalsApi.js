import { IMMUTABLE } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { FETCH_OAC_MANIFESTS } from '@hmhco/cache-api-helper/src/actionsAndCacheKeyValues';
import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
export var additionalUrl = '/api/oac/v1/discovery/sections/programs';
export var getAdditionalFromOrgUrl = function getAdditionalFromOrgUrl(orgId) {
  return "/api/oac/v1/discovery/organizations/".concat(orgId, "/programs");
};

var fetchAdditionalsApi = function fetchAdditionalsApi() {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  var request = requestHelper({
    client: client,
    cancelToken: cancelToken,
    isCancel: isCancel,
    pactConfig: pactConfig
  });
  return {
    getAdditionalsBySectionIdsCached: function getAdditionalsBySectionIdsCached(sectionIds) {
      // Get the program primaries and additionals for the given sections, cached.
      var options = {
        maxAge: IMMUTABLE,
        keyPrefix: FETCH_OAC_MANIFESTS
      };
      return request.post(additionalUrl, sectionIds, options);
    },
    getAdditionalsBySectionIds: function getAdditionalsBySectionIds(sectionIds) {
      // Get the program primaries and additionals for the given sections.
      return request.post(additionalUrl, sectionIds);
    },
    getAdditionalsByOrgId: function getAdditionalsByOrgId(orgId) {
      // Get the program primaries and additionals for the given organization.
      return request.get(getAdditionalFromOrgUrl(orgId));
    },
    cancel: cancel
  };
};

export default fetchAdditionalsApi;