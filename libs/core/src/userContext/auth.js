import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _PLATFORM_REDIRECTS;
/* eslint-disable no-use-before-define */


import { eventRegistry as events } from '@hmhco/amp-core-events';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { isVanillaRoute } from '@hmhco/amp-vanilla-routes';
import sifDecoder, { rawSifParser, getTokenInfoFromSifToken, decodeSifBaseAsObject, decodeFromBase64IdToken } from './sifDecoder';
var config = getConfigForCurrentEnv();
export var ED_PLATFORM_CODE = 'IDS';
export var BASAL_PLATFORM_CODES = ['tc', 'tck', 'hrw', 'hmof'];
export var PLATFORM_REDIRECTS = (_PLATFORM_REDIRECTS = {}, _defineProperty(_PLATFORM_REDIRECTS, ED_PLATFORM_CODE, config.baseURL + config.loginPath), _defineProperty(_PLATFORM_REDIRECTS, "tc", config.tcLoginPath), _defineProperty(_PLATFORM_REDIRECTS, "tck", config.tcLoginPath), _defineProperty(_PLATFORM_REDIRECTS, "hrw", config.hmoLoginPath), _defineProperty(_PLATFORM_REDIRECTS, "hmof", config.hmoLoginPath), _PLATFORM_REDIRECTS);
var userContext = null;
export var ADMIN_ROLES = {
  SCHOOL: 'School Administrator',
  DISTRICT: 'District Administrator',
  ADMINISTRATOR: 'Administrator',
  PLATFORM: 'Platform Administrator'
};
export var TEACHER_ROLE = 'Instructor';
export var LEARNER_ROLE = 'Learner';
export var PREVIEW_CODE = 'PREVIEW';
export var SUPERDISTRICT_PID = '88008866';
/**
 * The Ed login app sets this key on successful login.
 */

/** !!! IMPORT FOR TESTING ONLY !!! */

export var ED_LOGIN_AUTH_KEY = "com.hmhco.security.openID.authInfo.".concat(config.name);
/**
 * On dev environment logs in via a refresh, all other environments redirect to login page.
 * Represents LOGIN action
 */

export var loginPlatform = function loginPlatform() {
  redirectToLogin();
};
/**
 * Clear the user token memory cache
 */

export var clearUserCtx = function clearUserCtx() {
  userContext = null;
};
/**
 * Delete SIF token from storage then clear user context via the USER_CTX_UPDATE custom event.
 * Represents LOGOUT action
 */

export var logoutPlatform = function logoutPlatform() {
  var loginCallback = function loginCallback() {
    clearUserCtx();
    window.sessionStorage.removeItem(ED_LOGIN_AUTH_KEY);
    var userCtxEvent = new CustomEvent(events.USER_CTX_UPDATE, {
      detail: null
    });
    window.dispatchEvent(userCtxEvent);
  };

  redirectToLogin(loginCallback);
};
/**
 * Reads the requested element from a decoded string SIF token.
 * @param {string} item name of item to be retrieved
 * @param {string} decodedSifToken the SIF token object in string format
 * @returns {string}
 */

export var getFromToken = function getFromToken(item, decodedSifToken) {
  var tokenSubItems = {
    userName: 'cn',
    userId: 'uniqueIdentifier',
    districtPid: 'dc',
    schoolPid: 'o',
    state: 'st'
  };
  var parsedSifToken = decodedSifToken && JSON.parse(decodedSifToken);
  return item && decodedSifToken && parsedSifToken.sub.includes("".concat(tokenSubItems[item], "=")) ? parsedSifToken.sub.split("".concat(tokenSubItems[item], "="))[1].split(',')[0] : null;
};
/**
 * Extract role information from SIF token
 *
 * @param {string} decodedSifToken SIF token json encoded object
 * @returns {array} list of user roles: 'Learner', 'Instructor', 'Administrator'
 */

export var getRolesFromToken = function getRolesFromToken(decodedSifToken) {
  return decodedSifToken && JSON.parse(decodedSifToken)['http://www.imsglobal.org/imspurl/lis/v1/vocab/person'];
};
/**
 * Reads the user's role from a decoded string SIF token.
 * Represents role
 *
 * @param {string} decodedSifToken SIF token json encoded object
 *
 * @returns {string} role for current user (teacher, student, administrator)
 */

