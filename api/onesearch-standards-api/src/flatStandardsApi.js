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

import { oneSearchCancelable } from '@hmhco/onesearch-api/src/http/oneSearchCancelable';
import { SHORT_SESSION } from '@hmhco/cache-expiration/src/cacheExpirationValues';
import { GET_STANDARD_SETS_FOR_PROGRAM } from '@hmhco/cache-api-helper/src/actionsAndCacheKeyValues';
import { buildOneSearchQuery } from '@hmhco/onesearch-metadata-api/src/metadata/utils';
export var getStandardsUrl = function getStandardsUrl(config) {
  var programId = config.programId,
      fileName = config.fileName,
      standardId = config.standardId,
      topicId = config.topicId;

  if (!programId) {
    throw new Error('"programId" must be defined');
  }

  var uri = "organisations/programs/".concat(programId, "/standardsets");

  if (fileName) {
    uri += "/".concat(fileName);
  }

  if (standardId !== undefined && topicId !== undefined) {
    throw new Error('both "standardId" and "topic" were passed, only either is accepted');
  }

  uri += standardId || topicId ? '/standards' : '';

  if (standardId) {
    uri += "/".concat(standardId);
  }

  if (topicId) {
    uri += "/topics/".concat(topicId);
  }

  return uri;
};
export var makeQuery = function makeQuery(filters, lexileFilters) {
  var query = buildOneSearchQuery({
    filters: filters,
    lexileFilters: lexileFilters
  });
  return {
    query: encodeURIComponent(query)
  };
};
export var buildFetchConfig = function buildFetchConfig(fetchParams) {
  var programId = fetchParams.programId,
      fileName = fetchParams.fileName,
      standardId = fetchParams.standardId,
      topicId = fetchParams.topicId,
      _fetchParams$filters = fetchParams.filters,
      filters = _fetchParams$filters === void 0 ? [] : _fetchParams$filters,
      _fetchParams$lexileFi = fetchParams.lexileFilters,
      lexileFilters = _fetchParams$lexileFi === void 0 ? [] : _fetchParams$lexileFi,
      _fetchParams$config = fetchParams.config,
      config = _fetchParams$config === void 0 ? {} : _fetchParams$config,
      hasIntegrations = fetchParams.hasIntegrations;
  var fetchConfig = {
    endpoint: getStandardsUrl({
      programId: programId,
      fileName: fileName,
      standardId: standardId,
      topicId: topicId
    }),
    maxAge: SHORT_SESSION,
    config: config
  };

  if (filters.length > 0 || lexileFilters.length > 0) {
    fetchConfig.queryParams = makeQuery(filters, lexileFilters);
  }

  if (hasIntegrations) {
    fetchConfig = _objectSpread(_objectSpread({}, fetchConfig), {
      queryParams: _objectSpread(_objectSpread({}, fetchConfig.queryParams), {}, {
        showIntegratedResources: hasIntegrations
      })
    });
  }

  return fetchConfig;
};
export default (function () {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _oneSearchCancelable = oneSearchCancelable({
    pactConfig: pactConfig
  }),
      fetchData = _oneSearchCancelable.fetchData,
      cancel = _oneSearchCancelable.cancel;

  return {
    getStandardSetsForProgram: function getStandardSetsForProgram(programId) {
      var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return fetchData({
        endpoint: getStandardsUrl({
          programId: programId
        }),
        queryParams: queryParams,
        maxAge: SHORT_SESSION,
        cacheKey: GET_STANDARD_SETS_FOR_PROGRAM
      });
    },
    getStandardSetsByFileName: function getStandardSetsByFileName(apiConfig) {
      var programId = apiConfig.programId,
          fileName = apiConfig.fileName,
          _apiConfig$filters = apiConfig.filters,
          filters = _apiConfig$filters === void 0 ? [] : _apiConfig$filters,
          _apiConfig$lexileFilt = apiConfig.lexileFilters,
          lexileFilters = _apiConfig$lexileFilt === void 0 ? [] : _apiConfig$lexileFilt,
          _apiConfig$config = apiConfig.config,
          config = _apiConfig$config === void 0 ? {} : _apiConfig$config,
          hasIntegrations = apiConfig.hasIntegrations;

      if (fileName === undefined) {
        throw new ReferenceError('"fileName" is undefined');
      }

      var fetchConfig = buildFetchConfig({
        programId: programId,
        fileName: fileName,
        filters: filters,
        lexileFilters: lexileFilters,
        config: config,
        hasIntegrations: hasIntegrations
      });
      return fetchData(fetchConfig);
    },
    getStandardSetsById: function getStandardSetsById(apiConfig) {
      var programId = apiConfig.programId,
          fileName = apiConfig.fileName,
          standardId = apiConfig.standardId,
          _apiConfig$filters2 = apiConfig.filters,
          filters = _apiConfig$filters2 === void 0 ? [] : _apiConfig$filters2,
          _apiConfig$lexileFilt2 = apiConfig.lexileFilters,
          lexileFilters = _apiConfig$lexileFilt2 === void 0 ? [] : _apiConfig$lexileFilt2,
          _apiConfig$config2 = apiConfig.config,
          config = _apiConfig$config2 === void 0 ? {} : _apiConfig$config2,
          hasIntegrations = apiConfig.hasIntegrations;

      if (fileName === undefined || standardId === undefined) {
        throw new ReferenceError('"fileName" or "standardId" is undefined');
      }

      var fetchConfig = buildFetchConfig({
        programId: programId,
        fileName: fileName,
        standardId: standardId,
        filters: filters,
        lexileFilters: lexileFilters,
        config: config,
        hasIntegrations: hasIntegrations
      });
      return fetchData(fetchConfig);
    },
    getTopicsByTopicId: function getTopicsByTopicId(apiConfig) {
      var programId = apiConfig.programId,
          fileName = apiConfig.fileName,
          topicId = apiConfig.topicId,
          _apiConfig$filters3 = apiConfig.filters,
          filters = _apiConfig$filters3 === void 0 ? [] : _apiConfig$filters3,
          _apiConfig$lexileFilt3 = apiConfig.lexileFilters,
          lexileFilters = _apiConfig$lexileFilt3 === void 0 ? [] : _apiConfig$lexileFilt3,
          _apiConfig$config3 = apiConfig.config,
          config = _apiConfig$config3 === void 0 ? {} : _apiConfig$config3,
          hasIntegrations = apiConfig.hasIntegrations;

      if (fileName === undefined || topicId === undefined) {
        throw new ReferenceError('"fileName" or "topicId" is undefined');
      }

      var fetchConfig = buildFetchConfig({
        programId: programId,
        fileName: fileName,
        topicId: topicId,
        filters: filters,
        lexileFilters: lexileFilters,
        config: config,
        hasIntegrations: hasIntegrations
      });
      return fetchData(fetchConfig);
    },
    cancel: cancel
  };
});