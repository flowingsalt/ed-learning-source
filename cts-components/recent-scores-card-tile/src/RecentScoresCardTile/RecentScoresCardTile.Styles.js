import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'RecentScoresCardTile'
})(function (_theme, _ref) {
  var performanceBand = _ref.performanceBand;
  var color = '';

  switch (performanceBand) {
    case 'error':
      color = 'var(--ebl-signal-error)';
      break;

    case 'warning':
      color = 'var(--ebl-signal-warning)';
      break;

    case 'success':
      color = 'var(--ebl-signal-success)';
      break;

    default:
      color = 'var(--greenC50)';
  }

  return {
    root: {
      padding: 'var(--ebl-s4) var(--ebl-s3) var(--ebl-s4) var(--ebl-s3)',
      cursor: 'default',
      justifyContent: 'space-between',
      '&:hover': {
        backgroundColor: 'var(--white)',
        border: 'var(--ebl-card-border)'
      },
      width: 'calc(100% - var(--ebl-s2))',
      backgroundColor: 'var(--white)',
      '&.Mui-focusVisible': {
        backgroundColor: 'var(--white)'
      },
      minWidth: 'var(--ebl-db-card-tile-min-width)'
    },
    textWrapper: {
      overflow: 'visible',
      whiteSpace: 'normal',
      textOverflow: 'inherit'
    },
    primaryText: {
      color: 'var(--ebl-text-black)'
    },
    connectedPartnerLink: {
      cursor: 'pointer',
      color: 'var(--ebl-link-normal-color)',
      textDecoration: 'underline',
      '&:focus': {
        outline: 0,
        boxShadow: 'var(--ebl-focus-ring)'
      }
    },
    percent: {
      color: 'var(--ebl-text-gray)'
    },
    lexile: {
      color: 'var(--ebl-text-gray)'
    },
    count: {
      marginRight: 0,
      flexShrink: 0
    },
    text: {
      margin: '0',
      marginRight: 'var(--ebl-s3)',
      flexGrow: '0',
      '&> .MuiTypography-noWrap': {
        overflow: 'visible',
        whiteSpace: 'normal',
        textOverflow: 'inherit'
      }
    },
    subHeading: {
      width: '100%'
    },
    score: {
      color: color
    }
  };
});