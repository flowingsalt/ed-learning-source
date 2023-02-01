import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'TertiaryNavDesktopItem'
})(function (_theme, _params, classes) {
  return {
    root: {
      height: 'var(--ebl-tert-nav-height)',
      padding: 0,
      paddingLeft: 'var(--ebl-tert-nav-padding-left)',
      backgroundColor: 'transparent',
      // needed for border to display correctly, Paper handles white background
      border: 'none',
      borderLeft: 'var(--ebl-tert-nav-indicator-border)',
      borderLeftColor: 'transparent',
      borderRadius: '0.25rem',
      marginBottom: 'var(--ebl-spacing-vert-small)'
    },
    icon: {
      minWidth: 'unset',
      marginRight: 'var(--ebl-tert-nav-icon-margin)'
    },
    selected: {},
    paper: {
      '&:hover': {
        backgroundColor: 'var(--ebl-tert-nav-bg-hover)'
      }
    },
    paperSelected: _defineProperty({
      backgroundColor: 'var(--ebl-tert-nav-bg-selected)'
    }, "& .".concat(classes.selected), {
      borderLeft: 'var(--ebl-tert-nav-indicator-border)',
      '&.Mui-selected': {
        backgroundColor: 'transparent'
      }
    }),
    focusVisible: {
      outline: 0,
      boxShadow: 'var(--ebl-focus-ring)',
      backgroundColor: 'transparent'
    }
  };
});