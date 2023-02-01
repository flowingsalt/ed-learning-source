import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ModuleAccordion'
})(function (theme) {
  return {
    labelContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '8px'
    },
    expandMoreIcon: {
      zoom: '120%',
      marginRight: 'var(--ebl-s1)',
      color: 'var(--gray-c50)'
    },
    labelText: _defineProperty({
      '&::first-letter': {
        textTransform: 'uppercase'
      },
      fontSize: 'var(--ebl-s4)',
      fontFamily: 'Gilroy',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.4px',
      lineHeight: 'var(--ebl-s4)',
      paddingTop: 'var(--ebl-s4)',
      paddingBottom: 'var(--ebl-s4)'
    }, theme.breakpoints.down('sm'), {
      fontSize: 'var(--ebl-s3)',
      lineHeight: 'var(--ebl-s3)',
      paddingTop: 'var(--ebl-s3)',
      paddingBottom: 'var(--ebl-s3)'
    }),
    accordion: {
      '&.MuiAccordion-root': {
        marginBottom: 0,
        marginTop: 0,
        width: '100%'
      }
    },
    summaryContainer: {
      '&.MuiAccordionSummary-root': {
        flexDirection: 'row-reverse',
        padding: 0,
        borderBottom: '1px solid #bfc0c0'
      },
      '&.MuiAccordionSummary-root:hover': {
        background: 'var(--ebl-light-brand)'
      },
      '&.MuiAccordionSummary-root:active': {
        background: 'var(--ebl-brand)'
      }
    },
    summaryContent: {
      marginTop: 0,
      marginBottom: 0,
      '&.Mui-expanded': {
        marginTop: 0,
        marginBottom: 0
      }
    },
    accordionDetails: {
      '&.MuiAccordionDetails-root': {
        padding: '0',
        borderBottom: '1px solid #bfc0c0'
      }
    },
    summaryButtonContainer: _defineProperty({
      display: 'flex',
      alignItems: 'center'
    }, theme.breakpoints.down('sm'), {
      marginLeft: '-8px',
      width: '100%'
    })
  };
});