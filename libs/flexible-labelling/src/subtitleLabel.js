/* eslint-disable import/prefer-default-export */
import { hasFlexibleLabels } from '.';
/**
 * For subtitle determine if we should use flexible labels (level label and level number) or type and hierarchy fields.
 *
 * @param {string} levelLabel
 * @param {string} levelNumber
 * @param {string} type
 * @param {string} hierarchy
 * @returns {string} label to show.
 */

export var getSubtitleLabel = function getSubtitleLabel() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      levelLabel = _ref.levelLabel,
      levelNumber = _ref.levelNumber,
      type = _ref.type,
      hierarchy = _ref.hierarchy; // If a program has an undefined levelLabel and levelNumber, these fields should not be used!


  var useFlexibleLabels = hasFlexibleLabels({
    levelLabel: levelLabel,
    levelNumber: levelNumber
  });

  if (useFlexibleLabels) {
    return {
      label: "".concat(levelLabel !== null && levelLabel !== void 0 ? levelLabel : '', " ").concat(levelNumber !== null && levelNumber !== void 0 ? levelNumber : '').trim()
    };
  }

  return {
    label: "".concat(type !== null && type !== void 0 ? type : '', " ").concat(hierarchy !== null && hierarchy !== void 0 ? hierarchy : '').trim()
  };
};