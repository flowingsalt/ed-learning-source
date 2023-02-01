import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'DashboardCard'
})(function (theme, _ref) {
  var _card, _action;

  var hideScrollbarOnMobile = _ref.hideScrollbarOnMobile;
  return {
    card: (_card = {
      display: 'flex',
      flexFlow: 'column',
      minWidth: 'var(--ebl-db-card-min-width)',
      height: 'var(--ebl-db-card-height)',
      paddingTop: 'var(--ebl-db-card-padding-top)',
      paddingLeft: 'var(--ebl-db-card-padding-left)',
      paddingBottom: 0,
      marginBottom: 'var(--ebl-s4)'
    }, _defineProperty(_card, theme.breakpoints.only('xs'), {
      height: hideScrollbarOnMobile ? 'auto' : 'var(--ebl-db-card-height)'
    }), _defineProperty(_card, "border", 'none'), _defineProperty(_card, "boxShadow", 'none'), _card),
    header: _defineProperty({
      flex: '0 1 auto',
      paddingTop: 0,
      paddingBottom: 'var(--ebl-db-card-header-padding-bottom)',
      marginBottom: 'var(--ebl-s2)',
      paddingLeft: '0',
      paddingRight: 'var(--ebl-db-card-padding-right)'
    }, theme.breakpoints.down('sm'), {
      display: 'block'
    }),
    headerWithSeparator: {
      flex: '0 1 auto',
      paddingTop: 0,
      paddingBottom: 'var(--ebl-s3)',
      marginBottom: 'var(--ebl-s2)',
      paddingLeft: 0,
      marginRight: 'var(--ebl-s4)',
      borderBottom: 'var(--ebl-s0) solid',
      borderBottomColor: 'var(--golden-c30)'
    },
    action: (_action = {
      margin: 0
    }, _defineProperty(_action, theme.breakpoints.up('xs'), {
      flex: '1 1 auto'
    }), _defineProperty(_action, theme.breakpoints.down('sm'), {
      marginTop: 'var(--ebl-s3)'
    }), _action),
    title: _defineProperty({}, theme.breakpoints.up('xs'), {
      flex: '5 1 auto'
    }),
    content: {
      flex: '1 1 auto',
      padding: 0,
      overflowY: 'auto'
    },
    scrolledContent: {
      paddingRight: 'var(--ebl-s3)',
      height: '100%',
      '&:last-of-type': {
        paddingBottom: 'var(--ebl-s3)'
      }
    },
    cardAction: {
      paddingTop: 'var(--ebl-db-card-button-margintop)',
      paddingBottom: 'var(--ebl-db-card-button-marginbottom)',
      paddingRight: 'var(--ebl-db-card-padding-right)',
      paddingLeft: 0,
      justifyContent: 'center'
    },
    message: {
      marginRight: 'var(--ebl-s3)',
      marginBottom: 'var(--ebl-s2)',
      paddingRight: 'var(--ebl-db-card-padding-right)',
      paddingBottom: 'var(--ebl-db-card-header-padding-bottom)'
    }
  };
});