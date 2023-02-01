import { GraphQLClient } from 'graphql-request';
import {
  requestErrorSideEffectsProcessor,
  graphErrorConverter,
} from '@hnm/api-error-handling';
import { getAuth } from '@hnm/session-context';
import { RequestDocument, Variables } from 'graphql-request/dist/types';
import { APP_VERSION, CLIENT_NAME } from '@hnm/config';
import { v4 as uuidv4 } from 'uuid';

const createGraphClient = (url: string) => {
  const auth = getAuth();
  const client = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      'apollographql-client-name': CLIENT_NAME,
      'apollographql-client-version': APP_VERSION,
      correlationid: uuidv4(),
    },
  });

  return {
    request: (document: RequestDocument, variables?: Variables): Promise<any> =>
      client
        .request(document, variables)
        .then(response => graphErrorConverter(url, response))
        .catch(error => requestErrorSideEffectsProcessor(error)),
  };
};

export default createGraphClient;