export var getRoleFromToken = function getRoleFromToken(decodedSifToken) {
  return decodedSifToken && getRolesFromToken(decodedSifToken)[0];
};
/**
 * Extract first name in a full name string
 *
 * @param {string} userName string containing first name and last name of user
 *
 * @returns {string} user first name
 */

export var getFirstName = function getFirstName(userName) {
  return typeof userName === 'string' ? userName.split(' ')[0] : '';
};
/**
 * Extract last name in a full name string
 *
 * @param {string} userName string containing first name and last name of user
 *
 * @returns {string} user last name
 */

export var getLastName = function getLastName(userName) {
  if (typeof userName !== 'string') {
    return '';
  }

  var nameParts = userName.split(' ');

  if (nameParts.length <= 1) {
    return '';
  }

  return nameParts.pop();
};
/**
 * determine if the token is from Basal platform
 *
 * @param {string} decodedSifToken SIF token json encoded object
 *
 * @returns {boolean} true if the user is from legacy platform, false otherwise
 */

export var isLegacyPlatformToken = function isLegacyPlatformToken(decodedSifToken) {
  var parsedToken = decodedSifToken && JSON.parse(decodedSifToken) || {};
  var platform = parsedToken.platform || parsedToken.PlatformId;
  return Boolean(platform && BASAL_PLATFORM_CODES.includes(platform.toLowerCase()));
};
/**
 * Determine the school category the user belong to
 *
 * @param {string} decodedSifToken SIF token json encoded object
 *
 * @returns {string} school category for the user: 'public' or 'private'
 */

export var getSchoolCategory = function getSchoolCategory(decodedSifToken) {
  return decodedSifToken && JSON.parse(decodedSifToken).school_category;
};
/**
 * Determine if the user belong to a private schoool
 *
 * @param {string} decodedSifToken SIF token json encoded object
 *
 * @returns {boolean} true if the user is from a private school, false otherwise
 */

export var isPrivateSchool = function isPrivateSchool(decodedSifToken) {
  return getSchoolCategory(decodedSifToken) === 'private';
};
/**
 * Determine if the user is an administrator belonging to a private schoool
 *
 * @param {object} userCtx user context with SIF token json encoded object
 *
 * @returns {boolean} true if the user  is an administrator and belong to a private school, false otherwise
 */

export var isPrivateSchoolAdmin = function isPrivateSchoolAdmin(userCtx) {
  return (userCtx === null || userCtx === void 0 ? void 0 : userCtx.isSchoolAdmin) && isPrivateSchool(userCtx.sif);
};
/**
 * Determine if the user is an administrator belonging to a public schoool
 *
 * @param {object} userCtx user context with SIF token json encoded object
 *
 * @returns {boolean} true if the user  is an administrator and belong to a public school, false otherwise
 */

export var isPublicSchoolAdmin = function isPublicSchoolAdmin(userCtx) {
  return (userCtx === null || userCtx === void 0 ? void 0 : userCtx.isSchoolAdmin) && !isPrivateSchool(userCtx.sif);
};
/**
 * Extract the school ref ID the user belong to
 *
 * @param {string} decodedSifToken SIF token json encoded object
 *
 * @returns {string} school ref id the user belong to
 */

export var getSchoolId = function getSchoolId(decodedSifToken) {
  return decodedSifToken && JSON.parse(decodedSifToken).school_id;
};
/**
 * Extract the district ref ID the user belong to
 *
 * @param {string} decodedSifToken SIF token json encoded object
 *
 * @returns {string} district ref id the user belong to
 */

export var getDistrictId = function getDistrictId(decodedSifToken) {
  return decodedSifToken && JSON.parse(decodedSifToken).dist_id;
};
/**
 * Determine the type of administrator the user is
 *
 * @param {string} decodedSifToken SIF token json encoded object
 *
 * @returns {string} district ref id the user belong to
 */

export var getAdminRole = function getAdminRole(decodedSifToken) {
  if (!decodedSifToken) {
    return null;
  }

  var districtPid = getFromToken('districtPid', decodedSifToken);
  var schoolPid = getFromToken('schoolPid', decodedSifToken);

  if (districtPid === SUPERDISTRICT_PID) {
    return ADMIN_ROLES.PLATFORM;
  }

  if (districtPid === schoolPid) {
    return isPrivateSchool(decodedSifToken) ? ADMIN_ROLES.SCHOOL : ADMIN_ROLES.DISTRICT;
  }

  return ADMIN_ROLES.SCHOOL;
};
/**
 * Extract all roles the user is assigned to
 *
 * @param {string} decodedSif SIF token json encoded object
 *
 * @returns {array} list of roles
 */

