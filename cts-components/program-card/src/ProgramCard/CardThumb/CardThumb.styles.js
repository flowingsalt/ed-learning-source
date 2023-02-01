import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'CardThumb'
})(function (_theme, _ref, classes) {
  var iconBackground = _ref.iconBackground,
      iconTransform = _ref.iconTransform;
  return {
    media: {
      position: 'relative',
      paddingBottom: '56.25%',
      overflow: 'hidden',
      borderTopRightRadius: 'var(--ebl-card-radius)',
      borderTopLeftRadius: 'var(--ebl-card-radius)',
      border: 'var(--ebl-card-border)',
      boxSizing: 'border-box',
      // borderColor hack - when not hovering we need some border, to maintain img size. but transparent = white = too obvious
      borderColor: 'var(--gray-c25)',
      borderBottomColor: 'var(--gray-c10)',
      '&:hover': {
        borderColor: 'var(--ebl-card-border-hover)'
      },
      '&:focus': {
        outline: 'none'
      }
    },
    iconHolder: {
      backgroundColor: iconBackground || 'var(--ebl-light-gray)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'calc(28.125% - 2rem) 0',
      position: 'relative',
      cursor: 'pointer',
      borderTopRightRadius: 'var(--ebl-card-radius)',
      borderTopLeftRadius: 'var(--ebl-card-radius)',
      border: 'var(--ebl-card-border)',
      borderColor: 'transparent',
      '&:hover': {
        borderColor: 'var(--ebl-card-border-hover)'
      },
      '&:focus': {
        outline: 'none'
      }
    },
    icon: {
      transform: iconTransform || '',
      overflow: 'hidden',
      position: 'relative'
    },
    image: {
      position: 'absolute',
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
      cursor: 'pointer'
    },
    disabled: _defineProperty({}, "& .".concat(classes.image), {
      opacity: '0.3'
    })
  };
});