import { deepmerge } from '@mui/utils';
import { makeStyles } from 'tss-react/mui';

var styles = function styles(theme, _ref) {
  var _theme$coreComponents;

  var grow = _ref.grow;
  return deepmerge({
    column: {
      flexDirection: 'column',
      width: grow ? '100%' : 'unset',
      '&>:last-child': {
        marginBottom: 0
      }
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.CardColumn);
};

export default makeStyles({
  name: 'CardColumn'
})(styles);