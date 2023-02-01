import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'Pagination'
})(function (theme, _ref) {
  var noBorder = _ref.noBorder;
  return {
    toolbar: _defineProperty({
      height: 'unset',
      minHeight: 'var(--ebl-nav-height)'
    }, theme.breakpoints.only('xs'), {
      flexWrap: 'wrap-reverse'
    }),
    caption: _defineProperty({}, theme.breakpoints.only('xs'), {
      '&:nth-of-type(1)': {
        width: '50%'
      },
      '&:nth-of-type(2)': {
        paddingBottom: 'var(--ebl-table-pagination-m-margin-bottom)'
      },
      width: '100%',
      textAlign: 'center'
    }),
    root: _defineProperty({
      border: noBorder && 'none'
    }, theme.breakpoints.only('xs'), {
      minWidth: 'var(--ebl-table-pagination-min-width)',
      border: 'none',
      '&:last-of-type': {
        paddingTop: 'var(--ebl-table-pagination-m-margin-top)'
      },
      '&:first-of-type': {
        paddingBottom: '2px' // Needed so the focus ring for rows per page isn't partially cut off

      }
    })
  };
});