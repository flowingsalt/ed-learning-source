import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'connectedSolutionsView'
})({
  connectedSolutionsView: {
    '& > h2': {
      paddingLeft: '0',
      marginBottom: 'var(--ebl-spacing-vert-xsmall)',
      marginTop: 'var(--ebl-spacing-vert-medium)'
    }
  },
  connectedSolutionsGrid: {
    marginTop: 'var(--ebl-spacing-vert-medium)',
    marginBottom: 'var(--ebl-spacing-vert-medium)',
    paddingLeft: '0',
    '& li': {
      listStyleType: 'none',
      padding: '0',
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
        background: 'white',
        border: 'none',
        '& img': {
          margin: '10px',
          width: '60%',
          height: 'auto'
        },
        '& svg': {
          width: '20px'
        }
      }
    }
  }
});