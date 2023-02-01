import { makeStyles } from 'tss-react/mui';
export default makeStyles()({
  root: {
    width: '100%'
  },
  tableWrapper: {
    '& > div': {
      margin: '0 !important',
      borderTop: '0'
    },
    '& > div:first-of-type': {
      borderTop: 'var(--ebl-table-m-accordion-child-border)',
      borderBottom: '0 !important'
    },
    '& > div:last-of-type': {
      borderBottom: 'var(--ebl-table-m-accordion-child-border) !important'
    },
    '& > div > div:first-of-type': {
      padding: '0 var(--ebl-table-m-padding-right) 0 var(--ebl-table-m-padding-left)',
      '& button div': {
        fill: 'var(--ebl-card-border) !important'
      }
    },
    '& div[role="region"] > div': {
      padding: '0'
    },
    '& > div:last-of-type div[role="region"] > div > div > div:last-of-type': {
      borderBottomLeftRadius: 'var(--ebl-table-pagination-radius)',
      borderBottomRightRadius: 'var(--ebl-table-pagination-radius)'
    }
  },
  tableWrapperWithFooter: {
    '& > div': {
      margin: '0 !important',
      borderTop: '0'
    },
    '& > div:first-of-type': {
      borderTop: 'var(--ebl-table-m-accordion-child-border)',
      borderBottom: '0 !important'
    },
    '& > div > div:first-of-type': {
      padding: '0 var(--ebl-table-m-padding-right) 0 var(--ebl-table-m-padding-left)',
      '& button div': {
        fill: 'var(--ebl-card-border) !important'
      }
    },
    '& div[role="region"] > div': {
      padding: '0'
    },
    '& > div:last-of-type': {
      borderBottom: '0',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }
  },
  tableFooter: {
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0 !important'
  },
  mobileRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '2rem',
    '& > div:first-of-type': {
      marginRight: 'var(--ebl-table-m-padding-right) !important'
    }
  },
  styleRow: {
    borderTop: 'var(--ebl-table-m-accordion-child-border)',
    marginLeft: 'var(--ebl-table-m-padding-left) !important',
    marginRight: 'var(--ebl-table-m-padding-right) !important',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    width: '100%',
    margin: '0',
    '&:first-of-type': {
      borderTop: '0'
    }
  },
  mobileActionButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    '& button': {
      marginRight: '0'
    }
  },
  childrenWrapper: {
    backgroundColor: 'var(--ebl-table-m-accordion-open-bg)',
    width: '100%',
    margin: '0',
    '& > div:first-of-type': {
      paddingTop: 'var(--ebl-table-m-accordion-open-padding-top)'
    },
    '& > div:last-of-type': {
      paddingBottom: 'var(--ebl-table-m-accordion-open-padding-bottom)'
    }
  },
  sortBox: {
    marginBottom: 'var(--ebl-table-m-sort-margin-bottom)',
    marginTop: 'var(--ebl-table-m-sort-margin-bottom)',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > label': {
      alignSelf: 'center',
      marginRight: 'var(--ebl-table-m-sort-margin-left)'
    },
    '& > div > label > div': {
      minWidth: '250px'
    }
  }
});