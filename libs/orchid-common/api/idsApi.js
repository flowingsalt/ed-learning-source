import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { axiosInstance } from '../api/apiConfig';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    restIdsGridApi = _getConfigForCurrentE.restIdsGridApi;

export var getListOfStates = function getListOfStates() {
  return axiosInstance({
    url: '/ids/v1/states',
    method: 'get'
  }).then(function (response) {
    return response.data;
  });
};
export var getDistricts = function getDistricts(districtId, sif) {
  var url = "/ids/v1/districts/".concat(districtId, "/schools");
  return axiosInstance({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sif
    },
    method: 'GET',
    url: url,
    baseURL: restIdsGridApi
  }).then(function (_ref) {
    var data = _ref.data;
    return {
      error: null,
      result: data
    };
  })["catch"](function (error) {
    return {
      result: null,
      error: error
    };
  });
};
export var getUser = function getUser(userId, sif) {
  var url = "/ids/v1/users/".concat(userId);
  return axiosInstance({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sif
    },
    method: 'GET',
    url: url,
    baseURL: restIdsGridApi
  }).then(function (_ref2) {
    var data = _ref2.data;
    return {
      error: null,
      result: data
    };
  })["catch"](function (error) {
    return {
      error: error,
      result: null
    };
  });
};
export var getSectionsByTeacherRefId = function getSectionsByTeacherRefId(params) {
  var url = "/ids/v1/teachers/".concat(params.teacherRefId, "/sections");
  return axiosInstance({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: params.sif
    },
    method: 'GET',
    url: url,
    baseURL: restIdsGridApi
  }).then(function (_ref3) {
    var data = _ref3.data;
    return {
      error: null,
      result: data
    };
  })["catch"](function (error) {
    return {
      error: error,
      result: null
    };
  });
};
export var getSectionsBySchool = function getSectionsBySchool(schoolId, sif) {
  var url = "/ids/v1/schools/".concat(schoolId, "/sections");
  return axiosInstance({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sif
    },
    method: 'GET',
    url: url,
    baseURL: restIdsGridApi
  }).then(function (_ref4) {
    var data = _ref4.data;
    return {
      error: null,
      result: data
    };
  })["catch"](function (error) {
    return {
      error: error,
      result: null
    };
  });
};
export var getStudentsBySectionRefId = function getStudentsBySectionRefId(params) {
  var url = "/ids/v1/sections/".concat(params.sectionRefId, "/rosters");
  return axiosInstance({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: params.sif
    },
    method: 'GET',
    url: url,
    baseURL: restIdsGridApi
  }).then(function (_ref5) {
    var data = _ref5.data;
    return {
      error: null,
      result: data
    };
  })["catch"](function (error) {
    return {
      error: error,
      result: null
    };
  });
};
export var searchForUser = function searchForUser(term, roles, sif) {
  var rolesStr = [];
  roles.map(function (role) {
    rolesStr.push("&roles=".concat(role));
  });
  var url = "/ids/v1/search/users?term=".concat(term).concat(rolesStr.join(''));
  return axiosInstance({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sif
    },
    method: 'GET',
    url: url,
    baseURL: restIdsGridApi
  }).then(function (response) {
    return {
      error: null,
      result: response.data
    };
  })["catch"](function (error) {
    if (error.response.status === 404) {
      return {
        error: null,
        result: []
      };
    }

    console.error('idsGridApi searchForUser', error);
    return {
      error: error,
      result: null
    };
  });
};
export var getStudentsTeachers = function getStudentsTeachers(_ref6) {
  var sif = _ref6.sif,
      studentRefId = _ref6.studentRefId;
  var url = "/ids/v1/students/".concat(studentRefId, "/teachers");
  return axiosInstance({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sif
    },
    method: 'GET',
    url: url,
    baseURL: restIdsGridApi
  }).then(function (_ref7) {
    var data = _ref7.data;
    return {
      error: null,
      result: data
    };
  })["catch"](function (error) {
    return {
      error: error,
      result: null
    };
  });
};