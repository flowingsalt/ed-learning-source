/**
 * Those utils are from W3C Dialog example / design pattern:
 * https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html
 */

/**
 * isFocusable
 * @author W3.org
 * @see source https://www.w3.org/TR/wai-aria-practices-1.1/examples/js/utils.js
 * @copyright https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @param element html node
 * @returns true if the element is a good candidate for `.focus()`
 */
export var isFocusable = function isFocusable(element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
    return true;
  }

  if (element.disabled || element.getAttribute && element.getAttribute('aria-hidden') === true) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return Boolean(element.href) && element.rel !== 'ignore';

    case 'INPUT':
      return element.type !== 'hidden' && element.type !== 'file';

    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;

    default:
      return false;
  }
};
/**
 * attemptFocus
 * @author W3.org
 * @see source https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/js/dialog.js
 * @copyright https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @param element html node
 * @returns true if `.focus()` worked on that element
 */

export var attemptFocus = function attemptFocus(element) {
  if (!isFocusable(element)) {
    return false;
  }

  try {
    element.focus();
  } catch (e) {// error doesn't matter here
  }

  return document.activeElement === element;
}; // end attemptFocus

var isChildSentinel = function isChildSentinel(child) {
  var _child$dataset;

  return ['customSentinelStart', 'customSentinelEnd'].includes((_child$dataset = child.dataset) === null || _child$dataset === void 0 ? void 0 : _child$dataset.test);
};
/**
 * focusFirstDescendant
 * @author W3.org
 * @see source https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/js/dialog.js
 * @copyright https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @param element html node
 * @returns true if `.focus()` worked on that element
 */


export var focusFirstDescendant = function focusFirstDescendant(element) {
  if (!element || !element.childNodes) {
    return false;
  }

  for (var i = 0; i < element.childNodes.length; i += 1) {
    var child = element.childNodes[i];

    if (!isChildSentinel(child) && (attemptFocus(child) || focusFirstDescendant(child))) {
      return true;
    }
  }

  return false;
}; // end focusFirstDescendant

/**
 * focusLastDescendant
 * @author W3.org
 * @see source https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/js/dialog.js
 * @copyright https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @param element html node
 * @returns true if `.focus()` worked on that element
 */

export var focusLastDescendant = function focusLastDescendant(element) {
  if (!element || !element.childNodes) {
    return false;
  }

  for (var i = element.childNodes.length - 1; i >= 0; i -= 1) {
    var child = element.childNodes[i];

    if (!isChildSentinel(child) && (attemptFocus(child) || focusLastDescendant(child))) {
      return true;
    }
  }

  return false;
}; // end focusLastDescendant