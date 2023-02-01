import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _MENU_TREES;

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

import getAvatarDropdown from './avatarDropDown';
import { ROLES } from '../constants';
import adminMenuTree from './adminMenuTree';
import adminMenuTreeDemo from './adminMenuTreeDemo';
import basalAdminMenuTree from './basalAdminMenuTree';
import studentMenuTree from './studentMenuTree';
import teacherMenuTree from './teacherMenuTree';
import teacherMenuTreeEval from './teacherMenuTreeEval';
export var MENU_TREES = (_MENU_TREES = {}, _defineProperty(_MENU_TREES, ROLES.ADMIN, adminMenuTree), _defineProperty(_MENU_TREES, ROLES.TEACHER, teacherMenuTree), _defineProperty(_MENU_TREES, ROLES.STUDENT, studentMenuTree), _MENU_TREES); // NOTE:  any new secondary nav items to be displayed under Demo entitlements should be added here

export var MENU_TREES_DEMO = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, MENU_TREES), _defineProperty({}, ROLES.ADMIN, _objectSpread({}, adminMenuTreeDemo))), _defineProperty({}, ROLES.TEACHER, _objectSpread({}, teacherMenuTree))), _defineProperty({}, ROLES.STUDENT, _objectSpread({}, studentMenuTree)));
export var MENU_TREES_EVAL = _objectSpread(_objectSpread({}, MENU_TREES), _defineProperty({}, ROLES.TEACHER, _objectSpread(_objectSpread({}, teacherMenuTreeEval), teacherMenuTree)));
export var getMenuConfigBasedOnUserRole = function getMenuConfigBasedOnUserRole(_ref) {
  var role = _ref.role,
      rawToken = _ref.rawToken,
      isDemoUser = _ref.isDemoUser,
      isLegacyPlatformUser = _ref.isLegacyPlatformUser,
      isPreviewUser = _ref.isPreviewUser,
      isEvaluator = _ref.isEvaluator,
      isSchoolAdmin = _ref.isSchoolAdmin,
      restrictSaImporting = _ref.restrictSaImporting,
      hasGoogleClassroomEnabled = _ref.hasGoogleClassroomEnabled;

  var filterForSa = function filterForSa(items) {
    return items.rosterDashboard.subMenu.filter(function (item) {
      return item.key === 'configuration' && isSchoolAdmin && restrictSaImporting ? null : item;
    });
  };

  basalAdminMenuTree.rosterDashboard.subMenu = filterForSa(basalAdminMenuTree);

  if (isLegacyPlatformUser) {
    // NOTE: Ensuring that TC and HMO users don't get Ed items in nav
    return {
      mainMenuTree: basalAdminMenuTree,
      avatarMenuTree: getAvatarDropdown({
        role: role,
        rawToken: rawToken
      })
    };
  }

  var mainMenu = MENU_TREES[role];

  if (isDemoUser) {
    mainMenu = MENU_TREES_DEMO[role];
  }

  if (isEvaluator) {
    mainMenu = MENU_TREES_EVAL[role];
  }

  return role ? {
    mainMenuTree: mainMenu,
    avatarMenuTree: getAvatarDropdown({
      role: role,
      rawToken: rawToken,
      isPreviewUser: isPreviewUser,
      hasGoogleClassroomEnabled: hasGoogleClassroomEnabled
    })
  } : {};
};