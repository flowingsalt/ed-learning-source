import { DISCIPLINE_ACTIONS } from './types';
export var fetchDisciplines = function fetchDisciplines(queriesFromUrl) {
  return {
    type: DISCIPLINE_ACTIONS.FETCH_DISCIPLINES,
    value: queriesFromUrl
  };
};
export var fetchDisciplinesError = function fetchDisciplinesError() {
  return {
    type: DISCIPLINE_ACTIONS.FETCH_DISCIPLINES_ERROR
  };
};
export var loadDisciplines = function loadDisciplines(disciplines) {
  return {
    type: DISCIPLINE_ACTIONS.LOAD_DISCIPLINES,
    disciplines: disciplines
  };
};
export var setDiscipline = function setDiscipline(discipline, queriesFromUrl) {
  return {
    type: DISCIPLINE_ACTIONS.SET_DISCIPLINE,
    value: discipline,
    queriesFromUrl: queriesFromUrl
  };
};