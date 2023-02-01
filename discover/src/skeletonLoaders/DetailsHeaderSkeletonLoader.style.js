import { makeStyles } from 'tss-react/mui';
export default makeStyles()(function (theme) {
  return {
    cardWrapper: {
      padding: '10px',
      boxShadow: theme.shadows[3],
      marginTop: 50,
      marginBottom: 20,
      border: '1px solid #949494'
    },
    cardWidth: {
      maxWidth: '100%',
      height: '2rem'
    }
  };
});