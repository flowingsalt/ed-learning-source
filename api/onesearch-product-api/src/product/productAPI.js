import { IMMUTABLE } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { oneSearchCancelable } from '@hmhco/onesearch-api/src/http/oneSearchCancelable';
export var PRODUCT_ENDPOINT = 'product';
export var SECTION_ID_PARAM = 'sectionIds';
export default function () {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fullResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _oneSearchCancelable = oneSearchCancelable({
    pactConfig: pactConfig,
    fullResponse: fullResponse
  }),
      fetchData = _oneSearchCancelable.fetchData,
      cancel = _oneSearchCancelable.cancel;

  return {
    getProductsCached: function getProductsCached() {
      var sectionRefIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var queryParams = {};

      if (sectionRefIds) {
        queryParams[SECTION_ID_PARAM] = sectionRefIds;
      }

      return fetchData({
        endpoint: PRODUCT_ENDPOINT,
        queryParams: queryParams,
        maxAge: IMMUTABLE
      });
    },
    cancel: cancel
  };
}