export var getAllRoles = function getAllRoles(decodedSif) {
  var roles = getRolesFromToken(decodedSif) || [];

  if (roles.includes(ADMIN_ROLES.ADMINISTRATOR)) {
    roles.push(getAdminRole(decodedSif));
  }

  return roles;
};
/**
 * Determine if the user is a District administrator
 *
 * @param {array} roles the user has
 *
 * @returns {boolean} true of the user is a district administrator, false otherwise
 */

export var isDistrictAdmin = function isDistrictAdmin(roles) {
  return roles.includes(ADMIN_ROLES.DISTRICT);
};
/**
 * Determine if the user is a Student
 *
 * @param {array} roles the user has
 *
 * @returns {boolean} true of the user is a student, false otherwise
 */

export var isLearner = function isLearner(roles) {
  return roles.includes(LEARNER_ROLE);
};
/**
 * Determine if the user is a School administrator
 *
 * @param {array} roles the user has
 *
 * @returns {boolean} true of the user is a School administrator, false otherwise
 */

export var isSchoolAdmin = function isSchoolAdmin(roles) {
  return roles.includes(ADMIN_ROLES.SCHOOL);
};
/**
 * Determine if the user is a Preview User
 *
 * @param {array} roles the user has
 *
 * @returns {boolean} true of the user is a Preview User, false otherwise
 */

export var isPreviewUser = function isPreviewUser(tokeninfo) {
  return (tokeninfo === null || tokeninfo === void 0 ? void 0 : tokeninfo.account_type) === PREVIEW_CODE;
};
/**
 * read session storage to return the SIF token
 *
 * @returns {string} SIF token stored in session storage
 */

var getRawToken = function getRawToken() {
  // we already have it from login
  return window.sessionStorage.getItem(ED_LOGIN_AUTH_KEY); // return null if the key doesn't exists
};
/**
 * read local storage to return the SIF token
 *
 * @returns {string} SIF token stored in local storage
 */


var getRawTokenFromLocalStorage = function getRawTokenFromLocalStorage() {
  return window.localStorage.getItem(ED_LOGIN_AUTH_KEY); // return null if the key doesn't exists
};
/**
 * Determine if the user is an evaluator
 *
 * @param {string} decodedSif SIF token json encoded object
 * @returns {boolean} true if user is an evaluator, false otherwise
 */


export var isEvaluator = function isEvaluator(decodedSif) {
  return getFromToken('state', decodedSif) === 'EV' && getRolesFromToken(decodedSif).includes(TEACHER_ROLE);
};
/**
 * On dev it sets the SIF token to storage from the environment variables. On the environments it already has that from Login
 * Represents userContext
 * @returns {object} format: { rawToken: string, sif: string, userId: string, userName: string, firstName: string, role: string }
 */

var tokenProcess = function tokenProcess(rawToken) {
  var sif = sifDecoder(rawToken);
  var tokeninfo = getTokenInfoFromSifToken(rawToken);
  var userName = getFromToken('userName', sif);
  var role = getRoleFromToken(sif);
  var roles = getAllRoles(sif);
  var userCtx = {
    rawToken: rawSifParser(rawToken),
    sif: sif,
    userId: getFromToken('userId', sif),
    userName: userName,
    firstName: getFirstName(userName),
    lastName: getLastName(userName),
    role: role,
    roles: roles,
    districtPid: getFromToken('districtPid', sif),
    schoolPid: getFromToken('schoolPid', sif),
    districtId: getDistrictId(sif),
    schoolId: getSchoolId(sif),
    isDistrictAdmin: isDistrictAdmin(roles),
    isSchoolAdmin: isSchoolAdmin(roles),
    isLearner: isLearner(roles),
    isPreviewUser: isPreviewUser(tokeninfo),
    isEvaluator: isEvaluator(sif),
    logout: logoutPlatform
  };
  return userCtx;
};
/**
 * Read the user token and format its information
 *
 * @returns {object} structure provinding information on the user: role, school ref id, district ref id, etc.
 */


