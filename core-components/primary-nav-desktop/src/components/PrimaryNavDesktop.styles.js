import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export default makeStyles({
  name: 'PrimaryNavDesktop'
})(function (theme) {
  var _theme$coreComponents;

  return merge({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.PrimaryNavDesktop);
});