import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'MobileMainStyles'
})({
  root: {
    width: '100%',
    height: 'var(--ebl-nav-height)',
    boxShadow: 'var(--ebl-nav-shadow) !important',
    // hide shadows on menu open
    '&.menu-open': {
      boxShadow: 'none !important'
    }
  },
  menuWrp: {
    height: 'var(--ebl-nav-height)',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--ebl-nav-bg) !important',
    borderBottom: '1px solid #eee'
  },
  burgerBlock: {
    width: '33%',
    display: 'flex',
    paddingLeft: 'var(--ebl-nav-padding-left)',
    justifyContent: 'left !important'
  },
  burgerBtn: {
    padding: '12px',
    // svgs have various sizes and currently we cannot standardise it for baseline
    border: 0,
    background: 'var(--ebl-nav-bg)'
  },
  logoBlock: {
    width: '33%',
    display: 'flex',
    justifyContent: 'center'
  },
  profileBlock: {
    width: '33%',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 'var(--ebl-nav-padding-right)'
  },
  avatarBtn: {
    cursor: 'pointer',
    padding: '8px',
    // mobile tapping area
    border: 0,
    backgroundColor: 'var(--ebl-nav-bg)'
  },
  avatar: {
    margin: '0 !important',
    fontSize: '1rem !important',
    background: 'var(--ebl-brand) !important',
    color: '#333 !important',
    width: '2rem !important',
    height: '2rem !important'
  }
});