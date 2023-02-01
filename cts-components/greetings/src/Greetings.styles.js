import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'Greetings'
})(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: _defineProperty({
      marginRight: 'var(--ebl-s3)'
    }, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    greetingHeading: _defineProperty({
      lineHeight: 'var(--ebl-h2-line-height)',
      marginBottom: 'var(--ebl-s2)'
    }, theme.breakpoints.down('sm'), {
      lineHeight: 'var(--ebl-s6)'
    }),
    greetingName: {
      wordBreak: 'break-word'
    }
  };
});