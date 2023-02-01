import { eventRegistry } from '@hmhco/amp-core-events';
/**
 * on AMP Load, function gets initiated and listens to TAB input
 */
// disabling linting due to the fact that tabHandler uses handleMouseDownOnce, which in turn
// also uses handleFirstTab and linter complains that it should be defined at the top

/* eslint-disable */

export var handleFirstTab = function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener(eventRegistry.KEY_DOWN, handleFirstTab);
    window.addEventListener(eventRegistry.MOUSE_DOWN, handleMouseDownOnce);
  }
};
export var handleMouseDownOnce = function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener(eventRegistry.MOUSE_DOWN, handleMouseDownOnce);
  window.addEventListener(eventRegistry.KEY_DOWN, handleFirstTab);
};

var tabHandler = function tabHandler() {
  // this is for focus management on click vs keyboard navigation
  window.addEventListener(eventRegistry.KEY_DOWN, handleFirstTab);
};
/* eslint-enable */


export default tabHandler;