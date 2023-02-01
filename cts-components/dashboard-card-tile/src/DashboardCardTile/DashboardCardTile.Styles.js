import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'DashboardCardTile'
})(function (theme) {
  var _root;

  return {
    root: (_root = {
      fontFamily: 'var(--ebl-wf-body)',
      padding: 'var(--ebl-db-card-tile-padding)',
      border: 'var(--ebl-card-border)',
      borderRadius: 'var(--ebl-card-radius)',
      cursor: 'pointer',
      width: 'calc(100% - var(--ebl-s4))'
    }, _defineProperty(_root, theme.breakpoints.down('sm'), {
      width: 'calc(100% - var(--ebl-s2))'
    }), _defineProperty(_root, "marginBottom", 'var(--ebl-s2)'), _defineProperty(_root, "marginRight", 'var(--ebl-s4)'), _defineProperty(_root, "marginLeft", 'var(--ebl-s1)'), _defineProperty(_root, '&:first-of-type', {
      marginTop: 'var(--ebl-s1)'
    }), _defineProperty(_root, '&:hover', {
      backgroundColor: 'inherit',
      borderColor: 'var(--ebl-db-card-tile-hover-border-color)'
    }), _defineProperty(_root, '&:focus', {
      outline: 0,
      boxShadow: 'var(--ebl-focus-ring)',
      backgroundColor: 'transparent'
    }), _defineProperty(_root, '&.hideLocalOutline', {
      outlineWidth: '0 !important',
      boxShadow: 'none'
    }), _defineProperty(_root, '&.showLocalOutline', {
      outlineWidth: '0 !important',
      boxShadow: 'var(--ebl-focus-ring)'
    }), _defineProperty(_root, '&.persistIcon', {
      '& > div:nth-of-type(1)': _defineProperty({
        display: 'flex !important',
        marginRight: '0'
      }, theme.breakpoints.down('lg'), {
        marginRight: 'var(--ebl-db-card-tile-text-margin-left)'
      })
    }), _root),
    icon: {
      minWidth: '0'
    },
    rightIcon: {
      minWidth: '0'
    },
    iconHide: _defineProperty({}, theme.breakpoints.down('lg'), {
      display: 'none'
    }),
    textWrapper: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    text: _defineProperty({
      margin: '0',
      marginLeft: 'var(--ebl-db-card-tile-text-margin-left)',
      marginRight: 'var(--ebl-db-card-tile-text-margin-right)',
      maxWidth: 'var(--ebl-db—card—tile-text-max-width)',
      flexGrow: '0'
    }, theme.breakpoints.down('lg'), {
      marginLeft: '0'
    }),
    secondary: {
      display: 'block'
    },
    dueDate: _defineProperty({
      marginTop: 'var(--ebl-s1)',
      marginBottom: '0',
      marginLeft: 'var(--ebl-db-card-tile-text-margin-left)'
    }, theme.breakpoints.down('lg'), {
      marginLeft: '0'
    }),
    dueDateIcon: {
      position: 'absolute',
      margin: '0',
      marginTop: '2px'
    },
    dueDateText: {
      paddingLeft: 'var(--ebl-s3)',
      marginLeft: 'var(--ebl-s2)'
    },
    count: {
      margin: '0',
      flexGrow: '0',
      marginRight: 'var(--ebl-db-card-tile-count-margin-right)',
      marginLeft: 'auto'
    },
    skeletonText: {
      width: '200px',
      height: 'var(--ebl-s4)' // --s4 is for spacing not dimensions, but its all we got...

    },
    skeletonCount: {
      width: 'var(--ebl-s2)',
      // 8px
      height: 'var(--ebl-s3)',
      // 16px
      marginTop: 'var(--ebl-s1)',
      // 4px
      marginBottom: 'var(--ebl-s1)'
    },
    skeletonCountIcon: {
      width: 'var(--ebl-s3)',
      // "16px"
      height: 'var(--ebl-s3)',
      // "16px"
      margin: 'var(--ebl-s1)' // "4px"

    },
    skeletonListItem: {
      '&:hover': {
        border: 'var(--ebl-card-border)'
      },
      height: 'calc(var(--ebl-s7) + var(--ebl-s5))'
    }
  };
});