import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'Petal'
})(function () {
  return {
    petal: {
      alignItems: 'center',
      backgroundColor: 'var(--ebl-brand)',
      borderTopRightRadius: '35%',
      borderBottomLeftRadius: '35%',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.25)',
      display: 'flex',
      height: '56px',
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '56px',
      '& svg .st0': {
        fill: 'var(--ebl-white)',
        opacity: 1
      }
    }
  };
});