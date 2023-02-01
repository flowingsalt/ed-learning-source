import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'studentView'
})({
  studentView: {
    display: 'grid',
    '& main': {
      '@media (max-width: 600px)': {
        paddingTop: 0
      }
    },
    '& h2': {
      '@media (min-width: 600px)': {
        paddingLeft: 'var(--ebl-s8)'
      },
      textTransform: 'capitalize',
      '& .MuiContainer-maxWidthXl': {
        maxWidth: '1440px'
      }
    },
    '& p': {
      '@media (min-width: 600px)': {
        paddingLeft: 'var(--ebl-s8)'
      }
    },
    '& ul': {
      '@media (min-width: 600px)': {
        paddingLeft: 'var(--ebl-s8)'
      }
    }
  },
  levelType: {
    paddingLeft: 'var(--ebl-s8)'
  },
  studentViewMessageWrapper: {
    marginTop: '100px'
  }
});