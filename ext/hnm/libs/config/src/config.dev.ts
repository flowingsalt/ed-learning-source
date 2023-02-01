import { Config } from './Config';

const devConfig: Config = {
  name: 'dev',
  edsLoginLandingPage:
    'https://platform.dev.heinemann.com/ui/login/landing-page',
  contentShareAppUrl: 'https://platform-content-share.dev.heinemann.com/',
  edsLogoutUrl: 'https://app01.dev.tsg.hmhco.com/edcore/eds-login/logout',
  edsPostLogoutRedirectUrl: 'https://platform.dev.heinemann.com/',
  edsLoginClientId: '2cc7842e-ed1b-401e-b203-c2756a26d795',
  edsLoginUrl:
    'https://app01.dev.tsg.hmhco.com/edcore/eds-login/login/initializeUri',
  edsLoginIssuer: 'https://hnm-dev.authorization.heinemann.com',
  edsServiceUrl: 'https://app01.dev.tsg.hmhco.com/edcore/eds-core-app',
  edsGraphUrl:
    'https://app01.dev.tsg.hmhco.com/edcore/hmheng-eds-api-gateway/graphql',
  edsLtiUrl: 'https://app01.dev.tsg.hmhco.com/edcore/eds-lti/lti',
  planktonBaseUrl: 'https://d16qzots3do3wk.cloudfront.net/',
  edsContentShareClientId: 'b9f2100f-4f3a-449d-8ab7-26b3fd1856ec',
  edsContentShareInitializeUrl:
    'https://app01.dev.tsg.hmhco.com/edcore/eds-lti/lti/launch/share-link',
  edsContentShareAuthorizeUrl:
    'https://app01.dev.tsg.hmhco.com/edcore/eds-lti/lti/authorize',
  edsContentShareTokenUrl:
    'https://app01.dev.tsg.hmhco.com/edcore/eds-lti/lti/token',
};

export default devConfig;
