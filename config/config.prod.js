module.exports = {
  name: 'prod',
  ampContent: 'https://www.hmhco.com/content',
  ampLoggedInURL: 'https://www.hmhco.com/ui/logged-in/',
  ampLogin: 'https://www.hmhco.com/ui/login/',
  ampLoginHelp: 'http://downloads.hmlt.hmco.com/Help/Ed/LogIn',
  ampLoginPrivacyPolicy: 'https://www.hmhco.com/prek-12-products-privacy-policy',
  ampLoginTermsAndConditions: 'https://www.hmhco.com/terms-of-use-k12-learning-platforms',
  apiEngHostname: 'https://api.hmhco.com',
  apiEngHostnamePublic: 'https://papi.hmhco.com',
  assessments: 'https://www.hmhco.com/api/assessment',
  assignments: 'https://www.hmhco.com/api/assignment',
  authorizationApi: 'https://www.hmhco.com/api/authorization',
  auth0: 'https://hmhco.auth0.com',
  auth0CreateConnectionsHost: 'https://papi.hmhco.com/auth-self-service-setup/api/v1/sso',
  auth0FetchConnectionsHost: 'https://papi.hmhco.com/auth-self-service-setup/api/v1/sso/datastore/connection',
  baseURL: 'https://www.hmhco.com/one',
  classes: 'https://www.hmhco.com/ui/classes',
  classesClasses: 'https://www.hmhco.com/ui/classes/classes',
  clientRegistry: 'https://papi.hmhco.com/idm-client-registry',
  contentPicker: 'https://www.hmhco.com/one/picker/#/',
  contentPickerAMP: 'http://www.hmhco.com/ui/#/picker',
  contentProvider: 'http://www.hmhco.com/ui/#/contentProvider/',
  ctsDistrictLogin: 'https://www.hmhco.com/ui/login/?connection=',
  districtDownloadApi: 'https://papi.hmhco.com/data-district-download-service',
  ebrCore: 'https://papi.hmhco.com/idm-ebr-core',
  ebrUi: 'https://www.hmhco.com/import/',
  edContent: 'https://www.hmhco.com/content',
  edDistrictLogin: 'https://www.hmhco.com/one/login/?connection=',
  edHostname: 'https://www.hmhco.com/',
  edLoggedInURL: 'https://www.hmhco.com/one/logged-in',
  edLogin: 'https://www.hmhco.com/ui/login/',
  edRoot: 'https://www.hmhco.com/one/#/',
  EDSLoginUrl: 'https://hapi.hmhco.com/edcore/eds-login',
  EDSResourceUrl: 'https://api.heinemann.com',
  forgotPassword: 'https://www.hmhco.com/ui/login/forgot-password/',
  grading: 'https://www.hmhco.com/api/grading/',
  hmhHelpCenter: 'http://downloads.hmlt.hmco.com',
  hmoHostname: 'https://my.hrw.com/sp/',
  hmoLoginPath: 'https://my.hrw.com/index.jsp',
  idm: 'https://idm.api.hmhco.com/openid-connect',
  jasperReporting: 'https://www.hmhco.com/jasperserver-pro',
  licensing: 'https://www.hmhco.com/ui/#/licenses',
  liftRoot: 'https://www.hmhco.com/ui/',
  loginPath: '/login/',
  myClasses: 'https://www.hmhco.com/ui/!my-classes',
  myStuff: 'https://www.hmhco.com/ui/#/my-stuff/lessons',
  notificationsApi: 'https://papi.hmhco.com',
  oktaConnectionApi: 'https://papi.hmhco.com/okta-services-gateway/api/v1/sso',
  oktaFetchConnectionsHost: 'https://papi.hmhco.com/okta-services-gateway/api/v1/sso/idps',
  oktaNewOrg: 'https://papi.hmhco.com/okta-services-gateway/api/v1/org',
  onesearch: 'https://www.hmhco.com/api/onesearch/v1',
  picker: 'https://www.hmhco.com/ui/#/picker/',
  plannerHost: 'https://papi.hmhco.com/planner-api',
  plannerHostNonWaf: 'https://api.eng.hmhco.com/planner-api',
  plsAuthors: 'https://papi.hmhco.com/pls-services-author/api/v5/authors',
  plsLessonRelatedResource: 'https://papi.hmhco.com/pls-services-lessonrelatedresource/api/v5/lessonrelatedresources',
  plsRelatedResources: 'https://papi.hmhco.com/pls-services-relatedresource/api/v5/relatedresources',
  plsResource: 'https://papi.hmhco.com/pls-services-resource/api/v5/resources',
  edsApiGateway: 'https://hapi.hmhco.com/edcore/hmheng-eds-api-gateway/',
  prefixCDS: 'https://cds-metadatapipeline.br.hmheng.io',
  productLanding: 'https://www.hmhco.com/ui/#/product',
  restApi: 'https://papi.hmhco.com',
  restHapi: 'https://hapi.hmhco.com',
  restDMPS: 'https://papi.hmhco.com/dmps',
  restDMPSNonWAF: 'https://api.eng.hmhco.com/dmps',
  restELM: 'https://elm.br.hmheng.io/v1',
  restIdsApi: 'https://api.br.internal/ids',
  // for purging users in IDS we need a different API
  restIdsGridApi: 'https://papi.hmhco.com/ids-grid-api',
  restIdsGridApiNonWAF: 'https://api.eng.hmhco.com/ids-grid-api',
  restOAC: 'https://oac.br.hmheng.io/v3',
  restOACNonWAF: 'https://oac.br.hmheng.io/v3',
  restPostPrefix: 'https://www.hmhco.com',
  restPrefix: 'https://www.hmhco.com',
  restRecommendation: 'https://papi.hmhco.com/recommendation-api',
  restStagingProcessor: 'https://papi.hmhco.com/idm-staging-processor',
  restSusApi: 'https://api.br.internal/idm-user-api',
  // for purging users in SUS
  restUdsApi: 'https://papi.hmhco.com/uds',
  restUpdatesApi: 'https://papi.hmhco.com/update-catalog',
  rosterDashboard: 'https://www.hmhco.com/ui/#/roster',
  r180Api: 'https://www.hmhco.com/api/r180/',
  r180Media: 'https://www.hmhco.com/r180/media',
  sisHostname: 'https://www.hmhco.com/',
  sso: 'https://papi.hmhco.com/auth-self-service-setup',
  storyBook: 'https://www.hmhco.com/ui/storybook/',
  susAuth: 'https://www.hmhco.com/api/authorization',
  tcHostname: 'https://www-k6.thinkcentral.com/sp/',
  tcLoginPath: 'https://www-k6.thinkcentral.com/ePC/start.do',
  teacherDashboard: 'https://www.hmhco.com/ui/',
  linkedAssignments: 'https://www.hmhco.com/ui/#/assign-full?resourceId=l_ff9bdd36-f627-4241-8dbc-9f9b4f158f56_c7b06f27-597b-42fc-8169-67247568e97f&programId=IM_NL20_G4&title=Unit+Opener%3A+Place+Value+and+Whole+Number+Operations&backTo=discover%252FIM_NL20_G4%252F1&showSched=true&recBy=NONE&isSgm=false',
  virtualClassroom: 'https://www.hmhco.com/ui/#/virtual-classroom',
  virtualClassroomApi: 'https://papi.hmhco.com/vcservice/v2/virtual-classroom/meeting',
  wormhole: 'https://papi.hmhco.com/wh-api/graphql',
  importingService: 'https://papi.hmhco.com/idm-api-importing-service',
  heinemannLogin: 'https://platform.heinemann.com/',
  heinemannDashboard: 'https://platform.heinemann.com/ui/dashboard',
  heinemannLicenses: 'https://platform.heinemann.com/ui/license-management',
  heinemannUsers: 'https://platform.heinemann.com/ui/user-management',
  heinemannProductCards: 'https://platform.heinemann.com/ui/lucy-calkins#/unitsofstudy',
  heinemannBaseURL: 'https://platform.heinemann.com',
  hnmGeneratedUrl: 'https://platform-content-share.heinemann.com/'
};