import { makeStyles } from 'tss-react/mui';
import { deepmerge } from '@mui/utils';

var styles = function styles(theme) {
  var _theme$coreComponents;

  return deepmerge({
    root: {
      display: 'flex',
      gap: 'var(--ebl-s3)',
      marginBottom: 'var(--ebl-s2)'
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    icon: {
      marginTop: '4px'
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.CardTitle);
};

export default makeStyles({
  name: 'CardTitle'
})(styles);