import { eventRegistry as events } from '@hmhco/amp-core-events';
/**
 * @typedef {Object} ErrorType
 * @property {string} title The heading for the error modal. Eg: `API Error`
 * @property {string} action The action being performed when the error arose. Eg: `Fetching the Student Profile`
 * @property {string} origin The origin of the error in the code base. Eg: `API.getStudentProfile`
 * @property {string} [method] The REST method being used. Eg: `GET`
 * @property {string} [link] Any relevant URL for the error. Eg: `/api/student/profile`
 * @property {Error} [error] The original JavaScript Error object. Eg: `new Error('API ERROR')`
 */

/**
 * Fires a new global error event
 *
 * @param {ErrorType} newError the error package
 */
// eslint-disable-next-line import/prefer-default-export

export var pushGlobalError = function pushGlobalError(newError) {
  var event = new CustomEvent(events.GENERAL_ERROR, {
    detail: newError
  });
  window.dispatchEvent(event);
};