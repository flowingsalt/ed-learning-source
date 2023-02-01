import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ResourceCardStyles'
})(function (theme) {
  return {
    card: {
      height: '550px',
      marginBottom: 0
    },
    list: {
      paddingTop: 0
    },
    empty: {
      marginRight: 'var(--ebl-s3)'
    },
    title: {
      display: 'inline-flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      '& h2': _defineProperty({
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginRight: 'var(--ebl-s2)'
      }, theme.breakpoints.down('sm'), {
        whiteSpace: 'normal',
        overflow: 'auto'
      })
    },
    scrolledContent: {
      overflowY: 'scroll',
      paddingBottom: 0,
      '&:last-of-type': {
        paddingBottom: 'var(--ebl-s1)'
      }
    },
    content: {
      height: '100%',
      '&:last-of-type': {
        paddingBottom: 0
      }
    }
  };
});