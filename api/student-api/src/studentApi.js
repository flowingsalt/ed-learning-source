import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { MEDIUM_SESSION } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { clearCacheAfterRosteringActions, clearStudentsCacheAfterAdminActions } from '@hmhco/cache-api-helper/src/clearCacheKeysForRequest';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    restIdsGridApi = _getConfigForCurrentE.restIdsGridApi;

export var STUDENT_ENDPOINT = '/ids/v1/students';
var STUDENT_BATCH_URL = "".concat(STUDENT_ENDPOINT, "/batch");
var STUDENT_PURGE_URL = "/ids/v1/purge/users";
export var getSingleStudentUrl = function getSingleStudentUrl(studentRefId) {
  return "".concat(STUDENT_ENDPOINT, "/").concat(studentRefId);
};
export var getSingleStudentTeachersUrl = function getSingleStudentTeachersUrl(studentRefId) {
  return "".concat(getSingleStudentUrl(studentRefId), "/teachers");
};
export var getSingleStudentSchoolsUrl = function getSingleStudentSchoolsUrl(studentRefId) {
  return "".concat(getSingleStudentUrl(studentRefId), "/schools");
};
export var getSingleStudentClassesUrl = function getSingleStudentClassesUrl(studentRefId) {
  return "".concat(getSingleStudentUrl(studentRefId), "/sections");
};
export var deleteSingleStudentUrl = function deleteSingleStudentUrl(studentRefId) {
  return "".concat(STUDENT_PURGE_URL, "/").concat(studentRefId);
};

var clearCacheAfterUpdate = function clearCacheAfterUpdate(result) {
  clearCacheAfterRosteringActions();
  clearStudentsCacheAfterAdminActions();
  return result;
};

var clearCacheForAdminsAfterUpdate = function clearCacheForAdminsAfterUpdate(result) {
  clearStudentsCacheAfterAdminActions();
  return result;
};

export default (function () {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  var request = requestHelper({
    client: client,
    cancelToken: cancelToken,
    isCancel: isCancel,
    baseURL: restIdsGridApi,
    pactConfig: pactConfig
  });
  return {
    createStudent: function createStudent(studentData, options) {
      return request.post(STUDENT_ENDPOINT, studentData, options).then(clearCacheAfterUpdate);
    },
    updateStudent: function updateStudent(studentRefId, studentData) {
      return request.patch(getSingleStudentUrl(studentRefId), studentData).then(clearCacheAfterUpdate);
    },
    deleteStudent: function deleteStudent(studentRefId) {
      return request.post(deleteSingleStudentUrl(studentRefId), {}).then(clearCacheForAdminsAfterUpdate);
    },
    fetchStudent: function fetchStudent(studentRefId) {
      return request.get(getSingleStudentUrl(studentRefId));
    },
    fetchStudentBatch: function fetchStudentBatch(studentRefIds) {
      return request.post(STUDENT_BATCH_URL, studentRefIds);
    },
    fetchStudentTeachers: function fetchStudentTeachers(studentRefId) {
      return request.get(getSingleStudentTeachersUrl(studentRefId));
    },
    addStudentToClasses: function addStudentToClasses(studentRefId, classRefIds) {
      return request.post(getSingleStudentClassesUrl(studentRefId), {
        sectionRefIds: classRefIds
      }).then(function (result) {
        clearCacheAfterRosteringActions();
        return result;
      });
    },
    removeStudentFromClasses: function removeStudentFromClasses(studentRefId, classRefIds) {
      return request["delete"](getSingleStudentClassesUrl(studentRefId), {
        sectionRefIds: classRefIds
      }).then(function (result) {
        clearCacheAfterRosteringActions();
        return result;
      });
    },
    fetchStudentClasses: function fetchStudentClasses(studentRefId) {
      return request.get(getSingleStudentClassesUrl(studentRefId));
    },
    fetchStudentClassesCached: function fetchStudentClassesCached(studentRefId) {
      return request.get(getSingleStudentClassesUrl(studentRefId), {
        maxAge: MEDIUM_SESSION
      });
    },
    addStudentToSchools: function addStudentToSchools(studentRefId, schoolRefIds) {
      return request.post(getSingleStudentSchoolsUrl(studentRefId), {
        orgRefIds: schoolRefIds
      }).then(clearCacheAfterUpdate);
    },
    removeStudentFromSchools: function removeStudentFromSchools(studentRefId, schoolRefIds) {
      return request["delete"](getSingleStudentSchoolsUrl(studentRefId), {
        orgRefIds: schoolRefIds
      }).then(clearCacheAfterUpdate);
    },
    cancel: cancel
  };
});