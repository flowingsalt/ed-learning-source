import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'GoogleAuthButton'
})({
  rootButton: {
    backgroundColor: '#4285F4',
    paddingLeft: '0px !important',
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '14px',
    inlineSize: 'max-content'
  },
  startIcon: {
    marginLeft: '-0.2rem'
  }
});