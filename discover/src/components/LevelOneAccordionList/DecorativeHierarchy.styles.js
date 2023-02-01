import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'levelOneAccordionList'
})({
  root: {
    backgroundColor: 'var(--ebl-brand)',
    color: 'var(--ebl-black)',
    fontWeight: 'bold',
    width: '3.375rem',
    height: '3.375rem',
    borderRadius: 'var(--ebl-border-width-alt)',
    display: 'grid',
    alignItems: 'center',
    paddingBottom: 2,
    justifyContent: 'center',
    '& > div': {
      width: '2rem',
      height: '2rem',
      stroke: 'var(--ebl-black)',
      strokeWidth: 2
    }
  }
});