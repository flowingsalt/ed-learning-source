import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'GoogleClassroomDetails'
})(function (theme) {
  return {
    container: {
      margin: 'var(--ebl-s3) 0 var(--ebl-s3) 0',
      wordWrap: 'breakAll',
      // fallback for older browsers
      overflowWrap: 'anywhere'
    },
    alert: {
      margin: 'var(--ebl-s2) 0 var(--ebl-s3) 0'
    },
    subTitle: {
      marginBottom: 'var(--ebl-s2)'
    },
    icon: {
      marginLeft: 'var(--ebl-s2)'
    },
    linkedTo: {
      display: 'flex',
      alignItems: 'center',
      margin: '0',
      padding: '0',
      fontWeight: '400',
      '&:hover': {
        boxShadow: 'none'
      },
      lineHeight: '20px',
      fontFamily: 'Noto Sans',
      fontSize: 'var(--ebl-sh5)',
      '& > strong': {
        marginRight: 'var(--ebl-s1)'
      },
      '& > span ': {
        marginLeft: 'var(--ebl-s1)'
      }
    },
    gcContainer: {
      marginTop: 'var(--ebl-s6)'
    },
    wrapper: _defineProperty({
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }, theme.breakpoints.down('sm'), {
      justifyContent: 'center'
    }),
    avatarIcon: {
      marginRight: 'var(--ebl-s4)'
    },
    avatarWrapper: {
      display: 'flex',
      alignItems: 'center'
    }
  };
}, {
  name: 'GoogleClassroomDetails'
});