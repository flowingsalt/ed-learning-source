import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ModalDialogActions'
})(function (theme, _params, classes) {
  var _dialogActionDefault, _theme$breakpoints$up, _theme$breakpoints$do, _dialogAction;

  return {
    actions: {
      borderTop: 'solid 2px var(--ebl-light-mid-gray)',
      margin: '0 var(--ebl-s4)',
      '& > div': {
        borderTop: 'none',
        marginLeft: 0,
        marginRight: 0
      }
    },
    cancelButtonWrapper: _defineProperty({}, theme.breakpoints.down('sm'), {
      marginBottom: 'var(--ebl-s3)',
      width: '100%',
      '& button': {
        width: '100%'
      }
    }),
    dialogActionDefault: (_dialogActionDefault = {
      justifyContent: 'flex-end',
      paddingBottom: 0,
      // to avoid double padding with modalWrapper
      position: 'relative'
    }, _defineProperty(_dialogActionDefault, "& .".concat(classes.cancelButton), {
      left: 0,
      position: 'absolute',
      top: 'var(--ebl-modal-button-group-margin-top)'
    }), _defineProperty(_dialogActionDefault, "& .".concat(classes.secondaryActionButton), {
      "float": 'right'
    }), _defineProperty(_dialogActionDefault, "& .".concat(classes.actionButton), {
      "float": 'right'
    }), _dialogActionDefault),
    dialogAction: (_dialogAction = {
      paddingLeft: 0,
      paddingRight: 0
    }, _defineProperty(_dialogAction, theme.breakpoints.up('sm'), (_theme$breakpoints$up = {
      justifyContent: 'flex-end',
      position: 'relative'
    }, _defineProperty(_theme$breakpoints$up, "& .".concat(classes.cancelButton), {
      left: 0,
      position: 'absolute',
      top: 'var(--ebl-modal-button-group-margin-top)'
    }), _defineProperty(_theme$breakpoints$up, "& .".concat(classes.secondaryActionButton), {
      "float": 'right'
    }), _defineProperty(_theme$breakpoints$up, "& .".concat(classes.actionButton), {
      "float": 'right'
    }), _theme$breakpoints$up)), _defineProperty(_dialogAction, theme.breakpoints.down('sm'), (_theme$breakpoints$do = {
      flexDirection: 'column',
      '& > button': {
        marginBottom: 'var(--ebl-s3)',
        width: '100%'
      }
    }, _defineProperty(_theme$breakpoints$do, "& .".concat(classes.cancelButton), {
      marginLeft: 0,
      order: 2
    }), _defineProperty(_theme$breakpoints$do, "& .".concat(classes.secondaryActionButton), {
      marginBottom: 0,
      marginLeft: 0,
      order: 3
    }), _defineProperty(_theme$breakpoints$do, "& .".concat(classes.actionButton), {
      marginLeft: 0,
      order: 1
    }), _theme$breakpoints$do)), _dialogAction),
    secondaryActionButton: {
      margin: '0px var(--ebl-s2)',
      paddingLeft: 'var(--ebl-s4)',
      paddingRight: 'var(--ebl-s4)',
      '&:hover': {
        backgroundColor: 'initial'
      }
    },
    actionButton: {
      margin: '0px',
      paddingLeft: 'var(--ebl-s4)',
      paddingRight: 'var(--ebl-s4)'
    },
    cancelButton: {
      margin: '0px',
      paddingLeft: 'var(--ebl-s4)',
      paddingRight: 'var(--ebl-s4)'
    }
  };
});