import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'PaginationActionsComponent'
})(function (theme) {
  return {
    root: _defineProperty({
      display: 'flex'
    }, theme.breakpoints.only('xs'), {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }),
    previousButtons: {
      display: 'flex',
      '& button': {
        background: 'white',
        border: 'none'
      }
    },
    nextButtons: {
      display: 'flex',
      '& button': {
        background: 'white',
        border: 'none'
      }
    }
  };
});