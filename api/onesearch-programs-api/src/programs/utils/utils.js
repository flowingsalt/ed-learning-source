import _regeneratorRuntime from "@babel/runtime/regenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { IMMUTABLE } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { FETCH_ONESEARCH_PROGRAMS } from '@hmhco/cache-api-helper/src/actionsAndCacheKeyValues';
export default function getProgramsBySectionIds(_x, _x2, _x3, _x4) {
  return _getProgramsBySectionIds.apply(this, arguments);
}

function _getProgramsBySectionIds() {
  _getProgramsBySectionIds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(fetchData, maxSectionRefIdLength, sectionRefIds, path) {
    var sectionsOutput, i, sectionIdsChunk, sections;
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

            sectionIdsChunk = sectionRefIds.slice(i, i + maxSectionRefIdLength); // eslint-disable-next-line no-await-in-loop

            _context.next = 6;
            return fetchData({
              endpoint: "".concat(path, "/sections/").concat(sectionIdsChunk),
              queryParams: {
                restrictOrg: true
              },
              maxAge: IMMUTABLE,
              keyPrefix: FETCH_ONESEARCH_PROGRAMS
            });

          case 6:
            sections = _context.sent;

            if ((sections === null || sections === void 0 ? void 0 : sections.length) > 0) {
              sectionsOutput = [].concat(_toConsumableArray(sectionsOutput), _toConsumableArray(sections));
            }

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
  return _getProgramsBySectionIds.apply(this, arguments);
}