import { addContext } from './monitoringContextSetters';
/**
 * set monitoring context value for demo entitlements
 *
 * @param {boolean} hasDemoEntitlements
 */

export function setDemoEntitlementContext(hasDemoEntitlements) {
  addContext([{
    key: 'hasDemoEntitlements',
    value: hasDemoEntitlements
  }]);
}
/**
 * add user related values to monitoring context
 *
 * @param {string} userId
 * @param {string} districtId
 * @param {string} districtPID
 * @param {string} schoolPID
 * @param {string} roles
 */

export default function (userId, districtId, districtPID, schoolPID, roles) {
  var context = [{
    key: 'userId',
    value: userId
  }, {
    key: 'districtId',
    value: districtId
  }, {
    key: 'districtPID',
    value: districtPID
  }, {
    key: 'schoolPID',
    value: schoolPID
  }, {
    key: 'roles',
    value: roles
  }];
  addContext(context);
}