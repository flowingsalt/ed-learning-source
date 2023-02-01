import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'HelpButton'
})({
  helpBtn: {
    marginRight: 'var(--ebl-s1)',
    padding: 'var(--ebl-s2)',
    '& svg': {
      fill: 'var(--ebl-nav-bg)',
      background: 'var(--ebl-text-gray)',
      borderRadius: '50%'
    },
    '&.MuiIconButton-root': {
      cursor: 'pointer',
      padding: 'var(--ebl-s2)',
      // svgs have various sizes and currently we cannot standardise it for baseline
      border: 0,
      borderRadius: '50%',
      background: 'var(--ebl-nav-bg)',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  }
});