import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _actionsAndCacheItems;

import { FETCH_ADMINISTRATOR, FETCH_CLASS_ROSTERS, FETCH_CLASS, FETCH_CLASSES, FETCH_ONESEARCH_MANIFESTS, FETCH_ONESEARCH_PROGRAMS, FETCH_OAC_MANIFESTS, FETCH_STUDENTS, FETCH_TEACHER_CLASSES, FETCH_TEACHERS, UPDATE_ADMINISTRATOR, UPDATE_PROGRAM_SETTINGS, UPDATE_ROSTERS, UPDATE_STUDENT, UPDATE_TEACHER } from './actionsAndCacheKeyValues';
export var actionsAndCacheItemsToClear = (_actionsAndCacheItems = {}, _defineProperty(_actionsAndCacheItems, UPDATE_ROSTERS, [FETCH_TEACHER_CLASSES, FETCH_CLASS_ROSTERS, FETCH_CLASS, FETCH_CLASSES, FETCH_STUDENTS, FETCH_TEACHERS]), _defineProperty(_actionsAndCacheItems, UPDATE_PROGRAM_SETTINGS, [FETCH_ONESEARCH_MANIFESTS, FETCH_OAC_MANIFESTS, FETCH_ONESEARCH_PROGRAMS]), _defineProperty(_actionsAndCacheItems, UPDATE_STUDENT, [FETCH_STUDENTS]), _defineProperty(_actionsAndCacheItems, UPDATE_TEACHER, [FETCH_TEACHERS]), _defineProperty(_actionsAndCacheItems, UPDATE_ADMINISTRATOR, [FETCH_ADMINISTRATOR]), _actionsAndCacheItems);

var getCacheKeysToClear = function getCacheKeysToClear(currentAction) {
  return actionsAndCacheItemsToClear[currentAction];
};

export default getCacheKeysToClear;