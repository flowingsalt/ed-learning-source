import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'AssignmentTableButtons'
})({
  root: {
    '& svg': {
      width: 'auto !important ',
      height: 'auto !important '
    },
    marginLeft: 0
  },
  iconPosition: {
    display: 'flex',
    justifyContent: 'center'
  }
});