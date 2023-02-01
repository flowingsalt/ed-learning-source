import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ProgramLevelOneCarousel'
})(function (theme) {
  var _carouselWrapper;

  return {
    carouselWrapper: (_carouselWrapper = {}, _defineProperty(_carouselWrapper, theme.breakpoints.down('lg'), {
      marginTop: 'var(--ebl-s3)'
    }), _defineProperty(_carouselWrapper, theme.breakpoints.down('sm'), {
      marginTop: '0'
    }), _defineProperty(_carouselWrapper, "width", '100%'), _carouselWrapper),
    carouselHeading: {
      padding: '0 0 var(--ebl-s2) 0',
      '@media (min-width: 600px)': {
        padding: '0 0 var(--ebl-s2) var(--ebl-s8)'
      }
    }
  };
});