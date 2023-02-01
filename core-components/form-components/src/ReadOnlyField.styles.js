import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ReadOnlyField'
})({
  label: {
    margin: 0
  },
  value: {
    margin: 'calc(var(--ebl-s2) + 2px)'
  }
});