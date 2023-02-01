import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    ampContent = _getConfigForCurrentE.ampContent;

export var CONTENT_ENDPOINT = '/ui/manifest/';
export var getDetailsJsonUrl = function getDetailsJsonUrl(programId) {
  return "".concat(CONTENT_ENDPOINT).concat(programId, "/json/details.json");
};
export var detailsJson = function detailsJson() {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _createAxiosCancelabl = createAxiosCancelable({
    includeAuth: false
  }),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  var baseURL = ampContent;
  var request = requestHelper({
    client: client,
    cancelToken: cancelToken,
    isCancel: isCancel,
    baseURL: baseURL,
    pactConfig: pactConfig
  });
  return {
    fetchDetailsJson: function fetchDetailsJson(programId) {
      return request.get(getDetailsJsonUrl(programId));
    },
    cancel: cancel
  };
};