import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
var rootStyle = {
  padding: 'var(--ebl-rs-card-tile-padding)',
  border: 'var(--ebl-rs-card-border)',
  borderRadius: 'var(--ebl-rs—card-radius)',
  minWidth: 'var(--ebl-rs-card-tile-min-width)',
  justifyContent: 'space-between',
  marginBottom: 'var(--ebl-rs—card-li-margin-bottom)'
};
export default makeStyles({
  name: 'ResourceCardTile'
})(function (theme) {
  var _icon, _buttonWrap, _iconMenuButton;

  return {
    root: rootStyle,
    resourceIcon: {
      width: '64px',
      height: '64px'
    },
    icon: (_icon = {
      minWidth: '0'
    }, _defineProperty(_icon, theme.breakpoints.down('sm'), {
      display: 'none'
    }), _defineProperty(_icon, "paddingTop", 'var(--ebl-rs-card-tile-icon-shim)'), _icon),
    sublistAvatar: _defineProperty({
      position: 'absolute',
      left: 0,
      minWidth: '0'
    }, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    contentWrap: {
      display: 'flex',
      minWidth: 0,
      width: '100%',
      overflow: 'hidden',
      paddingLeft: '3px'
    },
    textWrap: _defineProperty({
      alignItems: 'center',
      marginLeft: 'var(--ebl-rs-card-tile-text-margin-left)',
      overflowX: 'hidden',
      width: '100%',
      padding: 0
    }, theme.breakpoints.down('sm'), {
      marginLeft: '0'
    }),
    text: {
      margin: 0,
      marginBottom: 'var(--ebl-rs-card-tile-text-margin-bottom)'
    },
    buttonWrap: (_buttonWrap = {
      minHeight: '43px',
      display: 'flex',
      marginTop: 'auto',
      alignItems: 'center',
      marginRight: 'auto',
      marginLeft: 'var(--ebl-rs-card-tile-button-margin-left)'
    }, _defineProperty(_buttonWrap, theme.breakpoints.down('sm'), {
      display: 'none'
    }), _defineProperty(_buttonWrap, '& button', {
      margin: 'auto',
      marginLeft: 'var(--ebl-s2)',
      marginRight: '3px'
    }), _buttonWrap),
    iconMenuButton: (_iconMenuButton = {}, _defineProperty(_iconMenuButton, theme.breakpoints.up('xs'), {
      display: 'none'
    }), _defineProperty(_iconMenuButton, theme.breakpoints.down('sm'), {
      display: 'inline'
    }), _defineProperty(_iconMenuButton, '& button', {
      margin: 'auto',
      marginRight: '3px',
      marginBottom: '3px'
    }), _iconMenuButton),
    status: {
      margin: 0
    },
    button: {
      whiteSpace: 'nowrap',
      marginBottom: 0
    },
    secondaryText: {
      maxWidth: '99%',
      overflow: 'hidden',
      position: 'relative',
      lineHeight: 'var(--ebl-s3)',
      letterSpacing: 'var(--ebl-p2-letter-spacing)'
    },
    sublistWrapper: _defineProperty({
      padding: 0,
      minHeight: '39px'
    }, theme.breakpoints.down('sm'), {
      margin: 0
    }),
    sublistText: {
      margin: 0
    },
    sublistNoWrap: {
      margin: 0
    },
    sublistTextPrimary: _defineProperty({
      paddingLeft: 'var(--ebl-s3)',
      marginLeft: 'var(--ebl-rs-card-tile-date-margin-left)',
      marginRight: 'var(--ebl-rs-card-tile-date-margin-right)'
    }, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    overdue: {
      color: 'var(--ebl-signal-error)',
      fontWeight: 'bold'
    },
    dueToday: {
      color: 'var(--ebl-secondary-1)',
      fontWeight: 'bold'
    },
    dueTodayNoLateWorkAccepted: {
      color: 'var(--ebl-secondary-1)',
      fontWeight: 'bold'
    },
    defaultStatus: {
      color: 'var(--ebl-text-black)'
    },
    warningStatus: {
      color: 'var(--ebl-signal-warning)'
    },
    // ////// Skeleton //////
    skeletonIcon: _defineProperty({
      width: 'var(--ebl-s7)',
      height: 'var(--ebl-s7)'
    }, theme.breakpoints.down('sm'), {
      width: 0,
      height: 0
    }),
    skeletonSmallIcon: _defineProperty({
      width: 'var(--ebl-s4)',
      height: 'var(--ebl-s4)'
    }, theme.breakpoints.down('sm'), {
      width: 0,
      height: 0
    }),
    skeletonContentWrap: {
      flexGrow: 1
    },
    skeletonTextWrap: {
      flexGrow: 1
    },
    skeletonSublistText: {
      flexGrow: 1
    },
    skeletonStatusText: {
      flexGrow: 1
    },
    skeletonSublistPrimaryText: _defineProperty({
      height: 'var(--ebl-p2-line-height)',
      width: '100px',
      marginLeft: 'var(--ebl-rs-card-tile-date-margin-left)'
    }, theme.breakpoints.down('sm'), {
      marginLeft: 0
    }),
    skeletonButtonWrap: {
      marginRight: 0,
      height: 'var(--ebl-button-height-lg)',
      width: '80px'
    },
    skeletonPrimary: {
      maxWidth: '400px',
      height: 'var(--ebl-h4-line-height)'
    },
    skeletonSecondary: {
      height: 'var(--ebl-p2-line-height)'
    },
    skeletonSubPrimary: {
      height: 'var(--ebl-h6-line-height)'
    },
    skeletonButtons: {
      width: '218px',
      height: 'var(--ebl-button-height-sm)'
    }
  };
});