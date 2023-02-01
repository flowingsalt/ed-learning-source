import { createSelector } from 'reselect';
var USER_ROLES = Object.freeze({
  ADMINISTRATOR: 'Administrator',
  PLATFORM_ADMINISTRATOR: 'Platform Administrator',
  DISTRICT_ADMINISTRATOR: 'District Administrator',
  SCHOOL_ADMINISTRATOR: 'School Administrator',
  PROCTOR: 'Proctor',
  LEARNER: 'Learner',
  INSTRUCTOR: 'Instructor'
});
export var SCHOOL_CATEGORIES = Object.freeze({
  PRIVATE_SCHOOL: 'private'
});
export var getUser = function getUser(state) {
  return state.user;
};
export var getSifToken = createSelector(getUser, function (user) {
  if (!user || !user.sif) {
    return null;
  }

  return user.sif.accessToken || null;
});
export var getCurrentUserContext = createSelector(getUser, function (currentUser) {
  if (!currentUser) {
    return null;
  }

  return currentUser.userContext;
});
export var getCurrentUserId = createSelector(getCurrentUserContext, function (userContext) {
  if (!userContext) {
    return null;
  }

  return userContext.uid;
});
export var getCurrentUserSchoolDistrict = createSelector(getCurrentUserContext, function (currentUserContect) {
  if (!currentUserContect) {
    return null;
  }

  return currentUserContect.district;
});
export var getIsPrivateSchoolUser = createSelector(getCurrentUserContext, function (currentUserContect) {
  if (!currentUserContect) {
    return null;
  }

  return currentUserContect.schoolCategory === SCHOOL_CATEGORIES.PRIVATE_SCHOOL;
});
export var getCurrentUserRoles = createSelector(getCurrentUserContext, function (currentUserContect) {
  if (!currentUserContect || !currentUserContect.roles) {
    return [];
  }

  return currentUserContect.roles;
});
export var getIsPlatformAdmin = createSelector(getCurrentUserRoles, function (currentUserRoles) {
  return currentUserRoles.includes(USER_ROLES.PLATFORM_ADMINISTRATOR);
});
export var getIsDistrictAdmin = createSelector(getCurrentUserRoles, function (currentUserRoles) {
  return currentUserRoles.includes(USER_ROLES.DISTRICT_ADMINISTRATOR);
});
export var getIsSchoolAdmin = createSelector(getCurrentUserRoles, function (currentUserRoles) {
  return currentUserRoles.includes(USER_ROLES.SCHOOL_ADMINISTRATOR);
});
export var getIsProctor = createSelector(getCurrentUserRoles, function (currentUserRoles) {
  return currentUserRoles.includes(USER_ROLES.PROCTOR);
});
export var getIsLearner = createSelector(getCurrentUserRoles, function (currentUserRoles) {
  return currentUserRoles.includes(USER_ROLES.LEARNER);
});
export var getIsInstructor = createSelector(getCurrentUserRoles, function (currentUserRoles) {
  return currentUserRoles.includes(USER_ROLES.INSTRUCTOR);
});
export var getCurrentUserSchoolRefId = createSelector(getCurrentUserContext, function (userContext) {
  if (!userContext) {
    return null;
  }

  return userContext.school;
});