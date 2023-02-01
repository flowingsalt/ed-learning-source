import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'recentScoresSkeleton'
})(function (_theme, _ref) {
  var position = _ref.position;
  return {
    card: {
      display: 'flex',
      flexFlow: 'column',
      minWidth: 'var(--ebl-db-card-min-width)',
      height: position === 5 ? 'var(--ebl-db-card-height)' : '550px',
      paddingTop: 'var(--ebl-db-card-padding-top)',
      paddingLeft: 'var(--ebl-db-card-padding-left)',
      paddingRight: 'var(--ebl-db-card-padding-right)',
      paddingBottom: 0,
      marginBottom: 'var(--ebl-s4)',
      border: 'none',
      boxShadow: 'none'
    },
    header: {
      padding: 0
    },
    content: {
      padding: 0
    },
    titleSkeleton: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    skeletonTitle: {
      maxWidth: '331px',
      width: '100%',
      height: 'var(--ebl-h3-line-height)',
      marginBottom: '10px'
    },
    skeletonListItem: {
      height: '92px',
      paddingLeft: 'var(--ebl-db-card-tile-padding-vert)',
      paddingRight: 'var(--ebl-db-card-tile-padding-vert)',
      paddingTop: 'var(--ebl-db-card-tile-padding-horz)',
      paddingBottom: 'var(--ebl-db-card-tile-padding-horz)',
      border: 'var(--ebl-card-border)',
      borderRadius: 'var(--ebl-card-radius)',
      width: '100%',
      cursor: 'default',
      marginBottom: 'var(--ebl-s2)',
      '&:first-of-type': {
        marginTop: 'var(--ebl-s1)'
      },
      '&:hover': {
        backgroundColor: 'transparent',
        transition: 'none',
        boxShadow: 'none'
      },
      display: 'flex'
    },
    skeletonListItemText: {
      display: 'flex',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingRight: 'var(--ebl-db-card-tile-text-margin-right)'
    },
    skeletonText: {
      width: '100%',
      height: 'var(--ebl-s3)'
    },
    skeletonIcon: {
      width: '42px',
      height: '100%'
    }
  };
});