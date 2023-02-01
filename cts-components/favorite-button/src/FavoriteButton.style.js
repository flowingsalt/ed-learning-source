import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'FavoriteButton'
})(function () {
  return {
    favoriteButtonOn: {
      backgroundColor: 'var(--ebl-light-action-color)',
      '&:focus': {
        backgroundColor: 'var(--ebl-light-action-color)'
      },
      '& svg': {
        fill: 'var(--ebl-action-color)'
      }
    },
    favoriteButtonOff: {
      '& svg': {
        fill: 'var(--ebl-action-color)'
      }
    },
    favoriteIconOn: {
      '& svg': {
        fill: 'var(--ebl-secondary-4)'
      }
    },
    favoriteIconOff: {
      '& svg': {
        fill: 'var(--ebl-mid-gray)'
      }
    },
    favoriteButton: {
      fontSize: 'var(--ebl-sh1)',
      margin: 0,
      '&.Mui-focusVisible': {
        outlineWidth: 'var(--ebl-s0)'
      },
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  };
});