import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'programCard'
})(function (_theme, _params, classes) {
  return {
    root: {
      height: 'auto',
      width: '100%',
      border: 'var(--ebl-card-border)',
      borderRadius: 'var(--ebl-card-radius)',
      minWidth: 'var(--ebl-card-tile-min-width)',
      marginBottom: 'var(--ebl—card-li-margin-bottom)',
      boxShadow: 'var(--ebl-shadow-3)',
      '& .MuiSkeleton-root': {
        backgroundColor: 'var(--ebl-light-mid-gray)'
      }
    },
    content: {
      backgroundColor: 'var(--ebl-white)',
      height: '8.125rem',
      position: 'relative',
      zIndex: 1
    },
    name: {
      cursor: 'pointer',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      color: 'var(--ebl-link-normal-color)',
      textDecoration: 'var(--ebl-link-normal-text-decoration)',
      width: 'fit-content',
      '&:focus': {
        boxShadow: 'var(--ebl-focus-ring)',
        outline: 'none'
      },
      '&:hover': {
        color: 'var(--ebl-hover-color)',
        textDecoration: ' var(--ebl-link-hover-text-decoration)'
      }
    },
    type: {},
    loadingSke: {
      paddingTop: '56.25%'
    },
    disabled: _defineProperty({
      pointerEvents: 'none',
      border: 'transparent'
    }, "& .".concat(classes.name, ", & .").concat(classes.type), {
      color: 'var(--ebl-disabled-color)'
    }),
    isLoading: _defineProperty({
      border: 'none'
    }, "& .".concat(classes.name), {
      width: '100%'
    }),
    onHover: {
      color: 'var(--ebl-hover-color)',
      textDecoration: ' var(--ebl-link-hover-text-decoration)'
    },
    // facilitate custom styling in the CardThumb SubComponent
    iconHolder: {},
    media: {}
  };
});