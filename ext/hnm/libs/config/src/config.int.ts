import { Config } from './Config';

const intConfig: Config = {
  name: 'int',
  edsLoginLandingPage:
    'https://platform.int.heinemann.com/ui/login/landing-page',
  contentShareAppUrl: 'https://platform-content-share.int.heinemann.com/',
  edsLogoutUrl: 'https://app01.int.tsg.hmhco.com/edcore/eds-login/logout',
  edsPostLogoutRedirectUrl: 'https://platform.int.heinemann.com/',
  edsLoginClientId: '2cc7842e-ed1b-401e-b203-c2756a26d795',
  edsLoginUrl:
    'https://app01.int.tsg.hmhco.com/edcore/eds-login/login/initializeUri',
  edsLoginIssuer: 'https://platform-int.authorization.heinemann.com',
  edsServiceUrl: 'https://app01.int.tsg.hmhco.com/edcore/eds-core-app',
  edsGraphUrl:
    'https://app01.int.tsg.hmhco.com/edcore/hmheng-eds-api-gateway/graphql',
  edsLtiUrl: 'https://app01.int.tsg.hmhco.com/edcore/eds-lti/lti',
  planktonBaseUrl: 'https://d16qzots3do3wk.cloudfront.net/',
  edsContentShareClientId: '686d53aa-db86-4754-b265-bf2f36a527fb',
  edsContentShareInitializeUrl:
    'https://app01.int.tsg.hmhco.com/edcore/eds-lti/lti/launch/share-link',
  edsContentShareAuthorizeUrl:
    'https://app01.int.tsg.hmhco.com/edcore/eds-lti/lti/authorize',
  edsContentShareTokenUrl:
    'https://app01.int.tsg.hmhco.com/edcore/eds-lti/lti/token',
};

export default intConfig;
