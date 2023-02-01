import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { SHORT_SESSION } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { FETCH_TEACHER_CLASSES } from '@hmhco/cache-api-helper/src/actionsAndCacheKeyValues';
import { clearCacheAfterRosteringActions, clearTeachersCacheAfterAdminActions } from '@hmhco/cache-api-helper/src/clearCacheKeysForRequest';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    restIdsGridApi = _getConfigForCurrentE.restIdsGridApi;

export var TEACHER_ENDPOINT = '/ids/v1/teachers';
var TEACHER_PURGE_URL = "/ids/v1/purge/users";
export var getSingleTeacherUrl = function getSingleTeacherUrl(teacherRefId) {
  return "".concat(TEACHER_ENDPOINT, "/").concat(teacherRefId);
};
export var getSingleTeacherSchoolsUrl = function getSingleTeacherSchoolsUrl(teacherRefId) {
  return "".concat(getSingleTeacherUrl(teacherRefId), "/schools");
};
export var getSingleTeacherClassesUrl = function getSingleTeacherClassesUrl(teacherRefId) {
  return "".concat(getSingleTeacherUrl(teacherRefId), "/sections");
};
export var getDeleteSingleTeacherUrl = function getDeleteSingleTeacherUrl(teacherRefId) {
  return "".concat(TEACHER_PURGE_URL, "/").concat(teacherRefId);
};

var clearCacheForAdminsAfterUpdate = function clearCacheForAdminsAfterUpdate(result) {
  clearTeachersCacheAfterAdminActions();
  return result;
};

var clearCacheForRosteringAfterUpdate = function clearCacheForRosteringAfterUpdate(result) {
  clearCacheAfterRosteringActions();
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
    createTeacher: function createTeacher(teacherData, options) {
      return request.post(TEACHER_ENDPOINT, teacherData, options).then(clearCacheForAdminsAfterUpdate);
    },
    updateTeacher: function updateTeacher(teacherRefId, teacherData) {
      return request.patch(getSingleTeacherUrl(teacherRefId), teacherData).then(clearCacheForAdminsAfterUpdate);
    },
    fetchTeacher: function fetchTeacher(teacherRefId) {
      return request.get(getSingleTeacherUrl(teacherRefId));
    },
    deleteTeacher: function deleteTeacher(teacherRefId) {
      return request.post(getDeleteSingleTeacherUrl(teacherRefId), {}).then(clearCacheForAdminsAfterUpdate);
    },
    addTeacherToClass: function addTeacherToClass(teacherRefId, classRefId, teacherType) {
      return request.post(getSingleTeacherClassesUrl(teacherRefId), {
        sectionRefIds: [classRefId],
        teacherType: teacherType
      }).then(clearCacheForRosteringAfterUpdate);
    },
    removeTeacherFromClass: function removeTeacherFromClass(teacherRefId, classRefId) {
      return request["delete"](getSingleTeacherClassesUrl(teacherRefId), {
        sectionRefIds: [classRefId]
      }).then(clearCacheForRosteringAfterUpdate);
    },
    getTeacherClasses: function getTeacherClasses(teacherRefId) {
      return request.get(getSingleTeacherClassesUrl(teacherRefId));
    },
    getTeacherClassesCached: function getTeacherClassesCached(teacherRefId) {
      return request.get(getSingleTeacherClassesUrl(teacherRefId), {
        maxAge: SHORT_SESSION,
        keyPrefix: FETCH_TEACHER_CLASSES
      });
    },
    addTeacherToSchool: function addTeacherToSchool(teacherRefId, schools) {
      return request.post(getSingleTeacherSchoolsUrl(teacherRefId), {
        orgRefIds: schools
      }).then(clearCacheForAdminsAfterUpdate);
    },
    removeTeacherFromSchool: function removeTeacherFromSchool(teacherRefId, schools) {
      return request["delete"](getSingleTeacherSchoolsUrl(teacherRefId), {
        orgRefIds: schools
      }).then(clearCacheForAdminsAfterUpdate);
    },
    cancel: cancel
  };
});