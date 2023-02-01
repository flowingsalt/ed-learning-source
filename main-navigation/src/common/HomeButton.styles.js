import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'MainNavHomeButton'
})({
  logoLink: {
    padding: '8px' // svgs have various sizes and currently we cannot standardise it for baseline

  },
  svg: {
    width: '88px',
    fill: 'var(--ebl-logo-color)',
    '&:hover': {
      cursor: 'pointer',
      fill: 'var(--ebl-logo-color-hover)'
    }
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px' // svgs have various sizes and currently we cannot standardise it for baseline

  }
});