import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'recentlyViewedProgramCard'
})(function (theme) {
  var _studentMedia;

  return {
    studentIconHolder: _defineProperty({}, theme.breakpoints.up('md'), {
      padding: '75px 0'
    }),
    studentMedia: (_studentMedia = {}, _defineProperty(_studentMedia, theme.breakpoints.up('md'), {
      paddingBottom: '215px'
    }), _defineProperty(_studentMedia, theme.breakpoints.only('md'), {
      '& input': {
        height: '100%'
      }
    }), _studentMedia)
  };
});