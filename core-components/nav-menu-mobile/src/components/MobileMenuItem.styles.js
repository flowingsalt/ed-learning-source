import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
var nilDown = '0 !important'; // otherwise SonarQube Complains;

export default makeStyles({
  name: 'MobileMenuItem'
})(function (theme) {
  var _theme$coreComponents;

  return merge({
    listItem: {
      height: 'var(--ebl-subnav-li-height)',
      borderBottom: 'var(--ebl-subnav-border-top)',
      padding: '.2rem 0 !important',
      // otherwise focus ring is not visible
      '& button': {
        justifyContent: 'flex-start',
        margin: 0,
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    item: {
      textDecoration: 'none !important',
      // this is to override the MUI MuiLink values from baseTheme
      color: 'var(--ebl-nav-btn-font-color) !important',
      // this is to override the MUI MuiLink values from baseTheme
      padding: nilDown,
      paddingLeft: 'var(--ebl-burger-padding-left) !important',
      paddingRight: 'var(--ebl-burger-padding-right) !important',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      '&.Mui-focusVisible': {
        outline: '3px solid var(--ebl-focus-color)'
      },
      '&:focus': {
        boxShadow: 'none' // this is to override the focus value on a:focus from container.css

      },
      cursor: 'pointer',
      // button
      flexDirection: 'inherit',
      // this is to override the MUI Button values from MUI
      '&:hover': {
        boxShadow: 'none',
        // this is to override the MUI Button hover values
        border: 'none' // this is to override the MUI Button hover values

      },
      // Compatible with react-router-dom NavLink
      '&.active': {
        boxShadow: "4px 0px 0px 0px ".concat(theme.palette.primary.main, " inset !important"),
        // !important to override &:focus on itemLink
        background: 'var(--ebl-subnav-li-bg)'
      }
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.MobileMenuItem);
});