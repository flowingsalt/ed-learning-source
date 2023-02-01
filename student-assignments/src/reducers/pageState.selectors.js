import { createSelector } from 'reselect';
import qs from 'qs';
import { assignConfig } from '@hmhco/assignments-constants/src/assignConfig';
export var getPageState = function getPageState(state) {
  return state.pageState;
};
export var getOffset = createSelector([getPageState], function (pageState) {
  return pageState.offset;
});
export var getLimit = createSelector([getPageState], function (pageState) {
  return pageState.limit;
});
export var getCurrentPage = createSelector([getPageState], function (pageState) {
  return pageState.currentPage;
});
export var getSort = createSelector([getPageState], function (pageState) {
  return pageState.sort;
});
export var getSortDirection = createSelector([getPageState], function (pageState) {
  return pageState.sortDirection;
});
export var getDiscipline = createSelector([getPageState], function (pageState) {
  return pageState.discipline;
});
export var getCurrentTab = createSelector([getPageState], function (pageState) {
  return pageState.currentTab;
});
export var getAssignmentServiceQueries = createSelector([getPageState], function (pageState) {
  // eslint-disable-next-line radix
  var currentPage = parseInt(pageState.currentPage);
  var offset = (currentPage - 1) * assignConfig.assignmentList.pageSize;
  var newPageState = pageState.set('offset', offset);

  if (newPageState.sortDirection === assignConfig.assignmentList.sortDesc) {
    return newPageState.set('sort', "-".concat(pageState.sort));
  }

  return newPageState;
});
export var stateAsQueryString = createSelector([getPageState], function (pageState) {
  var queries = pageState.toJS(); // Delete the items that we don't usually store in the URL state

  delete queries.offset;
  delete queries.launchError;
  delete queries.networkFailed;
  return qs.stringify(queries, {
    addQueryPrefix: true,
    sort: function sort(a, b) {
      return a.localeCompare(b);
    }
  });
});