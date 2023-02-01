import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles()(function (theme) {
  var _input;

  return {
    root: {
      position: 'relative'
    },
    searchInput: {
      '& .Mui-focused': {
        '& input': {
          outlineWidth: '0',
          boxShadow: 'none'
        }
      },
      '& input': (_input = {
        background: 'var(--ebl-white) !important',
        paddingRight: '30px !important'
      }, _defineProperty(_input, theme.breakpoints.up('sm'), {
        paddingRight: 'var(--ebl-dropdown-height) !important'
      }), _defineProperty(_input, '&::placeholder', {
        fontSize: 'var(--ebl-p2)',
        color: 'var(--ebl-text-gray)'
      }), _defineProperty(_input, "color", 'var(--ebl-text-black)'), _defineProperty(_input, "textOverflow", 'ellipsis'), _input),
      '& [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration': {
        appearance: 'none'
      },
      minWidth: '245px'
    },
    clearIndicator: {
      position: 'absolute',
      right: 'var(--ebl-s6)',
      marginRight: 'var(--ebl-s2)',
      cursor: 'auto'
    },
    submitBtn: {
      position: 'absolute',
      display: 'block',
      top: 0,
      right: 0,
      margin: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      height: 'var(--ebl-dropdown-height)',
      width: 'var(--ebl-dropdown-width)',
      '&:hover': {
        background: 'var(--ebl-dark-action-color)',
        '&.Mui-disabled': {
          border: 'none'
        }
      }
    }
  };
});