export default function secondsToHMS(value) {
  var hours = Math.floor(value / 3600);
  var minutes = Math.floor((value - hours * 3600) / 60);
  var seconds = value - hours * 3600 - minutes * 60;
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}