import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/* eslint-disable consistent-return */

import { useState } from 'react';
import { uniqWith, isEqual, flatten, isEmpty } from 'lodash';
import programsInfoApi from '@hmhco/onesearch-programs-api/src/programs/programsApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
var ERROR_MESSAGE = 'fetch programs data error on Discover';
export var getProgramsInfo = function getProgramsInfo(sections) {
  return sections.map(function (_ref) {
    var identifier = _ref.identifier,
        title = _ref.title,
        type = _ref.type;
    return {
      identifier: identifier,
      title: title,
      type: type
    };
  });
};

var useFetchProgramsHook = function useFetchProgramsHook() {
  var _programsInfoApi = programsInfoApi(),
      getInfoCached = _programsInfoApi.getInfoCached,
      cancelFetchPrograms = _programsInfoApi.cancel;

  var _useState = useState({
    programs: [],
    programsLoading: true,
    programsError: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var loadAllProgramsData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var programsResponse, _programsResponse$, programsData;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return getInfoCached();

            case 3:
              programsResponse = _context.sent;

              if (!(programsResponse === null || programsResponse === void 0 ? void 0 : programsResponse.isCancelled)) {
                programsData = getProgramsInfo(programsResponse === null || programsResponse === void 0 ? void 0 : (_programsResponse$ = programsResponse[0]) === null || _programsResponse$ === void 0 ? void 0 : _programsResponse$.programs);
                setState({
                  programs: programsData,
                  programsLoading: false,
                  programsError: false
                });
              }

              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              logErrorWithContext(ERROR_MESSAGE, [{
                key: 'errorMessage',
                value: _context.t0
              }]);
              setState({
                programs: [],
                programsLoading: false,
                programsError: true
              });

            case 11:
              cancelFetchPrograms();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function loadAllProgramsData() {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadProgramsData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(sectionIds) {
      var programsResponse, programs, uniquePrograms, _programsResponse$2;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return getInfoCached(sectionIds);

            case 3:
              programsResponse = _context2.sent;
              programs = flatten(programsResponse.map(function (program) {
                return getProgramsInfo(program === null || program === void 0 ? void 0 : program.programs);
              }));

              if (programsResponse === null || programsResponse === void 0 ? void 0 : programsResponse.isCancelled) {
                _context2.next = 17;
                break;
              }

              if (!(sectionIds !== null)) {
                _context2.next = 15;
                break;
              }

              uniquePrograms = uniqWith(programs, isEqual);

              if (isEmpty(uniquePrograms)) {
                _context2.next = 12;
                break;
              }

              programs = uniquePrograms;
              _context2.next = 13;
              break;

            case 12:
              return _context2.abrupt("return", loadAllProgramsData());

            case 13:
              _context2.next = 16;
              break;

            case 15:
              programs = getProgramsInfo(programsResponse === null || programsResponse === void 0 ? void 0 : (_programsResponse$2 = programsResponse[0]) === null || _programsResponse$2 === void 0 ? void 0 : _programsResponse$2.programs);
            // This is a request without classes - add everything

            case 16:
              setState({
                programs: programs,
                programsLoading: false,
                programsError: false
              });

            case 17:
              _context2.next = 23;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](0);
              logErrorWithContext(ERROR_MESSAGE, [{
                key: 'errorMessage',
                value: _context2.t0
              }]);
              setState({
                programs: [],
                programsLoading: false,
                programsError: true
              });

            case 23:
              cancelFetchPrograms();

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 19]]);
    }));

    return function loadProgramsData(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return [state, loadProgramsData, loadAllProgramsData];
};

export default useFetchProgramsHook;