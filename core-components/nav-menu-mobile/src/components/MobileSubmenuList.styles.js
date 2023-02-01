import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export default makeStyles({
  name: 'MobileSubmenuList'
})(function (theme) {
  var _theme$coreComponents;

  return merge({
    subMenuList: {
      width: '100%',
      '& > li > *': {
        paddingLeft: 'var(--ebl-subnav-li-padding-left) !important'
      }
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.MobileSubmenuList);
});