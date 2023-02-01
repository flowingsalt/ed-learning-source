import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'LinkedAccountsModal'
})(function () {
  return {
    updateLinkedAccountsModal: {
      '.MuiDialogActions-root': {
        justifyContent: 'center',
        borderTop: 'none',
        '& .MuiButtonBase-root': {
          width: '100%'
        }
      }
    }
  };
});