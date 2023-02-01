import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export default makeStyles({
  name: 'MobileMenuExpandableItem'
})(function (theme) {
  var _theme$coreComponents;

  return merge({
    expansionPanelSummary: {
      padding: '0 !important',
      paddingLeft: 'var(--ebl-burger-padding-left) !important',
      paddingRight: 'var(--ebl-burger-padding-right) !important',
      height: 'var(--ebl-subnav-li-height)',
      borderBottom: 'var(--ebl-subnav-border-top)',
      '&.Mui-focusVisible': {
        background: 'inherit'
      }
    },
    expansionPanel: {
      boxShadow: 'none',
      // we don't want default shadows
      borderRadius: '0 !important',
      // without this expansion panel(on open) has a flickering pixel line
      '&.MuiAccordion-root:before': {
        opacity: '1 !important',
        height: 0
      },
      '&.Mui-expanded': {
        margin: 0
      }
    },
    expansionPanelDetails: {
      padding: 0
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.MobileMenuExpandableItem);
});