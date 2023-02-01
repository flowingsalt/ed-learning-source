import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'VirtualClassroomJoinMeetingModal'
})(function (theme) {
  return {
    textDescription: {
      marginBottom: 'var(--ebl-modal-text-margin-bottom)'
    },
    gridPasscodeInput: _defineProperty({}, theme.breakpoints.down('lg'), {
      paddingBottom: '0px !important'
    }),
    passcodeInput: _defineProperty({
      paddingBottom: '24px !important'
    }, theme.breakpoints.down('lg'), {
      paddingBottom: '24px !important'
    }),
    helperText: {
      position: 'absolute',
      bottom: 0
    },
    gridPasscodeCopyToClipboardBtn: _defineProperty({
      paddingTop: '34px !important'
    }, theme.breakpoints.down('lg'), {
      paddingTop: '0px !important'
    }),
    copyToClipboardBtn: {
      marginLeft: '0 !important'
    }
  };
});