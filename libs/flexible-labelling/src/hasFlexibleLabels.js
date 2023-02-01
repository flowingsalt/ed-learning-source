/* eslint-disable import/prefer-default-export */

/**
 * Determine if we should use flexible labels e.g levelLabel, levelNumber, or levelLabelPlural
 *
 * @param {object} fields
 * @returns {boolean} True If all fields are defined
 */
export var hasFlexibleLabels = function hasFlexibleLabels() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var values = fields instanceof Object ? Object.values(fields) : []; // If a program has an undefined field these fields should not be used!

  return Boolean(values.length && !values.some(function (field) {
    return typeof field === 'undefined';
  }));
};