import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'PrimaryMenuStyles'
})({
  profileBlock: {
    display: 'flex',
    alignItems: 'center'
  },
  avatarBtn: {
    cursor: 'pointer',
    padding: '8px',
    // svgs have various sizes and currently we cannot standardise it for baseline
    border: 0,
    background: 'var(--ebl-nav-bg)'
  },
  avatar: {
    margin: '0 !important',
    fontSize: '1rem !important',
    background: 'var(--ebl-brand) !important',
    color: '#333 !important',
    width: '2rem !important',
    height: '2rem !important'
  },
  dropdownWrp: {
    top: '33px !important',
    left: '-7px !important'
  },
  avatarRadius: {
    borderRadius: '0 !important',
    transition: '0.2s ease-in-out'
  },
  avatarMenu: {
    '& > li': {
      padding: '0px !important',
      '& > *': {
        padding: '0px var(--ebl-s3) !important',
        flexGrow: 1
      }
    }
  }
});