import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'TeachersCornerRegisteredStyle'
})(function (theme) {
  var _registeredSign;

  return {
    registeredSign: (_registeredSign = {
      fontSize: '0.75rem',
      fontWeight: 'var(--ebl-wf-headings-weight)',
      position: 'relative',
      left: 'var(--ebl-s0)'
    }, _defineProperty(_registeredSign, theme.breakpoints.up('md'), {
      top: 'calc(-5 * var(--ebl-s1))'
    }), _defineProperty(_registeredSign, theme.breakpoints.down('md'), {
      top: 'calc(-1.12 * var(--ebl-s2))'
    }), _registeredSign)
  };
});