import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'SortableTable'
})({
  root: {
    width: '100%',
    borderRadius: 'var(--ebl-s1)'
  },
  headerClass: {
    position: 'sticky',
    background: 'white',
    zIndex: 999
  },
  actionCell: {
    padding: '0px var(--ebl-s3) 0px 0px',
    minWidth: 110,
    '& button': {
      marginRight: 'var(--ebl-s3)',
      marginLeft: 0,
      marginTop: '2px',
      marginBottom: '2px',
      minWidth: 85,
      display: 'inline-flex',
      justifyContent: 'center'
    },
    '& button[class*=nedButton][icon="1"]': {
      paddingLeft: 'var(--ebl-s3)',
      paddingRight: 'var(--ebl-s3)'
    },
    '& button[class*=nedButton][icon="1"] > span': {
      flexGrow: 0
    }
  },
  iconCell: {
    width: 'var(--ebl-s6)',
    padding: "0px var(--ebl-s2) 0px var(--ebl-s2)"
  },
  firstRealCell: {
    width: '40%',
    padding: "0px var(--ebl-s3) 0px var(--ebl-s3) !important"
  },
  firstRealHeaderCell: {
    padding: "0px var(--ebl-s3) 0px var(--ebl-s3) !important",
    width: 'var(--ebl-s6)'
  },
  isAction: {
    textAlign: 'center'
  },
  hasAction: {
    '& button': {
      margin: 'auto'
    }
  },
  mobileTableWrapper: {
    '& .MuiTablePagination-spacer': {
      flex: 0
    },
    '& .MuiTablePagination-root': {
      paddingTop: '0',
      display: 'flex',
      width: '100%',
      border: '0',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '0',
        '& button.Mui-disabled': {
          display: 'flex',
          flexDirection: 'column'
        },
        '& > *': {
          marginTop: 'var(--ebl-table-m-padding-right)'
        },
        '& > :last-of-type': {
          marginTop: '0',
          width: '100%',
          justifyContent: 'space-between',
          '& > div': {
            justifyContent: 'space-between',
            width: '30%'
          }
        }
      }
    }
  },
  mobilePageFooter: {
    borderBottomLeftRadius: 'var(--ebl-table-pagination-radius)',
    borderBottomRightRadius: 'var(--ebl-table-pagination-radius)',
    border: 'var(--ebl-table-m-accordion-child-border)'
  },
  mobilePagination: {},
  tableWrapper: {
    '& tbody': {
      '& tr:last-of-type': {
        '& td': {
          borderBottom: '0',
          '&:first-of-type': {
            borderBottomLeftRadius: 'var(--ebl-s2)'
          },
          '&:last-of-type': {
            borderBottomRightRadius: 'var(--ebl-s2)'
          }
        }
      }
    },
    width: '100%',
    overflowX: 'auto',
    '&[data-sticky-header="true"]': {
      maxHeight: 440,
      overflow: 'auto',
      '& table': {
        borderCollapse: 'separate',
        '& thead': {
          '& tr': {
            '& th': {
              top: 0,
              left: 0,
              zIndex: '1',
              position: 'sticky',
              background: 'var(--ebl-white)'
            },
            '& td:first-of-type': {
              width: 'auto !important'
            }
          }
        }
      }
    }
  },
  visuallyHidden: {
    position: 'absolute',
    clip: 'rect(1px, 1px, 1px, 1px)',
    border: 0,
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    width: '1px',
    whiteSpace: 'nowrap'
  },
  tableHeader: {
    display: 'grid',
    '& button.Mui-disabled': {
      display: 'flex',
      flexDirection: 'column'
    },
    '& .MuiTablePagination-root': {
      margin: 0,
      borderTopLeftRadius: 'var(--ebl-s1)',
      borderTopRightRadius: 'var(--ebl-s1)',
      borderBottom: 'none'
    }
  },
  tableFooter: {
    '& button.Mui-disabled': {
      display: 'flex',
      flexDirection: 'column'
    },
    display: 'grid',
    '& .MuiTablePagination-root': {
      margin: 0,
      borderBottomLeftRadius: 'var(--ebl-s1)',
      borderBottomRightRadius: 'var(--ebl-s1)',
      borderTop: 'none'
    }
  },
  headerAndFooterTable: {
    '& table': {
      borderRadius: '0',
      marginBottom: '0',
      '& tbody': {
        '& tr:last-of-type': {
          '& td': {
            '&:first-of-type': {
              borderBottomLeftRadius: '0'
            },
            '&:last-of-type': {
              borderBottomRightRadius: '0'
            }
          }
        }
      }
    }
  },
  headerTable: {
    '& table': {
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
      marginBottom: '0'
    }
  },
  footerTable: {
    '& table': {
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
      marginBottom: '0',
      '& tbody': {
        '& tr:last-of-type': {
          '& td': {
            '&:first-of-type': {
              borderBottomLeftRadius: '0'
            },
            '&:last-of-type': {
              borderBottomRightRadius: '0'
            }
          }
        }
      }
    }
  },
  sortableIconAscDec: {
    marginLeft: '2.55px'
  },
  sortableIcon: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2.55px',
    '& > :first-of-type': {
      marginBottom: '-16px'
    }
  }
});