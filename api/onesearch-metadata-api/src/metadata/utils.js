/* eslint-disable import/prefer-default-export */
export var queryString = function queryString(programId, module, lessonNumber, searchQuery) {
  var sortBy = searchQuery === '' || searchQuery === undefined ? '' : 'sort:relevance';

  if (lessonNumber !== undefined) {
    return "manifestId:".concat(programId, " module:").concat(module, " week:").concat(lessonNumber, " ").concat(sortBy);
  }

  if (module !== undefined) {
    return "manifestId:".concat(programId, " module:").concat(module, " ").concat(sortBy);
  }

  return "manifestId:".concat(programId, " ").concat(sortBy);
};
export var buildCacheKey = function buildCacheKey() {
  var getFilters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var searchQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var lexileFilters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var standardId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var productCategory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var standardSetId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var cacheString = 'GET';

  if (getFilters) {
    cacheString += '_FILTERS_FOR';
  }

  cacheString += '_RESOURCES';

  if (searchQuery) {
    cacheString += '_BY_KEYWORD';
  }

  if (standardId) {
    cacheString += '_BY_STANDARD_ID';
  }

  if (productCategory) {
    cacheString += '_BY_PRODUCT_CATEGORY';
  }

  if (standardSetId) {
    cacheString += '_BY_STANDARD_SET_ID';
  }

  if (filters.length > 0 || lexileFilters.length > 0) {
    cacheString += '_FILTERED';
  }

  return cacheString;
};
export var buildAbGuidCacheKey = function buildAbGuidCacheKey(getFilters, filters, lexileFilters) {
  var cacheString = 'GET_ABGUID';

  if (getFilters) {
    cacheString += '_FILTERS_FOR';
  }

  cacheString += '_RESOURCES';

  if (filters.length > 0 || lexileFilters.length > 0) {
    cacheString += '_FILTERED';
  }

  return cacheString;
};

var buildCidString = function buildCidString(parentCidArray, cIdArray, integrationContextIdArray) {
  var parentStrings = parentCidArray.map(function (cid) {
    return "parentContextId:".concat(cid);
  });
  var contextIdStrings = cIdArray.map(function (cid) {
    return "contextId:".concat(cid);
  });
  var integrationContext = integrationContextIdArray.map(function (cid) {
    return "integrationContext:".concat(cid);
  });
  var allCidsArray = parentStrings.concat(contextIdStrings).concat(integrationContext);

  if (allCidsArray.length === 0) {
    return '';
  }

  return allCidsArray.length === 1 ? allCidsArray[0] : "(".concat(allCidsArray.join(' OR '), ")");
};

var quoteMultiWords = function quoteMultiWords(string) {
  return string.indexOf(' ') > -1 ? "\"".concat(string, "\"") : string;
};
/**
 *
 * @param {object} filterOption { key: 'role', values: [{ key: 'Instructor' }, { value: 'Learner' }] }
 * @returns {string} '(role:Instructor OR role:Learner)'
 *
 * @param {object} filterOption { key: 'mediaType', values: [{ key: 'eBook' }] }
 * @returns {string} 'mediaType:eBook'
 *
 */


var parseFilterOption = function parseFilterOption(filterOption) {
  var _filterOption$values;

  var multiFilterString = (filterOption === null || filterOption === void 0 ? void 0 : (_filterOption$values = filterOption.values) === null || _filterOption$values === void 0 ? void 0 : _filterOption$values.map(function (_ref) {
    var value = _ref.value,
        key = _ref.key;
    return "".concat(filterOption.key, ":").concat(quoteMultiWords(value || key));
  })) || '';
  return multiFilterString.length === 1 ? "".concat(multiFilterString[0]) : "(".concat(multiFilterString.join(' OR '), ")");
};
/**
 *
 * @param {array} filters [
 * { key: 'role', values: [{ key: 'Instructor' }, { key: 'Learner' }] },
 * { key: 'mediaType', values: [{ key: 'eBook' }] },
 * { key: 'genre', values: [{ value: 'Fiction' }, { value: 'Media' }] },
 * ]
 * @returns {string} '(role:Instructor OR role:Learner) mediaType:eBook (genre:Fiction OR genre:Media)'
 *
 */


var buildFilterString = function buildFilterString(filters) {
  var filterString = '';

  if (filters.length === 0) {
    return filterString;
  }

  filters.forEach(function (filterOption) {
    var filterOptionString = parseFilterOption(filterOption);
    filterString += filterString.length > 0 ? " ".concat(filterOptionString) : "".concat(filterOptionString);
  });
  return filterString;
};

