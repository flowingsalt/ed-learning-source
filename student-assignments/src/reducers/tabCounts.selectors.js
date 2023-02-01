import { createSelector } from 'reselect';
export var getTabCounts = function getTabCounts(state) {
  return state.tabCounts;
};
export var getDoneTabCount = createSelector([getTabCounts], function (tabCounts) {
  return tabCounts.done;
});
export var getOverdueTabCount = createSelector([getTabCounts], function (tabCounts) {
  return tabCounts.overdue;
});
export var getTodoTabCount = createSelector([getTabCounts], function (tabCounts) {
  return tabCounts.todo;
});