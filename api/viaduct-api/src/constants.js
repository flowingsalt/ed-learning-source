import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
export var BASE_URL = getConfigForCurrentEnv().restHapi;
export var TEMP_BASE_URL = getConfigForCurrentEnv().restApi;
var BASE_OATH_URL = "".concat(BASE_URL, "/edcore/viaduct-service/oauth");
export var OAUTH_SHOULD_INITIAL_OATH_FLOW_URL = "".concat(BASE_OATH_URL, "/auth-flow-required");
var TEMP_BASE_OATH_URL = "".concat(TEMP_BASE_URL, "/vcservice/oauth");
export var TEMP_OAUTH_SHOULD_INITIAL_OATH_FLOW_URL = "".concat(TEMP_BASE_OATH_URL, "/authflowrequired");
export var LOGOUT_URL = "".concat(BASE_OATH_URL, "/revoke-user-access");
export var TEMP_LOGOUT_URL = "".concat(TEMP_BASE_OATH_URL, "/revoke-user-access");
export var MICROSOFT_LOGOUT_URL = "".concat(BASE_OATH_URL, "/logout");
export var GOOGLE_CLASSROOM_CLIENT = 'googleclassroom';
export var GOOGLE_DRIVE_CLIENT = 'googledrive';
export var CLASSROOM_API_VERSION = '/v1';
export var VIADUCT_BASE_URL = "".concat(BASE_URL, "/edcore/viaduct-service");
export var CLASSLINK_ENDPOINT = '/class-links';
export var REGISTRATION_ENDPOINT = '/registration';
export var ZOOM = 'zoom';
export var GOOGLE_CLASSROOM_STUDENT_FIELDS = 'fields=students(profile(id,name(givenName,familyName),emailAddress)),nextPageToken';
export var S3_BANNER_RESOURCE = 'https://s3.amazonaws.com/prod-hmhco-vmg-craftcms-public/home/TC-shapemoji-hmhco-hero-banner_V2.png';
export var FOLDER_METADATA = {
  name: 'HMH',
  mimeType: 'application/vnd.google-apps.folder'
};
export var HMH_FOLDER_NAME = 'HMH';
export var GOOGLE_DRIVE_API_URL = '/drive/v3/files';