var buildLexileString = function buildLexileString(filters, lexileFilters) {
  var lexileText = '';

  if (lexileFilters.length === 0) {
    return lexileText;
  }

  lexileText = "(textComplexity GE ".concat(lexileFilters[0], ") (textComplexity LE ").concat(lexileFilters[1], ")");

  if (filters.length > 0) {
    lexileText = " ".concat(lexileText);
  }

  return lexileText;
};

var buildFiltersQuery = function buildFiltersQuery(filters, lexileFilters) {
  var filterString = buildFilterString(filters);
  var lexileString = buildLexileString(filters, lexileFilters);
  return "".concat(filterString).concat(lexileString);
};

var getProgramIdString = function getProgramIdString() {
  var programId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return programId.length > 0 ? "programId:".concat(programId) : '';
};

var buildStandardIdQuery = function buildStandardIdQuery(standardId) {
  return standardId.length > 0 ? "parentGuid:".concat(standardId) : '';
};

var buildProductCategoryQuery = function buildProductCategoryQuery(productCategory) {
  return (productCategory === null || productCategory === void 0 ? void 0 : productCategory.length) > 0 ? "productCategory:".concat(productCategory) : '';
};

var buildStandardSetIdQuery = function buildStandardSetIdQuery(standardSetId) {
  return standardSetId.length > 0 ? "standardSet:".concat(standardSetId, ".xml") : '';
};

var buildSearchQuery = function buildSearchQuery(query) {
  return (query === null || query === void 0 ? void 0 : query.length) > 0 ? "".concat(query, " sort:relevance") : query;
};

var buildAbGuidQuery = function buildAbGuidQuery(abGuid) {
  return (abGuid === null || abGuid === void 0 ? void 0 : abGuid.length) > 0 ? "abGuid:".concat(abGuid) : '';
};

var buildDisciplineCodeQuery = function buildDisciplineCodeQuery(disciplineCode) {
  return (disciplineCode === null || disciplineCode === void 0 ? void 0 : disciplineCode.length) > 0 ? "disciplineCode:".concat(disciplineCode) : '';
};

export var buildOneSearchQuery = function buildOneSearchQuery(queryConfig) {
  var _queryConfig$programI = queryConfig.programId,
      programId = _queryConfig$programI === void 0 ? '' : _queryConfig$programI,
      _queryConfig$searchQu = queryConfig.searchQuery,
      searchQuery = _queryConfig$searchQu === void 0 ? '' : _queryConfig$searchQu,
      _queryConfig$parentCo = queryConfig.parentContextIds,
      parentContextIds = _queryConfig$parentCo === void 0 ? [] : _queryConfig$parentCo,
      _queryConfig$contextI = queryConfig.contextIds,
      contextIds = _queryConfig$contextI === void 0 ? [] : _queryConfig$contextI,
      _queryConfig$integrat = queryConfig.integrationContextIds,
      integrationContextIds = _queryConfig$integrat === void 0 ? [] : _queryConfig$integrat,
      _queryConfig$filters = queryConfig.filters,
      filters = _queryConfig$filters === void 0 ? [] : _queryConfig$filters,
      _queryConfig$lexileFi = queryConfig.lexileFilters,
      lexileFilters = _queryConfig$lexileFi === void 0 ? [] : _queryConfig$lexileFi,
      _queryConfig$standard = queryConfig.standardId,
      standardId = _queryConfig$standard === void 0 ? '' : _queryConfig$standard,
      _queryConfig$productC = queryConfig.productCategory,
      productCategory = _queryConfig$productC === void 0 ? '' : _queryConfig$productC,
      _queryConfig$standard2 = queryConfig.standardSetId,
      standardSetId = _queryConfig$standard2 === void 0 ? '' : _queryConfig$standard2,
      _queryConfig$abGuid = queryConfig.abGuid,
      abGuid = _queryConfig$abGuid === void 0 ? '' : _queryConfig$abGuid,
      _queryConfig$discipli = queryConfig.disciplineCode,
      disciplineCode = _queryConfig$discipli === void 0 ? '' : _queryConfig$discipli;
  var qString = '';
  var qList = [getProgramIdString(programId), buildCidString(parentContextIds, contextIds, integrationContextIds), buildSearchQuery(searchQuery), buildFiltersQuery(filters, lexileFilters), buildStandardIdQuery(standardId), buildProductCategoryQuery(productCategory), buildStandardSetIdQuery(standardSetId), buildAbGuidQuery(abGuid), buildDisciplineCodeQuery(disciplineCode)];
  qList.forEach(function (query) {
    if (query.length > 0) {
      qString += qString.length > 0 ? " ".concat(query) : query;
    }
  });
  return qString;
};