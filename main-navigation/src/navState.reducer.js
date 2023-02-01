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

var DEFAULT_ROUTE = 'dashboard';
export var initialState = {
  avatarMenu: {},
  isMainMobileMenuOpen: false,
  // on menu click component should be able to close menu
  isAvatarMobileMenuOpen: false,
  // on menu click component should be able to close menu
  currentLocale: 'en-US',
  menuType: 'desktop',
  animationType: 'top',
  isRoleSwitcherOpen: false,
  IsLinkedAccountsOpen: false
};

var getDefaultHomeValues = function getDefaultHomeValues(menuTree) {
  var firstMenu = Object.values(menuTree)[0];
  var subMenu = firstMenu.subMenu,
      key = firstMenu.key;
  var homeRoute = subMenu.length ? subMenu[0].route : firstMenu.route;
  return {
    homeRoute: homeRoute || DEFAULT_ROUTE,
    activeMenu: key || DEFAULT_ROUTE
  };
};

export var getInitialState = function getInitialState(stateValues) {
  var menuTree = stateValues.menuTree;
  return _objectSpread(_objectSpread(_objectSpread({}, initialState), stateValues), getDefaultHomeValues(menuTree));
};
export var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'resetActiveMenu':
      return _objectSpread(_objectSpread({}, state), getDefaultHomeValues(state.menuTree));

    case 'resetAvatarMenu':
      return _objectSpread(_objectSpread({}, state), {}, {
        avatarMenu: action.avatarMenu
      });

    case 'setActiveMenu':
      return _objectSpread(_objectSpread({}, state), {}, {
        activeMenu: action.value
      });

    case 'toggleMainMobileMenu':
      return _objectSpread(_objectSpread({}, state), {}, {
        isMainMobileMenuOpen: !state.isMainMobileMenuOpen,
        isAvatarMobileMenuOpen: false
      });

    case 'toggleAvatarMobileMenu':
      return _objectSpread(_objectSpread({}, state), {}, {
        isAvatarMobileMenuOpen: !state.isAvatarMobileMenuOpen,
        isMainMobileMenuOpen: false
      });

    case 'setMobileMenuAnimation':
      return _objectSpread(_objectSpread({}, state), {}, {
        animationType: action.animationType
      });

    case 'setMenuType':
      return _objectSpread(_objectSpread({}, state), {}, {
        menuType: action.menuType
      });

    case 'closeActiveMenus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isMainMobileMenuOpen: false,
          isAvatarMobileMenuOpen: false
        });
      }

    case 'setIsRoleSwitcherOpen':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isRoleSwitcherOpen: action.open
        });
      }

    case 'setIsLinkedAccountsOpen':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          IsLinkedAccountsOpen: action.open
        });
      }

    default:
      return state;
  }
};