import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
export default (function (_ref) {
  var _ref$minView = _ref.minView,
      minView = _ref$minView === void 0 ? false : _ref$minView,
      _ref$minHeight = _ref.minHeight,
      minHeight = _ref$minHeight === void 0 ? null : _ref$minHeight,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  var isMobile = useMediaQuery('(max-width:600px)');
  var isSmallScreen = useMediaQuery('(max-height:650px)'); // eslint-disable-next-line no-nested-ternary

  var minWidth = minView ? '320px' : isMobile ? null : '550px';
  return makeStyles({
    name: 'ModalDialogStyle'
  })(function (theme) {
    var _divClassMui, _alternateMobileDispl;

    return {
      root: {
        '&  > div[class*="MuiDialog-scrollPaper"] > div[class*="MuiDialog-paperScrollPaper"]': (_divClassMui = {
          backgroundColor: 'transparent',
          borderRadius: 0,
          height: 'auto',
          maxHeight: '100%'
        }, _defineProperty(_divClassMui, theme.breakpoints.down('sm'), {
          maxHeight: '100%',
          width: '100%'
        }), _defineProperty(_divClassMui, "margin", 0), _defineProperty(_divClassMui, "maxWidth", 'none'), _divClassMui)
      },
      modalWrapper: {
        backgroundColor: 'var(--ebl-white)',
        borderRadius: 'calc(var(--ebl-button-radius) * 2)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: minHeight,
        minWidth: minWidth,
        paddingBottom: 'var(--ebl-modal-padding)'
      },
      alternateMobileDisplay: (_alternateMobileDispl = {}, _defineProperty(_alternateMobileDispl, theme.breakpoints.down('sm'), {
        borderRadius: 0,
        height: '100vh',
        maxHeight: '100%'
      }), _defineProperty(_alternateMobileDispl, theme.breakpoints.up('sm'), {
        height: 'auto',
        maxHeight: 'calc(100vh - var(--ebl-s7))',
        maxWidth: '600px'
      }), _alternateMobileDispl),
      dialogWrapperFullScreen: {
        width: '100vw',
        height: '100vh',
        maxWidth: 'unset',
        maxHeight: 'unset',
        borderRadius: 0
      },
      defaultView: _defineProperty({
        maxHeight: isSmallScreen || isMobile ? 'none' : 'calc(100vh - var(--ebl-s7))'
      }, theme.breakpoints.up('sm'), {
        maxWidth: width || '600px',
        width: width || 'auto'
      })
    };
  });
});