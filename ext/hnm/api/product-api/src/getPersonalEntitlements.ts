import { getAuth } from '@hnm/session-context';
import { getConfig } from '@hnm/config';
import { HeinemannProduct } from '@hnm/types';

import gql from 'graphql-tag';
import { createGraphClient } from '@hnm/graph-client';
import mapPersonalEntitlements from './mapper/mapPersonalEntitlements';

const appConfig = getConfig();

export const getEntitlementsQuery = gql`
  query getProductEntitlements($id: String!) {
    getUserById(idType: "DBID", id: $id) {
      users {
        memberships {
          role
          group {
            account {
              accountType
              allocations {
                id
                quantity
                quantityAllocated
                quantityUnallocated
                expirationDate
                productBundle {
                  bundleMemberships {
                    product {
                      productQualifiers {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getPersonalEntitlements = (url = appConfig.edsGraphUrl) => {
  const auth = getAuth();
  const { request } = createGraphClient(url);

  const variables = {
    id: auth.userId.toString(),
  };

  return {
    request: (showAll: boolean): Promise<HeinemannProduct[]> =>
      request(getEntitlementsQuery, variables)
        .then(res => mapPersonalEntitlements(res, showAll))
        .catch(() => {
          throw new Error('Payload could not be retrieved.');
        }),
  };
};

export default getPersonalEntitlements;
