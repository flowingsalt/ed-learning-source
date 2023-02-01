import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
import { deepmerge } from '@mui/utils';
export default makeStyles({
  name: 'PageLayout1Col'
})(function (theme) {
  var _theme$coreComponents;

  return deepmerge({
    root: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: 'var(--ebl-s4)',
      paddingBottom: 'var(--ebl-spacing-vert-xxxlarge)',
      paddingLeft: 'var(--ebl-s4)',
      paddingRight: 'var(--ebl-s4)'
    }, theme.breakpoints.down('md'), {
      paddingLeft: 'var(--ebl-s3)',
      paddingRight: 'var(--ebl-s3)'
    })
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.PageLayout1Col);
});