import { getAuth } from '@hnm/session-context';
import { getConfig } from '@hnm/config';
import { HeinemannProduct } from '@hnm/types';

import gql from 'graphql-tag';
import { createGraphClient } from '@hnm/graph-client';
import mapAssignableEntitlements from './mapper/mapAssignableEntitlements';

const appConfig = getConfig();

export const getEntitlementsQuery = gql`
  query getProductEntitlements($id: String!) {
    getUserById(idType: "DBID", id: $id) {
      users {
        memberships {
          role
          group {
            id
            parentId
            account {
              accountQualifier {
                key
                value
              }
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

export const getAssignableEntitlements = (showAll = false): object => {
  const auth = getAuth();
  const { request } = createGraphClient(appConfig.edsGraphUrl);

  const variables = {
    id: auth.userId.toString(),
  };

  return {
    request: (): Promise<HeinemannProduct[]> =>
      request(getEntitlementsQuery, variables)
        .then(res => mapAssignableEntitlements(res, showAll))
        .catch(() => {
          throw new Error('Payload could not be retrieved.');
        }),
  };
};

export default getAssignableEntitlements;
