import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'standaloneProgramItem'
})({
  standaloneProgramItem: {
    '& div': {
      maxWidth: '355px'
    },
    '& .MuiCard-root:focus-within': {
      overflow: 'visible'
    },
    '& button': {
      '&:hover': {
        background: 'var(--ebl-light-gray)',
        cursor: 'pointer'
      },
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 'var(--ebl-s3)',
      borderRadius: 'var(--ebl-card-radius, 4px)',
      border: 'none',
      background: 'white',
      '& svg': {
        width: '20px'
      },
      '& img': {
        width: '60%',
        height: 'auto',
        margin: '10px'
      }
    }
  }
});