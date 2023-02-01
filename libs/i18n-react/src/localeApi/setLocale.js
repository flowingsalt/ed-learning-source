import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import { dmpsBatchCancellable } from '@hmhco/district-settings-api/src/dmpsBatchApi';
import { SETTINGS_VALUES_SET, DMPS_CONTEXTS } from '@hmhco/district-settings-api/src/constants';
import { setLanguage, defaultLocale } from './storageAccessors';
export default function setLocale(language) {
  var userContext = getUserCtx();

  var _dmpsBatchCancellable = dmpsBatchCancellable(),
      fetchOrSaveDmpsBatch = _dmpsBatchCancellable.fetchOrSaveDmpsBatch;

  return fetchOrSaveDmpsBatch(DMPS_CONTEXTS.ROLE, userContext, [{
    'ed.user.locale': language
  }], SETTINGS_VALUES_SET).then(function (value) {
    if (value[0].ok === true) {
      return setLanguage(language);
    }

    return setLanguage(defaultLocale);
  });
}