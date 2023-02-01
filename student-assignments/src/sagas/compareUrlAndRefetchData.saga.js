import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(compareUrlAndRefetchData);
/* eslint-disable import/prefer-default-export */


import { put, select } from 'redux-saga/effects';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import { sanitiseUrlValuesFromAction, createTableStateObjectWithoutNullValues } from '@hmhco/assignments-url-helpers/src/urlHelpers.utils';
import { getCurrentTab, getSort, getDiscipline, getCurrentPage, getSortDirection } from '../reducers/pageState.selectors';
import { getDisciplines } from '../reducers/disciplineList.selectors';
import { setDiscipline } from '../actions/discipline.actions';
import { loadTableState, setCurrentTab, updateSort, updatePage } from '../actions/index';
export function compareUrlAndRefetchData(action) {
  var urlParamsFromActionWithoutNull, disciplineListState, disciplinesAvailableToUser, _sanitiseUrlValuesFro, currentTab, currentPage, sort, sortDirection, discipline, disciplineFromState, currentTabFromState, currentPageFromState, sortFromState, sortDirectionFromState, hasDisciplineChanged, hasCurrentTabChanged, hasCurrentPageChanged, hasSortChanged, hasSortDirectionChanged, tableStateWithoutNull;

  return _regeneratorRuntime.wrap(function compareUrlAndRefetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // If all 4 relevant query parameters are null, set the discipline to "All" to refresh the assignments and tab counts on the page
          // This is to cater for a user clicking on the Top Navigation "Assignments" button when they are already on the app to
          // reset the app back to its default tabs etc.
          urlParamsFromActionWithoutNull = omitBy(action === null || action === void 0 ? void 0 : action.value, isNil);

          if (!isEmpty(urlParamsFromActionWithoutNull)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return put(loadTableState());

        case 4:
          _context.next = 6;
          return put(setDiscipline('All'));

        case 6:
          return _context.abrupt("return");

        case 7:
          _context.next = 9;
          return select(getDisciplines);

        case 9:
          disciplineListState = _context.sent;
          disciplinesAvailableToUser = disciplineListState === null || disciplineListState === void 0 ? void 0 : disciplineListState.disciplines;
          _sanitiseUrlValuesFro = sanitiseUrlValuesFromAction(action, disciplinesAvailableToUser), currentTab = _sanitiseUrlValuesFro.currentTab, currentPage = _sanitiseUrlValuesFro.currentPage, sort = _sanitiseUrlValuesFro.sort, sortDirection = _sanitiseUrlValuesFro.sortDirection, discipline = _sanitiseUrlValuesFro.discipline;
          _context.next = 14;
          return select(getDiscipline);

        case 14:
          disciplineFromState = _context.sent;
          _context.next = 17;
          return select(getCurrentTab);

        case 17:
          currentTabFromState = _context.sent;
          _context.next = 20;
          return select(getCurrentPage);

        case 20:
          currentPageFromState = _context.sent;
          _context.next = 23;
          return select(getSort);

        case 23:
          sortFromState = _context.sent;
          _context.next = 26;
          return select(getSortDirection);

        case 26:
          sortDirectionFromState = _context.sent;
          hasDisciplineChanged = discipline !== disciplineFromState;
          hasCurrentTabChanged = currentTab !== currentTabFromState;
          hasCurrentPageChanged = currentPage !== currentPageFromState;
          hasSortChanged = sort !== sortFromState;
          hasSortDirectionChanged = sortDirection !== sortDirectionFromState;
          tableStateWithoutNull = createTableStateObjectWithoutNullValues({
            discipline: discipline,
            currentTab: currentTab,
            currentPage: currentPage,
            sort: sort,
            sortDirection: sortDirection
          });

          if (!(hasDisciplineChanged && discipline)) {
            _context.next = 40;
            break;
          }

          _context.next = 36;
          return put(loadTableState(tableStateWithoutNull));

        case 36:
          _context.next = 38;
          return put(setDiscipline(discipline));

        case 38:
          _context.next = 59;
          break;

        case 40:
          if (!(hasCurrentTabChanged && currentTab)) {
            _context.next = 47;
            break;
          }

          _context.next = 43;
          return put(loadTableState(tableStateWithoutNull));

        case 43:
          _context.next = 45;
          return put(setCurrentTab(currentTab));

        case 45:
          _context.next = 59;
          break;

        case 47:
          if (!(hasCurrentPageChanged && currentPage)) {
            _context.next = 54;
            break;
          }

          _context.next = 50;
          return put(loadTableState(tableStateWithoutNull));

        case 50:
          _context.next = 52;
          return put(updatePage(currentPage));

        case 52:
          _context.next = 59;
          break;

        case 54:
          if (!(hasSortChanged && sort || hasSortDirectionChanged && sortDirection)) {
            _context.next = 59;
            break;
          }

          _context.next = 57;
          return put(loadTableState(tableStateWithoutNull));

        case 57:
          _context.next = 59;
          return put(updateSort(sort, sortDirection));

        case 59:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}