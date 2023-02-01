import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(fetchDisciplines);
/* eslint-disable import/prefer-default-export */


import { put, select, call } from 'redux-saga/effects';
import disciplineApi from 'orchid-common/api/disciplineApi';
import { getSifToken } from 'orchid-common/reducers/user.selectors';
import { getEnvFromStore } from 'orchid-common/reducers/env.selectors';
import { reportNetworkFail } from 'orchid-common/actions';
import isError from 'lodash/isError';
import { isDisciplineAvailableToStudent, sanitiseUrlValuesFromAction, createTableStateObjectWithoutNullValues } from '@hmhco/assignments-url-helpers/src/urlHelpers.utils';
import { loadDisciplines, fetchDisciplinesError, setDiscipline } from '../actions/discipline.actions';
import { loadTableState } from '../actions/index';
export function fetchDisciplines(action) {
  var _disciplineResponse$r, _disciplineResponse$r2;

  var sif, env, disciplineResponse, disciplineList, _sanitiseUrlValuesFro, currentTab, currentPage, sort, sortDirection, discipline, tableStateWithoutNull, isDisciplineFromUrlValid;

  return _regeneratorRuntime.wrap(function fetchDisciplines$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select(getSifToken);

        case 2:
          sif = _context.sent;
          _context.next = 5;
          return select(getEnvFromStore);

        case 5:
          env = _context.sent;
          _context.next = 8;
          return call(disciplineApi.fetchDisciplines, {
            env: env,
            sif: sif
          });

        case 8:
          disciplineResponse = _context.sent;

          if (!isError(disciplineResponse)) {
            _context.next = 15;
            break;
          }

          _context.next = 12;
          return put(reportNetworkFail());

        case 12:
          _context.next = 14;
          return put(fetchDisciplinesError());

        case 14:
          return _context.abrupt("return");

        case 15:
          // TODO: Is an empty array of disciplines from the service valid? Should we show an error on the screen?
          disciplineList = (disciplineResponse === null || disciplineResponse === void 0 ? void 0 : (_disciplineResponse$r = disciplineResponse.response) === null || _disciplineResponse$r === void 0 ? void 0 : (_disciplineResponse$r2 = _disciplineResponse$r.disciplines) === null || _disciplineResponse$r2 === void 0 ? void 0 : _disciplineResponse$r2.discipline) || [];
          _sanitiseUrlValuesFro = sanitiseUrlValuesFromAction(action, disciplineList), currentTab = _sanitiseUrlValuesFro.currentTab, currentPage = _sanitiseUrlValuesFro.currentPage, sort = _sanitiseUrlValuesFro.sort, sortDirection = _sanitiseUrlValuesFro.sortDirection, discipline = _sanitiseUrlValuesFro.discipline;
          tableStateWithoutNull = createTableStateObjectWithoutNullValues({
            discipline: discipline,
            currentTab: currentTab,
            currentPage: currentPage,
            sort: sort,
            sortDirection: sortDirection
          });
          isDisciplineFromUrlValid = isDisciplineAvailableToStudent(discipline, disciplineList);

          if (!isDisciplineFromUrlValid) {
            _context.next = 26;
            break;
          }

          _context.next = 22;
          return put(loadTableState(tableStateWithoutNull));

        case 22:
          _context.next = 24;
          return put(setDiscipline(discipline, tableStateWithoutNull));

        case 24:
          _context.next = 31;
          break;

        case 26:
          tableStateWithoutNull.discipline = 'All';
          _context.next = 29;
          return put(loadTableState(tableStateWithoutNull));

        case 29:
          _context.next = 31;
          return put(setDiscipline('All', tableStateWithoutNull));

        case 31:
          _context.next = 33;
          return put(loadDisciplines(disciplineList));

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}