import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { isFeatureActive } from '@hmhco/feature-flags';
export var BASE_URL = getConfigForCurrentEnv().restApi;
export var MEETING_URL = '/vcservice/v2/virtual-classroom/meeting';
export var TEMP_MEETING_URL = '/vcservice/virtual-classroom/meeting';
export var isDistrictFlagged = isFeatureActive('virtualClassroomViaduct');
export var CHECK_ZOOM_DISTRICT = isDistrictFlagged ? MEETING_URL : TEMP_MEETING_URL;
export var checkZoomDistrict = function checkZoomDistrict(refId) {
  return isDistrictFlagged ? "".concat(MEETING_URL, "/").concat(refId) : "".concat(TEMP_MEETING_URL, "/").concat(refId);
};
export var ZOOM = 'zoom';