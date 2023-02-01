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

import { isEmpty } from 'lodash';
import { ED_MEDIA_TYPE } from '@hmhco/recently-viewed-api/src/utils/getOfflineAppLaunchType';
import { IREAD_STANDALONE_ID } from '@hmhco/product-constants/src/iRead';
import { TEACHER_ROLE, ADMIN_ROLES } from '@hmhco/amp-core/src/userContext/auth';
import { AMIRA_IDENTIFIER, INTEGRATION_TYPES, PROGRAM_TYPE_CURRICULUM } from '../constants';
export var getBookmarkedProgramFromPrograms = function getBookmarkedProgramFromPrograms(programId, programs) {
  var bookmarkedProgram = programs.find(function (program) {
    return program.identifier === programId;
  });
  return bookmarkedProgram || programs[0];
};
export var getSelectedProgram = function getSelectedProgram(_ref) {
  var bookmarkFetchError = _ref.bookmarkFetchError,
      currentProgramId = _ref.currentProgramId,
      filteredData = _ref.filteredData,
      isBookmarkLoading = _ref.isBookmarkLoading,
      programsLoading = _ref.programsLoading,
      programsError = _ref.programsError,
      additionals = _ref.additionals,
      additionalsError = _ref.additionalsError,
      additionalsLoading = _ref.additionalsLoading;

  if (bookmarkFetchError && !currentProgramId) {
    return filteredData === null || filteredData === void 0 ? void 0 : filteredData[0];
  }

  if (!isBookmarkLoading && filteredData && !programsLoading && !programsError && !additionalsLoading && !additionalsError) {
    return getBookmarkedProgramFromPrograms(currentProgramId, [].concat(_toConsumableArray(filteredData), _toConsumableArray(additionals.additionals)));
  }

  return undefined;
};
export var isAllowedProgram = function isAllowedProgram(program, iRole) {
  var _program$identifier;

  var allTypes = Array.isArray(program.type) ? program.type : [program.type]; // for teacher all programs other than Demo are ok

  if (iRole === TEACHER_ROLE) {
    return !allTypes.includes('Demo');
  }

  if (iRole === ADMIN_ROLES.ADMINISTRATOR && program.identifier === AMIRA_IDENTIFIER) {
    return true;
  } // program is ok as long as one type is curriculum or id is IRead


  return (program === null || program === void 0 ? void 0 : (_program$identifier = program.identifier) === null || _program$identifier === void 0 ? void 0 : _program$identifier.includes(IREAD_STANDALONE_ID)) || allTypes.some(function (type) {
    return type === PROGRAM_TYPE_CURRICULUM;
  });
};
export var checkIntegrationType = function checkIntegrationType(integration, type) {
  var _integration$type;

  return Boolean(integration === null || integration === void 0 ? void 0 : (_integration$type = integration.type) === null || _integration$type === void 0 ? void 0 : _integration$type.includes(type));
};
export var checkHasIRead = function checkHasIRead(integrations) {
  if (!Array.isArray(integrations)) {
    return false;
  }

  return integrations === null || integrations === void 0 ? void 0 : integrations.some(function (integration) {
    var found = integration.title.match(/iRead/i);
    return found && checkIntegrationType(integration, INTEGRATION_TYPES.I_READ);
  });
};
export var showStandardsAccordingToCorrelations = function showStandardsAccordingToCorrelations(detailsJson) {
  var correlations = detailsJson === null || detailsJson === void 0 ? void 0 : detailsJson.book;
  /* we will not show the standards entry if these specific conditions are met
  return true if either is not met, because we want to show the standards entry
   */

  return !(correlations && correlations.type === 'reviewer' && correlations.url && correlations.standards === 'false');
};
export var hasIntegrations = function hasIntegrations(program) {
  var _program$integration;

  return Boolean((program === null || program === void 0 ? void 0 : (_program$integration = program.integration) === null || _program$integration === void 0 ? void 0 : _program$integration.length) > 0);
};
export var hasProductCategories = function hasProductCategories(program) {
  return Boolean((program === null || program === void 0 ? void 0 : program.productCategory) && (program === null || program === void 0 ? void 0 : program.productCategory.length) > 0);
};
export var returnJustFirstIntegrationOfType = function returnJustFirstIntegrationOfType(type, integrations) {
  if (integrations.length === 0) return integrations;
  var solo = integrations.find(function (integration) {
    return integration === null || integration === void 0 ? void 0 : integration.type.includes(type);
  });
  return !solo ? integrations : [].concat(_toConsumableArray(integrations.filter(function (integration) {
    return !(integration === null || integration === void 0 ? void 0 : integration.type.includes(type));
  })), [solo]);
};
export var programHasLevelOneResources = function programHasLevelOneResources(program) {
  var _program$items, _program$items$item, _program$items$item$;

  var levelOneItems = !isEmpty(program) && (program === null || program === void 0 ? void 0 : (_program$items = program.items) === null || _program$items === void 0 ? void 0 : (_program$items$item = _program$items.item) === null || _program$items$item === void 0 ? void 0 : (_program$items$item$ = _program$items$item[0]) === null || _program$items$item$ === void 0 ? void 0 : _program$items$item$.item);
  return Boolean(levelOneItems && (levelOneItems === null || levelOneItems === void 0 ? void 0 : levelOneItems.length) > 0);
};
export var programDataSerialization = function programDataSerialization(program, programSubLevels) {
  var _programSubLevels$typ, _program$items2, _program$items2$item, _program$items2$item$, _program$items2$item$2, _program$items2$item$3, _program$items2$item$4, _program$items3, _program$items3$item, _program$items3$item$, _program$items3$item$2, _program$items4, _program$items4$item, _program$items4$item$, _program$items5, _program$items5$item, _program$items5$item$;

  return (program === null || program === void 0 ? void 0 : program.title) && (program === null || program === void 0 ? void 0 : program.title) !== 'Ed Demo' ? {
    programType: (programSubLevels === null || programSubLevels === void 0 ? void 0 : (_programSubLevels$typ = programSubLevels.type) === null || _programSubLevels$typ === void 0 ? void 0 : _programSubLevels$typ[0]) || (program === null || program === void 0 ? void 0 : (_program$items2 = program.items) === null || _program$items2 === void 0 ? void 0 : (_program$items2$item = _program$items2.item) === null || _program$items2$item === void 0 ? void 0 : (_program$items2$item$ = _program$items2$item[0]) === null || _program$items2$item$ === void 0 ? void 0 : (_program$items2$item$2 = _program$items2$item$.item) === null || _program$items2$item$2 === void 0 ? void 0 : (_program$items2$item$3 = _program$items2$item$2[0]) === null || _program$items2$item$3 === void 0 ? void 0 : (_program$items2$item$4 = _program$items2$item$3.type) === null || _program$items2$item$4 === void 0 ? void 0 : _program$items2$item$4[0]),
    showProgramPage: (program === null || program === void 0 ? void 0 : (_program$items3 = program.items) === null || _program$items3 === void 0 ? void 0 : (_program$items3$item = _program$items3.item) === null || _program$items3$item === void 0 ? void 0 : (_program$items3$item$ = _program$items3$item[0]) === null || _program$items3$item$ === void 0 ? void 0 : (_program$items3$item$2 = _program$items3$item$.item) === null || _program$items3$item$2 === void 0 ? void 0 : _program$items3$item$2.length) > 0,
    title: program === null || program === void 0 ? void 0 : program.title,
    levelLabelPlural: program === null || program === void 0 ? void 0 : (_program$items4 = program.items) === null || _program$items4 === void 0 ? void 0 : (_program$items4$item = _program$items4.item) === null || _program$items4$item === void 0 ? void 0 : (_program$items4$item$ = _program$items4$item[0]) === null || _program$items4$item$ === void 0 ? void 0 : _program$items4$item$.levelLabelPlural,
    hierarchy: program === null || program === void 0 ? void 0 : (_program$items5 = program.items) === null || _program$items5 === void 0 ? void 0 : (_program$items5$item = _program$items5.item) === null || _program$items5$item === void 0 ? void 0 : (_program$items5$item$ = _program$items5$item[0]) === null || _program$items5$item$ === void 0 ? void 0 : _program$items5$item$.hierarchy,
    productCategory: program === null || program === void 0 ? void 0 : program.productCategory,
    type: (program === null || program === void 0 ? void 0 : program.type) || [],
    integration: (program === null || program === void 0 ? void 0 : program.integration) || []
  } : {};
};
export var loadingDataCondition = function loadingDataCondition(programs, programData, filteredData, programsLoading, isBookmarkLoading, setLoadingSectionsCheck) {
  var expiredLicenseProgramData = (programData === null || programData === void 0 ? void 0 : programData.data) === '';

  if ((filteredData === null || filteredData === void 0 ? void 0 : filteredData.length) > 0 && !programsLoading && !expiredLicenseProgramData && filteredData !== '') {
    setLoadingSectionsCheck(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        filteredData: true,
        currentProgramData: true
      });
    });
  } else if ((filteredData === null || filteredData === void 0 ? void 0 : filteredData.length) === 0 && !programsLoading && !isBookmarkLoading && filteredData !== '' || (programs === null || programs === void 0 ? void 0 : programs.length) > 0 && filteredData === '' || expiredLicenseProgramData) {
    setLoadingSectionsCheck(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        filteredData: true,
        currentProgramData: true,
        bookmarkData: true
      });
    });
  }
};
export var shouldShowStandards = function shouldShowStandards(detailsJson, program) {
  // this will be short circuited to false if the program has no level one resources
  return programHasLevelOneResources(program) && showStandardsAccordingToCorrelations(detailsJson);
};
export var shouldShowConnectedSolutions = function shouldShowConnectedSolutions(program) {
  var integrations = program === null || program === void 0 ? void 0 : program.integration;

  if (isEmpty(program) || !integrations) {
    return false;
  }

  return integrations.filter(function (integration) {
    return (integration === null || integration === void 0 ? void 0 : integration.edition) === 'TE';
  }).length > 0;
};
export var hasCurriculumType = function hasCurriculumType(program) {
  var _program$type;

  return program === null || program === void 0 ? void 0 : (_program$type = program.type) === null || _program$type === void 0 ? void 0 : _program$type.includes(PROGRAM_TYPE_CURRICULUM);
};
export var programHasCurriculumType = function programHasCurriculumType(program) {
  return Boolean(hasCurriculumType(program));
};
export var programHasCurriculumData = function programHasCurriculumData(program) {
  var _program$items6, _program$items6$item, _program$items6$item$;

  return Array.isArray(program === null || program === void 0 ? void 0 : (_program$items6 = program.items) === null || _program$items6 === void 0 ? void 0 : (_program$items6$item = _program$items6.item) === null || _program$items6$item === void 0 ? void 0 : (_program$items6$item$ = _program$items6$item[0]) === null || _program$items6$item$ === void 0 ? void 0 : _program$items6$item$.item);
};
export var isTrueStandaloneProgram = function isTrueStandaloneProgram(program) {
  var validProgram = !isEmpty(program);
  return validProgram && !hasIntegrations(program) && !hasProductCategories(program) && !hasCurriculumType(program);
};
export var filterProgramsForRole = function filterProgramsForRole(programs, role) {
  // Save raw programs data that have "Curriculum"
  return programs.filter(function (program) {
    if (program.type) {
      if (isAllowedProgram(program, role)) {
        return program;
      }
    }

    return false;
  });
};
export var getProgramTitle = function getProgramTitle(filteredData, selectedProgram) {
  var _filteredData$find;

  return filteredData === null || filteredData === void 0 ? void 0 : (_filteredData$find = filteredData.find(function (program) {
    return program.identifier === selectedProgram.identifier;
  })) === null || _filteredData$find === void 0 ? void 0 : _filteredData$find.title;
};
export var buildResourceItem = function buildResourceItem(resourceItem, resourceId, hierarchy) {
  var _resourceItem$type, _resourceItem$type2, _resourceItem$type3;

  return {
    refId: resourceId,
    title: "".concat((resourceItem === null || resourceItem === void 0 ? void 0 : (_resourceItem$type = resourceItem.type) === null || _resourceItem$type === void 0 ? void 0 : _resourceItem$type[0].charAt(0).toUpperCase()) + (resourceItem === null || resourceItem === void 0 ? void 0 : (_resourceItem$type2 = resourceItem.type) === null || _resourceItem$type2 === void 0 ? void 0 : _resourceItem$type2[0].slice(1)), " ").concat(hierarchy, ": ").concat(resourceItem === null || resourceItem === void 0 ? void 0 : resourceItem.title),
    identifier: resourceId,
    productCategory: resourceItem === null || resourceItem === void 0 ? void 0 : (_resourceItem$type3 = resourceItem.type) === null || _resourceItem$type3 === void 0 ? void 0 : _resourceItem$type3[0],
    mediaType: ED_MEDIA_TYPE.EBOOK,
    item: [{
      hierarchy: hierarchy
    }]
  };
};
export var getRecentlyViewedProps = function getRecentlyViewedProps(_ref2) {
  var _resourceItem$type4;

  var resourceItem = _ref2.resourceItem,
      resourceId = _ref2.resourceId,
      hierarchy = _ref2.hierarchy,
      filteredData = _ref2.filteredData,
      selectedProgram = _ref2.selectedProgram,
      programId = _ref2.programId,
      env = _ref2.env,
      accessToken = _ref2.accessToken,
      userId = _ref2.userId;
  var item = buildResourceItem(resourceItem, resourceId, hierarchy);
  var programTitle = getProgramTitle(filteredData, selectedProgram);
  var programDetails = programId ? _defineProperty({}, programId, {
    key: []
  }) : {};
  var resource = {
    identifier: resourceId,
    refId: resourceId,
    productCategory: resourceItem === null || resourceItem === void 0 ? void 0 : (_resourceItem$type4 = resourceItem.type) === null || _resourceItem$type4 === void 0 ? void 0 : _resourceItem$type4[0],
    item: [{
      hierarchy: hierarchy
    }]
  };
  var carouselItems = [{
    studentEdition: {
      identifier: resourceId
    }
  }];
  return {
    env: env,
    accessToken: accessToken,
    userId: userId,
    item: item,
    programTitle: programTitle,
    iconTitle: 'readers',
    programId: selectedProgram === null || selectedProgram === void 0 ? void 0 : selectedProgram.identifier,
    programDetails: programDetails,
    resource: resource,
    carouselItems: carouselItems
  };
};