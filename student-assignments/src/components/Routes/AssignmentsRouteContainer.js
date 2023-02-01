import React, { useEffect } from 'react';
import qs from 'qs';
import { bool, object, array, shape, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setHistoryUnlisten, fireHistoryUnlistenAndResetHistoryListen } from '@hmhco/assignments-history-helpers/src/actions/historyListen.actions';
import { STUDENT_ASSESSMENT_REVIEW } from '@hmhco/url-builders/src/constants';
import { TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
import { getHistoryListenState } from '@hmhco/assignments-history-helpers/src/selectors/historyListen.selectors';
import { fetchDisciplines } from '../../actions/discipline.actions';
import { compareUrlToCurrentStateAndFetchData } from '../../actions';
import AssignmentsContainer from '../AssignmentsContainer/AssignmentsContainer.component';
import { getLoadingStatus } from '../../reducers/assignmentList.selectors';

var AssignmentsRouteContainer = function AssignmentsRouteContainer(props) {
  var dispatch = useDispatch();
  var historyListenState = useSelector(getHistoryListenState);
  var isLoadingTableData = useSelector(getLoadingStatus);
  var search = props.location.search,
      history = props.history,
      isLoadingInAmp = props.isLoadingInAmp,
      sif = props.sif,
      env = props.env,
      entitledPrograms = props.entitledPrograms,
      entitledProducts = props.entitledProducts,
      hasGoogleClassroomSetting = props.hasGoogleClassroomSetting;
  var queries = qs.parse(search, {
    ignoreQueryPrefix: true
  });
  useEffect(function () {
    if (!isLoadingInAmp) {
      dispatch(fetchDisciplines(queries));
    }

    return function () {
      dispatch(fireHistoryUnlistenAndResetHistoryListen());
    };
  }, []);
  useEffect(function () {
    // Only start listening to changes on the history _after_ the page has finished loading and if history.listen doesn't already exist
    if (!historyListenState.historyUnlisten && !isLoadingTableData) {
      var historyUnlisten = history.listen(function (location) {
        // Fire action to compare what's changed to the current state, and to update the state & perform data queries if needed
        var newQueries = qs.parse(location.search, {
          ignoreQueryPrefix: true
        });
        var currentTab = newQueries.currentTab,
            discipline = newQueries.discipline,
            currentPage = newQueries.currentPage,
            limit = newQueries.limit,
            offset = newQueries.offset,
            sort = newQueries.sort,
            sortDirection = newQueries.sortDirection;

        if (!location.pathname.includes(STUDENT_ASSESSMENT_REVIEW)) {
          dispatch(compareUrlToCurrentStateAndFetchData({
            currentTab: currentTab,
            discipline: discipline,
            currentPage: currentPage,
            limit: limit,
            offset: offset,
            sort: sort,
            sortDirection: sortDirection
          }));
        }
      }); // Store a reference to history.listen in the Redux state so that we can "unlisten" when the app is unmounted

      dispatch(setHistoryUnlisten(historyUnlisten));
    }
  }, [queries]);
  return /*#__PURE__*/React.createElement(AssignmentsContainer, {
    sif: sif,
    env: env,
    entitledPrograms: entitledPrograms,
    entitledProducts: entitledProducts,
    initialTabOnLoad: (queries === null || queries === void 0 ? void 0 : queries.currentTab) || TAB_STATES.TODO,
    queries: queries,
    hasGoogleClassroomSetting: hasGoogleClassroomSetting
  });
};

AssignmentsRouteContainer.propTypes = {
  location: object,
  history: object,
  isLoadingInAmp: bool,
  entitledPrograms: array,
  entitledProducts: array,
  sif: shape({
    accessToken: string,
    idToken: string,
    tokenInfo: object
  }),
  env: string,
  hasGoogleClassroomSetting: bool
};
export default AssignmentsRouteContainer;