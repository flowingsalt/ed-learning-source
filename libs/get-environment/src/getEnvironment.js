/* eslint-disable import/prefer-default-export */
export var getEnvironment = function getEnvironment() {
  return process.env.RUNTIME_ENV || process.env.STORYBOOK_ENV || window.RUNTIME_ENV || window.HMH_ENV;
};