import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import { makeStyles } from 'tss-react/mui';
var productStyles = {
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  minWidth: 'var(--ebl-button-lg-min-width)',
  borderRadius: 'var(--ebl-rs—card-radius)',
  cursor: 'pointer',
  '&:hover': {
    borderColor: 'var(--ebl-card-border-hover)'
  },
  '&:focus': {
    outline: 0,
    boxShadow: 'none'
  }
};
var disabledProductStyles = {
  opacity: '0.3',
  cursor: 'default',
  '&:hover': {
    border: 'var(--ebl-card-border)'
  },
  '&:focus': {
    outline: 0,
    boxShadow: 'none'
  }
};
export default makeStyles({
  name: 'ProductCardTile'
})(function (theme, _ref) {
  var fixedHeight = _ref.fixedHeight,
      disabled = _ref.disabled;

  var styles = _objectSpread(_objectSpread({}, productStyles), {}, _defineProperty({
    height: fixedHeight ? 'var(--ebl-logo-tile-height)' : '100%'
  }, theme.breakpoints.only('sm'), {
    height: '100%'
  }));

  if (disabled === true) {
    styles = _objectSpread(_objectSpread({}, styles), disabledProductStyles);
  }

  return {
    root: styles,
    productFocus: _defineProperty({
      borderRadius: 'var(--ebl-rs—card-radius)',
      height: '100%',
      paddingBottom: 0,
      paddingTop: fixedHeight ? null : 0,
      '&:focus': {
        outline: 0,
        boxShadow: 'var(--ebl-focus-ring)'
      }
    }, theme.breakpoints.only('xs'), {
      height: fixedHeight ? '100%' : 'var(--ebl-logo-tile-height)'
    }),
    image: _defineProperty({
      position: 'absolute',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      padding: 'var(--ebl-button-lg-padding)'
    }, theme.breakpoints.only('sm'), {
      position: 'static'
    }),
    icon: {
      height: '100%',
      display: 'flex',
      marginLeft: '24px',
      marginRight: '24px',
      justifyContent: 'center',
      alignItems: 'center',
      '& > :first-of-type': _defineProperty({
        padding: '24px',
        height: '100%'
      }, theme.breakpoints.only('sm'), {
        maxWidth: 'auto'
      })
    }
  };
});