import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export default makeStyles({
  name: 'MobileMenuPlane'
})(function (theme) {
  var _theme$coreComponents;

  return merge({
    root: {
      position: 'fixed',
      width: '100%',
      // calculating exact height size of the plane area
      height: "calc(".concat(window.innerHeight, "px - var(--ebl-nav-height))"),
      background: '#fff',
      transition: '0.3s ease-in-out',
      zIndex: '-1',
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.MobileMenuPlane);
});