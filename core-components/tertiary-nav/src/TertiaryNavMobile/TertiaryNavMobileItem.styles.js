import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'TertiaryNavMobileItem'
})({
  root: {
    '&:focus': {
      boxShadow: 'none' // this is to override the focus value on a:focus from container.css

    }
  }
});