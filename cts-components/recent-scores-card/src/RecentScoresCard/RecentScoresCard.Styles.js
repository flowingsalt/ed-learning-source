import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'recentScoresCard'
})(function (theme, _ref) {
  var position = _ref.position;
  return {
    card: {
      marginBottom: 0,
      height: position === 5 ? 'var(--ebl-db-card-height)' : '550px'
    },
    list: {
      paddingTop: 0
    },
    cardTileRoot: {
      marginRight: 'var(--ebl-s1)',
      width: 'calc(100% - var(--ebl-s1))'
    },
    scrolledContent: {
      paddingRight: 'var(--ebl-db-card-padding-right)',
      '&:last-of-type': {
        paddingBottom: 'var(--ebl-s1)'
      }
    },
    empty: {
      marginRight: 'var(--ebl-s3)'
    },
    header: {
      marginBottom: 0
    },
    content: {
      height: '100%',
      '&:last-of-type': {
        paddingBottom: 0
      }
    },
    title: {
      display: 'inline-flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      '& h3': _defineProperty({
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginRight: 'var(--ebl-s2)'
      }, theme.breakpoints.down('sm'), {
        whiteSpace: 'normal',
        overflow: 'auto',
        marginRight: '0'
      })
    }
  };
});