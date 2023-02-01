import { makeStyles } from 'tss-react/mui';
export var VcBaseTileStyles = {
  paper: {
    borderRadius: 'var(--ebl-card-radius)',
    minWidth: 'var(--ebl-card-base-minwidth)',
    padding: 'var(--ebl-s3)',
    width: '100%'
  },
  subtitle: {
    marginBottom: 'var(--ebl-label-marginbottom)'
  },
  bottomSection: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  bottomText: {
    flexGrow: 1,
    fontSize: 'var(--ebl-sh3)',
    lineHeight: 'var(--ebl-sh3-line-height)',
    letterSpacing: 'var(--ebl-sh3-letter-spacing)',
    color: 'var(--ebl-text-gray)',
    fontWeight: 'var(--ebl-sh3-weight)'
  },
  buttonSection: {
    marginTop: 'var(--ebl-card-base-button-margintop)',
    display: 'flex',
    alignItems: 'flex-end',
    '& button, a': {
      marginTop: 0,
      marginBottom: 0
    },
    '& button:last-of-type': {
      marginRight: 0
    }
  },
  skeletonButton: {
    height: 'var(--ebl-button-height-sm)',
    margin: '0 var(--ebl-s2)',
    '&:last-of-type': {
      marginRight: 0
    }
  },
  skeletonH6: {
    height: 'var(--ebl-h6-line-height)'
  },
  skeletonP2: {
    height: 'var(--ebl-p2-line-height)'
  },
  skeletonOverline: {
    height: 'var(--ebl-sh3-line-height)'
  },
  title: {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }
};
export default makeStyles({
  name: 'VCBaseTile'
})(VcBaseTileStyles);