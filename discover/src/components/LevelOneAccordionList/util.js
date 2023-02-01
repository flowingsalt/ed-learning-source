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

import { ADMIN, TEACHER } from '../../constants';
export var capitalize = function capitalize(str) {
  return str && str[0].toUpperCase() + str.slice(1);
};
export var isLevelThreeData = function isLevelThreeData(levelDetails) {
  var _levelDetails$item, _levelDetails$item2, _levelDetails$item2$, _levelDetails$item2$$, _levelDetails$item3, _levelDetails$item3$, _levelDetails$item3$$;

  return (levelDetails === null || levelDetails === void 0 ? void 0 : (_levelDetails$item = levelDetails.item) === null || _levelDetails$item === void 0 ? void 0 : _levelDetails$item.length) > 0 && (levelDetails === null || levelDetails === void 0 ? void 0 : (_levelDetails$item2 = levelDetails.item) === null || _levelDetails$item2 === void 0 ? void 0 : (_levelDetails$item2$ = _levelDetails$item2[0]) === null || _levelDetails$item2$ === void 0 ? void 0 : (_levelDetails$item2$$ = _levelDetails$item2$.item) === null || _levelDetails$item2$$ === void 0 ? void 0 : _levelDetails$item2$$.length) > 0 && (levelDetails === null || levelDetails === void 0 ? void 0 : (_levelDetails$item3 = levelDetails.item) === null || _levelDetails$item3 === void 0 ? void 0 : (_levelDetails$item3$ = _levelDetails$item3[0]) === null || _levelDetails$item3$ === void 0 ? void 0 : (_levelDetails$item3$$ = _levelDetails$item3$.item[0]) === null || _levelDetails$item3$$ === void 0 ? void 0 : _levelDetails$item3$$.part) !== 'true';
};
export var parseSessionStorage = function parseSessionStorage(sessionStorage) {
  var _sessionStorage$expan;

  return JSON.parse((_sessionStorage$expan = sessionStorage === null || sessionStorage === void 0 ? void 0 : sessionStorage.expandedElements) !== null && _sessionStorage$expan !== void 0 ? _sessionStorage$expan : '[]');
};

var filterLevelOneSectionsOrLessons = function filterLevelOneSectionsOrLessons(levels, role, isConnectedPartnerFeatureFlagActive) {
  return levels === null || levels === void 0 ? void 0 : levels.map(function (level) {
    if (role === TEACHER) {
      if (level.coreResourceCount === '0' && level.integratedResourceCount === '0') {
        return _objectSpread(_objectSpread({}, level), {}, {
          hasResources: false
        });
      }

      if (level.coreResourceCount === '0' && !isConnectedPartnerFeatureFlagActive) {
        return _objectSpread(_objectSpread({}, level), {}, {
          hasResources: false
        });
      }
    }

    if (role === ADMIN) {
      if (level.coreResourceCount === '0') {
        return _objectSpread(_objectSpread({}, level), {}, {
          hasResources: false
        });
      }
    }

    return _objectSpread(_objectSpread({}, level), {}, {
      hasResources: true
    });
  });
};

var filterLevelTwoLessons = function filterLevelTwoLessons(filteredLevelDetails, role, isConnectedPartnerFeatureFlagActive) {
  return filteredLevelDetails.map(function (section) {
    var filteredLessons = filterLevelOneSectionsOrLessons(section.item, role, isConnectedPartnerFeatureFlagActive);
    return _objectSpread(_objectSpread({}, section), {}, {
      item: filteredLessons
    });
  });
};

export var markEmptySectionsAndLessons = function markEmptySectionsAndLessons(levelDetails, role, isLevelThree, isConnectedPartnerFeatureFlagActive) {
  var filteredLevelDetails = filterLevelOneSectionsOrLessons(levelDetails, role, isConnectedPartnerFeatureFlagActive);

  if (isLevelThree) {
    filteredLevelDetails = filterLevelTwoLessons(filteredLevelDetails, role, isConnectedPartnerFeatureFlagActive);
  }

  return filteredLevelDetails;
};