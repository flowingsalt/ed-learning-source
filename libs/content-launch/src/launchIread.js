import { isFeatureActive } from '@hmhco/feature-flags';
import { isIPad } from 'orchid-common/utils/userAgent';
import launchPreviewContent from './launchPreviewContent';
export var IOS_LAUNCH_URLS = {
  dev: 'https://cert.hmhco.com/mobileapp/iread',
  "int": 'https://cert.hmhco.com/mobileapp/iread',
  cert: 'https://one.hmhco.com/mobileapp/iread',
  prod: 'https://one.hmhco.com/mobileapp/iread'
};
/**
 * The  IRead resource ID is hardcoded because it seems to be always the same.
 * (From a spike investigation into launching IRead)
 */

export var IREAD_RESOURCE_ID = 'l_5a6b43b6-57fb-487e-ad6b-948cd35c0e7c_bcb444d6-1bcc-4f25-8c52-99e791435920';
export function launchIOSApplication(sif, env) {
  var launchUriOrigin = IOS_LAUNCH_URLS[env];
  window.location.assign("".concat(launchUriOrigin, "/?sif=").concat(sif, "&referrer=").concat(window.location.origin));
}
export var IOS_CUSTOM_LAUNCH_URLS = {
  local: 'hmhiread://cert.hmhco.com/mobileapp/iread',
  dev: 'hmhiread://cert.hmhco.com/mobileapp/iread',
  "int": 'hmhiread://cert.hmhco.com/mobileapp/iread',
  cert: 'hmhiread://www.hmhco.com/mobileapp/iread',
  prod: 'hmhiread://www.hmhco.com/mobileapp/iread'
};
export function launchIOSCustomScheme(sif, env) {
  var launchUriOrigin = IOS_CUSTOM_LAUNCH_URLS[env];
  window.location.assign("".concat(launchUriOrigin, "/?sif=").concat(sif, "&referrer=").concat(window.location.origin));
}
export default function launchIread(sif, env) {
  var isUpgraded = isFeatureActive('iReadIpadVersion2');
  var isSafari = navigator.userAgent.toLowerCase().includes('safari');

  if (isIPad()) {
    if (isUpgraded && isSafari) {
      launchIOSCustomScheme(sif, env);
    } else {
      launchIOSApplication(sif, env);
    }
  } else {
    launchPreviewContent(IREAD_RESOURCE_ID, sif, env);
  }
}