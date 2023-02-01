import _regeneratorRuntime from "@babel/runtime/regenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { IMMUTABLE } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { FETCH_ONESEARCH_MANIFESTS } from '@hmhco/cache-api-helper/src/actionsAndCacheKeyValues';
export default function sectionIdsBatchCalls(_x, _x2, _x3, _x4) {
  return _sectionIdsBatchCalls.apply(this, arguments);
}

function _sectionIdsBatchCalls() {
  _sectionIdsBatchCalls = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(fetchData, maxSectionRefIdLength, sectionRefIds, path) {
    var sectionsOutput, i, _sections$manifestIn, chunk, sections;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sectionsOutput = [];
            i = 0;

          case 2:
            if (!(i < sectionRefIds.length)) {
              _context.next = 11;
              break;
            }

            chunk = sectionRefIds.slice(i, i + maxSectionRefIdLength); // eslint-disable-next-line no-await-in-loop

            _context.next = 6;
            return fetchData({
              endpoint: path,
              queryParams: {
                restrictOrg: true,
                sectionRefId: chunk
              },
              maxAge: IMMUTABLE,
              keyPrefix: FETCH_ONESEARCH_MANIFESTS
            });

          case 6:
            sections = _context.sent;
            sectionsOutput = [].concat(_toConsumableArray(sectionsOutput), _toConsumableArray((_sections$manifestIn = sections['manifest-info']) === null || _sections$manifestIn === void 0 ? void 0 : _sections$manifestIn.section));

          case 8:
            i += maxSectionRefIdLength;
            _context.next = 2;
            break;

          case 11:
            return _context.abrupt("return", sectionsOutput);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sectionIdsBatchCalls.apply(this, arguments);
}