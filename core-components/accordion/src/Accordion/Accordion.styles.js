import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
import { deepmerge } from '@mui/utils';
export default makeStyles({
  name: 'Accordion'
})(function (theme) {
  var _theme$coreComponents;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      elevation = _ref.elevation;

  return deepmerge({
    root: {
      border: '1px solid var(--ebl-card-border-color)',
      boxShadow: elevation === 1 && 'var(--ebl-card-box-shadow)'
    },
    rounded: {
      '&:first-of-type': {
        borderTopLeftRadius: 'var(--ebl-card-radius)',
        borderTopRightRadius: 'var(--ebl-card-radius)'
      },
      '&:last-of-type': {
        borderBottomLeftRadius: 'var(--ebl-card-radius)',
        borderBottomRightRadius: 'var(--ebl-card-radius)'
      }
    },
    header: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--ebl-accordion-padding, var(--ebl-s3))'
    },
    headerButtonWithLabel: _defineProperty({}, theme.breakpoints.down(400), {
      display: 'block'
    }),
    heading: {
      flex: 1,
      overflowWrap: 'anywhere'
    },
    button: _defineProperty({
      margin: 0
    }, theme.breakpoints.down(400), {
      width: '100%'
    }),
    soloButton: {
      marginLeft: '0',
      marginRight: '-15px',
      paddingLeft: '0',
      paddingRight: '0',
      '& span': {
        margin: '0'
      }
    },
    detailsRoot: {
      padding: 'var(--ebl-accordion-padding, var(--ebl-s3))',
      paddingTop: 0
    },
    notification: {
      padding: 'var(--ebl-accordion-padding) var(--ebl-s3) 0',
      '& .MuiAlert-root': {
        minWidth: 'auto'
      }
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.Accordion);
});