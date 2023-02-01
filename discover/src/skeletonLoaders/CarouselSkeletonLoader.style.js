import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'CarouselSkeletonLoader'
})(function (theme) {
  return {
    cardWrapper: {
      padding: '10px',
      boxShadow: theme.shadows[3],
      border: '1px solid #949494'
    },
    cardWidth: {
      maxWidth: '100%',
      height: '20rem'
    }
  };
});