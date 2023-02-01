import pathOr from 'ramda/src/pathOr';
import { TOKEN_LOADED, JWT_LAUNCH_TOKEN_LOADED } from '../actions/types';
export var userAccessToken = pathOr(false, ['sif', 'accessToken']);
export var userRole = pathOr(false, ['userContext', 'roles']);

var parseUniqueId = function parseUniqueId(sub) {
  return sub === null || sub === void 0 ? void 0 : sub.split(',')[2].split('=')[1];
};

export var parseDistrictPid = function parseDistrictPid(sub) {
  // the sub is the sub property from the userContext.
  try {
    var index = sub.indexOf(',dc=');

    if (index !== -1) {
      var start = index + 4;
      var end = sub.indexOf(',', start);

      if (end === -1) {
        end = sub.length;
      }

      return sub.substr(start, end - start);
    }
  } catch (e) {
    console.error('ERROR: Invalid accessToken', e);
  }

  return null;
};
export var generateUserContext = function generateUserContext(sif, roles) {
  var token = sif.tokeninfo;
  var fullname = '';
  var firstname = '';

  try {
    var sub = sif.tokeninfo.sub;
    var start = sub.indexOf('cn=');
    var end = sub.indexOf(',uid=');
    fullname = sub.substr(start + 3, end - 3);

    try {
      var names = fullname.split(' ');
      firstname = names[0];
    } catch (e) {
      console.log("ERROR: Could not derive user's firstname");
      firstname = '';
    }
  } catch (e) {
    console.log("ERROR: Could not derive user's fullname");
  }

  var userContext = {
    platform: token.PlatformId,
    client: token.client_id,
    district: token.dist_refid,
    school: token.school_refid,
    schoolCategory: token.school_category,
    contextId: token.contextId,
    iss: token.iss,
    aud: token.aud,
    iat: token.iat,
    sub: token.sub,
    roles: roles || token['http://www.imsglobal.org/imspurl/lis/v1/vocab/person'],
    exp: token.exp,
    uid: parseUniqueId(token.sub),
    districtPid: parseDistrictPid(token.sub),
    fullname: fullname,
    firstname: firstname
  };
  return userContext;
};
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case JWT_LAUNCH_TOKEN_LOADED:
    case TOKEN_LOADED:
      if (action.sif) {
        return {
          sif: action.sif,
          authenticated: true,
          userContext: generateUserContext(action.sif, action.roles)
        };
      }

      return {
        authenticated: false
      };

    default:
      return state;
  }
});