import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'Tabs'
})(function (theme, _ref) {
  var _after;

  var disabledButtons = _ref.disabledButtons,
      disableDefaultPanelStyling = _ref.disableDefaultPanelStyling,
      wrapped = _ref.wrapped;
  return {
    container: {
      position: 'relative'
    },
    tabs: {
      position: 'relative',
      '& .MuiTabScrollButton-root.Mui-disabled': {
        display: Object.values(disabledButtons || {}).every(function (disabled) {
          return disabled === true;
        }) ? 'none' : 'inline-flex',
        opacity: 1,
        color: 'var(--ebl-disabled-color)'
      }
    },
    tab: {
      fontSize: 'var(--ebl-sh1)',
      border: '0',
      color: 'var(--ebl-action-color)',
      '&:hover': {
        '&::after': (_after = {
          height: '4px'
        }, _defineProperty(_after, theme.breakpoints.down('lg'), {
          height: '2px'
        }), _defineProperty(_after, "position", 'absolute'), _defineProperty(_after, "bottom", '0px'), _defineProperty(_after, "width", '100%'), _defineProperty(_after, "background", 'var(--ebl-light-action-color)'), _defineProperty(_after, "borderBottom", 'var(--ebl-tert-nav-indicator-border)'), _defineProperty(_after, "borderBottomColor", 'var(--ebl-light-action-color)'), _defineProperty(_after, "content", '""'), _after)
      },
      '&.Mui-focusVisible': {
        border: '3px solid',
        borderColor: 'var(--ebl-focus-color)',
        zIndex: 1,
        boxShadow: 'none',
        '&:hover': {
          '&::after': {
            opacity: 0
          }
        }
      },
      '&:active': {
        border: 0
      },
      '&.Mui-selected': {
        border: 0,
        '& svg': {
          fill: 'var(--ebl-sh1-color)'
        },
        '&.Mui-focusVisible': {
          borderColor: 'var(--ebl-focus-color)',
          border: '3px solid',
          zIndex: 1,
          boxShadow: 'none'
        }
      },
      '&.Mui-disabled': {
        '&:hover': {
          '&::after': {
            opacity: 0
          }
        }
      },
      '&.MuiTab-wrapped': {
        fontSize: 'var(--ebl-sh3)',
        lineHeight: '18px',
        paddingBottom: '4px'
      },
      height: wrapped ? 'auto' : null,
      '& svg': {
        fill: 'var(--ebl-action-color)',
        lineHeight: 'var(--ebl-sh1-line-height)'
      }
    },
    indicator: {
      backgroundColor: 'var(--ebl-action-color)',
      borderBottomColor: 'var(--ebl-action-color)'
    },
    tabPanel: {
      paddingTop: disableDefaultPanelStyling ? 0 : 'var(--ebl-s3)'
    }
  };
});