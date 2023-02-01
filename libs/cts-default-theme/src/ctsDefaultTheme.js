import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { createBaseThemeSettings } from '@hmhco/base-theme';
var ctsDefaultThemeSettings = {
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          border: 'var(--ebl-button-toggle-container-border)',
          padding: 'var(--ebl-button-toggle-container-padding)',
          borderRadius: 'var(--ebl-button-toggle-container-radius)',
          backgroundColor: 'var(--ebl-button-toggle-bg)',
          margin: 'var(--ebl-s2)'
        },
        grouped: {
          borderRadius: 'var(--ebl-button-toggle-radius) !important',
          border: 'none',
          '&:not(:first-of-type)': {
            marginLeft: 0,
            borderLeft: 'none'
          }
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: 'var(--ebl-button-toggle-text-color)',
          fontFamily: 'var(--ebl-wf-headings)',
          fontWeight: 'var(--ebl-wf-headings-weight)',
          border: 'none',
          '&:not(.Mui-selected)': {
            zIndex: '100',
            textDecoration: 'var(--ebl-button-toggle-text-decoration)',
            '&:disabled': {
              backgroundColor: 'var(--ebl-button-toggle-bg)',
              color: 'var(--ebl-disabled-color)',
              boxShadow: 'none',
              border: 'none'
            }
          },
          '&.Mui-selected': {
            color: 'var(--ebl-button-toggle-active-text-color)',
            backgroundColor: 'var(--ebl-button-toggle-active-bg)',
            textDecoration: 'var(--ebl-button-toggle-active-text-decoration)',
            '&:disabled': {
              backgroundColor: 'var(--ebl-button-disabled-bg)',
              color: 'var(--ebl-text-white)',
              boxShadow: 'none'
            },
            '&:focus': {
              boxShadow: 'none'
            },
            '&:hover': {
              color: 'var(--ebl-button-toggle-active-text-color)',
              backgroundColor: 'var(--ebl-button-toggle-active-bg)',
              boxShadow: 'none'
            }
          },
          '&:disabled': {
            backgroundColor: 'var(--ebl-button-disabled-bg)',
            color: 'var(--ebl-text-white)',
            boxShadow: 'none'
          },
          '&:focus:not(:hover)': {
            boxShadow: 'var(--ebl-focus-ring)'
          },
          '&:hover': {
            backgroundColor: 'var(--ebl-button-toggle-hover-bg)',
            border: 'none'
          }
        },
        label: {
          pointerEvents: 'none'
        },
        sizeSmall: {
          height: 'var(--ebl-toggle-button-height-sm)',
          fontSize: 'var(--ebl-button-text-size-sm)',
          paddingLeft: 'var(--ebl-button-padding) !important',
          paddingRight: 'var(--ebl-button-padding) !important'
        },
        sizeLarge: {
          height: 'var(--ebl-toggle-button-height-lg)',
          fontSize: 'var(--ebl-button-text-size-lg)',
          paddingLeft: 'var(--ebl-button-padding) !important',
          paddingRight: 'var(--ebl-button-padding) !important'
        }
      }
    }
  },
  zIndex: {
    // Needed for appbar to work correctly with Discover
    appBar: 3000,
    drawer: 3100,
    modal: 3200,
    snackbar: 3300,
    tooltip: 3400
  }
};
export default createTheme(deepmerge(createBaseThemeSettings(), ctsDefaultThemeSettings));