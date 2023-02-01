import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

import { matchPath } from 'react-router-dom';
export var isMenuItemActive = function isMenuItemActive(_ref) {
  var pathname = _ref.pathname,
      route = _ref.route,
      _ref$isActiveFor = _ref.isActiveFor,
      isActiveFor = _ref$isActiveFor === void 0 ? [] : _ref$isActiveFor;
  var routesMatch = [route].concat(_toConsumableArray(isActiveFor));
  var exactMatch = matchPath(pathname, {
    path: routesMatch,
    exact: true,
    strict: false
  });
  var match = matchPath(pathname, {
    path: "".concat(route, "/:slug"),
    exact: false,
    strict: false
  });
  return Boolean(match || exactMatch);
};
export var findActiveMenu = function findActiveMenu(_ref2) {
  var pathname = _ref2.pathname,
      menuItems = _ref2.menuItems;
  var primaryMenu;
  var secondaryMenu; // eslint-disable-next-line no-restricted-syntax

  var _iterator = _createForOfIteratorHelper(menuItems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var menuItem = _step.value;
      var isPrimaryMatch = isMenuItemActive(_objectSpread({
        pathname: pathname
      }, menuItem));
      var subMenu = menuItem.subMenu || [];
      var secondaryMenuMatch = subMenu.find(function (item) {
        return isMenuItemActive(_objectSpread({
          pathname: pathname
        }, item));
      });

      if (isPrimaryMatch || Boolean(secondaryMenuMatch)) {
        primaryMenu = menuItem;
        secondaryMenu = secondaryMenuMatch;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    primaryMenu: primaryMenu,
    secondaryMenu: secondaryMenu
  };
};