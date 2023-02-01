import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { IMMUTABLE } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { FETCH_ONESEARCH_PROGRAMS } from '@hmhco/cache-api-helper/src/actionsAndCacheKeyValues';
import { oneSearchCancelable } from '@hmhco/onesearch-api/src/http/oneSearchCancelable';
import getProgramsBySectionIds from './utils/utils';
export default function programsApi() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$pactConfig = _ref.pactConfig,
      pactConfig = _ref$pactConfig === void 0 ? {} : _ref$pactConfig;

  var _oneSearchCancelable = oneSearchCancelable({
    pactConfig: pactConfig
  }),
      fetchData = _oneSearchCancelable.fetchData,
      cancel = _oneSearchCancelable.cancel;

  var PATH = 'organisations/programs';
  return {
    // For multiple classes, sectionRefId can be a comma-separated list
    getInfoCached: function () {
      var _getInfoCached = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var sectionIds,
            MAX_SECTION_ID_LENGTH,
            allSectionIds,
            _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sectionIds = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;

                if (!((sectionIds === null || sectionIds === void 0 ? void 0 : sectionIds.length) > 0)) {
                  _context.next = 5;
                  break;
                }

                MAX_SECTION_ID_LENGTH = 13;
                allSectionIds = Array.isArray(sectionIds) ? sectionIds : sectionIds === null || sectionIds === void 0 ? void 0 : sectionIds.split(',').filter(function (sectionId) {
                  return sectionId;
                });
                return _context.abrupt("return", getProgramsBySectionIds(fetchData, MAX_SECTION_ID_LENGTH, allSectionIds, PATH));

              case 5:
                return _context.abrupt("return", fetchData({
                  endpoint: PATH,
                  queryParams: {
                    restrictOrg: true
                  },
                  maxAge: IMMUTABLE,
                  keyPrefix: FETCH_ONESEARCH_PROGRAMS
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInfoCached() {
        return _getInfoCached.apply(this, arguments);
      }

      return getInfoCached;
    }(),
    getProgramInfoCached: function getProgramInfoCached() {
      var programId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var queryParams = {
        restrictOrg: true
      };
      return fetchData({
        endpoint: programId ? "".concat(PATH, "/").concat(programId) : PATH,
        queryParams: queryParams,
        maxAge: IMMUTABLE,
        keyPrefix: FETCH_ONESEARCH_PROGRAMS
      });
    },
    cancel: cancel
  };
}