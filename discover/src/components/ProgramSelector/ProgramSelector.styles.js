import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ProgramSelector'
})(function (theme) {
  var _selectorTitle, _programImage;

  return {
    container: {
      paddingTop: 'var(--ebl-s3)',
      '@media (min-width: 600px)': {
        paddingTop: 'var(--ebl-s6)',
        paddingLeft: 'var(--ebl-s4)',
        paddingBottom: 'var(--ebl-s5)'
      },
      background: 'var(--ebl-light-gray)',
      width: '100vw'
    },
    valid: {
      display: 'block'
    },
    eyebrow: {
      fontSize: 'var(--ebl-p3)',
      '@media (min-width: 600px)': {
        marginTop: 'var(--ebl-s2)'
      },
      marginBottom: 'var(--ebl-s1)'
    },
    selectorSection: {
      paddingLeft: 'var(--ebl-s4)',
      '@media (max-width: 600px)': {
        paddingRight: 'var(--ebl-s4)'
      }
    },
    headerTitle: {
      'align-self': 'center',
      '@media (max-width: 600px)': {
        fontSize: '18px'
      }
    },
    selectorTitle: (_selectorTitle = {}, _defineProperty(_selectorTitle, theme.breakpoints.up('xs'), {
      '&.MuiGrid-container': {
        flexWrap: 'nowrap'
      }
    }), _defineProperty(_selectorTitle, 'body.user-is-tabbing &:focus-within', {
      outline: 0,
      boxShadow: 'var(--ebl-focus-ring)'
    }), _selectorTitle),
    selectorButton: {
      '& button:focus': {
        margin: 'calc(var(--ebl-s1)*3) var(--ebl-s2) var(--ebl-s3) 0'
      },
      '&.Mui-focusVisible': {
        boxShadow: 'none',
        outline: 'none'
      },
      marginLeft: 0
    },
    programImage: (_programImage = {}, _defineProperty(_programImage, theme.breakpoints.down('sm'), {
      display: 'none'
    }), _defineProperty(_programImage, "height", '100px'), _defineProperty(_programImage, "width", '100px'), _defineProperty(_programImage, "borderRadius", '8px'), _defineProperty(_programImage, "objectFit", 'cover'), _programImage),
    menuItem: {
      '&.Mui-focusVisible': {
        border: '2px solid var(--ebl-focus-color)'
      },
      paddingRight: 'var(--ebl-s5) !important'
    },
    unselectedMenuItem: {
      '&.Mui-focusVisible': {
        background: 'none'
      }
    },
    selectedMenuItem: {
      background: 'var(--ebl-dropdown-li-hover-color)'
    },
    optionalContent: _defineProperty({
      width: 'fit-content',
      '&.MuiButton-outlinedSizeLarge': {
        margin: 'var(--ebl-s2) var(--ebl-s6) var(--ebl-s4) 0',
        '@media (max-width: 600px)': {
          margin: 'var(--ebl-s3) 0 var(--ebl-s2) 0'
        }
      }
    }, theme.breakpoints.down('sm'), {
      alignSelf: 'center'
    }),
    studentMessage: {
      marginTop: 'var(--ebl-s1)',
      marginBottom: 'var(--ebl-s4)'
    },
    search: {
      margin: 'var(--ebl-s2) var(--ebl-s4) var(--ebl-s4) auto',
      '@media (max-width: 600px)': {
        width: '100%',
        margin: 'var(--ebl-s2) var(--ebl-s6) 0 var(--ebl-s6)'
      }
    },
    additionalTitle: {
      borderTop: 'solid var(--ebl-s0)',
      borderColor: 'var(--gray-c50)',
      background: 'var(--gray-c10)',
      fontWeight: 'bold',
      opacity: '1 !important',
      minHeight: 'calc(var--ebl-s4) * 2)'
    }
  };
});