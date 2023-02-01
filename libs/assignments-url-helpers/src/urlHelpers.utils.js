import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';
import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
import { TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
export var isDisciplineAvailableToStudent = function isDisciplineAvailableToStudent(disciplineFromUrl, disciplineList) {
  return Boolean(disciplineFromUrl) && Boolean(disciplineList) && disciplineList.some(function (disciplineObject) {
    return disciplineObject.code === disciplineFromUrl;
  });
};
export var isCurrentTabIsValid = function isCurrentTabIsValid(currentTab) {
  return Boolean(TAB_STATES[currentTab]);
};
export var isSortValid = function isSortValid(sort) {
  return sort !== null && sort !== 'null';
};
export var isCurrentPageValid = function isCurrentPageValid(currentPageString) {
  return Boolean(Number(currentPageString)) || Number(currentPageString) === 0;
};
export var createTableStateObjectWithoutNullValues = function createTableStateObjectWithoutNullValues() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      discipline = _ref.discipline,
      currentTab = _ref.currentTab,
      currentPage = _ref.currentPage,
      sort = _ref.sort,
      sortDirection = _ref.sortDirection;

  return omitBy({
    discipline: discipline,
    currentTab: currentTab,
    currentPage: currentPage,
    sort: sort,
    sortDirection: sortDirection
  }, isNil);
};
export var isSortDirectionValid = function isSortDirectionValid(sortDirection) {
  return sortDirection === assignConfig.assignmentList.sortAsc || sortDirection === assignConfig.assignmentList.sortDesc;
};
export var sanitiseUrlValuesFromAction = function sanitiseUrlValuesFromAction(action, disciplineList) {
  var _action$value, _action$value2, _action$value3, _action$value4, _action$value5; // Sanitise any values that have been provided to the URL on first load:
  // Check if the currentTab is one of TODO, OVERDUE, DONE


  var currentTab = action === null || action === void 0 ? void 0 : (_action$value = action.value) === null || _action$value === void 0 ? void 0 : _action$value.currentTab;

  if (!isCurrentTabIsValid(currentTab)) {
    currentTab = undefined;
  } // Check if currentPage has been provided, and convert to a Number


  var currentPageString = action === null || action === void 0 ? void 0 : (_action$value2 = action.value) === null || _action$value2 === void 0 ? void 0 : _action$value2.currentPage;
  var currentPage = isCurrentPageValid(currentPageString) ? Number(currentPageString) : undefined; // TODO Check if sort is a sortable column on the table for the currentTab

  var sort = action === null || action === void 0 ? void 0 : (_action$value3 = action.value) === null || _action$value3 === void 0 ? void 0 : _action$value3.sort; // Check if sortDirection is valid and that a sort column has also been provided

  var sortDirection = action === null || action === void 0 ? void 0 : (_action$value4 = action.value) === null || _action$value4 === void 0 ? void 0 : _action$value4.sortDirection;

  if (!isSortDirectionValid(sortDirection) || !sort) {
    sortDirection = undefined;
  } // Check if discipline is in the list for the student


  var discipline = action === null || action === void 0 ? void 0 : (_action$value5 = action.value) === null || _action$value5 === void 0 ? void 0 : _action$value5.discipline;

  if (!isDisciplineAvailableToStudent(discipline, disciplineList)) {
    discipline = undefined;
  }

  return {
    currentTab: currentTab,
    currentPage: currentPage,
    sort: sort,
    sortDirection: sortDirection,
    discipline: discipline
  };
};
export var sanitiseUrlValuesFromActionForTeacher = function sanitiseUrlValuesFromActionForTeacher(action) {
  var _action$queriesFromUr, _action$queriesFromUr2, _action$queriesFromUr3; // Sanitise any values that have been provided to the URL on first load:
  // Check if currentPage has been provided, and convert to a Number


  var currentPageString = action === null || action === void 0 ? void 0 : (_action$queriesFromUr = action.queriesFromUrl) === null || _action$queriesFromUr === void 0 ? void 0 : _action$queriesFromUr.currentPage;
  var currentPage = isCurrentPageValid(currentPageString) ? Number(currentPageString) : undefined;
  var sort = action === null || action === void 0 ? void 0 : (_action$queriesFromUr2 = action.queriesFromUrl) === null || _action$queriesFromUr2 === void 0 ? void 0 : _action$queriesFromUr2.sort;

  if (!isSortValid(sort)) {
    sort = undefined;
  } // Check if sortDirection is valid and that a sort column has also been provided


  var sortDirection = action === null || action === void 0 ? void 0 : (_action$queriesFromUr3 = action.queriesFromUrl) === null || _action$queriesFromUr3 === void 0 ? void 0 : _action$queriesFromUr3.sortDirection;

  if (!isSortDirectionValid(sortDirection) || !sort) {
    sortDirection = undefined;
  }

  return {
    currentPage: currentPage,
    sort: sort,
    sortDirection: sortDirection
  };
};