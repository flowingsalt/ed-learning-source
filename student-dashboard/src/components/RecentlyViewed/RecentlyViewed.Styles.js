import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'recentlyViewed'
})(function () {
  return {
    root: {
      margin: '0 calc(0px - (var(--ebl-s4) / 2))' // waiting for baseline update

    }
  };
});