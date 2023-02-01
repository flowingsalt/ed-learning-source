import { Record } from 'immutable';
import { PAGE_ACTIONS } from '@hmhco/assignments-history-helpers/src/actions/types';
import { DISCIPLINE_ACTIONS } from '../actions/types';
export var DisciplineList = Record({
  disciplines: null,
  loading: true,
  error: false
});
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DisciplineList();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case DISCIPLINE_ACTIONS.FETCH_DISCIPLINES_ERROR:
      return DisciplineList({
        error: true,
        loading: false
      });

    case DISCIPLINE_ACTIONS.LOAD_DISCIPLINES:
      {
        var disciplines = action.disciplines;
        var disciplineList = disciplines.reduce(function (disciplineArray, discipline) {
          var mappedDiscipline = {
            title: discipline.value,
            isSelected: false,
            value: discipline.code
          };
          disciplineArray.push(mappedDiscipline);
          return disciplineArray;
        }, []);
        return DisciplineList({
          disciplines: disciplineList,
          loading: false
        });
      }

    case PAGE_ACTIONS.RESET_STATE:
      {
        return DisciplineList();
      }

    default:
      {
        return state;
      }
  }
});