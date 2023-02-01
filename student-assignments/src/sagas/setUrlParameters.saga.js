import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(fetchAssignmentsAndUpdateUrl),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(setPaginationAndSorting),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(setCurrentTabParameter),
    _marked4 = /*#__PURE__*/_regeneratorRuntime.mark(setDisciplineParameter),
    _marked5 = /*#__PURE__*/_regeneratorRuntime.mark(setSortParameter),
    _marked6 = /*#__PURE__*/_regeneratorRuntime.mark(setPageParameter);

import { put, select, call } from 'redux-saga/effects';
import { push, replace } from 'react-router-redux';
import qs from 'qs';
import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
import { STUDENT_ASSIGNMENTS } from '@hmhco/url-builders/src/constants';
import { getCurrentTab, getSort, getSortDirection, getDiscipline, getLimit } from '../reducers/pageState.selectors';
import { setSortDirection, setSort, setCurrentPage } from '../actions';
import { invalidateAndFetchTabCounts, fetchAssignments } from './assignmentFetchers.saga';

var urlAlreadyContainsState = function urlAlreadyContainsState(currentUrl) {
  return currentUrl.includes('?currentPage') && !currentUrl.includes('launchError');
};

function fetchAssignmentsAndUpdateUrl(currentPage, sort, sortDirection) {
  var discipline, currentTab, limit, search, currentUrl;
  return _regeneratorRuntime.wrap(function fetchAssignmentsAndUpdateUrl$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return call(fetchAssignments);

        case 2:
          _context.next = 4;
          return select(getDiscipline);

        case 4:
          discipline = _context.sent;
          _context.next = 7;
          return select(getCurrentTab);

        case 7:
          currentTab = _context.sent;
          _context.next = 10;
          return select(getLimit);

        case 10:
          limit = _context.sent;
          search = qs.stringify({
            currentTab: currentTab,
            currentPage: currentPage,
            discipline: discipline,
            sort: sort,
            sortDirection: sortDirection,
            limit: limit
          }, {
            addQueryPrefix: true,
            sort: function sort(a, b) {
              return a.localeCompare(b);
            }
          });
          currentUrl = window.location.href;

          if (!urlAlreadyContainsState(currentUrl)) {
            _context.next = 18;
            break;
          }

          _context.next = 16;
          return put(push({
            pathname: "/".concat(STUDENT_ASSIGNMENTS, "/"),
            search: search
          }));

        case 16:
          _context.next = 20;
          break;

        case 18:
          _context.next = 20;
          return put(replace({
            pathname: "/".concat(STUDENT_ASSIGNMENTS, "/"),
            search: search
          }));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function setPaginationAndSorting(currentPage, sort, sortDirection) {
  return _regeneratorRuntime.wrap(function setPaginationAndSorting$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return put(setCurrentPage(currentPage));

        case 2:
          _context2.next = 4;
          return put(setSort(sort));

        case 4:
          _context2.next = 6;
          return put(setSortDirection(sortDirection));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

export function setCurrentTabParameter() {
  var currentPage, sort, sortDirection;
  return _regeneratorRuntime.wrap(function setCurrentTabParameter$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // Reset pagination and sorting when tab is changed
          currentPage = 1;
          sort = assignConfig.assignmentList.dueDate;
          sortDirection = assignConfig.assignmentList.sortDesc;
          _context3.next = 5;
          return call(setPaginationAndSorting, currentPage, sort, sortDirection);

        case 5:
          _context3.next = 7;
          return call(fetchAssignmentsAndUpdateUrl, currentPage, sort, sortDirection);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
export function setDisciplineParameter(action) {
  var _action$queriesFromUr, _action$queriesFromUr2, _action$queriesFromUr3;

  var currentPageUrl, sortUrl, sortDirectionUrl, currentPage, sort, sortDirection;
  return _regeneratorRuntime.wrap(function setDisciplineParameter$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          currentPageUrl = action === null || action === void 0 ? void 0 : (_action$queriesFromUr = action.queriesFromUrl) === null || _action$queriesFromUr === void 0 ? void 0 : _action$queriesFromUr.currentPage;
          sortUrl = action === null || action === void 0 ? void 0 : (_action$queriesFromUr2 = action.queriesFromUrl) === null || _action$queriesFromUr2 === void 0 ? void 0 : _action$queriesFromUr2.sort;
          sortDirectionUrl = action === null || action === void 0 ? void 0 : (_action$queriesFromUr3 = action.queriesFromUrl) === null || _action$queriesFromUr3 === void 0 ? void 0 : _action$queriesFromUr3.sortDirection; // Persist sorting and pagination from the URL on load if available, otherwise reset pagination and sorting when subject is changed

          currentPage = Number(currentPageUrl) || 1;
          sort = sortUrl || assignConfig.assignmentList.dueDate;
          sortDirection = sortDirectionUrl || assignConfig.assignmentList.sortDesc;
          _context4.next = 8;
          return call(setPaginationAndSorting, currentPage, sort, sortDirection);

        case 8:
          _context4.next = 10;
          return call(invalidateAndFetchTabCounts);

        case 10:
          _context4.next = 12;
          return call(fetchAssignmentsAndUpdateUrl, currentPage, sort, sortDirection);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
export function setSortParameter(action) {
  var newSort, sortDirectionFromUrl, currentSort, currentSortDirectionState, currentSortDirection, currentTab, sortDirection, sortIsSame, directionIsSame, discipline, currentPage, limit, search, currentUrl;
  return _regeneratorRuntime.wrap(function setSortParameter$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          newSort = action.value;
          sortDirectionFromUrl = action.sortDirection;
          _context5.next = 4;
          return select(getSort);

        case 4:
          currentSort = _context5.sent;
          _context5.next = 7;
          return select(getSortDirection);

        case 7:
          currentSortDirectionState = _context5.sent;
          currentSortDirection = sortDirectionFromUrl || currentSortDirectionState;
          _context5.next = 11;
          return select(getCurrentTab);

        case 11:
          currentTab = _context5.sent;
          sortDirection = sortDirectionFromUrl || assignConfig.assignmentList.sortDesc;
          sortIsSame = newSort === currentSort;
          directionIsSame = currentSortDirection === assignConfig.assignmentList.sortDesc;
          _context5.next = 17;
          return select(getDiscipline);

        case 17:
          discipline = _context5.sent;

          if (sortIsSame && directionIsSame) {
            sortDirection = assignConfig.assignmentList.sortAsc;
          } // Reset current page when sorting is changed


          currentPage = 1;
          _context5.next = 22;
          return select(getLimit);

        case 22:
          limit = _context5.sent;
          search = qs.stringify({
            currentTab: currentTab,
            sortDirection: sortDirection,
            sort: newSort,
            discipline: discipline,
            currentPage: currentPage,
            limit: limit
          }, {
            addQueryPrefix: true,
            sort: function sort(a, b) {
              return a.localeCompare(b);
            }
          });
          _context5.next = 26;
          return put(setCurrentPage(currentPage));

        case 26:
          _context5.next = 28;
          return put(setSort(newSort));

        case 28:
          _context5.next = 30;
          return put(setSortDirection(sortDirection));

        case 30:
          _context5.next = 32;
          return call(fetchAssignments);

        case 32:
          currentUrl = window.location.href;

          if (!urlAlreadyContainsState(currentUrl)) {
            _context5.next = 38;
            break;
          }

          _context5.next = 36;
          return put(push({
            pathname: "/".concat(STUDENT_ASSIGNMENTS, "/"),
            search: search
          }));

        case 36:
          _context5.next = 40;
          break;

        case 38:
          _context5.next = 40;
          return put(replace({
            pathname: "/".concat(STUDENT_ASSIGNMENTS, "/"),
            search: search
          }));

        case 40:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
export function setPageParameter(action) {
  var currentPage, sort, sortDirection, currentTab, discipline, limit, search, currentUrl;
  return _regeneratorRuntime.wrap(function setPageParameter$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          currentPage = action.value;
          _context6.next = 3;
          return select(getSort);

        case 3:
          sort = _context6.sent;
          _context6.next = 6;
          return select(getSortDirection);

        case 6:
          sortDirection = _context6.sent;
          _context6.next = 9;
          return select(getCurrentTab);

        case 9:
          currentTab = _context6.sent;
          _context6.next = 12;
          return select(getDiscipline);

        case 12:
          discipline = _context6.sent;
          _context6.next = 15;
          return select(getLimit);

        case 15:
          limit = _context6.sent;
          search = qs.stringify({
            currentPage: currentPage,
            currentTab: currentTab,
            sortDirection: sortDirection,
            sort: sort,
            discipline: discipline,
            limit: limit
          }, {
            addQueryPrefix: true,
            sort: function sort(a, b) {
              return a.localeCompare(b);
            }
          });
          _context6.next = 19;
          return put(setCurrentPage(currentPage));

        case 19:
          _context6.next = 21;
          return call(fetchAssignments);

        case 21:
          currentUrl = window.location.href;

          if (!urlAlreadyContainsState(currentUrl)) {
            _context6.next = 27;
            break;
          }

          _context6.next = 25;
          return put(push({
            pathname: "/".concat(STUDENT_ASSIGNMENTS, "/"),
            search: search
          }));

        case 25:
          _context6.next = 29;
          break;

        case 27:
          _context6.next = 29;
          return put(replace({
            pathname: "/".concat(STUDENT_ASSIGNMENTS, "/"),
            search: search
          }));

        case 29:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}