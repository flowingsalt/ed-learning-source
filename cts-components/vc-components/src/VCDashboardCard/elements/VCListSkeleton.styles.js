import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'VcListSkeleton'
})(function (theme) {
  return {
    list: {
      padding: 0,
      '&>li': {
        paddingBottom: theme.spacing(1)
      },
      '&>li:last-of-type': {
        paddingBottom: 0
      }
    }
  };
});