/* eslint-disable import/prefer-default-export */
import { PICKER_URL } from '@hmhco/url-const-picker/src/pickerUrls';
export var isPicker = function isPicker() {
  var _window$location$hash;

  return (_window$location$hash = window.location.hash) === null || _window$location$hash === void 0 ? void 0 : _window$location$hash.includes(PICKER_URL);
};
export var getPickerPrefixUrlDiscover = function getPickerPrefixUrlDiscover() {
  return isPicker() ? 'picker/discover' : 'discover';
};
export var getPickerPrefixUrlAllResources = function getPickerPrefixUrlAllResources() {
  return isPicker() ? 'picker/allResources' : 'allResources';
};