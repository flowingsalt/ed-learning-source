import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'alertModal'
})({
  dialogPaper: {
    padding: 'var(--ebl-modal-padding)',
    paddingTop: '0'
  },
  icon: {
    marginRight: 'var(--ebl-popover-header-icon-marginright)'
  }
});