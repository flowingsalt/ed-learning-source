import getHexFromVariable from './getHexFromVariable'; // Note: Default HEX values are needed for tests to run

export default (function (styles) {
  return {
    primary: {
      main: getHexFromVariable('--ebl-action-color', styles) || '#065ec2',
      light: getHexFromVariable('--ebl-light-action-color', styles) || '#cee6ff',
      dark: getHexFromVariable('--ebl-dark-action-color', styles) || '#004fa8'
    },
    secondary: {
      main: getHexFromVariable('--ebl-brand', styles) || '#ffbb00',
      light: getHexFromVariable('--ebl-light-brand', styles) || '#ffe5ad'
    },
    action: {
      disabled: getHexFromVariable('--ebl-disabled-color', styles) || '#cacfd1',
      // Set for disabled state of components - class .Mui-disabled
      disabledBackground: getHexFromVariable('--ebl-disabled-color', styles) || '#cacfd1' // Set for disabled state of components - class .Mui-disabled

    },
    text: {
      disabled: getHexFromVariable('--ebl-disabled-color', styles) || '#cacfd1' // Set for disabled text state of components - class .Mui-disabled

    },
    error: {
      main: getHexFromVariable('--ebl-signal-error', styles) || '#d62424',
      background: getHexFromVariable('--ebl-alert-notif-error-bg', styles) || '#fae1f9'
    },
    success: {
      main: getHexFromVariable('--ebl-signal-success', styles) || '#2f8717',
      background: getHexFromVariable('--ebl-alert-notif-success-bg', styles) || '#2f8717'
    },
    info: {
      main: getHexFromVariable('--ebl-signal-info', styles) || '#007db3',
      background: getHexFromVariable('--ebl-alert-notif-info-bg', styles) || '#007db3'
    },
    warning: {
      main: getHexFromVariable('--ebl-signal-warning', styles) || '#ee6b00',
      background: getHexFromVariable('--ebl-alert-notif-warning-bg', styles) || '#ffedd9'
    },
    background: {
      "default": getHexFromVariable('var(--ebl-white)', styles) || '#fff'
    }
  };
});