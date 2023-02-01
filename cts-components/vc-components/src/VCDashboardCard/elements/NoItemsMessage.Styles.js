import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'noItemsMessage'
})(function () {
  return {
    root: {
      height: '100%',
      paddingTop: 'var(--ebl-s2)',
      '&>div': {
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0'
      }
    }
  };
});