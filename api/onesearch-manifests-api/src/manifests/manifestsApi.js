import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { IMMUTABLE } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { FETCH_ONESEARCH_MANIFESTS } from '@hmhco/cache-api-helper/src/actionsAndCacheKeyValues';
import { oneSearchCancelable } from '@hmhco/onesearch-api/src/http/oneSearchCancelable';
import sectionIdsBatchCalls from './utils/utils';
export default function manifestApi() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$pactConfig = _ref.pactConfig,
      pactConfig = _ref$pactConfig === void 0 ? {} : _ref$pactConfig;

  var _oneSearchCancelable = oneSearchCancelable({
    pactConfig: pactConfig
  }),
      fetchData = _oneSearchCancelable.fetchData,
      cancel = _oneSearchCancelable.cancel;

  var path = 'manifests/info';
  return {
    // For multiple classes, sectionRefId can be a comma-separated list
    getInfoCached: function () {
      var _getInfoCached = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var sectionRefIds,
            allSectionRefIds,
            manifestData,
            maxSectionRefIdLength,
            _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sectionRefIds = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;

                if (!((sectionRefIds === null || sectionRefIds === void 0 ? void 0 : sectionRefIds.length) > 0)) {
                  _context.next = 10;
                  break;
                }

                allSectionRefIds = [];

                if (Array.isArray(sectionRefIds)) {
                  allSectionRefIds = sectionRefIds;
                } else {
                  allSectionRefIds = sectionRefIds === null || sectionRefIds === void 0 ? void 0 : sectionRefIds.split(',').filter(function (sectionRefId) {
                    return sectionRefId;
                  });
                }

                manifestData = {
                  'manifest-info': {
                    section: []
                  }
                };
                maxSectionRefIdLength = 13;
                _context.next = 8;
                return sectionIdsBatchCalls(fetchData, maxSectionRefIdLength, allSectionRefIds, path);

              case 8:
                manifestData['manifest-info'].section = _context.sent;
                return _context.abrupt("return", manifestData);

              case 10:
                return _context.abrupt("return", fetchData({
                  endpoint: path,
                  queryParams: {
                    restrictOrg: true,
                    sectionRefId: [sectionRefIds]
                  },
                  maxAge: IMMUTABLE,
                  keyPrefix: FETCH_ONESEARCH_MANIFESTS
                }));

              case 11:
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
        endpoint: programId ? "".concat(path, "/").concat(programId) : path,
        queryParams: queryParams,
        maxAge: IMMUTABLE,
        keyPrefix: FETCH_ONESEARCH_MANIFESTS
      });
    },
    cancel: cancel
  };
}