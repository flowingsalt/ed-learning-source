import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ModalDialogTitleStyle'
})({
  closeIcon: {
    width: 'var(--ebl-s6)',
    minWidth: 'var(--ebl-s6)',
    margin: '0px'
  },
  titleButton: {
    color: 'var(--ebl-action-color)',
    textDecoration: 'underline'
  },
  titleButtonWrapper: {
    display: 'inline-flex',
    marginLeft: 'var(--ebl-s3)',
    maxHeight: 'var(--ebl-s6)',
    whiteSpace: 'nowrap'
  },
  modalTitle: {
    alignItems: 'flex-start'
  },
  modaleTitleWrapper: {
    padding: 'var(--ebl-modal-padding) var(--ebl-modal-padding) var(--ebl-modal-title-margin-bottom) var(--ebl-modal-padding)'
  }
});