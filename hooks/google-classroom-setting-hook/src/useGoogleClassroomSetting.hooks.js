import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import fetchDmpsBatchCached from '@hmhco/district-settings-api/src/fetchDmpsBatchCached';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
/**
 * React Hook - useGoogleClassroomSetting makes a call to DMPS querying Google Classroom setting and returns a boolean
 * @returns {boolean } Google Classroom Setting - true | false
 */

var useGoogleClassroomSetting = function useGoogleClassroomSetting() {
  var _React$useState = React.useState(undefined),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      googleClassroomSettingState = _React$useState2[0],
      setGoogleClassroomSettingState = _React$useState2[1];

  React.useEffect(function () {
    var _fetchDmpsBatchCached = fetchDmpsBatchCached(getUserCtx(), ['educated.viaduct.google.classroom'], {
      googleClassroomSetting: 'educated.viaduct.google.classroom'
    }),
        resultPromise = _fetchDmpsBatchCached.resultPromise,
        cancel = _fetchDmpsBatchCached.cancel;

    resultPromise.then(function (result) {
      if (!result.isCancelled) {
        var googleClassroomSetting = result.googleClassroomSetting;
        setGoogleClassroomSettingState(googleClassroomSetting === 'undefined' ? false : googleClassroomSetting);
      }
    })["catch"](function (error) {
      logErrorWithContext('Error fetching Google Classroom Setting', [{
        key: 'errorMessage',
        value: error
      }]);
    });
    return cancel;
  }, []);
  return googleClassroomSettingState;
};

export default useGoogleClassroomSetting;