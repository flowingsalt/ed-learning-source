/* eslint-disable no-console */
import { mapUser } from '@hnm/utils';
import { User } from '@hnm/types';
import { getConfig } from '@hnm/config';
import gql from 'graphql-tag';
import { createGraphClient } from '@hnm/graph-client';
import { getAuth } from '@hnm/session-context';

const appConfig = getConfig();

export const getUserContextQuery = gql`
  query getUserContext($id: String!) {
    getUserById(idType: "DBID", id: $id) {
      users {
        id
        givenName
        familyName
        email
        memberships {
          id
          role
          group {
            id
            parentId
            name
            account {
              id
              accountType
              dealerId
              domainId
              source
              accountQualifier {
                key
                value
              }
              accountAltId {
                altKeyType
                altKey
              }
            }
          }
        }
      }
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getUserContext = (url = appConfig.edsGraphUrl) => {
  const auth = getAuth();
  const { request } = createGraphClient(url);

  const variables = {
    id: auth.userId.toString(),
  };

  // this entire pattern can be abstracted into a helper
  return {
    request: (): Promise<User> =>
      request(getUserContextQuery, variables).then(result => {
        if (result?.getUserById?.users) {
          return result.getUserById.users.map(mapUser)[0];
        }
        return undefined;
      }),
  };
};

export default getUserContext;
