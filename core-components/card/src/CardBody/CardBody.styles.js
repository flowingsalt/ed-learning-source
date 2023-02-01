import { makeStyles } from 'tss-react/mui';
import { deepmerge } from '@mui/utils';

var styles = function styles(theme) {
  var _theme$coreComponents;

  return deepmerge({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--ebl-s3)',
      gap: 'var(--ebl-s3)',
      height: '100%',
      '& button': {
        margin: 0
      },
      '&:last-of-type': {
        // overrides MUI CardContent paddingBottom = 24px
        paddingBottom: 'var(--ebl-s3)'
      },
      '& .MuiAlert-root': {
        minWidth: 'auto'
      }
    },
    row: {
      gap: 'var(--ebl-s3)'
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.CardBody);
};

export default makeStyles({
  name: 'CardBody'
})(styles);