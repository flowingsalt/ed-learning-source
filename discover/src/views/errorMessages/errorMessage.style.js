import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'teacherView'
})({
  teacherView: {
    display: 'grid',
    '& h2': {
      textTransform: 'capitalize',
      paddingLeft: 'var(--ebl-s8)',
      '& .MuiContainer-maxWidthXl': {
        maxWidth: '1920px'
      }
    }
  },
  errorMessage: {
    margin: '2.5rem auto 0',
    width: '285px',
    '@media (min-width: 600px)': {
      width: '725px'
    }
  }
});