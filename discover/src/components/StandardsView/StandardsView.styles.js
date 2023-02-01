import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'standardsView'
})({
  standardsView: {
    display: 'grid'
  },
  standardSetTitle: {
    paddingBottom: 'var(--ebl-spacing-vert-xsmall)'
  },
  standardSetSubtitle: {
    fontFamily: 'var(--ebl-wf-headings)',
    fontSize: 'var(--ebl-sh1)',
    paddingBottom: 'var(--ebl-spacing-vert-medium)',
    margin: 0
  },
  standardSetCard: {
    marginBottom: 'var(--ebl-spacing-vert-small)'
  },
  viewButton: {
    minWidth: '79px',
    maxHeight: 'var(--ebl-button-height-sm)',
    alignSelf: 'center',
    '&.Mui-focusVisible': {
      border: '2px solid var(--ebl-focus-color)'
    },
    margin: 0
  },
  buttonContainer: {
    alignSelf: 'center',
    width: 'auto'
  },
  standardsList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0'
  }
});