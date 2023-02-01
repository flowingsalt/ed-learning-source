import secondsToHMS from './secondsToHMS';
export default function durationFormatter(value) {
  var pad = function pad(hmsPart) {
    return hmsPart.toString().padStart(2, '0');
  };

  var _secondsToHMS = secondsToHMS(value),
      hours = _secondsToHMS.hours,
      minutes = _secondsToHMS.minutes;

  var duration = "".concat(hours, "h");

  if (hours && minutes) {
    duration = duration.concat(" ".concat(pad([minutes]), "m"));
  }

  if (!hours && minutes) {
    duration = "".concat(minutes, "m");
  }

  if (!hours && !minutes) {
    duration = '1m';
  }

  return duration;
}