import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import fetch from 'node-fetch';
import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import wormholeUrls from './api/wormholeUrls';
var client = null;

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    name = _getConfigForCurrentE.name; // eslint-disable-next-line no-unused-vars


export var retryIf = function retryIf(error, _operation) {
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
    // eslint-disable-next-line no-unused-vars
    retryIf: function retryIf(error, _operation) {
      return !!error;
    }
  }
});

var createApolloClient = function createApolloClient(sif) {
  var httpLink = createHttpLink({
    uri: wormholeUrls[name],
    fetch: fetch
  });
  var authLink = new ApolloLink(function (operation, forward) {
    operation.setContext({
      headers: {
        authorization: sif
      }
    });
    return forward(operation);
  });
  return new ApolloClient({
    link: ApolloLink.from([retry, authLink.concat(httpLink)]),
    // required
    cache: new InMemoryCache({
      typePolicies: {
        StudentTopLevel: {
          keyFields: ['refId']
        }
      }
    })
  });
};

export var getApolloClient = function getApolloClient(sif) {
  if (client) {
    return client;
  }

  client = createApolloClient(sif);
  return client;
};
export default createApolloClient;