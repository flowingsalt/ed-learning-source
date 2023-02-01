import { makeStyles } from 'tss-react/mui';
export default makeStyles()({
  teacherView: {
    display: 'grid',
    '& h2': {
      '& .MuiContainer-maxWidthXl': {
        maxWidth: '1920px'
      },
      '@media (max-width: 600px)': {
        fontSize: '18px'
      }
    },
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
  teacherViewMessageWrapper: {
    marginTop: '100px'
  }
});