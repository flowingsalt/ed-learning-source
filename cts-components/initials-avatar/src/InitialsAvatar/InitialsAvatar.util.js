/* eslint-disable import/prefer-default-export */
import { isString } from 'util';

var getInitial = function getInitial(name) {
  return isString(name) ? name.trimStart().charAt(0) : '';
};

export var getInitials = function getInitials() {
  var forename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var surname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var initials = getInitial(forename) + getInitial(surname);
  return initials.toUpperCase();
};