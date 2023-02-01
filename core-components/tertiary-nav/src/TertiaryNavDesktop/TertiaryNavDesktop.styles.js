import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'TertiaryNavDesktop'
})({
  root: {
    flexShrink: 0,
    border: 1
  },
  paper: {
    width: '100%',
    padding: '0 0.1875rem'
  },
  menuName: {
    paddingLeft: 'var(--ebl-tert-nav-padding-left)',
    paddingRight: 'var(--ebl-tert-nav-padding-right)',
    '&:hover': {
      backgroundColor: '#var(--ebl-cool-gray-c5)'
    }
  },
  list: {
    marginTop: 'var(--ebl-tert-nav-margin)',
    padding: 0
  },
  selected: {
    borderLeft: 'var(--ebl-tert-nav-indicator-border)'
  },
  focusVisible: {
    outline: 0,
    boxShadow: 'var(--ebl-focus-ring)',
    backgroundColor: 'transparent'
  }
});