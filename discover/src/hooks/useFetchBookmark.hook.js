import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState } from 'react';
import bookmarkApiCancelable from '@hmhco/uds-api/src/bookmarkApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';

function getBookmarkData(bookmark, programId) {
  var _bookmark$data$identi, _bookmark$data;

  return {
    currentProgram: (_bookmark$data$identi = bookmark === null || bookmark === void 0 ? void 0 : (_bookmark$data = bookmark.data) === null || _bookmark$data === void 0 ? void 0 : _bookmark$data.identifier) !== null && _bookmark$data$identi !== void 0 ? _bookmark$data$identi : programId,
    bookmark: (bookmark === null || bookmark === void 0 ? void 0 : bookmark.data) === undefined ? {} : bookmark === null || bookmark === void 0 ? void 0 : bookmark.data,
    bookmarkLoading: false,
    bookmarkFetchError: false
  };
}

var useFetchBookmarkHook = function useFetchBookmarkHook() {
  var _bookmarkApiCancelabl = bookmarkApiCancelable(),
      getBookmark = _bookmarkApiCancelabl.getBookmark;

  var _useState = useState({
    currentProgram: undefined,
    bookmark: {},
    bookmarkLoading: true,
    bookmarkFetchError: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var loadBookmarkData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(userId, sif, env, programId) {
      var bookmarkResponse;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              logMessageWithContext("Discover: fetch bookmarks - user ID = ".concat(userId));
              _context.next = 4;
              return getBookmark({
                userId: userId,
                sif: sif,
                env: env,
                programId: programId
              });

            case 4:
              bookmarkResponse = _context.sent;

              if (!(bookmarkResponse === null || bookmarkResponse === void 0 ? void 0 : bookmarkResponse.isCancelled)) {
                setState(getBookmarkData(bookmarkResponse === null || bookmarkResponse === void 0 ? void 0 : bookmarkResponse.data, programId));
              }

              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              logErrorWithContext("Discover: error fetching bookmarks - user ID = ".concat(userId), [{
                key: 'errorMessage',
                value: _context.t0
              }]);
              setState({
                currentProgram: undefined,
                bookmark: {},
                bookmarkLoading: false,
                bookmarkFetchError: true
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function loadBookmarkData(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();

  return [state, loadBookmarkData];
};

export default useFetchBookmarkHook;