/* eslint-disable func-names */
import { oneSearchCancelable } from '@hmhco/onesearch-api/src/http/oneSearchCancelable';
export default function () {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _oneSearchCancelable = oneSearchCancelable({
    pactConfig: pactConfig
  }),
      fetchData = _oneSearchCancelable.fetchData,
      cancel = _oneSearchCancelable.cancel;

  return {
    getProductCategories: function getProductCategories(programId, showReleatedResources) {
      var queryParams = {
        showIntegratedResources: showReleatedResources
      };
      return fetchData({
        endpoint: "organisations/programs/".concat(programId, "/productCategories"),
        queryParams: queryParams
      });
    },
    cancel: cancel
  };
}