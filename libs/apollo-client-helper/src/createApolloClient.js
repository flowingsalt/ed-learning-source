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

import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import fetch from 'node-fetch';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
var clients = new Map();
export var retryIf = function retryIf(error) {
  return !!error;
}; // should retry every 15 secs for 3 mins,

var retry = new RetryLink({
  delay: {
    initial: 15000,
    max: 15500,
    jitter: true
  },
  attempts: {
    max: 12,
    retryIf: retryIf
  }
});

function getLink(uri) {
  var _getUserCtx = getUserCtx(),
      accessToken = _getUserCtx.rawToken.sif.accessToken;

  var httpLink = createHttpLink({
    uri: uri,
    fetch: fetch
  });
  var authLink = new ApolloLink(function (operation, forward) {
    operation.setContext({
      headers: {
        authorization: accessToken
      }
    });
    return forward(operation);
  });
  return authLink.concat(httpLink);
}

export function getExponentialRetryLink(uri) {
  return ApolloLink.from([new RetryLink({
    attempts: {
      max: 7,
      retryIf: retryIf
    }
  }), getLink(uri)]);
}

var createApolloClient = function createApolloClient(uri, cacheConfig) {
  var defaultOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var shouldRetry = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var link = getLink(uri);
  return new ApolloClient(_objectSpread({
    link: shouldRetry ? ApolloLink.from([retry, link]) : link,
    cache: new InMemoryCache(cacheConfig)
  }, defaultOptions));
};

export var getApolloClient = function getApolloClient(uri, cacheConfig, defaultOptions, shouldRetry) {
  if (clients.has(uri)) {
    return clients.get(uri);
  }

  clients.set(uri, createApolloClient(uri, cacheConfig, defaultOptions, shouldRetry));
  return clients.get(uri);
};
export default createApolloClient;