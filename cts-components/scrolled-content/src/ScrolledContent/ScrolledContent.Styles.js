import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles()(function (theme) {
  return {
    root: {
      height: '100%'
    },
    hideScrollbarOnMobile: _defineProperty({}, theme.breakpoints.only('xs'), {
      maxHeight: 'none !important'
    })
  };
});