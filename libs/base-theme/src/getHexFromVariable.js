var computedStyle = getComputedStyle(document.documentElement);
/**
 * Read the hexadecimal code for the color
 *
 * The color can be either in provided styles object (key / value associative object)
 * or defined as CSS variables (fallback as we allow partial override of variables)
 *
 * @param {string} variableName CSS variable name like `--ebl-action-color`
 * @param {object} styles key/value association of css variables and css colors
 * @returns
 */

var getHexFromVariable = function getHexFromVariable(variableName) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (styles === null || styles === void 0 ? void 0 : styles[variableName]) ? styles[variableName] : computedStyle.getPropertyValue(variableName).trim();
};

export default getHexFromVariable;