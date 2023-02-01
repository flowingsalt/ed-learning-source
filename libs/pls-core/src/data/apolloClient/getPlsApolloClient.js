import { getApolloClient } from '@hmhco/apollo-client-helper/src/createApolloClient';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { CACHE_CONFIG, CLIENT_DEFAULT_OPTIONS } from './config';
export default function getPlsApolloClient(url) {
  var client = getApolloClient(url, CACHE_CONFIG, CLIENT_DEFAULT_OPTIONS, false);

  var defaultQueryErrorHandler = function defaultQueryErrorHandler(error) {
    return logErrorWithContext('plsGraphQLQuery', [{
      key: 'errorMessage',
      value: error
    }]);
  };

  var defaultMutateErrorHandler = function defaultMutateErrorHandler(error) {
    return logErrorWithContext('plsGraphQLMutate', [{
      key: 'errorMessage',
      value: error
    }]);
  };

  return {
    query: function query(queryOptions) {
      var errorHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultQueryErrorHandler;
      return client.query(queryOptions)["catch"](function (err) {
        errorHandler(err);
        return {};
      });
    },
    mutate: function mutate(mutateOptions) {
      var errorHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMutateErrorHandler;
      return client.mutate(mutateOptions)["catch"](function (err) {
        errorHandler(err);
        return {};
      });
    }
  };
}