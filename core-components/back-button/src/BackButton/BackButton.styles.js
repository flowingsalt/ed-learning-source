import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'BackButton'
})({
  root: {
    cursor: 'pointer',
    display: 'flex',
    height: 'var(--ebl-button-height-lg)',
    overflow: 'hidden',
    border: 'var(--ebl-card-border)',
    borderColor: 'transparent',
    padding: 'var(--ebl-s2)',
    marginBottom: 'var(--ebl-s6)',
    boxSizing: 'border-box',
    textDecoration: 'underline',
    '&:hover': {
      borderColor: 'var(--ebl-card-border-hover)',
      borderRadius: 'var(--ebl-button-radius)'
    },
    '&:focus': {
      outline: 0,
      boxShadow: 'var(--ebl-focus-ring)',
      borderRadius: 'var(--ebl-button-radius)'
    }
  },
  icon: {
    marginTop: '0.25rem'
  },
  title: {
    marginLeft: 'var(--ebl-sh2)'
  },
  clicked: {
    boxShadow: 'none !important'
  }
});