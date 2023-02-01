import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';
import manifestInfoApi from '@hmhco/onesearch-manifests-api/src/manifests/manifestsApi';
import { filterProgramsForStudentWithClasses, filterProgramsForStudentWithNoClasses } from '@hmhco/onesearch-manifests-api/src/manifests/responseUtils/filterResponse';
import studentApi from '@hmhco/student-api/src/studentApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { isRunningInAmp } from '@hmhco/amp-core/src/environmentHelpers';
export default (function (studentRefId) {
  var _manifestInfoApi = manifestInfoApi(),
      fetchEntitlements = _manifestInfoApi.getInfoCached,
      cancelEntitlements = _manifestInfoApi.cancel;

  var _studentApi = studentApi(),
      fetchStudentClassesCached = _studentApi.fetchStudentClassesCached,
      cancelFetchStudentClasses = _studentApi.cancel;

  var _useState = useState({
    isLoading: true,
    programs: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      entitlementsResult = _useState2[0],
      setEntitlementsResult = _useState2[1];

  var handleErrorFromFetchingEntitlements = function handleErrorFromFetchingEntitlements(error) {
    logErrorWithContext('Error fetching student entitlements', [{
      key: 'errorMessage',
      value: error
    }]);
    setEntitlementsResult({
      isLoading: false,
      programs: null
    });
  };

  useEffect(function () {
    // Only perform the data calls when we are running in AMP
    if (isRunningInAmp()) {
      fetchStudentClassesCached(studentRefId).then(function (studentClassesResponse) {
        var studentSectionRefIds = studentClassesResponse.map(function (studentClass) {
          return studentClass.sectionRefId;
        });

        if (studentSectionRefIds.length > 0) {
          var studentSectionRefIdsCommaSeparated = studentSectionRefIds.join();
          fetchEntitlements(studentSectionRefIdsCommaSeparated).then(function (entitlementsResponse) {
            var programs = filterProgramsForStudentWithClasses(entitlementsResponse);
            setEntitlementsResult({
              isLoading: false,
              programs: programs
            });
          })["catch"](function (error) {
            handleErrorFromFetchingEntitlements(error);
          });
        } else {
          fetchEntitlements().then(function (entitlementsResponse) {
            var programs = filterProgramsForStudentWithNoClasses(entitlementsResponse);
            setEntitlementsResult({
              isLoading: false,
              programs: programs
            });
          })["catch"](function (error) {
            handleErrorFromFetchingEntitlements(error);
          });
        }
      })["catch"](function (error) {
        logErrorWithContext('Error fetching student classes', [{
          key: 'errorMessage',
          value: error
        }]);
        setEntitlementsResult({
          isLoading: false,
          programs: null
        });
      });
    }

    return function () {
      // cleanup here
      cancelEntitlements();
      cancelFetchStudentClasses();
    };
  }, []);
  return [entitlementsResult.programs, entitlementsResult.isLoading];
});