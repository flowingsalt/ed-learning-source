import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export default makeStyles({
  name: 'SecondaryNavDesktop'
})(function (theme) {
  var _theme$coreComponents;

  return merge({
    root: {
      boxSizing: 'content-box',
      display: 'flex',
      height: 'var(--ebl-subnav-height)',
      borderTop: 'var(--ebl-subnav-border-top)',
      borderBottom: 'var(--ebl-subnav-border-bottom)',
      width: '100%',
      justifyContent: 'center'
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.SecondaryNavDesktop);
});