export var getUserCtx = function getUserCtx() {
  var envConfig = getConfigForCurrentEnv(); // Deleting your SIF should only happen when you are running AMP locally
  // and are not running the E2Es

  if (userContext) {
    return userContext;
  }

  if (envConfig.name === 'devCert') {
    var SIF_OBJECT = JSON.stringify({
      sif: {
        accessToken: process.env.SIF_TOKEN,
        tokeninfo: decodeSifBaseAsObject(process.env.SIF_TOKEN),
        idToken: decodeFromBase64IdToken(process.env.SIF_TOKEN)
      }
    });
    window.sessionStorage.setItem(ED_LOGIN_AUTH_KEY, SIF_OBJECT);
  }

  try {
    if (!isVanillaRoute()) {
      userContext = tokenProcess(getRawToken());
    } else {
      var rawToken = getRawToken() || getRawTokenFromLocalStorage();
      userContext = tokenProcess(rawToken);
    }
  } catch (error) {
    logErrorWithContext('FailedGetUserContext', [{
      key: 'errorMessage',
      value: error
    }]);
  }

  return userContext;
};
/**
 * If SIF and ONLY SIF changed, trigger a custom event
 * Represents custom user context update/change event
 *
 * @param {StorageEvent} event
 */

export var sifChanged = function sifChanged(event) {
  if (event.key === ED_LOGIN_AUTH_KEY) {
    clearUserCtx();
    var sifEvent = sifDecoder(event.newValue);
    var userName = getFromToken('userName', sifEvent);
    var roles = getAllRoles(sifEvent);
    var userCtxEvent = new CustomEvent(events.USER_CTX_UPDATE, {
      detail: {
        rawToken: rawSifParser(event.newValue),
        sif: sifEvent,
        userId: getFromToken('userId', sifEvent),
        userName: userName,
        firstName: getFirstName(userName),
        lastName: getLastName(userName),
        role: getRoleFromToken(sifEvent),
        roles: roles,
        isDistrictAdmin: isDistrictAdmin(roles),
        isSchoolAdmin: isSchoolAdmin(roles),
        isLearner: isLearner(roles),
        districtPid: getFromToken('districtPid', sifEvent),
        isEvaluator: isEvaluator(sifEvent)
      }
    });
    window.dispatchEvent(userCtxEvent);
  }
};
export function getPlatform() {
  var _ctx$rawToken, _ctx$rawToken$sif, _ctx$rawToken$sif$tok;

  var ctx = getUserCtx();
  return (ctx === null || ctx === void 0 ? void 0 : (_ctx$rawToken = ctx.rawToken) === null || _ctx$rawToken === void 0 ? void 0 : (_ctx$rawToken$sif = _ctx$rawToken.sif) === null || _ctx$rawToken$sif === void 0 ? void 0 : (_ctx$rawToken$sif$tok = _ctx$rawToken$sif.tokeninfo) === null || _ctx$rawToken$sif$tok === void 0 ? void 0 : _ctx$rawToken$sif$tok.PlatformId) || '';
}
export function getIdToken(ctx) {
  var _ctx$rawToken2, _ctx$rawToken2$sif;

  return ctx === null || ctx === void 0 ? void 0 : (_ctx$rawToken2 = ctx.rawToken) === null || _ctx$rawToken2 === void 0 ? void 0 : (_ctx$rawToken2$sif = _ctx$rawToken2.sif) === null || _ctx$rawToken2$sif === void 0 ? void 0 : _ctx$rawToken2$sif.idToken;
}
export function clientRedirect(newUrl) {
  window.location.assign(newUrl);
}
export function getLogoutRedirectUrl() {
  var platform = getPlatform();
  var platformId = platform.toLowerCase();
  var redirect = PLATFORM_REDIRECTS[platformId];

  if (!redirect) {
    return PLATFORM_REDIRECTS[ED_PLATFORM_CODE];
  }

  return redirect;
}
export function getAuthorizeLogoutURL(redirectUrl) {
  var ctx = getUserCtx();
  var idToken = getIdToken(ctx);
  var authorizeUrl = '/api/authorization/logout';
  var urlSearchParams = new URLSearchParams({
    id_token_hint: idToken,
    post_logout_redirect_uri: redirectUrl,
    state: '{}'
  });
  return "".concat(authorizeUrl, "?").concat(urlSearchParams.toString());
}
export function redirectToLogin(loginCallback) {
  var redirectUrl = getLogoutRedirectUrl();
  var logoutUrl = getAuthorizeLogoutURL(redirectUrl);

  if (loginCallback) {
    loginCallback();
  }

  clientRedirect(logoutUrl);
}