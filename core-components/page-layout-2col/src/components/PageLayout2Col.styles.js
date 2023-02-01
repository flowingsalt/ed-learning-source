import { makeStyles } from 'tss-react/mui';
import { deepmerge } from '@mui/utils';
export default makeStyles({
  name: 'PageLayout2Col'
})(function (theme) {
  var _theme$coreComponents;

  return deepmerge({
    mainContainer: {
      marginTop: 'var(--ebl-s4)'
    },
    innerContainer: {
      marginBottom: 'var(--ebl-s7)'
    },
    desktopNav: {
      marginRight: 'var(--ebl-s4)'
    },
    backBtnMobile: {
      marginTop: 'var(--ebl-s4)'
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.PageLayout2Col);
});