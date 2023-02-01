/* eslint-disable no-shadow */
import { dmpsBatchCancellableCached } from './dmpsBatchApi';
import { SETTINGS_VALUES_QUERY, DMPS_CONTEXTS } from './constants';
import { formatResponses } from './utils/response.utils';
export default function fetchDmpsBatchCached(userContext) {
  var dmpsSettingsKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var settingsMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _dmpsBatchCancellable = dmpsBatchCancellableCached(),
      fetchDmpsBatchCached = _dmpsBatchCancellable.fetchDmpsBatchCached,
      cancel = _dmpsBatchCancellable.cancel;

  var resultPromise = fetchDmpsBatchCached(DMPS_CONTEXTS.ROLE, userContext, dmpsSettingsKeys, SETTINGS_VALUES_QUERY).then(function (result) {
    if (!result.isCancelled) {
      return formatResponses(result, settingsMap);
    }

    return result;
  });
  return {
    resultPromise: resultPromise,
    cancel: cancel
  };
}