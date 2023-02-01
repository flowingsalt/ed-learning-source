/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

/**
 * TrapFocus  is an improvement over the MUI implementation
 * Based on W3C Dialog example / design pattern:
 * https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { focusFirstDescendant, focusLastDescendant } from './TrapFocus.utils';

var TrapFocus = function TrapFocus(props) {
  var children = props.children,
      open = props.open,
      ignoreChangesRef = props.ignoreChangesRef,
      disableTrapFocusRef = props.disableTrapFocusRef;
  var dialogRef = React.useRef();

  var onFocusSentinelStart = function onFocusSentinelStart() {
    if (!open || (ignoreChangesRef === null || ignoreChangesRef === void 0 ? void 0 : ignoreChangesRef.current) || (disableTrapFocusRef === null || disableTrapFocusRef === void 0 ? void 0 : disableTrapFocusRef.current) || !dialogRef.current) {
      return;
    }

    focusLastDescendant(dialogRef.current);
  };

  var onFocusSentinelEnd = function onFocusSentinelEnd() {
    if (!open || (ignoreChangesRef === null || ignoreChangesRef === void 0 ? void 0 : ignoreChangesRef.current) || (disableTrapFocusRef === null || disableTrapFocusRef === void 0 ? void 0 : disableTrapFocusRef.current) || !dialogRef.current) {
      return;
    }

    focusFirstDescendant(dialogRef.current);
  }; // when opening an element containing a TrapFocus, the first element will be focused


  useEffect(function () {
    if (open && dialogRef.current) {
      focusFirstDescendant(dialogRef.current);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: dialogRef,
    "data-testid": "TrapFocus"
  }, /*#__PURE__*/React.createElement("div", {
    tabIndex: open ? '0' : '-1',
    "data-test": "customSentinelStart",
    onFocus: onFocusSentinelStart
  }), children, /*#__PURE__*/React.createElement("div", {
    tabIndex: open ? '0' : '-1',
    "data-test": "customSentinelEnd",
    onFocus: onFocusSentinelEnd
  }));
};

TrapFocus.defaultProps = {
  open: false,
  ignoreChangesRef: undefined,
  disableTrapFocusRef: undefined
};
TrapFocus.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
  ignoreChangesRef: PropTypes.object,

  /** allows to temporarily disable focus trapping
   * i.e. when an element rendered inside the modal does its own focus trapping */
  disableTrapFocusRef: PropTypes.object
};
export default TrapFocus;