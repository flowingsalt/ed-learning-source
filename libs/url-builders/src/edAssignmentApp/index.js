import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
export function getPreviewUrl() {
  var config = getConfigForCurrentEnv();
  return "".concat(config.liftRoot, "#/assessment-view/preview");
}
export function getLiveUrl() {
  var config = getConfigForCurrentEnv();
  return "".concat(config.liftRoot, "#/assessment-view/live");
}
export function getLocationObject() {
  var windowObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return windowObject.location;
}