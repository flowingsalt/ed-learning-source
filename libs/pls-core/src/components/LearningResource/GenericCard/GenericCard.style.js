import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'GenericCard'
})(function (theme, _ref) {
  var _root;

  var useMaxHeight = _ref.useMaxHeight;
  return {
    root: (_root = {
      backgroundColor: 'transparent',
      borderTopLeftRadius: 0,
      border: 'none',
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'column',
      height: useMaxHeight ? '420px' : 'auto',
      overflow: 'inherit',
      maxWidth: '550px',
      position: 'relative'
    }, _defineProperty(_root, theme.breakpoints.down('md'), {
      height: 'auto'
    }), _defineProperty(_root, theme.breakpoints.up('sm'), {
      height: useMaxHeight ? '450px' : 'auto'
    }), _defineProperty(_root, theme.breakpoints.up('780'), {
      height: useMaxHeight ? '500px' : 'auto'
    }), _defineProperty(_root, theme.breakpoints.up('md'), {
      height: useMaxHeight ? '460px' : 'auto'
    }), _defineProperty(_root, theme.breakpoints.up('lg'), {
      height: useMaxHeight ? '440px' : 'auto'
    }), _defineProperty(_root, theme.breakpoints.up('xl'), {
      height: useMaxHeight ? '480px' : 'auto'
    }), _root),
    cardMediaWrapper: {
      backgroundColor: 'var(--ebl-white)',
      borderTopLeftRadius: '98px',
      borderTopRightRadius: 'var(--ebl-card-radius)',
      boxShadow: '0 1px 3px 0px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      paddingTop: '56.25%',
      position: 'relative'
    },
    mediaUrl: {
      '&:focus:not(:active)': {
        border: 'solid 1px #ca0092',
        boxShadow: 'none'
      },
      '&:hover ~ div a': {
        textDecoration: 'underline'
      }
    },
    mediaImgUrl: {
      backgroundRepeat: 'no-repeat',
      bottom: 0,
      left: 0,
      position: 'absolute',
      top: 0,
      right: 0
    },
    mediaImgSkeleton: {
      alignItems: 'center',
      borderLeft: 'solid 1px var(--ebl-card-border-color)',
      borderTop: 'solid 1px var(--ebl-card-border-color)',
      borderTopLeftRadius: '98px',
      color: 'var(--ebl-text-black)',
      display: 'flex',
      justifyContent: 'center',
      height: '180px',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    contentIntro: {
      color: 'var(--ebl-text-gray)',
      display: 'inline-flex',
      fontSize: '14px',
      fontFamily: 'var(--ebl-wf-headings)',
      fontWeight: 'var(--ebl-wf-body-weight-bold)',
      lineHeight: '24px',
      marginBottom: 'var(--ebl-s3)'
    },
    contentDescription: _defineProperty({
      boxOrient: 'vertical',
      color: 'var(--ebl-text-black)',
      display: 'box',
      fontFamily: 'var(--ebl-wf-body)',
      fontSize: '14px',
      lineClamp: 3,
      lineHeight: '20px',
      overflow: 'hidden'
    }, theme.breakpoints.down('md'), {
      marginBottom: 'var(--ebl-s3)'
    }),
    contentTitle: {
      boxOrient: 'vertical',
      color: 'var(--ebl-action-color)',
      display: 'block',
      fontSize: 'var(--ebl-font-size-base)',
      fontFamily: 'var(--ebl-wf-headings)',
      fontWeight: 'var(--ebl-wf-headings-weight-bold)',
      lineClamp: 2,
      lineHeight: '26px',
      marginBottom: 'var(--ebl-s2)',
      textDecoration: 'underline',
      '&:visited': {
        color: 'var(--ebl-action-color)'
      },
      overflow: 'hidden'
    },
    bodyCardWrapper: {
      backgroundColor: 'var(--ebl-white)',
      boxShadow: 'var(--ebl-shadow-1)',
      borderBottomLeftRadius: 'var(--ebl-card-radius)',
      borderBottomRightRadius: 'var(--ebl-card-radius)',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      padding: 'var(--ebl-s3) var(--ebl-s4)',
      position: 'relative',
      top: 0
    },
    bodyCardContent: {
      flex: 1,
      padding: 0
    },
    bodyCardFooter: {
      alignItems: 'flex-end',
      color: 'var(--ebl-text-gray)',
      flexWrap: 'wrap',
      fontSize: '14px',
      fontFamily: 'var(--ebl-wf-headings)',
      fontWeight: 'var(--ebl-wf-headings-weight)',
      lineHeight: '24px',
      padding: 0,
      '& >span:not(:first-of-type)': {
        margin: 0
      },
      '& button:first-of-type': {
        fontSize: 'var(--ebl-sh1)',
        height: 'auto',
        margin: '0 var(--ebl-s3) 0 0',
        padding: 0,
        width: 'auto'
      }
    },
    bodyCardFooterAction: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1
    },
    actionCardButton: {
      border: 'solid 1px var(--ebl-action-color)',
      borderRadius: '4px',
      color: 'var(--ebl-action-color)',
      height: '32px',
      margin: 0,
      minWidth: 'auto',
      padding: 0,
      textDecoration: 'none',
      width: '32px',
      '&::after': {
        content: "'...'",
        position: 'relative',
        top: '-8px',
        transform: 'scale(2)'
      },
      '&:hover': {
        textDecoration: 'none'
      },
      '& > span': {
        height: 0,
        overflow: 'hidden',
        width: 0
      }
    },
    contentDivider: {
      '& > *:nth-of-type(n+2)': {
        '&::before': {
          content: "'|'",
          margin: '0 var(--ebl-s1)',
          padding: '0 var(--ebl-s1)'
        }
      }
    },
    contentDividerFavorites: {
      display: 'inline-flex',
      flexWrap: 'wrap',
      '& > *:nth-of-type(n+3)': {
        '&::before': {
          content: "'•'",
          margin: '0 var(--ebl-s1)',
          padding: '0 var(--ebl-s1)'
        }
      }
    }
  };
});