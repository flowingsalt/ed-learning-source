import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export default makeStyles({
  name: 'SecondaryNavLink'
})(function (theme) {
  var _theme$coreComponents;

  return merge({
    root: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
      background: 'inherit',
      borderBottom: '4px solid transparent',
      boxSizing: 'content-box',
      height: 'calc(100% - 4px)',
      padding: 'var(--ebl-subnav-indicator-padding)',
      '&:hover': {
        borderColor: theme.palette.primary.light,
        cursor: 'pointer'
      },
      '&.selected': {
        borderColor: theme.palette.primary.main
      }
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.SecondaryNavLink);
});