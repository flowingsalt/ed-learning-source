// eslint-disable-next-line import/prefer-default-export
import { PARTNER_WAGGLE, PARTNER_WRITABLE, PARTNER_AMIRA, TEACHER } from './constants';
export var shouldFetchWaggleAndWritableResources = function shouldFetchWaggleAndWritableResources(program, isFeatureEnabled, role) {
  var areWeInPickerApp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!isFeatureEnabled || areWeInPickerApp) {
    return false;
  }

  return (program === null || program === void 0 ? void 0 : program.integration) ? role === TEACHER && program.integration.some(function (integration) {
    return !!integration.type.includes('Waggle') || !!integration.type.includes('Writable');
  }) : false;
};
export var getPartnerDisplayName = function getPartnerDisplayName(partnerIdentifier) {
  switch (partnerIdentifier) {
    case PARTNER_WAGGLE:
    case PARTNER_WRITABLE:
    case PARTNER_AMIRA:
      return partnerIdentifier;

    default:
      return null;
  }
};