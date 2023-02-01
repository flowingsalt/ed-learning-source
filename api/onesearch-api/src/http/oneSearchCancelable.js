import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import { createUrlFromParams } from '@hmhco/core-network/src/utils/url.helpers';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    baseURL = _getConfigForCurrentE.onesearch;

export var getOneSearchAssessmentsUrl = function getOneSearchAssessmentsUrl(endpoint) {
  return "".concat(baseURL, "/").concat(endpoint);
};
export var oneSearchCancelable = function oneSearchCancelable() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$pactConfig = _ref.pactConfig,
      pactConfig = _ref$pactConfig === void 0 ? {} : _ref$pactConfig,
      _ref$fullResponse = _ref.fullResponse,
      fullResponse = _ref$fullResponse === void 0 ? false : _ref$fullResponse;

  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  var request = requestHelper({
    client: client,
    cancelToken: cancelToken,
    isCancel: isCancel,
    pactConfig: pactConfig,
    fullResponse: fullResponse
  });
  return {
    fetchData: function fetchData(_ref2) {
      var endpoint = _ref2.endpoint,
          _ref2$queryParams = _ref2.queryParams,
          queryParams = _ref2$queryParams === void 0 ? null : _ref2$queryParams,
          options = _objectWithoutProperties(_ref2, ["endpoint", "queryParams"]);

      var path = createUrlFromParams({
        basePath: endpoint,
        queryParams: queryParams
      });
      return request.get("".concat(baseURL, "/").concat(path), options);
    },
    cancel: cancel
  };
};