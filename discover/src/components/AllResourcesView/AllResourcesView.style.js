import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'allResourcesView'
})({
  allResourcesView: {
    display: 'grid',
    width: '100%',
    paddingTop: 'var(--ebl-s3)',
    '@media (min-width: 1280px)': {
      paddingTop: 0
    }
  },
  allResourcesGrid: {
    paddingLeft: '0',
    marginTop: '0',
    marginBottom: 'var(--ebl-spacing-vert-medium)',
    '& .MuiGrid-item': {
      paddingLeft: 'var(--ebl-s3)',
      paddingRight: 'var(--ebl-s2)',
      '@media (min-width: 600px)': {
        paddingRight: 'var(--ebl-s3)'
      },
      listStyleType: 'none',
      '& h4': {
        fontWeight: 'bold',
        whiteSpace: 'break-spaces'
      }
    },
    '& button': {
      background: 'white',
      width: 'calc(100% + 3px)',
      textAlign: 'start',
      height: '67px',
      cursor: 'pointer'
    }
  },
  categoryContent: {
    display: 'grid',
    gridTemplateColumns: '50px auto',
    padding: '10px',
    alignItems: 'center',
    transition: 'backgroundColor 0.5s, fill 0.5s, color 0.5s',
    border: 'none',
    '&:hover': {
      background: 'var(--ebl-light-gray)'
    }
  },
  allResourcesViewFooter: {
    display: 'grid',
    justifyContent: 'center'
  },
  card: {
    borderRadius: 'var(--ebl-card-radius)',
    'body.user-is-tabbing &:focus-within': {
      outline: 0,
      boxShadow: 'var(--ebl-focus-ring)'
    }
  }
});