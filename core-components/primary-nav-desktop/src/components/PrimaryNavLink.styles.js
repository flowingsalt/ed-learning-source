import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export default makeStyles({
  name: 'PrimaryNavLink'
})(function (theme) {
  var _theme$coreComponents;

  return merge({
    root: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      // unset `a` text decoration
      background: 'inherit',
      color: 'var(--ebl-nav-btn-font-color)',
      borderRadius: 'var(--ebl-nav-btn-radius)',
      margin: 'var(--ebl-nav-btn-margin)',
      height: 'var(--ebl-nav-btn-height)',
      padding: 'var(--ebl-nav-btn-padding)',
      '&:hover': {
        background: theme.palette.secondary.light,
        color: theme.palette.getContrastText(theme.palette.secondary.light),
        cursor: 'pointer'
      },
      '&.selected': {
        background: theme.palette.secondary.main,
        color: theme.palette.getContrastText(theme.palette.secondary.main)
      }
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.PrimaryNavLink);
});