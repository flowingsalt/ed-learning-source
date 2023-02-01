/**
 * Parse the JSON format of the SIF token
 *
 * @param {string} token json encoded object containing user informations
 *
 * @returns {object}
 */
export function rawSifParser() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return JSON.parse(token) || {};
}
/**
 * Decode the SIF token
 *
 * @param {string} raw SIF token encoded in base64
 * @returns {string} decoded token
 */

export function decodeFromBase64IdToken(token) {
  if (!token) return '';
  return window.atob(token.replace('SIF_HMACSHA256 ', '')).trim();
}
/**
 * Decode the SIF token, remove "first part" separated by a dot
 *
 * @param {string} raw SIF token encoded in base64
 * @returns {string} decoded token
 */

export function decodeFromBase64(token) {
  var sif = decodeFromBase64IdToken(token).split('.')[1];
  return window.atob(sif);
}
/**
 * Decode the SIF token
 *
 * @param {string} raw SIF token encoded in base64
 * @returns {string} decoded token
 */

export function decodeSifBase() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (!token) return {};
  return decodeFromBase64(token);
}
/**
 * Decode the SIF token and return the parsed json
 *
 * @param {string} raw SIF token encoded in base64
 * @returns {object} decoded token
 */

export function decodeSifBaseAsObject(token) {
  if (!token) return {};
  var decodedSif = decodeFromBase64(token);

  if (typeof decodedSif === 'string') {
    return JSON.parse(decodedSif);
  }

  return decodedSif;
}
/**
 * @param {string} token
 * @returns {string}
 */

export function getTokenInfoFromSifToken(token) {
  var rawToken = rawSifParser(token);
  var _rawToken$sif = rawToken.sif;
  _rawToken$sif = _rawToken$sif === void 0 ? {} : _rawToken$sif;
  var tokeninfo = _rawToken$sif.tokeninfo;
  if (!tokeninfo) return '';
  return tokeninfo;
}
/**
 * @param {string} token
 * @returns {string}
 */

export default function sifDecoder(token) {
  var rawToken = rawSifParser(token);
  var _rawToken$sif2 = rawToken.sif;
  _rawToken$sif2 = _rawToken$sif2 === void 0 ? {} : _rawToken$sif2;
  var accessToken = _rawToken$sif2.accessToken;
  if (!accessToken) return '';
  return decodeFromBase64(accessToken);
}