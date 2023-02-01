import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'levelOneAccordionList'
})({
  accordionList: {
    marginTop: 'var(--ebl-s2)',
    borderTop: '1px solid #bfc0c0',
    '@media (min-width: 600px)': {
      marginLeft: '72px',
      marginRight: '72px',
      marginTop: 'var(--ebl-s3)'
    }
  },
  list: {
    listStyleType: 'none',
    margin: '0',
    padding: '0'
  },
  levelTwoOnly: {
    marginTop: '0',
    paddingLeft: '0',
    listStyleType: 'none'
  },
  levelThree: {
    listStyleType: 'none',
    width: '100%',
    paddingBottom: '0',
    marginBottom: '0',
    marginTop: '0',
    paddingLeft: '0'
  }
});