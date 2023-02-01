import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState } from 'react';
import fetchAdditionalsApi from '@hmhco/oac-additionals-api/src/fetchAdditionalsApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
var emptyAdditionals = {
  additionals: [],
  sections: []
};

var useFetchAdditionalsHook = function useFetchAdditionalsHook() {
  var _fetchAdditionalsApi = fetchAdditionalsApi(),
      getAdditionalsBySectionIdsCached = _fetchAdditionalsApi.getAdditionalsBySectionIdsCached,
      cancel = _fetchAdditionalsApi.cancel;

  var _useState = useState({
    additionals: emptyAdditionals,
    additionalsLoading: true,
    additionalsError: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var loadAdditionals = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sectionRefIds, userRole) {
      var additionalsResponse;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(userRole !== 'Instructor' || sectionRefIds === null || sectionRefIds.length < 1)) {
                _context.next = 4;
                break;
              }

              setState({
                additionals: emptyAdditionals,
                additionalsLoading: false,
                additionalsError: false
              });
              _context.next = 16;
              break;

            case 4:
              _context.prev = 4;
              _context.next = 7;
              return getAdditionalsBySectionIdsCached(sectionRefIds);

            case 7:
              additionalsResponse = _context.sent;

              if (!(additionalsResponse === null || additionalsResponse === void 0 ? void 0 : additionalsResponse.isCancelled)) {
                setState({
                  additionals: additionalsResponse,
                  additionalsLoading: false,
                  additionalsError: false
                });
              }

              _context.next = 16;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](4);
              logErrorWithContext('fetch additionals failed in Discover', [{
                key: 'errorMessage',
                value: _context.t0
              }]);
              setState({
                additionals: emptyAdditionals,
                additionalsLoading: false,
                additionalsError: true
              });
              cancel();

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 11]]);
    }));

    return function loadAdditionals(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return [state, loadAdditionals];
};

export default useFetchAdditionalsHook;