/* eslint-disable import/prefer-default-export */
import { hasFlexibleLabels } from '.';
/**
 * For title determine if we should use flexible labels (level label and level number) or type and hierarchy fields.
 *
 * @param {string} levelLabel
 * @param {string} levelNumber
 * @param {string} type
 * @param {string} hierarchy
 * @param {bool} restrictLabel - used on discover app to hide labels when the levelNumber is empty
 * @returns {boolean, string} should we hide label, and the label to show.
 */

export var getLessonLabel = function getLessonLabel() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      levelLabel = _ref.levelLabel,
      levelNumber = _ref.levelNumber,
      type = _ref.type,
      hierarchy = _ref.hierarchy;

  var restrictLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // If a program has an undefined levelLabel and levelNumber, these fields should not be used!

  var useFlexibleLabels = hasFlexibleLabels({
    levelLabel: levelLabel,
    levelNumber: levelNumber
  }); // Discover Lesson Eyebrow title -> If the levelLabel exists
  // and is blank then do not display the levelNumber on its own.

  var hideLabel = useFlexibleLabels && levelLabel === '' && restrictLabel; // If both levelNumber and levelLabel exist and the levelNumber is blank,
  // then just show the levelLabel - for example "Introduction"

  var flexibleLabel = levelNumber === '' ? levelLabel : "".concat(levelLabel, " ").concat(levelNumber);

  if (useFlexibleLabels && !hideLabel) {
    return {
      hideLabel: hideLabel,
      label: flexibleLabel === null || flexibleLabel === void 0 ? void 0 : flexibleLabel.trim()
    };
  } // If levelLabel is blank or if both the levelLabel and levelNumber do NOT exist
  // then show the type and hierarchy when used on lesson page or resource details page


  return {
    hideLabel: hideLabel,
    label: type && hierarchy ? "".concat(type, " ").concat(hierarchy) : ''
  };
};