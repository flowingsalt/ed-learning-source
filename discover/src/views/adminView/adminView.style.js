import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'adminView'
})({
  adminView: {
    display: 'grid',
    '& > div': {
      '@media (max-width: 600px)': {
        padding: 0
      }
    },
    '& * .MuiContainer-root': {
      '@media (max-width: 600px)': {
        paddingTop: 'var(--ebl-s4)'
      }
    }
  },
  adminViewMessageWrapper: {
    display: 'grid',
    '& .MuiContainer-maxWidthXl': {
      maxWidth: '1920px'
    },
    marginTop: '100px'
  }
});