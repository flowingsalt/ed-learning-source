import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import useStyles from './ModalDialog.styles';
export default function ModalDialogContainer(props) {
  var children = props.children,
      open = props.open,
      handleClose = props.handleClose,
      customTestId = props.customTestId,
      clickOutsideCanClose = props.clickOutsideCanClose,
      minHeight = props.minHeight,
      minView = props.minView,
      alternateMobileDisplay = props.alternateMobileDisplay,
      width = props.width,
      customClasses = props.customClasses,
      fullScreen = props.fullScreen;

  var _useStyles = useStyles({
    minView: minView,
    minHeight: minHeight,
    width: width
  })(),
      classes = _useStyles.classes;

  var useAlternateMobileDisplay = alternateMobileDisplay ? classes.alternateMobileDisplay : classes.defaultView;
  var fullScreenStyle = fullScreen ? classes.dialogWrapperFullScreen : '';
  var dialogClass = "".concat(classes.modalWrapper, " ").concat(useAlternateMobileDisplay, " ").concat(fullScreenStyle);
  return /*#__PURE__*/React.createElement(Dialog, {
    tabIndex: "-1",
    onClose: function onClose(ev, reason) {
      if (clickOutsideCanClose || reason !== 'backdropClick') {
        handleClose(ev, reason);
      }
    },
    "data-testid": customTestId,
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-body",
    classes: _objectSpread({
      root: classes.root
    }, customClasses),
    open: open
  }, /*#__PURE__*/React.createElement("div", {
    "data-testid": "dialogWrapper",
    className: dialogClass
  }, children));
}
ModalDialogContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  customTestId: PropTypes.string,
  clickOutsideCanClose: PropTypes.bool,
  minView: PropTypes.bool,
  minHeight: PropTypes.string,
  alternateMobileDisplay: PropTypes.bool,
  width: PropTypes.string,
  customClasses: PropTypes.object,
  fullScreen: PropTypes.bool
};
ModalDialogContainer.defaultProps = {
  customTestId: 'modalDialog',
  clickOutsideCanClose: false,
  alternateMobileDisplay: false,
  minView: false,
  minHeight: null,
  width: null,
  customClasses: undefined,
  fullScreen: false
};