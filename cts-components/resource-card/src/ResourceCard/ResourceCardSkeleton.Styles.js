import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ResourceCardSkeleton'
})(function (theme) {
  return {
    skeletonContent: _defineProperty({
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 'var(--ebl-rs—card-margin-bottom)'
    }, theme.breakpoints.down('sm'), {
      display: 'block'
    }),
    skeletonTitle: _defineProperty({
      width: '243px',
      height: '32px',
      marginBottom: '10px'
    }, theme.breakpoints.down('sm'), {
      width: '100%'
    }),
    skeletonFilter: _defineProperty({
      width: '200px',
      height: '40px'
    }, theme.breakpoints.down('sm'), {
      width: '100%'
    })
  };
});