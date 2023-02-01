import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'scoresLink'
})(function (_theme, _ref) {
  var disabled = _ref.disabled;
  var enabledStyles = {
    fontSize: 'var(--ebl-p1)'
  };
  var disabledStyles = {
    color: 'var(--ebl-link-disabled-color)',
    cursor: 'default',
    '&:hover': {
      color: 'var(--ebl-link-disabled-color)'
    },
    '&:visited': {
      color: 'var(--ebl-link-disabled-color)'
    },
    '&:active': {
      color: 'var(--ebl-link-disabled-color)'
    },
    '&:focus': {
      outline: 0,
      boxShadow: 'none'
    }
  };
  return {
    link: disabled ? disabledStyles : enabledStyles
  };
});