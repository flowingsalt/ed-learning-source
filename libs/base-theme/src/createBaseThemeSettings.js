import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import merge from 'lodash/merge';
import '@ed/baseline/styles/import-cts.css';
import defaultPalette from './styles/defaultPalette';
import defaultTypography from './styles/defaultTypography';
export default (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var palette = merge({}, defaultPalette, options.palette || {});
  var typography = merge({}, defaultTypography, options.typography || {});
  var _options$cssVariables = options.cssVariables,
      cssVariables = _options$cssVariables === void 0 ? {} : _options$cssVariables;
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600
      }
    },
    typography: typography,
    palette: palette,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: _objectSpread({}, typography.body2),
          ':root': _objectSpread({}, cssVariables)
        }
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            padding: '0 0',
            minWidth: 'var(--ebl-alert-notif-min-width)',
            borderRadius: 'var(--ebl-alert-banner-radius)'
          },
          standardInfo: {
            backgroundColor: palette.info.background
          },
          standardSuccess: {
            backgroundColor: palette.success.background
          },
          standardWarning: {
            backgroundColor: palette.warning.background
          },
          standardError: {
            backgroundColor: palette.error.background
          },
          message: {
            padding: 'var(--ebl-alert-notif-padding) var(--ebl-alert-notif-padding) var(--ebl-alert-notif-padding) var(--ebl-alert-notif-icon-margin-right)',
            maxWidth: '100%',
            flexGrow: '2'
          },
          icon: {
            paddingTop: 'var(--ebl-alert-notif-padding)',
            paddingLeft: 'var(--ebl-alert-notif-padding)',
            marginRight: '0'
          },
          action: {
            paddingTop: '0'
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            margin: 'var(--ebl-s1)'
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--ebl-card-radius)'
          }
        }
      },
      MuiCheckbox: {
        defaultProps: {
          disableRipple: true,
          color: 'primary'
        },
        styleOverrides: {
          root: {
            margin: 'var(--ebl-s2)',
            padding: '0',
            '&.Mui-focusVisible': {
              boxShadow: 'var(--ebl-focus-ring)',
              borderRadius: '0.3125rem'
            },
            '&.MuiCheckbox-indeterminate': {
              color: 'var(--ebl-mid-gray)'
            }
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            color: palette.action.disabledBackground,
            marginTop: '0px',
            marginBottom: '0px !important'
          }
        }
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontFamily: 'var(--ebl-wf-headings)',
            fontSize: 'var(--ebl-sh3)',
            lineHeight: 'var(--ebl-sh3-line-height)',
            letterSpacing: 'var(--ebl-sh3-letter-spacing)',
            color: 'var(--ebl-sh3-color)',
            fontWeight: 'var(--ebl-sh3-weight)',
            textTransform: 'none'
          },
          root: {
            marginLeft: '0',
            marginRight: '0'
          }
        }
      },
      MuiFormControl: {
        defaultProps: {
          margin: 'dense'
        },
        styleOverrides: {
          marginDense: {
            marginTop: 0,
            marginBottom: 'var(--ebl-input-marginbottom)'
          }
        }
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
          focusRipple: false
        },
        styleOverrides: {
          root: {
            '&:disabled': {
              cursor: 'not-allowed',
              pointerEvents: 'auto'
            },
            '&:focus': {
              outlineWidth: '0'
            }
          }
        }
      },
      MuiButtonGroup: {
        defaultProps: {
          disableRipple: true
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: 'var(--ebl-wf-headings)',
            fontWeight: 'var(--ebl-wf-headings-weight)',
            borderRadius: 'var(--ebl-button-radius)',
            display: 'flex',
            margin: 'var(--ebl-s2)'
          },
          endIcon: {
            alignItems: 'baseline',
            lineHeight: '0',
            marginLeft: 'var(--ebl-s3)',
            marginRight: '0'
          },
          startIcon: {
            alignItems: 'baseline',
            lineHeight: '0',
            marginRight: 'var(--ebl-s2)',
            marginLeft: '0'
          },
          contained: {
            boxShadow: 'none',
            '&:active': {
              boxShadow: 'none',
              backgroundColor: palette.primary.dark
            },
            '&:disabled': {
              backgroundColor: "".concat(palette.action.disabled, " !important"),
              // !important to preserve color on hover
              color: 'var(--ebl-text-white)'
            },
            '&:focus': {
              backgroundColor: palette.primary.main,
              boxShadow: 'var(--ebl-focus-ring)',
              color: 'var(--ebl-text-white)'
            },
            '&:hover:not(:disabled)': {
              backgroundColor: palette.primary.main,
              boxShadow: 'var(--ebl-button-hover-shadow)',
              color: 'var(--ebl-text-white)'
            }
          },
          text: {
            boxShadow: 'none',
            color: palette.primary.main,
            textDecoration: 'var(--ebl-button-frameless-text-decoration)',
            backgroundColor: 'var(--ebl-button-frameless-normal-bg)',
            border: 'var(--ebl-button-frameless-normal-border)',
            '&:active': {
              boxShadow: 'none',
              border: "solid 1px ".concat(palette.primary.main),
              backgroundColor: palette.primary.light,
              textDecoration: 'var(--ebl-button-frameless-text-decoration)'
            },
            '&:disabled': {
              backgroundColor: "".concat(palette.action.disabled, " !important"),
              // !important to preserve color on hover
              color: 'var(--ebl-text-white)',
              boxShadow: 'none !important'
            },
            '&.Mui-focusVisible': {
              boxShadow: 'var(--ebl-focus-ring)'
            },
            '&:hover': {
              backgroundColor: 'var(--ebl-button-frameless-hover-bg)',
              boxShadow: 'var(--ebl-button-hover-shadow)',
              border: 'var(--ebl-button-frameless-hover-border)',
              textDecoration: 'var(--ebl-button-frameless-text-decoration)'
            }
          },
          outlined: {
            backgroundColor: 'var(--ebl-button-outlined-normal-bg)',
            border: "solid 1px ".concat(palette.primary.main),
            color: palette.primary.main,
            '&:active': {
              backgroundColor: palette.primary.light
            },
            '&:disabled': {
              border: 'none',
              backgroundColor: "".concat(palette.action.disabledBackground, " !important"),
              color: 'var(--ebl-text-white)',
              boxShadow: 'none !important'
            },
            '&:focus': {
              backgroundColor: 'var(--ebl-button-outlined-normal-bg)',
              boxShadow: 'var(--ebl-focus-ring)'
            },
            '&:hover': {
              backgroundColor: 'var(--ebl-button-outlined-hover-bg)',
              boxShadow: 'var(--ebl-button-hover-shadow)'
            }
          },
          sizeSmall: {
            height: 'var(--ebl-button-height-sm)',
            fontSize: 'var(--ebl-button-text-size-sm)',
            paddingLeft: 'var(--ebl-button-padding)',
            paddingRight: 'var(--ebl-button-padding)'
          },
          sizeLarge: {
            height: 'var(--ebl-button-height-lg)',
            fontSize: 'var(--ebl-button-text-size-lg)',
            paddingLeft: 'var(--ebl-button-padding)',
            paddingRight: 'var(--ebl-button-padding)'
          }
        }
      },
      MuiIconButton: {
        defaultProps: {
          color: 'primary',
          variant: 'frameless',
          size: 'large'
        },
        variants: [{
          props: {
            variant: 'contained'
          },
          style: function style(_ref) {
            var ownerState = _ref.ownerState,
                theme = _ref.theme;
            var color = ownerState.color;

            var _ref2 = theme.palette[color] || {
              // defaults for "inherit" color
              main: theme.palette.grey[600],
              dark: theme.palette.grey[800]
            },
                main = _ref2.main,
                dark = _ref2.dark;

            return {
              color: 'var(--ebl-text-white)',
              backgroundColor: main,
              '&:active:not(:disabled)': {
                boxShadow: 'none',
                backgroundColor: dark
              },
              '&:hover': {
                backgroundColor: main,
                boxShadow: 'var(--ebl-button-hover-shadow)'
              }
            };
          }
        }, {
          props: {
            variant: 'outlined'
          },
          style: function style(_ref3) {
            var ownerState = _ref3.ownerState,
                theme = _ref3.theme;
            var color = ownerState.color;

            var _ref4 = theme.palette[color] || {
              // defaults for "inherit" color
              light: theme.palette.grey[300]
            },
                light = _ref4.light,
                background = _ref4.background;

            var activeBackground = background || light; // background looks better for status colors like success/error

            return {
              border: "solid 1px",
              backgroundColor: 'var(--ebl-button-outlined-normal-bg) !important',
              // !important to override Arvo main.less file
              padding: 'var(--ebl-s2)',
              '&:active:not(:disabled)': {
                boxShadow: 'none',
                backgroundColor: activeBackground
              },
              '&:hover': {
                backgroundColor: 'var(--ebl-button-outlined-hover-bg)',
                boxShadow: 'var(--ebl-button-hover-shadow)'
              }
            };
          }
        }, {
          props: {
            variant: 'frameless'
          },
          style: function style(_ref5) {
            var ownerState = _ref5.ownerState,
                theme = _ref5.theme;
            var color = ownerState.color;

            var _ref6 = theme.palette[color] || {
              // defaults for "inherit" color
              light: theme.palette.grey[300],
              main: theme.palette.grey[600]
            },
                light = _ref6.light,
                background = _ref6.background,
                main = _ref6.main;

            var activeBackground = background || light; // background looks better for status colors like success/error

            return {
              backgroundColor: 'var(--ebl-button-frameless-normal-bg) !important',
              // !important to override Arvo main.less file
              border: 'var(--ebl-button-frameless-normal-border) !important',
              // !important to override Arvo main.less file
              padding: 'var(--ebl-s1)',
              '&:active:not(:disabled)': {
                boxShadow: 'none',
                border: "solid 1px ".concat(main),
                backgroundColor: activeBackground
              },
              '&:hover': {
                backgroundColor: 'var(--ebl-button-frameless-hover-bg)',
                boxShadow: 'var(--ebl-button-hover-shadow)',
                border: 'var(--ebl-button-frameless-hover-border)'
              },
              '@media (hover: none)': {
                '&:hover': {
                  backgroundColor: 'var(--ebl-button-frameless-hover-bg) !important'
                }
              }
            };
          }
        }],
        styleOverrides: {
          root: {
            boxShadow: 'none',
            fontSize: 'var(--ebl-button-text-size-lg)',
            borderRadius: 'var(--ebl-button-radius)',
            margin: 'var(--ebl-s2)',
            height: 'var(--ebl-button-height-lg)',
            width: 'var(--ebl-button-height-lg)',
            '&.Mui-focusVisible': {
              boxShadow: 'var(--ebl-focus-ring)'
            },
            '&:disabled': {
              backgroundColor: "".concat(palette.action.disabledBackground, " !important"),
              color: 'var(--ebl-text-white)',
              boxShadow: 'none !important',
              border: 'none'
            }
          },
          sizeSmall: {
            height: 'var(--ebl-button-height-sm) !important',
            // !important to override Arvo main.less file
            width: 'var(--ebl-button-height-sm)',
            fontSize: 'var(--ebl-button-text-size-sm)',
            padding: 'var(--ebl-s1)'
          }
        }
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            margin: 'var(--ebl-s2)',
            fontFamily: 'var(--ebl-wf-headings)'
          },
          colorDefault: {
            backgroundColor: 'var(--ebl-black)'
          }
        }
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              backgroundColor: 'var(--ebl-tert-nav-bg-selected)'
            }
          },
          gutters: {
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 'var(--ebl-s3)'
          }
        }
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            marginRight: 0
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: 'var(--ebl-wf-headings)',
            color: 'var(--ebl-text-black)',
            height: 'var(--ebl-s7)',
            paddingLeft: 0,
            marginRight: 'var(--ebl-s6)',
            '&[data-align="right"]': {
              paddingRight: 'var(--ebl-s3)',
              paddingLeft: 0
            }
          },
          head: {
            whiteSpace: 'nowrap',
            lineHeight: 'inherit'
          }
        }
      },
      MuiTable: {
        styleOverrides: {
          root: {
            minWidth: 768,
            borderRadius: 'var(--ebl-s1)',
            border: 'solid 1px var(--ebl-card-border-color)',
            borderCollapse: 'separate'
          }
        }
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            height: 'var(--ebl-s7)',
            letterSpacing: 'var(--ebl-p2-letter-spacing)',
            color: 'var(--ebl-text-gray)',
            paddingLeft: 0,
            '& tr > th': {
              borderBottomColor: palette.secondary.main,
              borderBottomWidth: 'var(--ebl-table-header-border-width)',
              textTransform: 'uppercase',
              fontSize: 'var(--ebl-sh4)',
              fontWeight: 700,
              color: 'var(--ebl-text-gray)',
              '&[data-align="right"]': {
                paddingRight: 'var(--ebl-s3)',
                paddingLeft: 0
              },
              '& .zero-dimensions': {
                width: '0',
                height: '0',
                overflow: 'hidden',
                margin: '0'
              }
            }
          }
        }
      },
      MuiTableSortLabel: {
        styleOverrides: {
          root: {
            '&.Mui-active': {
              color: 'var(--ebl-text-black)'
            }
          }
        }
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            borderTopWidth: 'var(--ebl-s1)',
            '& tr > td ': {
              whiteSpace: 'nowrap'
            },
            '& tr >td:first-of-type': {
              whiteSpace: 'normal'
            },
            '& tr:nth-of-type(even)': {
              backgroundColor: 'var(--ebl-light-gray)'
            }
          }
        }
      },
      MuiTableFooter: {
        styleOverrides: {
          root: {
            '& > tr > td': {
              border: 'none'
            }
          }
        }
      },
      MuiTablePagination: {
        styleOverrides: {
          root: {
            border: 'solid',
            borderWidth: 1,
            borderColor: 'var(--ebl-card-border-color)',
            height: 'auto'
          },
          actions: {
            '& button': {
              border: 'inherit'
            },
            '& svg': {
              color: palette.primary.main
            }
          },
          selectRoot: {
            paddingTop: 4
          },
          input: {
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 4,
            borderColor: 'var(--ebl-card-border-color)'
          }
        }
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            subtitle1: 'p',
            subtitle2: 'p'
          }
        },
        styleOverrides: {
          // styling specific to Links
          colorPrimary: {
            color: 'var(--ebl-link-normal-color)'
          }
        }
      },
      MuiLink: {
        defaultProps: {
          underline: 'none' // we set this to none so that we can use ed/baseline to control the text decoration in the overrides below

        },
        styleOverrides: {
          root: {
            color: 'var(--ebl-link-normal-color) !important',
            textDecoration: 'var(--ebl-link-normal-text-decoration) !important',
            // !important to override the MUI underline prop on MUILink set above to 'none'
            '&:hover': {
              // = #2d2d2d not used because of the important before
              color: 'var(--ebl-link-hover-color)',
              textDecoration: 'var(--ebl-link-hover-text-decoration)'
            },
            '&.Mui-focusVisible': {
              outline: 'none',
              boxShadow: 'var(--ebl-focus-ring)',
              borderRadius: '0.05rem'
            },
            '&:active': {
              // = #2d2d2d not used because of important
              color: 'var(--ebl-link-active-color)',
              textDecoration: 'var(--ebl-link-active-text-decoration)'
            },
            '&:visited': {
              // = #853fba not used because of important
              color: 'var(--ebl-link-visited-color)',
              textDecoration: 'var(--ebl-link-visited-text-decoration)'
            }
          }
        }
      },
      MuiSelect: {
        defaultProps: {
          variant: 'outlined',
          margin: 'dense',
          MenuProps: {
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            }
          }
        },
        styleOverrides: {
          root: {
            fontFamily: 'var(--ebl-wf-body)'
          },
          select: {
            '&:focus': {
              backgroundColor: 'transparent',
              boxShadow: 'var(--ebl-focus-ring)'
            }
          },
          icon: {
            color: 'inherit',
            marginLeft: 'var(--ebl-dropdown-icon-margin-left)'
          }
        }
      },
      MuiInputLabel: {
        defaultProps: {
          disableAnimation: true,
          shrink: true
        },
        styleOverrides: {
          root: {
            fontFamily: 'var(--ebl-wf-headings)'
          },
          formControl: _objectSpread({
            position: 'relative',
            transform: 'none !important',
            marginBottom: 'var(--ebl-input-label-margin-bottom)'
          }, typography.subtitle2),
          outlined: _objectSpread({
            position: 'relative',
            transform: 'none !important',
            marginBottom: 'var(--ebl-input-label-margin-bottom)'
          }, typography.subtitle2)
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginTop: 'var(--ebl-s1)',
            color: 'var(--ebl-text-black)',
            fontFamily: 'var(--ebl-wf-headings)',
            '&.Mui-error': {
              marginLeft: 'var(--ebl-input-padding-left)'
            }
          }
        }
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            minWidth: 'var(--ebl-dropdown-min-width)',
            '& [class*="MuiIconButton-root"]': {
              margin: '-2px',
              height: 'var(--ebl-button-height-sm)',
              width: 'var(--ebl-button-height-sm)',
              borderRadius: '1rem',
              '&:hover': {
                boxShadow: 'none'
              },
              '&:active:not(:disabled)': {
                backgroundColor: 'unset',
                border: 'none'
              }
            },
            '& [class*="MuiFormControl-root"]': {
              marginTop: '0px'
            }
          },
          paper: {
            boxShadow: 'var(--ebl-dropdown-panel-shadow)'
          },
          listbox: {
            '& > .MuiAutocomplete-option': {
              height: 'auto',
              display: 'block',
              paddingLeft: 'var(--ebl-s3)',
              paddingRight: 'var(--ebl-s3)',
              paddingTop: 'var(--ebl-s2)',
              paddingBottom: 'var(--ebl-s2)'
            }
          },
          option: {
            fontSize: 'var(--ebl-p2)',
            height: 'var(--ebl-dropdown-li-height)',
            '&[aria-selected="true"]': {
              backgroundColor: 'var(--ebl-dropdown-li-selected-color) !important'
            },
            border: '2px solid transparent',
            '&.Mui-focused': {
              '&[aria-selected="false"]': {
                backgroundColor: 'var(--ebl-white) !important',
                borderColor: 'var(--ebl-focus-color)'
              }
            },
            '&:hover': {
              '&[aria-selected="false"]': {
                backgroundColor: 'var(--ebl-dropdown-li-hover-color) !important',
                borderColor: 'transparent'
              }
            }
          },
          popupIndicator: {
            color: 'inherit',
            marginLeft: 'var(--ebl-dropdown-icon-margin-left)'
          }
        }
      },
      MuiOutlinedInput: {
        defaultProps: {
          notched: false
        },
        styleOverrides: {
          root: _objectSpread(_objectSpread({
            minHeight: 'var(--ebl-input-height)',
            maxHeight: 'var(--ebl-input-max-height)'
          }, typography.body2), {}, {
            '& fieldset': {
              border: '1px solid var(--ebl-input-border-color)'
            },
            '&.Mui-disabled fieldset': {
              cursor: 'not-allowed',
              pointerEvents: 'auto'
            },
            '&.Mui-focused fieldset': {
              boxShadow: 'var(--ebl-focus-ring)',
              borderRadius: 'var(--ebl-input-radius)',
              border: '1px solid var(--ebl-input-border-color) !important'
            },
            '&.Mui-error fieldset': {
              border: 'var(--ebl-input-border-error) !important'
            },
            '&:hover:not($disabled):not($error) fieldset': {
              borderColor: 'var(--ebl-input-border-hover-color)'
            }
          }),
          inputSizeSmall: {
            // prevent double padding in multiline inputs
            '&.:not(textarea)': {
              paddingLeft: 'var(--ebl-input-padding-left)',
              paddingRight: 'var(--ebl-input-padding-right)'
            }
          }
        }
      },
      MuiMenu: {
        defaultProps: {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
          }
        },
        styleOverrides: {
          paper: {
            '&.MuiPaper-root': {
              border: '1px solid var(--ebl-dropdown-border-color)',
              borderRadius: 'var(--ebl-dropdown-border-radius)',
              boxShadow: 'var(--ebl-dropdown-panel-shadow)',
              maxHeight: 'var(--ebl-dropdown-panel-max-height)'
            }
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: 'var(--ebl-wf-headings)',
            height: 'var(--ebl-dropdown-li-height)',
            fontSize: 'var(--ebl-sh3)',
            padding: '0px var(--ebl-s3) !important',
            '&:hover': {
              backgroundColor: 'var(--ebl-dropdown-li-hover-color)'
            },
            '&.Mui-selected': {
              backgroundColor: 'var(--ebl-dropdown-li-selected-color)',
              '&:hover': {
                backgroundColor: 'var(--ebl-dropdown-li-hover-color)'
              },
              '&.Mui-focusVisible': {
                backgroundColor: 'rgba(0, 0, 0, 0.12)' // set to match other options

              }
            },
            '& [class*="MuiIconButton-root"]': {
              // Checkbox Icon unique to multi-select dropdown
              width: 0,
              height: 0
            }
          }
        }
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--ebl-linear-progress-bar-radius)',
            height: 'var(--ebl-linear-progress-bar-height)',
            flexGrow: 1
          },
          colorPrimary: {
            backgroundColor: 'var(--ebl-linear-progress-range-color)'
          },
          bar: {
            borderRadius: 'var(--ebl-linear-progress-bar-radius)'
          },
          barColorPrimary: {
            backgroundColor: 'var(--ebl-linear-progress-value-color)'
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            position: 'absolute',
            flexGrow: 1,
            width: '100%',
            borderBottom: 'var(--ebl-tert-nav-border-bottom)'
          },
          indicator: {
            borderBottom: 'var(--ebl-tert-nav-indicator-border)',
            borderBottomColor: palette.primary.main
          },
          scrollButtons: {
            '&:hover': {
              backgroundColor: 'var(--ebl-tert-nav-scroll-hover)'
            }
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: _objectSpread(_objectSpread({}, typography.subtitle1), {}, {
            border: 'var(--ebl-tert-nav-indicator-border)',
            borderLeft: 'none',
            borderRight: 'none',
            borderColor: 'transparent',
            height: 'var(--ebl-tert-nav-height)',
            padding: '0 var(--ebl-tert-nav-tabs-padding)',
            '&:hover': {
              borderBottomColor: palette.primary.light
            },
            '&:focus': {
              border: '0.0625rem solid var(--ebl-focus-color)'
            },
            '&.Mui-selected': {
              color: typography.subtitle1.color
            }
          }),
          textColorInherit: {
            fontSize: 'var(--ebl-sh1)',
            opacity: 1
          }
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            margin: 0
          }
        }
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '0',
            borderTop: '1px var(--ebl-border-hairline-gray) solid',
            paddingTop: 'var(--ebl-modal-button-group-margin-top)',
            marginLeft: 'var(--ebl-modal-padding)',
            marginRight: 'var(--ebl-modal-padding)',
            justifyContent: 'space-between'
          }
        }
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: 'var(--ebl-modal-padding) var(--ebl-modal-padding) var(--ebl-modal-title-margin-bottom) var(--ebl-modal-padding)'
          }
        }
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: '0 var(--ebl-modal-padding)'
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: _objectSpread(_objectSpread({}, typography.subtitle2), {}, {
            '&.Mui-focused:not(.Mui-error)': {
              color: 'inherit'
            }
          })
        }
      },
      MuiFormGroup: {
        styleOverrides: {
          root: {
            fontFamily: 'var(--ebl-s4)',
            color: 'var(--ebl-black)',
            fontWeight: 'var(--ebl-sh2-weight)',
            fontSize: 'var(--ebl-sh2)'
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            padding: 'var(--ebl-s2)',
            '&:hover': {
              boxShadow: 'none',
              backgroundColor: 'transparent'
            },
            '&.Mui-focusVisible': {
              '& span': {
                boxShadow: 'var(--ebl-focus-ring)',
                borderRadius: '0.1rem' // square

              }
            },
            '&.MuiIconButton-root': {
              margin: '0'
            }
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 'var(--ebl-s2)'
          },
          outlined: {
            border: '1px solid var(--ebl-card-border-color)'
          }
        }
      },
      MuiInputBase: {
        defaultProps: {
          size: 'small'
        },
        styleOverrides: {
          inputSizeSmall: {
            paddingLeft: 'var(--ebl-input-padding-left)',
            paddingRight: 'var(--ebl-input-padding-right)'
          },
          input: {
            '&::placeholder': {
              color: 'var(--ebl-text-gray)',
              opacity: 1
            }
          }
        }
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            color: palette.primary.main,
            minWidth: 'var(--ebl-slider-minwidth)',
            marginTop: 'var(--ebl-slider-margintop)',
            width: '100%',
            alignSelf: 'center',
            marginLeft: 'var(--ebl-slider-padding)',
            marginReft: 'var(--ebl-slider-padding)'
          },
          rail: {
            color: 'var(--ebl-mid-gray)',
            height: 'var(--ebl-slider-range-height)',
            opacity: 1,
            borderRadius: 'var(--ebl-slider-range-borderradius)',
            paddingLeft: 'var(--ebl-slider-padding)',
            paddingRight: 'var(--ebl-slider-padding)',
            width: '100%'
          },
          track: {
            height: 'var(--ebl-slider-range-height)',
            border: 'none'
          },
          thumb: {
            height: 25,
            width: 25,
            backgroundColor: 'var(--ebl-text-white)',
            border: 'var(--ebl-slider-thumb-border)'
          }
        }
      },
      MuiTextField: {
        defaultProps: {
          margin: 'dense',
          variant: 'outlined'
        }
      },
      MuiToolbar: {
        styleOverrides: {
          regular: {
            height: 'var(--ebl-nav-height)',
            padding: '0 var(--ebl-nav-padding-left) 0 var(--ebl-nav-padding-right)',
            '@media (min-width: 600px)': {
              padding: '0 var(--ebl-nav-padding-left) 0 var(--ebl-nav-padding-right)'
            }
          }
        }
      },
      MuiToggleButton: {
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
          focusRipple: false
        }
      },
      MuiWithWidth: {
        defaultProps: {
          initialWidth: 'lg'
        }
      }
    }
  };
});