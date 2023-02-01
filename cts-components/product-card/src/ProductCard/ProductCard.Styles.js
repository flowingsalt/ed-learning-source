import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ProductCard'
})(function (theme, _ref) {
  var _root, _productListGrid;

  var fullWidth = _ref.fullWidth;
  return {
    root: (_root = {
      height: fullWidth ? '100%' : '550px',
      borderRadius: 'var(--ebl-rs—card-radius)',
      minWidth: 'var(--ebl-rs-card-tile-min-width)',
      marginBottom: 'var(--ebl-rs—card-li-margin-bottom)',
      display: 'flex',
      flexDirection: 'column'
    }, _defineProperty(_root, theme.breakpoints.down('md'), {
      height: '100%'
    }), _defineProperty(_root, '&:focus', {
      outline: 'none'
    }), _root),
    title: {
      marginBottom: 'var(--ebl-label-marginbottom)'
    },
    messageContainer: {
      display: 'flex'
    },
    infoMessage: {
      fontSize: 'var(--ebl-sh3)',
      marginBottom: 'var(--ebl-notify-simple-marginbottom)',
      letterSpacing: '0.2px'
    },
    infoIcon: {
      marginRight: theme.spacing(1),
      lineHeight: 'var(--ebl-h4-line-height)'
    },
    content: {
      overflowY: 'visible',
      '& > :first-of-type': {
        paddingRight: 'var(--ebl-db-card-padding-right)',
        paddingBottom: 0
      }
    },
    productListGrid: (_productListGrid = {
      height: '100%',
      listStyleType: 'none',
      padding: 0,
      marginBottom: 0,
      flexDirection: fullWidth ? 'row' : 'column',
      flexWrap: 'nowrap',
      margin: null,
      width: fullWidth ? null : 'auto'
    }, _defineProperty(_productListGrid, theme.breakpoints.only('sm'), {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      height: '100%'
    }), _defineProperty(_productListGrid, theme.breakpoints.only('xs'), {
      flexDirection: 'column'
    }), _defineProperty(_productListGrid, '& > .MuiGrid-item', _defineProperty({
      maxHeight: '155px'
    }, theme.breakpoints.only('sm'), {
      padding: theme.spacing(1)
    })), _productListGrid)
  };
});