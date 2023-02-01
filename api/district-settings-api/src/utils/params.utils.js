import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import { DMPS_CONTEXTS, TARGETS, ROLES, SETTINGS_RESTRICTIONS_SET, SETTINGS_VALUES_QUERY, SETTINGS_VALUES_SET } from '../constants';
export var getTargetForOrgFromUserContext = function getTargetForOrgFromUserContext() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      isDistrictAdmin = _ref.isDistrictAdmin,
      isSchoolAdmin = _ref.isSchoolAdmin,
      rawToken = _ref.rawToken;

  if (!rawToken) {
    return undefined;
  }

  if (isDistrictAdmin) {
    return {
      type: TARGETS.DISTRICT,
      id: rawToken.sif.tokeninfo.dist_refid
    };
  }

  if (isSchoolAdmin) {
    return {
      type: TARGETS.SCHOOL,
      id: rawToken.sif.tokeninfo.school_refid
    };
  }

  return undefined;
};
export var getRoleTargetTypeFromUserContext = function getRoleTargetTypeFromUserContext() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      role = _ref2.role,
      isDistrictAdmin = _ref2.isDistrictAdmin,
      isSchoolAdmin = _ref2.isSchoolAdmin;

  switch (role) {
    case ROLES.ADMIN:
      if (isDistrictAdmin) {
        return TARGETS.DISTRICT_ADMIN;
      }

      if (isSchoolAdmin) {
        return TARGETS.SCHOOL_ADMIN;
      }

      return undefined;

    case ROLES.STUDENT:
      return TARGETS.STUDENT;

    case ROLES.TEACHER:
      return TARGETS.TEACHER;

    default:
      return undefined;
  }
};
export var getTargetForRoleFromUserContext = function getTargetForRoleFromUserContext(userContext) {
  if (!userContext) {
    return undefined;
  }

  return {
    type: getRoleTargetTypeFromUserContext(userContext),
    id: userContext.userId
  };
};
export var createTarget = function createTarget() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$context = _ref3.context,
      context = _ref3$context === void 0 ? DMPS_CONTEXTS.ROLE : _ref3$context,
      userContext = _ref3.userContext;

  if (!userContext) {
    return undefined;
  }

  return context === DMPS_CONTEXTS.ORG ? getTargetForOrgFromUserContext(userContext) : getTargetForRoleFromUserContext(userContext);
};
export var batchSettingsParams = function batchSettingsParams() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref4.context,
      userContext = _ref4.userContext,
      _ref4$settings = _ref4.settings,
      settings = _ref4$settings === void 0 ? [] : _ref4$settings,
      method = _ref4.method,
      studentIds = _ref4.studentIds;

  if ((studentIds === null || studentIds === void 0 ? void 0 : studentIds.length) && method === SETTINGS_VALUES_QUERY) {
    return {
      ops: studentIds === null || studentIds === void 0 ? void 0 : studentIds.map(function (studentId) {
        return {
          method: method,
          args: {
            target: {
              id: studentId,
              type: 'student'
            },
            setting: 'ed.brainarcade.mode'
          }
        };
      })
    };
  }

  if ((studentIds === null || studentIds === void 0 ? void 0 : studentIds.length) && method === SETTINGS_VALUES_SET) {
    return {
      ops: studentIds === null || studentIds === void 0 ? void 0 : studentIds.map(function (studentId, index) {
        return {
          method: method,
          args: {
            target: {
              id: studentId,
              type: 'student'
            },
            setting: Object.keys(settings[index])[0],
            value: Object.values(settings[index])[0]
          }
        };
      })
    };
  }

  return {
    ops: settings.map(function (setting) {
      var target = createTarget({
        context: context,
        userContext: userContext
      });
      var isSavingMethod = method === SETTINGS_RESTRICTIONS_SET;
      var defaultValue = isSavingMethod ? Object.values(setting)[0] : undefined;

      switch (method) {
        case SETTINGS_VALUES_SET:
          return {
            method: method,
            args: {
              target: target,
              setting: Object.keys(setting)[0],
              value: Object.values(setting)[0]
            }
          };

        case SETTINGS_RESTRICTIONS_SET:
          return {
            method: method,
            args: _objectSpread({
              target: target,
              setting: Object.keys(setting)[0]
            }, typeof defaultValue !== 'undefined' ? {
              defaultValue: defaultValue
            } : null)
          };

        default:
          return {
            method: method,
            args: {
              target: target,
              setting: setting
            }
          };
      }
    })
  };
};