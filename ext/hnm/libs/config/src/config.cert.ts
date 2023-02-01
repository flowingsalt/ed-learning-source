import { Config } from './Config';

const certConfig: Config = {
  name: 'cert',
  edsLoginLandingPage:
    'https://platform.cert.heinemann.com/ui/login/landing-page',
  contentShareAppUrl: 'https://platform-content-share.cert.heinemann.com/',
  edsLogoutUrl: 'https://api.cert.heinemann.com/login/logout',
  edsPostLogoutRedirectUrl: 'https://platform.cert.heinemann.com/',
  edsLoginClientId: '2cc7842e-ed1b-401e-b203-c2756a26d795',
  edsLoginUrl: 'https://api.cert.heinemann.com/login/login/initializeUri',
  edsLoginIssuer: 'https://platform-cert.authorization.heinemann.com',
  edsServiceUrl: 'https://api.cert.heinemann.com/services',
  edsGraphUrl: 'https://api.cert.heinemann.com/graphql',
  edsLtiUrl: 'https://api.cert.heinemann.com/lti/lti',
  planktonBaseUrl: 'https://d16qzots3do3wk.cloudfront.net/',
  edsContentShareClientId: '2432c4e2-921a-460a-b938-7c44fc7d516e',
  edsContentShareInitializeUrl:
    'https://api.cert.heinemann.com/lti/lti/launch/share-link',
  edsContentShareAuthorizeUrl:
    'https://api.cert.heinemann.com/lti/lti/authorize',
  edsContentShareTokenUrl: 'https://api.cert.heinemann.com/lti/lti/token',
};

export default certConfig;
