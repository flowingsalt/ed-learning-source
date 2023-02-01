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

import updatesIcon from '@ed/baseline/icons/cts/update-sm.svg';
import switchRoleIcon from '@ed/baseline/icons/cts/sm.svg';
import settingsIcon from '@ed/baseline/icons/cts/user-lg.svg';
import linkedAccountsIcon from '@ed/baseline/icons/cts/roster-md.svg';
import { ROLES } from '../constants';
export var PREVIEW_MENU_ITEM = {
  previewToggle: {
    id: 0,
    key: 'previewToggle',
    menuName: 'topNav.avatarMenu.switchRoles',
    openInNewWindow: false,
    subMenu: [],
    icon: switchRoleIcon
  }
};
export var LOGOUT_MENU = {
  logout: {
    id: 1,
    key: 'logout',
    menuName: 'topNav.avatarMenu.logout',
    openInNewWindow: false,
    subMenu: []
  }
};
export var USER_PROFILE = {
  userProfile: {
    id: 2,
    key: 'userProfile',
    menuName: 'topNav.avatarMenu.userProfile',
    openInNewWindow: false,
    subMenu: [],
    icon: settingsIcon
  }
};
export var ED_UPDATES_MENU = {
  edUpdates: {
    id: 3,
    key: 'edUpdates',
    menuName: 'topNav.avatarMenu.edUpdates',
    route: '/ed-updates',
    openInNewWindow: false,
    subMenu: [],
    icon: updatesIcon
  }
};
export var LINKED_ACCOUNTS_MENU = {
  linkedAccounts: {
    id: 4,
    key: 'linkedAccounts',
    menuName: 'topNav.avatarMenu.linkedAccounts',
    openInNewWindow: false,
    subMenu: [],
    icon: linkedAccountsIcon
  }
};
export var LEADER_MENU = {
  edUpdates: {
    id: 4,
    key: 'edUpdates',
    menuName: 'topNav.avatarMenu.edUpdates',
    route: '/ed-updates',
    openInNewWindow: false,
    subMenu: [],
    icon: updatesIcon
  }
};
export var STUDENT_MENU = {
  locale: {
    id: 2,
    key: 'localeSwitch',
    menuName: 'topNav.avatarMenu.localeSwitch',
    openInNewWindow: false,
    subMenu: []
  },
  familyRoom: {
    id: 3,
    key: 'familyRoom',
    menuName: 'topNav.avatarMenu.familyRoom',
    route: '/FamilyRoom',
    openInNewWindow: false,
    subMenu: []
  }
};
export var getTeacherMenu = function getTeacherMenu(isPreviewUser, hasGoogleClassroomEnabled) {
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, ED_UPDATES_MENU), isPreviewUser ? PREVIEW_MENU_ITEM : {}), USER_PROFILE), hasGoogleClassroomEnabled ? LINKED_ACCOUNTS_MENU : {});
};
export var getAdminAvatarMenu = function getAdminAvatarMenu() {
  return _objectSpread({}, LEADER_MENU);
};
export var getRoleBasedMenuItems = function getRoleBasedMenuItems(_ref) {
  var role = _ref.role,
      isPreviewUser = _ref.isPreviewUser,
      hasGoogleClassroomEnabled = _ref.hasGoogleClassroomEnabled;

  switch (role) {
    case ROLES.ADMIN:
      return getAdminAvatarMenu();

    case ROLES.TEACHER:
      return getTeacherMenu(isPreviewUser, hasGoogleClassroomEnabled);

    case ROLES.STUDENT:
      return isPreviewUser ? _objectSpread(_objectSpread({}, PREVIEW_MENU_ITEM), STUDENT_MENU) : STUDENT_MENU;

    default:
      return null;
  }
};

var getAvatarDropdown = function getAvatarDropdown(userContext) {
  return _objectSpread(_objectSpread({}, getRoleBasedMenuItems(userContext)), LOGOUT_MENU);
};

export default getAvatarDropdown;