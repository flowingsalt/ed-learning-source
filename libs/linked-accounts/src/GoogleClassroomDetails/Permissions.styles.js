import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'Permissions'
})(function (theme) {
  return {
    permissionsWrapper: {
      margin: 'var(--ebl-s3) 0 var(--ebl-s5) 0',
      '& .MuiPaper-root': {
        boxShadow: theme.shadows[3],
        border: 'none'
      }
    },
    bulletListWrapper: {
      margin: 'var(--ebl-s2) 0 var(--ebl-s3) 0',
      ul: {
        margin: 0
      }
    }
  };
});