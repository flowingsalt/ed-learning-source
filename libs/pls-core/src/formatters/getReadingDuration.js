import durationFormatter from './durationFormatter';

var getReadingDuration = function getReadingDuration(durationSecs, readText, isResourceTypeRead) {
  var durationFormatted = durationFormatter(durationSecs);
  return isResourceTypeRead ? "".concat(durationFormatted, " ").concat(readText) : durationFormatted;
};

export default getReadingDuration;