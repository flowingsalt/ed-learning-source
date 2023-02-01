import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'TertiaryNavMobile'
})({
  root: {
    position: 'relative',
    width: '100%',
    height: '3rem'
  },
  tabs: {
    '& .MuiTabScrollButton-root': {
      color: 'var(--ebl-dark-gray)'
    },
    '& .MuiTabScrollButton-root.Mui-disabled': {
      opacity: '0.3 !important'
    },
    '& .MuiSvgIcon-root': {
      height: 'var(--ebl-icon-lg)',
      width: 'var(--ebl-icon-lg)'
    }
  }
});