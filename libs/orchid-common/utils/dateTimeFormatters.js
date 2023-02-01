import moment from 'moment-timezone';
export var ASSIGNMENT_SERVICE_DATE_FORMAT = 'YYYYMMDD-HHmm';
export var SIGNATURE_SERVICE_DATE_FORMAT = 'YYYYMMDD-MMSS';
export var LICENSING_SERVICE_DATE_FORMAT = 'YYYY-MM-DD'; // also moment.HTML5_FMT.DATE

export var LICENSING_UI_FORMAT = 'MMM DD, YYYY';
export var ABBREVIATED_DATE_FORMAT = 'MMM DD, YYYY';
export var ABBREVIATED_MONTH_FORMAT = 'MMM';
export var LOCALE_DATE_FORMAT = 'l';
export function getCurrentTimestampForAssignmentService() {
  return formatDateForAssignmentServices(moment());
}
export function getCurrentTimestampForSignatureService() {
  return formateDateSignatureService(moment());
}
export function formatDateForAssignmentServices(date) {
  return moment(date).utc().format(ASSIGNMENT_SERVICE_DATE_FORMAT);
}
export function formateDateSignatureService(date) {
  return formatDate(date, SIGNATURE_SERVICE_DATE_FORMAT);
}
export function formatDateAbbreviated(date) {
  return moment(date).utc().format(ABBREVIATED_DATE_FORMAT);
}
export function formatMonthAbbreviated(date) {
  return formatDate(date, ABBREVIATED_MONTH_FORMAT);
}
export function formatLocaleDate(date) {
  return formatDate(date, LOCALE_DATE_FORMAT);
}
export function formatHTML5Date(date) {
  return formatDate(date, moment.HTML5_FMT.DATE);
}
export function formatLocalDateTimeSeconds(date) {
  return formatDate(date, moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
}

function formatDate(date, formatType) {
  return moment(new Date(date)).format(formatType);
}