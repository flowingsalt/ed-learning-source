import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _HELP_URLS;

import { ADMIN_ED_HELP_URL } from '@hmhco/rostering-preferences/src/constants';
import { TEACHER_HELP, STUDENT_HELP } from '@hmhco/url-builders/src/constants';
import { ROLES } from '../constants'; // no beginning and trailing slashes required for the routes!

export var TEACHER_DATA_AND_REPORTS = 'my-classes/reports';
export var CLASS_SETUP = 'manage-programs';
export var MATH_SGM_WINDOW = 'product/math-gm';
export var READING_SGM_WINDOW = 'product/reading-gm';
export var SPANISH_SGM_WINDOW = 'product/spanish-growth-measure';
export var PROMOTIONS = 'updates';
var HELP_URLS = (_HELP_URLS = {}, _defineProperty(_HELP_URLS, ROLES.ADMIN, ADMIN_ED_HELP_URL), _defineProperty(_HELP_URLS, ROLES.TEACHER, TEACHER_HELP), _defineProperty(_HELP_URLS, ROLES.STUDENT, STUDENT_HELP), _HELP_URLS);
export var getHelpRoute = function getHelpRoute(role) {
  return HELP_URLS[role] || HELP_URLS[ROLES.TEACHER];
};