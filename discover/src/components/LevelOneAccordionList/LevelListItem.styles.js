import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'LevelListItem'
})(function (theme) {
  return {
    listItem: {
      color: 'var(--ebl-black)',
      fontSize: '1.125rem',
      height: 'auto',
      display: 'grid',
      alignItems: 'center',
      padding: '0.888em 0.44em 0.888em 1.666em',
      borderBottom: '1px solid var(--gray-c25)',
      gridTemplateColumns: '5.5rem auto max-content',
      '@media (max-width: 600px)': {
        gridTemplateColumns: '4.375rem 1fr',
        rowGap: 'var(--ebl-s1)'
      },
      width: '100%'
    },
    levelThreeListItem: {
      '& button:focus': {
        outline: '2px solid var(--ebl-focus-color)'
      }
    },
    hierarchy: {
      fontWeight: theme.typography.fontWeightBold,
      backgroundColor: 'var(--ebl-brand)',
      width: '3.375rem',
      height: '3.375rem',
      borderRadius: '5px',
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.875rem'
    },
    levelType: {
      color: 'var(--ebl-text-gray)',
      textTransform: 'capitalize'
    },
    lessonTitle: {
      '& > * + *': {
        display: 'block'
      }
    },
    openLessonButton: {
      textTransform: 'capitalize',
      height: '2.5rem',
      '@media (max-width: 600px)': {
        gridColumn: '1 / -1',
        width: '10rem',
        marginInlineStart: '4.375rem'
      }
    }
  };
});