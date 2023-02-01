import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'levelOneDetailsHeader'
})({
  detailsHeader: {
    padding: 'var(--ebl-s4) 0 0 0',
    '@media (min-width: 600px)': {
      padding: '0 72px 0 72px'
    },
    clear: 'both'
  },
  headerTitle: {
    width: '100%',
    '@media (max-width: 600px)': {
      paddingBottom: 'var(--ebl-s2)'
    }
  },
  levelTitle: {
    fontSize: 'var(--ebl-s4)',
    '@media (min-width: 600px)': {
      fontSize: 'var(--ebl-s5)'
    }
  },
  levelType: {
    color: 'gray',
    fontSize: '1.125rem',
    textTransform: 'capitalize',
    '@media (min-width: 600px)': {
      fontSize: 'var(--ebl-s4)'
    }
  },
  headerControls: {
    '@media (min-width: 600px)': {
      height: '3rem'
    },
    '& ul': {
      marginTop: '0px',
      listStyleType: 'none',
      paddingLeft: '0',
      '& li': {
        '@media (min-width: 600px)': {
          "float": 'left'
        },
        display: 'block'
      },
      '& li > button:focus': {
        outline: '#c70092 2px',
        outlineColor: '#c70092',
        outlineStyle: 'solid',
        outlineWidth: '2px'
      },
      '& li button': {
        height: '2.5rem',
        '@media (max-width: 600px)': {
          width: '13rem',
          margin: '0 auto 16px auto'
        }
      },
      '& li a': {
        height: '2.5rem',
        '@media (max-width: 600px)': {
          width: '13rem',
          margin: '0 auto 0 auto'
        }
      }
    }
  }
});