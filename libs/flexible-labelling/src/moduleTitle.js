/* eslint-disable import/prefer-default-export */
import { hasFlexibleLabels, pluraliseProgramTitle } from '.';
/**
 * For module and tetiary nav title on discover
 *
 * @param {object} intl shape
 * @param {string} levelLabelPlural
 * @param {string} levelId
 * @param {string} id of format message
 * @returns {string} the module title
 */

export var getModuleTitle = function getModuleTitle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      intl = _ref.intl,
      levelLabelPlural = _ref.levelLabelPlural,
      levelId = _ref.levelId,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'discover.program.type.' : _ref$id; // If a program has an undefined flexible label field levelLabelPlural then this field should not be used!


  var useFlexibleLabels = hasFlexibleLabels({
    levelLabelPlural: levelLabelPlural
  });
  var title = useFlexibleLabels ? levelLabelPlural !== null && levelLabelPlural !== void 0 ? levelLabelPlural : '' : levelId !== null && levelId !== void 0 ? levelId : '';
  return pluraliseProgramTitle({
    id: "".concat(id).concat(title === null || title === void 0 ? void 0 : title.toLowerCase()),
    fallback: title,
    intl: intl
  });
};