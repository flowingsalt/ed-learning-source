import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'VirtualClassroomMenuContent'
})(function (theme) {
  return {
    card: {
      height: '550px'
    },
    list: {
      paddingTop: 0,
      '&>li': {
        paddingBottom: theme.spacing(1)
      }
    },
    scrolledContent: {
      overflowY: 'scroll',
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