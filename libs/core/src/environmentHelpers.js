export var isRunningInEd = function isRunningInEd() {
  return Boolean(window.HMH_ENV);
};
export var isRunningInAmp = function isRunningInAmp() {
  return Boolean(process.env.RUNTIME_ENV || window.RUNTIME_ENV);
};
export var getEnvironment = function getEnvironment() {
  return process.env.RUNTIME_ENV || window.RUNTIME_ENV || window.HMH_ENV;
};