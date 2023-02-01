import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import { dmpsBatchCancellable } from '@hmhco/district-settings-api/src/dmpsBatchApi';
import { SETTINGS_VALUES_QUERY, DMPS_CONTEXTS } from '@hmhco/district-settings-api/src/constants';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { setLanguage, getLocaleFromStorage, defaultLocale } from './storageAccessors';
var localeKey = 'ed.user.locale';
export function getLocaleFactory() {
  var fetchLocalFromDmpsAlreadyStarted = false;
  var localeFetchPromise = null;
  return /*#__PURE__*/function () {
    var _fetchLocale = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var userContext, _dmpsBatchCancellable, fetchOrSaveDmpsBatch;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userContext = getUserCtx(); // Currently only students can change their language, so request needed for other users

              if (userContext.isLearner) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", setLanguage(defaultLocale));

            case 3:
              if (!fetchLocalFromDmpsAlreadyStarted) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", localeFetchPromise.then(function () {
                return getLocaleFromStorage();
              }));

            case 5:
              _dmpsBatchCancellable = dmpsBatchCancellable(), fetchOrSaveDmpsBatch = _dmpsBatchCancellable.fetchOrSaveDmpsBatch;
              fetchLocalFromDmpsAlreadyStarted = true;
              localeFetchPromise = fetchOrSaveDmpsBatch(DMPS_CONTEXTS.ROLE, userContext, [localeKey], SETTINGS_VALUES_QUERY).then(function (response) {
                if (!(response === null || response === void 0 ? void 0 : response.isCancelled)) {
                  var _response$, _response$$result;

                  var language = ((_response$ = response[0]) === null || _response$ === void 0 ? void 0 : (_response$$result = _response$.result) === null || _response$$result === void 0 ? void 0 : _response$$result.value) || defaultLocale;
                  return setLanguage(language);
                }

                return setLanguage(defaultLocale);
              })["catch"](function (error) {
                fetchLocalFromDmpsAlreadyStarted = false;
                logErrorWithContext('Locale fetch failed', [{
                  key: 'role',
                  value: DMPS_CONTEXTS.ROLE
                }, {
                  key: 'errorMessage',
                  value: error
                }]);
                return setLanguage(defaultLocale);
              });
              return _context.abrupt("return", localeFetchPromise);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function fetchLocale() {
      return _fetchLocale.apply(this, arguments);
    }

    return fetchLocale;
  }();
}
export default getLocaleFactory();