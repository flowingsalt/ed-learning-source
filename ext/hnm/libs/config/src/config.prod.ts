import { Config } from './Config';

const prodConfig: Config = {
  name: 'prod',
  edsLoginLandingPage: 'https://platform.heinemann.com/ui/login/landing-page',
  contentShareAppUrl: 'https://platform-content-share.heinemann.com/',
  edsLogoutUrl: 'https://api.heinemann.com/login/logout',
  edsPostLogoutRedirectUrl: 'https://platform.heinemann.com/',
  edsLoginClientId: '2cc7842e-ed1b-401e-b203-c2756a26d795',
  edsLoginUrl: 'https://api.heinemann.com/login/login/initializeUri',
  edsLoginIssuer: 'https://platform.authorization.heinemann.com',
  edsServiceUrl: 'https://api.heinemann.com/services',
  edsGraphUrl: 'https://api.heinemann.com/graphql',
  edsLtiUrl: 'https://api.heinemann.com/lti/lti',
  planktonBaseUrl: 'https://d16qzots3do3wk.cloudfront.net/',
  edsContentShareClientId: 'a8bde1fa-076d-4092-85e0-f39a82adf425',
  edsContentShareInitializeUrl:
    'https://api.heinemann.com/lti/lti/launch/share-link',
  edsContentShareAuthorizeUrl: 'https://api.heinemann.com/lti/lti/authorize',
  edsContentShareTokenUrl: 'https://api.heinemann.com/lti/lti/token',
};

export default prodConfig;
