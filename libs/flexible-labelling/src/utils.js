/* eslint-disable import/prefer-default-export */
import { OPEN_LINK_CHARACTER_LIMIT } from './constants';
import { hasFlexibleLabels } from './hasFlexibleLabels';
export var prependWithLabel = function prependWithLabel(label, title) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ': ';
  var hasTitle = title !== '' && typeof title !== 'undefined';
  var hasLabel = label !== '' && typeof label !== 'undefined';
  var visibleTitle = hasTitle ? title : '';
  var visibleLabel = hasLabel ? label : '';
  var prefixCharacter = hasLabel && hasTitle ? prefix : '';
  return "".concat(visibleLabel).concat(prefixCharacter).concat(visibleTitle);
};
export var getCharacterLimit = function getCharacterLimit(label) {
  return (label === null || label === void 0 ? void 0 : label.length) <= OPEN_LINK_CHARACTER_LIMIT ? label : '';
};
/**
 * getOpenLinkLabel
 * @param {object} level containing levelLabel and type fields
 * @returns a label if it's less than ${OPEN_LINK_CHARACTER_LIMIT} in length
 */

export var getOpenLinkLabel = function getOpenLinkLabel(level) {
  var levelLabel = level.levelLabel,
      levelNumber = level.levelNumber,
      type = level.type;
  var useFlexibleLabels = hasFlexibleLabels({
    levelLabel: levelLabel,
    levelNumber: levelNumber
  });
  return useFlexibleLabels ? getCharacterLimit(levelLabel) : getCharacterLimit(type === null || type === void 0 ? void 0 : type[0]);
};
/**
 * pluraliseProgramTitle
 * wrap component with injectIntl to get access to intl messages
 * return translated string if the message exists with the given id,
 * or else we use the fallback
 */

export var pluraliseProgramTitle = function pluraliseProgramTitle(_ref) {
  var _intl$messages;

  var intl = _ref.intl,
      id = _ref.id,
      fallback = _ref.fallback;
  return typeof (intl === null || intl === void 0 ? void 0 : (_intl$messages = intl.messages) === null || _intl$messages === void 0 ? void 0 : _intl$messages[id]) === 'undefined' ? fallback : intl.formatMessage({
    id: id
  });
};