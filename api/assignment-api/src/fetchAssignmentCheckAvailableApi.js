import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    assignments = _getConfigForCurrentE.assignments;

var endpoint = function endpoint(assignmentRefId) {
  return "/v4/studentAssignments/".concat(assignmentRefId, "/check-available");
};

export default (function () {
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
    baseURL: assignments,
    pactConfig: pactConfig
  });
  return {
    fetchCheckAvailable: function fetchCheckAvailable(assignmentRefId, sif) {
      return request.get(endpoint(assignmentRefId), sif);
    },
    cancel: cancel
  };
});