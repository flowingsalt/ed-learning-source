import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'Alert'
})({
  alertLabel: {
    display: 'flex',
    flexGrow: 2,
    paddingRight: 'var(--ebl-alertnotif-label-marginright)'
  },
  alertGrid: {
    'body.user-is-tabbing &:focus-within': {
      outline: 0,
      boxShadow: 'var(--ebl-focus-ring)'
    }
  },
  alertCountContainer: {
    marginLeft: 'auto'
  },
  alertCount: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  messageSmall: {
    padding: 'var(--ebl-alert-notif-sm-padding)',
    maxWidth: '100%',
    flexGrow: '2',
    '@media only screen and (max-width: 969px)': {
      paddingRight: 0
    }
  },
  iconSmall: {
    paddingTop: 'var(--ebl-alert-notif-sm-padding)',
    paddingLeft: 'var(--ebl-alert-notif-sm-padding)',
    marginRight: '0',
    '& > div': {
      margin: '2px',
      display: 'grid'
    }
  },
  action: {
    margin: 'var(--ebl-s2)',
    alignItems: 'flex-start',
    '@media only screen and (max-width: 969px)': {
      paddingLeft: 0
    }
  }
});